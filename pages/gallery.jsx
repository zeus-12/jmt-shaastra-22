import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useRef } from "react";
import { IconArrowRight, IconArrowLeft } from "@tabler/icons";

const Gallery = () => {
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  return (
    <div className="sm:px-2 ">
      <p className="text-5xl text-orange-400 font-bold text-center py-4">
        Gallery
      </p>
      <Carousel
        width="100%"
        className="w-auto"
        slideSize="65%"
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
            <Image
              width={800}
              className="h-full w-auto rounded-2xl"
              height={800}
              src={`/2020-offline/${item}.jpg`}
              alt="gallery"
            />
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};
export default Gallery;
