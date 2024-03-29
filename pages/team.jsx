import Image from "next/image";

const Team = () => {
  const cores = [
    { name: "Mrinalini" },
    {
      name: "Saubhan",
    },
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
      phoneno: 7358517337,
      email: "",
    },
    {
      name: "Tanisha",
      phoneno: 9867841437,
      email: "",
    },
  ];

  const team = {
    Cores: cores,
    Heads: heads,
    Coordinators: coordinators,
  };

  return (
    <div className="sm:mx-8 mx-2 ">
      <p className="text-5xl font-bold text-center pt-4 pb-0">
        Our <span className="text-orange-400">Team</span>
      </p>

      {Object.keys(team).map((key) => {
        let members = team[key];
        return (
          <div key={key}>
            <p className="sm:text-4xl text-gray-300 text-2xl text-center font-semibold my-2 sm:my-4 tracking-tight">
              {key}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-8 xl:gap-12">
              {members.map((member) => (
                <div className="mb-4" key={member.name}>
                  <div className="hover:scale-105 transition transform duration-150 ease-out w-auto h-[40vh] mb-2">
                    <Image
                      width={150}
                      height={150}
                      className="rounded-md w-full h-full"
                      src={`/team/${key}/${member.name}.jpg`}
                      alt={member.name}
                    />
                  </div>
                  <p className="text-lg lg:text-xl font-semibold text-center">
                    {member.name}
                  </p>
                  <p className="text-lg lg:text-xl text-gray-400 text-center">
                    {member.phoneno}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Team;
