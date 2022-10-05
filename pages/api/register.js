const Airtable = require("airtable");
export default function handler(req, res) {
  console.log(req.body);

  const data = JSON.parse(req.body);

  Airtable.configure({
    endpointUrl: "https://api.airtable.com",
    apiKey: process.env.AIRTABLE_API_KEY,
  });
  var base = Airtable.base(process.env.AIRTABLE_BASE_ID);

  const { teamName, category, studentDetails } = data;
  console.log(teamName, category, studentDetails);
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
        return;
      }
      records.forEach(function (record) {
        console.log(record.getId());
      });
    }
  );

  res.status(200).json({ message: "success" });
}
