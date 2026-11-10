# St. Anthony’s Child & Youth Care Centre Website

A website for St. Anthony’s Child & Youth Care Centre in Blaauwbosch, near Newcastle, KwaZulu-Natal. It introduces the centre, shares its history and programmes, and lets people offer item donations and request assistance.

**Status:** Phases 1–6 (static front end). Donation and assistance forms validate input and save to the visitor’s browser only, then offer an email to the centre. A backend and admin dashboard are the next phases.

## Run locally
Open `index.html` in a browser, or run `python -m http.server` in this folder.

## Publish on GitHub Pages
1. Push this folder to a GitHub repository.
2. Repository **Settings → Pages → Deploy from a branch → main / (root)**.
3. Your site will appear at `https://<username>.github.io/<repo-name>/`.

## Structure
```
index.html
css/style.css
js/main.js
images/        (add hero.jpg and gallery photos here)
```

## To do before going public
- Add the official logo and photographs (only with permission to publish children’s images).
- Confirm contact details, registration details and any newer strategy information with the centre.
- Add the current list of needed items, collection arrangements and assistance eligibility rules.

## Roadmap
7. Backend (Java, Spring Boot) and MySQL database for donations and applications
8. Admin dashboard with authentication: review, approve or reject applications
9. Testing
10. Deployment (backend hosting plus GitHub Pages or similar for the front end)

Applications must be handled confidentially: collect only what the centre needs, and agree the approval process with the centre before building it.
