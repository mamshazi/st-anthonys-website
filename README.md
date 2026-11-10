# St. Anthony’s Child & Youth Care Centre Website

A website for St. Anthony’s Child & Youth Care Centre in Blaauwbosch, near Newcastle, KwaZulu-Natal. It tells visitors about the centre, lets people offer item donations, and lets individuals or organisations request assistance.

**Live website:** https://mamshazi.github.io/st-anthonys-website/

> **Status: demo version.** The site is fully viewable and the forms work, but submissions are not yet sent to the centre automatically. See [What works now](#what-works-now).

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
| Offer a donation | Go to **Donate**, fill in your details and what you would like to give, then click **Send donation offer** |
| Ask for help | Go to **Request Assistance**, fill in the form, then click **Send application** |
| Contact the centre | Go to **Contact** for phone, email and addresses |

On a phone, tap **Menu** at the top to see the sections.

After you submit a form you will see a thank-you message and an **Email to the centre** button. Click it to send your details to the centre’s email address.

## What works now

- All information pages and the menu
- The donation form and the assistance request form, including checks for missing or incorrect details
- Works on phones, tablets and computers

## What does not work yet

- Forms do not reach the centre automatically. Until the next phases are built, people must click **Email to the centre** to send their details.
- There is no administrator area yet for reviewing, approving or rejecting applications.
- Photos and the official logo have not been added.

## Planned next steps

1. Backend and database to store donations and applications safely
2. Administrator login and dashboard to review, approve or reject applications
3. Testing, then public launch
4. Official logo and photographs, once the centre gives permission to publish them

Applications will be handled confidentially. The centre will confirm who can apply and how requests are approved before this is built.

---

## For developers

**Tech:** HTML5, CSS3 and JavaScript (no frameworks, no build step). Planned: Java with Spring Boot and MySQL.

**Run locally:** open `index.html`, or use the VS Code extension *Live Server*, or run `python -m http.server 8000` and visit `http://localhost:8000`.

**Structure**
```
index.html     page content
css/style.css  styling
js/main.js     menu and form handling
images/        add hero.jpg and gallery photos here
```

**Forms:** `js/main.js` validates input and keeps a copy in the visitor’s browser (`localStorage`). The `save()` function is where a call to the backend API will go.

**Deploy:** GitHub Pages, from the `main` branch, root folder.

## Contact

St. Anthony’s Child & Youth Care Centre
Phone: 034 366 7299
Email: admin@stanthonyshome.org
P.O. Box 1824, Newcastle, KZN, 2940
Blaauwbosch Catholic Mission, near St Lewis High School, Plot 440162, Blaauwbosch, Osizweni, Newcastle, KZN, 2952
Registered charity number: 004-202