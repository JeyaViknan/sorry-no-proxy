# 🙅‍♂️ Sorry-No-Proxy 
> Because if you weren't there, you weren't *really* there.

---

## 🎯 Project Overview

**Sorry-No-Proxy** is an attendance system designed to eliminate proxies through time-based QR code validation. Students must physically be present to scan a valid QR code that changes based on the current time.

---

## 👨‍🎓 Student Side (QR Scanner App)

### Frontend (`index.html`)
- **QR Scanner**: Uses `html5-qrcode` library to scan QR codes via device camera
- **Time-Based Validation**: Only accepts QR codes matching the format `jeycavbhakanadiyaz + HHMM`
  - Valid for current minute and next 4 minutes (5 total time windows)
  - Example: At 14:30, valid codes are `jeycavbhakanadiyaz1430`, `jeycavbhakanadiyaz1431`, `jeycavbhakanadiyaz1432`, `jeycavbhakanadiyaz1433`, `jeycavbhakanadiyaz1434`
- **Registration Flow**:
  1. Student scans QR code
  2. If valid, scanner stops and registration form appears
  3. Student enters their Register Number
  4. Clicks "Claim" button
  5. System generates unique code and saves to Google Sheets
  6. Success message displayed

### Backend (`server.js`)
- **Express Server**: REST API running on port 8000
- **POST `/register` Endpoint**:
  - Receives register number from frontend
  - Generates random code: `CODE-{0-9999}`
  - Saves to Google Sheets (Sheet1):
    - Column A: Register Number
    - Column B: Generated Code
  - Returns success response with generated code

---

## 🔐 How It Prevents Proxy Attendance

1. **Time-Sensitive QR Codes**: QR codes are only valid for a 5-minute window, requiring students to be present during class
2. **Physical Presence Required**: Must use device camera to scan QR code (can't be shared remotely)
3. **Unique Code Generation**: Each registration generates a unique code stored in Google Sheets for verification
4. **One-Time Scan**: Once a valid QR is scanned, the scanner stops (prevents multiple scans)

---

## 🛠️ Tech Stack

| Component             | Technology               |
|----------------------|--------------------------|
| Frontend             | HTML, CSS, JavaScript    |
| QR Scanning          | html5-qrcode library     |
| Backend              | Node.js, Express.js      |
| Data Storage         | Google Sheets (via API)  |
| Authentication       | Google Service Account   |

---

## 🚀 Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables (`.env`):
   ```
   PORT=8000
   GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@project.iam.gserviceaccount.com
   GOOGLE_PRIVATE_KEY=your-private-key
   SHEET_ID=your-google-sheet-id
   ```

3. Start the server:
   ```bash
   npm start
   ```

4. Open `index.html` in a browser (or serve via a web server)

---

## 🤖 Why This Works

Unlike traditional attendance systems where anyone can just fill in a form link, **Sorry-No-Proxy** requires:
- Physical presence to scan the QR code
- Scanning within the valid time window
- Using a device with camera access

No more:
- "Bro, send me the form link."
- "I'll mark you present, don't worry."
- "Let me just scan from home."

Because unless you were there — scanning and registering — **you get nothing.** 😈

---

## ✨ Final Word

This project wasn't just made to log attendance. It was made to restore faith in the system (okay, maybe just a little).  
If you were actually present — **you deserve your attendance**.  
If you weren't — well, **Sorry... No Proxy** 😉

---

