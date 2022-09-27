import { Button, Timeline } from "@mantine/core";
import Head from "next/head";
import Image from "next/image";
import Router from "next/router";
import Testimonial from "../components/Testimonial";
import TimelineComponent from "../components/TimelineComponent";

export default function Home() {
  return (
    <div className="sm:px-12 px-5">
      <Head>
        <title>JMT</title>
        <meta name="description" content="JMT 2023" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <div className="items-center min-h-[92vh] flex-col-reverse sm:flex-row sm:justify-between gap-28 justify-center sm:gap-0 sm:mx-12 flex sm:items-center font-mono">
        <div className="flex flex-col sm:items-start items-center">
          <p className="text-blue-400 font-semibold text-[3.5rem] leading-none sm:text-7xl lg:text-8xl -mt-16">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fdd819] to-[#e80505] flex">
              JUNIOR
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fdd819] to-[#e80505] flex">
              MAKE-A-THON
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fdd819] to-[#e80505] flex">
              SHAASTRA&apos;23
            </span>
          </p>
          <Button
            variant="outline"
            color="orange"
            // size="md"
            className="sm:w-48 w-full hover:bg-orange-600 hover:text-white inline px-2 py-1 rounded-md text-xl mt-4"
            onClick={() => Router.push("/register")}
          >
            Register
          </Button>
        </div>
        <div className="sm:absolute bottom-0 sm:right-0 w-[80vw] xl:w-[30vw] sm:w-[35vw] lg:w-[33vw] ">
          {/* <img src="/drone-2.gif" alt="drone illustration" /> */}
          <img src="/robot.png" alt="drone illustration" />
        </div>
      </div>
      <div className="flex flex-col gap-12">
        {/* About Section */}
        <div
          className="flex-col gap-6 sm:flex-row flex justify-evenly items-center"
          id="about"
        >
          <div className="w-full sm:w-3/4 md:w-1/2">
            <p className="sm:text-5xl text-3xl font-semibold">About</p>
            <p className="text-gray-400 mt-2 text-xl">
              Junior Make-a-Thon (JMT) is a one-of-a-kind event launched under
              Tech and Innovation Fair that promotes maker spirit among school
              students by encouraging them to build unique and innovative
              solutions for existing problems. Students undergo dedicated
              mentorship sessions and workshops which helps them to convert
              their idea into a working prototype/model.
              <span className="flex">
                The competition will be categorized into two:
              </span>
            </p>
            <div className="flex text-lg text-gray-300">
              <div className="items-center w-1/2 inline-flex flex-col rounded-md mx-2">
                <p>Juniors</p>
                <p>Grade 6-8</p>
              </div>

              <div className="items-center w-1/2 inline-flex flex-col rounded-md mx-2">
                <p>Seniors</p>
                <p>Grade 9&10</p>
              </div>
            </div>
          </div>
          <div className="">
            <img src="/about-us.png" alt="about-us" />
          </div>
        </div>

        {/* "Why JMT?" Section */}
        <div className="flex-col-reverse gap-6 sm:flex-row flex justify-evenly items-center">
          <div className="">
            <img src="/why-us.png" alt="why-us" />
          </div>
          <div className="w-full sm:w-3/4 md:w-1/2">
            <p className="sm:text-5xl text-3xl font-semibold">Why?</p>
            <p className="text-gray-400 mt-2 text-xl">
              The purpose of JMT is to introduce maker culture to school
              students and encourage them to come up with innovative solutions
              to various problems. JMT motivates students to combine their
              practical thinking skills with theoretical knowledge they gain
              from school to solve real life problems. It also introduces
              enterpreneurship to these students thus creating the future
              enterpreneurs of the country.
            </p>
          </div>
        </div>
      </div>
      {/* Timeline */}
      <TimelineComponent />
      <Testimonial />

      <div id="testimonials"></div>
    </div>
  );
}
