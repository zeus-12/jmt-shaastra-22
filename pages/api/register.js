import { google } from "googleapis";

async function handler(req, res) {
  res.status(400).json({ error: "Submissions are closed!" });
  return;

  if (req.method !== "POST") {
    return res.status(405).send({ message: "Only POST requests allowed" });
  }

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

    res.status(200).json({ success: "success" });
    return;
  }
}

export default handler;
