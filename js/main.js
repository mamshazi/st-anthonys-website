// Mobile menu
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('nav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});
nav.addEventListener('click', e => {
  if (e.target.tagName === 'A') { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', false); }
});

// Where the backend runs. Change this when the backend is hosted online.
const API = 'http://localhost:8080';
const CENTRE_EMAIL = 'admin@stanthonyshome.org';

// Backup copy in the visitor's browser, used only if the backend can't be reached.
function saveLocally(key, record) {
  try {
    const list = JSON.parse(localStorage.getItem(key) || '[]');
    list.push(record);
    localStorage.setItem(key, JSON.stringify(list));
  } catch (err) { /* storage unavailable: the email option still works */ }
}

function showMessage(done, lines, mailLink) {
  done.replaceChildren();
  lines.forEach(text => {
    const p = document.createElement('p');
    p.textContent = text;
    done.append(p);
  });
  if (mailLink) {
    const a = document.createElement('a');
    a.className = 'btn primary';
    a.href = mailLink;
    a.textContent = 'Email to the centre';
    done.append(a);
  }
  done.hidden = false;
  done.focus();
}

function handleForm(formId, doneId, endpoint, storageKey, subject, intro, toPayload) {
  const form = document.getElementById(formId);
  const done = document.getElementById(doneId);
  const errorBox = form.querySelector('.error');
  const button = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', async e => {
    e.preventDefault();

    // Check the fields
    const fields = [...form.elements].filter(f => f.name);
    let firstBad = null;
    fields.forEach(f => {
      const bad = !f.checkValidity() || (f.required && !f.value.trim());
      f.setAttribute('aria-invalid', bad);
      if (bad && !firstBad) firstBad = f;
    });
    if (firstBad) {
      errorBox.textContent = 'Please complete the highlighted fields correctly.';
      errorBox.hidden = false;
      firstBad.focus();
      return;
    }
    errorBox.hidden = true;

    const data = Object.fromEntries(fields.map(f => [f.name, f.value.trim()]));
    button.disabled = true;

    try {
      const res = await fetch(API + endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(toPayload(data))
      });

      if (res.ok) {
        const result = await res.json();
        showMessage(done, [
          'Thank you, ' + data.name + '. Your submission has been received.',
          'Your reference number is ' + result.id + '. A member of staff will contact you.'
        ]);
        form.reset();
        return;
      }
      if (res.status === 400) {
        errorBox.textContent = 'Some details were not accepted. Please check the form and try again.';
        errorBox.hidden = false;
        return;
      }
      throw new Error('Server error ' + res.status);
    } catch (err) {
      // Backend not reachable: keep a copy and offer the email option instead.
      saveLocally(storageKey, { ...data, submittedAt: new Date().toISOString() });
      const body = intro + '\n\n' + Object.entries(data).map(([k, v]) => k + ': ' + v).join('\n');
      const mail = 'mailto:' + CENTRE_EMAIL + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
      showMessage(done, [
        'Thank you, ' + data.name + '. We could not reach our system just now.',
        'Please send your details to the centre by email so they are not lost.'
      ], mail);
      form.reset();
    } finally {
      button.disabled = false;
    }
  });
}

handleForm('donateForm', 'donateDone', '/api/donations', 'donations',
  'Donation offer from website', 'New donation offer:',
  d => ({ name: d.name, phone: d.phone, email: d.email, item: d.item,
          quantity: Number(d.quantity), condition: d.condition, notes: d.notes }));

handleForm('assistForm', 'assistDone', '/api/applications', 'applications',
  'Assistance request from website', 'New assistance request:',
  d => ({ type: d.type, name: d.name, phone: d.phone, email: d.email,
          need: d.need, circumstances: d.circumstances }));