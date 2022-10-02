const Contact = () => {
  const cores = [
    {
      name: "Saubhan",
    },
    { name: "Mrinalini" },
  ];

  const heads = [
    {
      name: "Jacqueline",
      phoneno: 7025121990,
      email: "ed20b024@smail.iitm.ac.in",
    },
    {
      name: "Thazeel",
      phoneno: 9497547798,
      email: "ed20b069@smail.iitm.ac.in",
    },
  ];

  const coordinators = [
    {
      name: "Parth",
      phoneno: 7605887760,
      email: "",
    },
    {
      name: "Prateek",
      phoneno: 7000626132,
      email: "",
    },
    {
      name: "Pratik",
      phoneno: 8830338510,
      email: "",
    },
    {
      name: "Ravi",
      phoneno: 9966029565,
      email: "",
    },
    {
      name: "Shreya",
      phoneno: 9966029565,
      email: "",
    },
    {
      name: "Tanisha",
      phoneno: 9867841437,
      email: "",
    },
  ];

  return (
    <div className="sm:mx-8 mx-2 ">
      <p className="text-4xl text-center font-bold">Our Team</p>

      <p className="text-3xl font-semibold">Cores</p>
      <div className="flex justify-evenly">
        {cores.map((core) => (
          <div key={core.phoneno}>
            <p>{core.name}</p>
            <p>{core.phoneno}</p>
          </div>
        ))}
      </div>

      <p className="text-3xl font-semibold">Heads</p>
      <div className="flex justify-evenly">
        {heads.map((head) => (
          <div key={head.phoneno}>
            <p>{head.name}</p>
            <p>{head.phoneno}</p>
          </div>
        ))}
      </div>

      <p className="text-3xl font-semibold">Coordinators</p>
      <div className="grid grid-cols-3">
        {coordinators.map((coordinator) => (
          <div key={coordinator.phoneno}>
            <p>{coordinator.name}</p>
            <p>{coordinator.phoneno}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Contact;
