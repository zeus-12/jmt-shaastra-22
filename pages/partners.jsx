import Image from "next/image";

const Partners = () => {
  const partnerDetails = {
    2023: ["creya_learning.png"],
    "2022 & 2021": ["cfi.png", "creya_learning.png", "tech_cryptors.png"],
    2020: ["lema_labs.jpg"],
  };

  return (
    <div>
      <p className="text-5xl font-bold text-center my-2">Partners</p>
      <div className="space-y-6">
        {/* {Object.keys(partnerDetails).map((year) => { */}
        {[2023, "2022 & 2021", 2020].map((year) => {
          let partners = partnerDetails[year];
          return (
            <div className="space-y-4" key={year}>
              <p className="text-3xl font-bold text-center">{year}</p>
              <div className="flex gap-4 justify-center">
                {partners.map((partner) => (
                  <div
                    className="w-40 h-40 hover:scale-105 transition transform duration-150 ease-out"
                    key={partner}
                  >
                    <Image
                      width="100%"
                      height="100%"
                      layout="responsive"
                      objectFit="contain"
                      src={`/partners/${partner}`}
                      alt={`${partner} logo`}
                    />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Partners;
