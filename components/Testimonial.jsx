import { Blockquote } from "@mantine/core";

const Testimonial = () => {
  return (
    <div className="min-h-screen mt-16 xl:ml-14">
      <p className="sm:text-5xl text-3xl font-semibold mb-6">Testimonials</p>
      <div className="mx-auto md:max-w-[80vw] xl:max-w-[70vw] flex justify-center items-center">
        <video
          className="w-[40vw] rounded-md h-auto max-h-[60vh]"
          // autoplay=""
          controls="controls"
        >
          <source src="/testimonial-vid.mp4" type="video/mp4" />
        </video>

        <Blockquote className="text-base sm:text-lg" cite="– N.S Vigash">
          We would like to thank team &rsquo;Shaastra&rsquo; for organising such
          a great event. Throughout the event, we were provided constant
          support, constant clearing of doubts, mentorship & webinars by the
          team which helped us a lot. We are glad to be a part of this event.
          Thank you.
        </Blockquote>
      </div>

      <div className="mx-auto md:max-w-[80vw] xl:max-w-[70vw]">
        <Blockquote className="text-base sm:text-lg" cite="– Vaishali Rambabu">
          It was a very memorable experience for me. I had fun researching and
          exploring the topic that I chose. My mentor was very helpful and the
          event was very well organised. Winning the first prize in the senior
          category of this competition gave me enormous confidence and increased
          my level of interest in science and engineering. I would highly
          recommend this competition to my fellow students for a rich
          experience. We would like to thank team &rsquo;Shaastra&rsquo; for
          organising such a great event. Throughout the event, we were provided
          constant support, constant clearing of doubts, mentorship & webinars
          by the team which helped us a lot. We are glad to be a part of this
          event. Thank you.
        </Blockquote>
      </div>
    </div>
  );
};
export default Testimonial;
