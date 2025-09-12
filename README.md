# 🙅‍♂️ Sorry-No-Proxy 
> Because if you weren’t there, you weren’t *really* there.

---

## 🎯 Project Overview

**Sorry-No-Proxy** is an attendance system designed to eliminate proxies once and for all — not with brute force, but with a clever QR twist.

It consists of two parts:

- 🧑‍🏫 **Faculty Side**: A simple frontend that plays the “catch the valid QR” game.
- 👨‍🎓 **Student Side**: A smart scanner app that knows which QR is real and which one’s just a decoy.

Spoiler: the student side does all the heavy lifting.

---

## 🧑‍🏫 Faculty Side

- Built with just **HTML & CSS**.
- Displays QR codes that **change every few seconds**.
- **Almost all** of them are **fake** — harmless little trolls.
- At **one** **random point in time**, a **valid QR** appears — this leads to a **Google Form**.
- If a student catches that moment, they’re in. If not — better luck next class.

---

## 👨‍🎓 Student Side

- Built with **Node.js**, **Express.js**, and **JavaScript**.
- Acts as a QR scanner, but with standards — it **only responds to the valid QR**.
- When a valid QR is detected:
  1. The student is asked to enter their **Register Number**.
  2. A **unique code** is generated for that register number.
  3. This code is saved to a **Google Sheet** via **Google Sheets API**.
  4. The student sees this code for **3 seconds** — better memorize it!
  5. They’re then redirected to the **Google Form** where:
     - The first field is the **generated code** (serves as your attendance password).
     - Followed by name, register number, etc.

---

## ✅ Attendance Verification Logic

- When the Google Form is submitted, the faculty side checks if:
  - The **code entered in the form** matches the one stored in the Google Sheet.
- If they match: ✅ Attendance granted.
- If not: ❌ Proxy alert! Someone’s trying to be sneaky.

---

## 🛠️ Tech Stack

| Component             | Technology               |
|----------------------|--------------------------|
| Faculty Frontend     | HTML, CSS                |
| Student App Backend  | Node.js, Express.js      |
| QR Code Management   | JavaScript               |
| Data Storage         | Google Sheets (via API)  |
| Form Submission      | Google Forms             |

---

## 🤖 Why This Works

Unlike traditional attendance systems where anyone can just fill in a form link and pretend they were present, **Sorry-No-Proxy** introduces an element of *surprise and validation*. It’s like a pop quiz, but instead of grades, you get attendance.

No more:
- "Bro, send me the form link."
- "I'll mark you present, don’t worry."
- "Let me just scan from home."

Because unless you were there — scanning, entering, memorizing, and submitting — **you get nothing.** 😈

---

## ✨ Final Word

This project wasn’t just made to log attendance. It was made to restore faith in the system (okay, maybe just a little).  
If you were actually present — **you deserve your attendance**.  
If you weren’t — well, **Sorry... No Proxy** 😉

---

