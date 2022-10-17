import { GoogleSpreadsheet } from "google-spreadsheet";

export default function handler(req, res) {
  console.log(req.body);

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

  // Config variables
  const SPREADSHEET_ID = process.env.SPREADSHEET_ID;
  const SHEET_ID = process.env.SHEET_ID;
  const CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL;
  const PRIVATE_KEY = process.env.GOOGLE_SERVICE_PRIVATE_KEY.replace(
    /\\n/g,
    "\n"
  );

  const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

  const appendSpreadsheet = async (row) => {
    try {
      await doc.useServiceAccountAuth({
        client_email: CLIENT_EMAIL,
        private_key: PRIVATE_KEY,
      });
      // loads document properties and worksheets
      await doc.loadInfo();

      const sheet = doc.sheetsById[SHEET_ID];
      const result = await sheet.addRow(row);
    } catch (e) {
      console.error("Error: ", e);
    }
  };

  let fields = {
    teamName,
    category,
  };

  studentDetails.forEach((student, index) => {
    Object.keys(student).forEach((detail) => {
      fields[`student${index + 1} ${detail}`] = student[detail];
    });
  });

  appendSpreadsheet(fields);

  res.status(200).json({ success: "success" });
}
