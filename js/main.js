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

const CENTRE_EMAIL = 'admin@stanthonyshome.org';

// Demo storage: the browser only. Replace save() with a fetch() to the backend API in Phase 7.
function save(key, record) {
  try {
    const list = JSON.parse(localStorage.getItem(key) || '[]');
    list.push(record);
    localStorage.setItem(key, JSON.stringify(list));
  } catch (err) { /* storage unavailable: the email option below still works */ }
}

function handleForm(formId, doneId, storageKey, subject, intro) {
  const form = document.getElementById(formId);
  const done = document.getElementById(doneId);
  const errorBox = form.querySelector('.error');

  form.addEventListener('submit', e => {
    e.preventDefault();
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
    save(storageKey, { ...data, submittedAt: new Date().toISOString(), status: 'New' });

    const body = intro + '\n\n' + Object.entries(data).map(([k, v]) => k + ': ' + v).join('\n');
    const mail = 'mailto:' + CENTRE_EMAIL + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);

    done.replaceChildren();
    const p = document.createElement('p');
    p.textContent = 'Thank you, ' + data.name + '. Your submission has been recorded.';
    const p2 = document.createElement('p');
    p2.textContent = 'This site is still in demo mode, so please also email it to the centre so it reaches them.';
    const a = document.createElement('a');
    a.className = 'btn primary';
    a.href = mail;
    a.textContent = 'Email to the centre';
    done.append(p, p2, a);
    done.hidden = false;
    form.reset();
    done.focus();
  });
}

handleForm('donateForm', 'donateDone', 'donations', 'Donation offer from website', 'New donation offer:');
handleForm('assistForm', 'assistDone', 'applications', 'Assistance request from website', 'New assistance request:');
