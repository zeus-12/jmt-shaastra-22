// import { GoogleSpreadsheet } from "google-spreadsheet";

// export default function handler(req, res) {
//   if (req.method !== "POST") {
//     return res.status(405).send({ message: "Only POST requests allowed" });
//   }

//   console.log(req.body);
//   // PS: GIVE
//   // 2 . Do not remove ----BEGIN PRIVATE KEY---- or ----END PRIVATE KEY---- or anything else from your private key.
//   // 3 . Do this to your private key before using process.env.GOOGLE_SERVICE_PRIVATE_KEY.replace(/\\n/g, '\n')
//   // 4 . Enable Google Sheet API from google console
//   const { teamName, category, studentDetails } = req.body;
//   if (
//     !teamName ||
//     !category ||
//     !studentDetails ||
//     studentDetails.length < 1 ||
//     studentDetails.length > 4
//   ) {
//     res.status(400).json({ error: "Invalid data" });
//   }

//   studentDetails.forEach((student) => {
//     if (
//       !student.name ||
//       !student.email ||
//       !student.phoneNo ||
//       !student.city ||
//       !student.school
//     ) {
//       res.status(400).json({ error: "Invalid data" });
//       return;
//     }
//   });

//   // Config variables
//   const SPREADSHEET_ID = process.env.SPREADSHEET_ID;
//   const SHEET_ID = process.env.SHEET_ID;
//   const CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL;
//   const PRIVATE_KEY = process.env.GOOGLE_SERVICE_PRIVATE_KEY.replace(
//     /\\n/g,
//     "\n"
//   );

//   const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

//   const appendSpreadsheet = async (row) => {
//     try {
//       await doc.useServiceAccountAuth({
//         client_email: CLIENT_EMAIL,
//         private_key: PRIVATE_KEY,
//       });
//       // loads document properties and worksheets
//       await doc.loadInfo();

//       const sheet = doc.sheetsById[SHEET_ID];
//       const result = await sheet.addRow(row);
//     } catch (e) {
//       console.error("Error: ", e);
//     }
//   };

//   let fields = {
//     teamName,
//     category,
//   };

//   studentDetails.forEach((student, index) => {
//     Object.keys(student).forEach((detail) => {
//       fields[`student${index + 1} ${detail}`] = student[detail];
//     });
//   });

//   appendSpreadsheet(fields);

//   res.status(200).json({ success: "success" });
// }

import { google } from "googleapis";

async function handler(req, res) {
  if (req.method === "POST") {
    const { teamName, category, studentDetails } = req.body;
    if (
      !teamName ||
      !category ||
      !studentDetails ||
      studentDetails.length < 1 ||
      studentDetails.length > 4
    ) {
      res.status(400).json({ error: "Invalid data" });
    }

    studentDetails.forEach((student) => {
      if (
        !student.name ||
        !student.email ||
        !student.phoneNo ||
        !student.city ||
        !student.school
      ) {
        res.status(400).json({ error: "Invalid data" });
        return;
      }
    });

    let fields = {
      teamName,
      category,
    };

    studentDetails.forEach((student, index) => {
      Object.keys(student).forEach((detail) => {
        fields[`student${index + 1} ${detail}`] = student[detail];
      });
    });

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        client_id: process.env.CLIENT_ID,
        private_key: process.env.GOOGLE_SERVICE_PRIVATE_KEY.replace(
          /\\n/g,
          "\n"
        ),
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({
      auth,
      version: "v4",
    });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: "Sheet1!A2:C",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [Object.values(fields)],
      },
    });

    res.status(201).json({ message: "It works!", response });
  }
  res.status(200).json({ message: "Hey!" });
}

export default handler;
