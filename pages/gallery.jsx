import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useRef } from "react";

const Gallery = () => {
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  return (
    // <div className="flex justify-center items-center ">
    <div className="px-2 pt-4">
      <p className="sm:text-5xl pb-4 text-3xl font-semibold">Gallery</p>
      <Carousel
        // className="w-auto max-h-[90vh]"
        // slideSize="80%"
        // height={"80vh"}
        slideGap="sm"
        controlSize={21}
        loop
        withIndicators
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <Carousel.Slide key={item}>
            <div className="w-[90vw] h-[90vh] rounded-md">
              <Image
                // width="100%"
                // height="100%"
                layout="fill"
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
