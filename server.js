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

    try {
        await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.SHEET_ID,
            range: "Sheet1!A:A", // Only appending to column A
            valueInputOption: "RAW",
            requestBody: {
                values: [[registerNumber]],
            },
        });

        res.json({ success: true, message: "Register number stored successfully." });
    } catch (error) {
        console.error("❌ Error writing to sheet:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
});

app.get("/", (req, res) => {
    res.send("✅ Server is running! Use POST /register to register.");
});

app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});
