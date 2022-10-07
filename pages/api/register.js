const Airtable = require("airtable");
export default function handler(req, res) {
  const data = JSON.parse(req.body);

  Airtable.configure({
    endpointUrl: "https://api.airtable.com",
    apiKey: process.env.AIRTABLE_API_KEY,
  });
  var base = Airtable.base(process.env.AIRTABLE_BASE_ID);

  const { teamName, category, studentDetails } = data;
  if (
    !teamName ||
    !category ||
    studentDetails.length < 1 ||
    studentDetails.length > 4
  ) {
    res.status(400).json({ error: "Invalid data" });
  }

  let fields = {
    teamName,
    category,
  };

  studentDetails.forEach((student, index) => {
    Object.keys(student).forEach((detail) => {
      fields[`student${index + 1} ${detail}`] = student[detail];
    });
  });

  console.log(fields);
  base("JMT registrations").create(
    [
      {
        fields,
      },
    ],
    function (err, records) {
      if (err) {
        console.error(err);
        res
          .status(500)
          .json({ error: "Some error occured, please try again later!" });
        return;
      }
      records.forEach(function (record) {
        console.log(record.getId());
      });
    }
  );

  res.status(200).json({ success: "success" });
}
