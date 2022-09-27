import { Timeline } from "@mantine/core";
import { ScrollContext } from "../utils/ScrollObserver";
import { useContext, useEffect, useRef } from "react";

const TimelineComponent = () => {
  let active;
  const { scrollY } = useContext(ScrollContext);

  const refContainer = useRef(null);
  const numOfPages = 4;
  let progress = 0;

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
    <div ref={refContainer} className="mt-16 xl:ml-14">
      <p className="sm:text-5xl text-3xl sm:ml-14 font-semibold mb-8">
        Timeline
      </p>
      <div className="sm:ml-6 md:ml-14">
        <Timeline
          className="text-xl sm:text-2xl"
          active={active}
          lineWidth={3}
          bulletSize={12}
        >
          <Timeline.Item
            className="sm:max-w-[60vw] md:max-w-[80vw]"
            title="Registration"
          >
            <p className="text-gray-400">
              Registrations starts on October 2nd. Students can register for
              free, individually or in groups of maximum 4 members.
            </p>
          </Timeline.Item>
          <Timeline.Item
            className="sm:max-w-[60vw] md:max-w-[80vw]"
            title="Round 1"
          >
            <p className="text-gray-400">
              The team will submit an abstract of their product ideas, as well
              as a scientific proposal based on the selected theme. The projects
              will be submitted online through the portal. All participants who
              advance to the next round will be notified via email.
            </p>
          </Timeline.Item>
          <Timeline.Item
            className="md:max-w-[60vw] sm:max-w-[80vw]"
            title="Round 2"
          >
            <p className="text-gray-400">
              Top teams will be given mentorship sessions to help them finish
              their prototype. They will be invited to exhibit and demonstrate
              their models or prototypes at the Indian Institute Of Technology,
              Madras.
            </p>
          </Timeline.Item>
          <Timeline.Item
            className="sm:max-w-[60vw] md:max-w-[80vw]"
            align="left"
            title="Finals"
          >
            <p className="text-gray-400">
              3 day event at IIT Madras, along with several workshops. A lot of
              rewards are waiting for the winners and the other finalists.
            </p>
          </Timeline.Item>
        </Timeline>
      </div>
    </div>
  );
};
export default TimelineComponent;
