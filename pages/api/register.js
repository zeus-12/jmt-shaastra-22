const Airtable = require("airtable");

export default function handler(req, res) {
  console.log(req.body);
  const data = req.body;
  // const data = JSON.parse(req.body);

  Airtable.configure({
    endpointUrl: "https://api.airtable.com",
    apiKey: process.env.AIRTABLE_API_KEY,
  });
  var base = Airtable.base(process.env.AIRTABLE_BASE_ID);

  const { teamName, category, studentDetails } = data;
  if (
    !teamName ||
    !category ||
    !studentDetails ||
    studentDetails.length < 1 ||
    studentDetails.length > 4
  ) {
    res.status(400).json({ error: "Invalid data" });
  }

  console.log("1");

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

  console.log(2);

  base("JMT registrations").create(
    [
      {
        fields,
      },
    ],
    function (err, records) {
      console.log(3);
      if (err) {
        console.error(err);
        res
          .status(500)
          .json({ error: "Some error occured, please try again later!" });
        return;
      }

      console.log(4);

      records.forEach(function (record) {
        console.log(record.getId());
      });
    }
  );
  console.log(5);

  res.status(200).json({ success: "success" });
}
