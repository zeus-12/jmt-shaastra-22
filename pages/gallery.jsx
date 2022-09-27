import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const Gallery = () => {
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  return (
    <div className="flex justify-center items-center h-[92vh]">
      <Carousel
        slideSize="70%"
        height={200}
        slideGap="sm"
        controlSize={21}
        loop
        withIndicators
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
      >
        <Carousel.Slide>
          <div className="">1</div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div className="">2</div>
        </Carousel.Slide>
        <Carousel.Slide className="">
          <div className="">3</div>
        </Carousel.Slide>
      </Carousel>
    </div>
  );
};
export default Gallery;
