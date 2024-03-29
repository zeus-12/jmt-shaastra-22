import Image from "next/image";

const Partners = () => {
  const partnerDetails = {
    2023: ["creya_learning.png"],
    "2022 & 2021": ["cfi.png", "creya_learning.png", "tech_cryptors.png"],
    2020: ["lema_labs.jpg"],
  };

  return (
    <div className="sm:px-2">
      <p className="text-5xl text-orange-400 font-bold text-center py-4">
        Partners
      </p>

      <div className="">
        {[2023, "2022 & 2021", 2020].map((year) => {
          let partners = partnerDetails[year];
          return (
            <div className="space-y-4" key={year}>
              <p className="text-3xl font-bold text-center">{year}</p>
              <div className="flex md:gap-4 justify-center">
                {partners.map((partner) => (
                  <div
                    className="sm:w-48 sm:h-48 h-32 w-32 hover:scale-105 transition transform duration-150 ease-out"
                    key={partner}
                  >
                    <a
                      href={
                        partner === "creya_learning.png"
                          ? "https://www.creyalearning.com/"
                          : null
                      }
                    >
                      <Image
                        width={50}
                        height={50}
                        layout="responsive"
                        objectFit="contain"
                        src={`/partners/${partner}`}
                        alt={`${partner} logo`}
                      />
                    </a>
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
