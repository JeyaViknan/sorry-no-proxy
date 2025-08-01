require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { google } = require("googleapis");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors({ origin: "*" })); 
app.use(bodyParser.json());


const auth = new google.auth.GoogleAuth({
    credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: (process.env.GOOGLE_PRIVATE_KEY || "").replace(/\\n/g, '\n'),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});
const sheets = google.sheets({ version: "v4", auth });

app.post("/register", async (req, res) => {
    const { registerNumber } = req.body;

    if (!registerNumber) {
        return res.status(400).json({ success: false, message: "Missing register number" });
    }

        const generatedCode = `CODE-${Math.floor(Math.random() * 10000)}`;
        

        await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.SHEET_ID,
            range: "Sheet1!A:B",
            valueInputOption: "RAW",
            requestBody: { values: [[registerNumber, generatedCode]] },
        });

        res.json({ success: true, code: generatedCode });
});

app.listen(PORT, () => {
    console.log(`✅ Server running on https://74e2-122-187-117-179.ngrok-free.app:${PORT}`);
});

app.get("/", (req, res) => {
    res.send("✅ Server is running! Use POST /register to register.");
});