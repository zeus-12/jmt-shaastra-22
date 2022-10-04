import { Timeline } from "@mantine/core";
import { ScrollContext } from "../utils/ScrollObserver";
import { useContext, useEffect, useRef } from "react";

const opacityForBlock = (sectionProgress, blockNo) => {
  const progress = sectionProgress - blockNo;
  if (progress >= 0 && progress < 1) return 1;
  return 0.35;
};

const TimelineComponent = () => {
  let active;
  const { scrollY } = useContext(ScrollContext);

  const refContainer = useRef(null);
  const numOfPages = 5;
  let progress = 1;

  const { current: elContainer } = refContainer;
  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight;
    const halfH = screenH / 2;
    const percentY =
      Math.min(
        clientHeight + halfH,
        Math.max(-screenH, scrollY - offsetTop) + halfH
      ) / clientHeight;
    progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages));
    active = Math.floor(progress);
  }

  return (
    <div ref={refContainer} className="mt-16 ">
      <div className="">
        <Timeline
          className="flex flex-col items-center"
          active={active}
          lineWidth={3}
          bulletSize={16}
        >
          <p className="sm:text-5xl text-4xl  sm:ml-14 font-semibold mb-8">
            Timeline
          </p>
          <Timeline.Item className="text-2xl sm:text-3xl sm:max-w-[60vw] ">
            <p
              style={{ opacity: opacityForBlock(progress, 1) }}
              className="text-2xl sm:text-4xl font-semibold "
            >
              <span className="block text-orange-400">Registration: </span>
              Registrations starts on October 2nd. Students can register for
              free, individually or in groups of maximum 4 members.
            </p>
          </Timeline.Item>
          <Timeline.Item className="text-2xl sm:text-3xl sm:max-w-[60vw]">
            <p
              style={{ opacity: opacityForBlock(progress, 2) }}
              className="text-2xl sm:text-4xl font-semibold "
            >
              <span className="block text-orange-400">Round 1: </span>
              The team will submit an abstract of their product ideas, as well
              as a scientific proposal based on the selected theme. The projects
              will be submitted online through the portal. All participants who
              advance to the next round will be notified via email.
            </p>
          </Timeline.Item>
          <Timeline.Item className="text-2xl sm:text-3xl sm:max-w-[60vw]">
            <p
              style={{ opacity: opacityForBlock(progress, 3) }}
              className="text-2xl sm:text-4xl font-semibold "
            >
              <span className="block text-orange-400">Round 2: </span>
              Top teams will be given mentorship sessions to help them finish
              their prototype. They will be invited to exhibit and demonstrate
              their models or prototypes at the Indian Institute Of Technology,
              Madras.
            </p>
          </Timeline.Item>
          <Timeline.Item className="text-2xl sm:text-3xl sm:max-w-[60vw]">
            <p
              style={{ opacity: opacityForBlock(progress, 4) }}
              className="text-2xl sm:text-4xl font-semibold "
            >
              <span className="block text-orange-400">Finals: </span>3 day event
              at IIT Madras, along with several workshops. A lot of rewards are
              waiting for the winners and the other finalists.
            </p>
          </Timeline.Item>
        </Timeline>
      </div>
    </div>
  );
};
export default TimelineComponent;
