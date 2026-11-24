# St. Anthony’s Child & Youth Care Centre Website

A website for St. Anthony’s Child & Youth Care Centre in Blaauwbosch, near Newcastle, KwaZulu-Natal. It tells visitors about the centre, lets people offer item donations, and lets individuals or organisations request assistance.

**Live website:** https://mamshazi.github.io/st-anthonys-website/

> **Status: working demo.** The website is live and the forms work on a computer that is running the backend. See [What works](#what-works) and [What is not working yet](#what-is-not-working-yet).

---

## For everyone: how to view the website

**The easiest way:** click the live link above. Nothing to install.

**To view it on your own computer (no internet needed):**
1. On this page, click the green **Code** button, then **Download ZIP**.
2. Find the downloaded file, right-click it and choose **Extract All**.
3. Open the extracted folder and double-click **index.html**.
4. The website opens in your browser (Chrome, Edge, Firefox or Safari).

## How to use the website

| I want to… | What to do |
|---|---|
| Learn about the centre | Scroll down, or use the menu at the top: About Us, Our Journey, Our Programmes |
| See the centre | Go to **Gallery** |
| Offer a donation | Go to **Donate**, fill in your details and what you would like to give, then click **Send donation offer** |
| Ask for help | Go to **Request Assistance**, fill in the form, then click **Send application** |
| Contact the centre | Go to **Contact** for phone, email and addresses |

On a phone, tap **Menu** at the top to see the sections.

## What works

- All information sections, the menu, the logo and the photo gallery
- The donation form and the assistance request form, including checks for missing or incorrect details
- **Saving submissions:** when the backend is running, each form is saved in the database and the visitor sees a reference number
- Works on phones, tablets and computers

## What is not working yet

| Problem | What happens now | What is needed |
|---|---|---|
| **The live website cannot save forms to the database.** The backend only runs on the developer’s computer. | On the live site, after a visitor submits a form, they see a message and an **Email to the centre** button. They must click it to send their details. | Host the backend and database online |
| **No administrator area.** | Nobody at the centre can see, approve or reject submissions yet. They can only be read in the database. | Admin login and dashboard |
| **Donations are not tracked.** | The centre cannot yet list what has been received or still needed. | Current “items needed” list from the centre, and a way to track donations |
| **No confirmation email.** | People do not receive an email after they submit. | Email sending set up on the backend |
| **Some content is unconfirmed.** | The history, programmes, vision and mission come from the centre’s 2020–2024 strategy presentation. | The centre to confirm current details, eligibility rules and the approval process |

## Planned next steps

1. Host the backend and database online
2. Administrator login and dashboard to review, approve or reject applications
3. Testing, then public launch

Applications will be handled confidentially. The centre will confirm who can apply and how requests are approved before this is built.

---

## For developers

**Tech:** HTML5, CSS3 and JavaScript (no frameworks, no build step). The backend is a separate repository: Java, Spring Boot and MySQL.

**Run locally:** open `index.html`, or use the VS Code extension *Live Server*, or run `python -m http.server 8000` and visit `http://localhost:8000`. To make the forms save, also start the backend on `http://localhost:8080`.

**Structure**
```
index.html     page content
css/style.css  styling
js/main.js     menu and form handling (sends forms to the backend)
images/        logo and gallery photos
```

**Forms:** `js/main.js` sends each form to the backend API (`API` constant at the top of the file). If the backend can’t be reached, it keeps a copy in the visitor’s browser (`localStorage`) and offers an email to the centre instead.

**Deploy:** GitHub Pages, from the `main` branch, root folder.

## Contact

St. Anthony’s Child & Youth Care Centre
Phone: 034 366 7299
Email: admin@stanthonyshome.org
P.O. Box 1824, Newcastle, KZN, 2940
Blaauwbosch Catholic Mission, near St Lewis High School, Plot 440162, Blaauwbosch, Osizweni, Newcastle, KZN, 2952
Registered charity number: 004-202