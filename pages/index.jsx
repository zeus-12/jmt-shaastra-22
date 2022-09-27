import { Button, Timeline } from "@mantine/core";
import Head from "next/head";
import Image from "next/image";
import Router from "next/router";
import Testimonial from "../components/Testimonial";
import TimelineComponent from "../components/TimelineComponent";

export default function Home() {
  const active = 1;
  return (
    <div className="sm:px-12 px-5">
      <Head>
        <title>JMT</title>
        <meta name="description" content="JMT Website" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <div className="min-h-[92vh] justify-between mx-12 flex items-center">
        <div>
          <p className="text-blue-400 font-semibold text-7xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fdd819] to-[#e80505] flex">
              JUNIOR
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fdd819] to-[#e80505] flex">
              MAKE-A-THON
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fdd819] to-[#e80505] flex">
              SHAASTRA 2023
            </span>

            {/* <span className="flex">JUNIOR</span> */}
            {/* <span className="flex"></span>
            <span className="flex"></span> */}
          </p>
          <Button
            variant="outline"
            color="orange"
            size="md"
            className="w-48 hover:bg-orange-600 hover:text-white inline px-2 py-1 rounded-md text-xl mt-4"
            onClick={() => Router.push("/register")}
          >
            Register
          </Button>
        </div>
        <div className="">
          <img src="/drone-2.gif" alt="drone illustration" />
        </div>
      </div>
      <div className="flex flex-col gap-12">
        {/* About Section */}
        <div
          className="flex-col gap-6 sm:flex-row flex justify-evenly items-center"
          id="about"
        >
          <div className="w-full sm:w-3/4 md:w-1/2">
            <p className="text-5xl font-semibold">About</p>
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
            <p className="text-5xl font-semibold">Why?</p>
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
      <TimelineComponent active={active} />
      <Testimonial />

      <div id="testimonials"></div>
    </div>
  );
}
