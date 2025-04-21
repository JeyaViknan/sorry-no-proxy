🙅‍♂️ Sorry-No-Proxy 😎
Because if you weren’t there, you weren’t really there.

🎯 Project Description
Sorry-No-Proxy is a cheeky little attendance system with one mission: crush the proxy game.
It's got two sides (like every good story):

🧑‍🏫 Faculty Side: The QR generator. Simple. Straightforward. Just HTML & CSS with a sprinkle of sass.

👨‍🎓 Student Side: The real MVP — a smart QR scanner that knows how to separate the real from the fake (like your friend who said they’d be "just 5 minutes late").

🔄 How It Works
🧑‍🏫 Faculty Side (a.k.a QR Show-Off)
Built using good ol’ HTML & CSS.

Displays a QR code that changes constantly — like mood swings, but coded.

99.9% of them are fake (take that, cheaters!).

But once, at a random and unpredictable time, a valid QR code shows up like a secret boss level — and only that one redirects to the Google Form for attendance.

👨‍🎓 Student Side (a.k.a The QR Whisperer)
Built using JavaScript, Node.js, and Express.js — yeah, it’s got brains.

Constantly scans those flashy QRs.

If it's a fake, it gets ignored faster than spam email.

If it’s the valid QR:

Student enters their Register Number.

A unique code is generated based on it — this code is basically your golden ticket.

That code is stored in a Google Sheet using the Google Sheets API (via Google Cloud Console).

You get 3 seconds to memorize it. That’s it. No screenshots. No cheats. No crying.

After that, you’re redirected to the Google Form.

You enter:

The generated code (this is your attendance password 🕵️‍♂️)

Your details like name, register number, etc.

Submit the form and boom — you just earned your attendance. Congrats on being actually present 🎉

✅ The Proxy-Busting Mechanism
The code generated earlier (when you scanned the QR) is stored securely.

When the form is submitted, the faculty checks if the submitted code matches the one in the Google Sheet.

If it matches: ✅ Attendance granted!

If not: ❌ Nice try, buddy.

⚙️ Tech Stack

Role	Tech
Frontend (Faculty)	HTML + CSS
Backend (Student Scanner)	Node.js + Express.js
QR Scanning Logic	JavaScript
Data Storage	Google Sheets via Google Sheets API
Form Handling	Google Forms
🤖 Why Build This?
Because "bro please scan for me" is not a valid excuse anymore.
This system ensures that:

Attendance is given only to those who are actually present.

Proxy attempts get busted — gracefully, of course.

No one can predict when the valid QR shows up — not even Nostradamus.

🚀 Future Add-ons (a.k.a Cool Stuff We Might Build)
⏰ Real-time QR updates with WebSockets.

📊 Faculty dashboard to view attendance & code logs.

🔒 Optional student authentication with Firebase.

🧠 AI-generated excuses for when someone still tries to proxy (just kidding).

📌 Final Words
Sorry-No-Proxy isn’t just a project — it’s a rebellion against lazy attendance hacks.
So next time someone says, “Can you scan for me?”, hit them with the link to this repo and say:

“Sorry bro… no proxy.”

