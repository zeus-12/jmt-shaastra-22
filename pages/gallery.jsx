import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useRef } from "react";
import { IconArrowRight, IconArrowLeft } from "@tabler/icons";

const Gallery = () => {
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  return (
    <div className="sm:px-2 ">
      {/* <p className="sm:text-5xl ml-4 mb-2 pb-4 text-3xl font-semibold">
        Gallery
      </p> */}
      <p className="text-5xl text-orange-400 font-bold text-center py-4">
        Gallery
      </p>
      <Carousel
        // className="w-auto max-h-[90vh]"
        // slideSize="80%"
        // height={"90vh"}
        // width={"90vw"}
        slideSize="80%"
        slideGap="sm"
        nextControlIcon={<IconArrowRight className="text-white" size={24} />}
        previousControlIcon={<IconArrowLeft className="text-white" size={24} />}
        controlSize={21}
        loop
        withIndicators
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <Carousel.Slide key={item}>
            <div className="overflow-hidden rounded-2xl">
              <Image
                width="100%"
                className="w-screen"
                height="70%"
                // layout="fill"
                layout="responsive"
                objectFit="contain"
                src={`/2020-offline/${item}.jpg`}
                alt="gallery"
              />
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};
export default Gallery;
