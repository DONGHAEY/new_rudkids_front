import { track } from "@amplitude/analytics-browser";
import gsap from "gsap";
import moment from "moment";
import { useEffect } from "react";

export const trackClickButton = (buttonName, options) => {
  track(`click ${buttonName} button`, options);
};

export const trackPageView = (pageName, options) => {
  track(`view ${pageName} page`, options);
};

let maxScrollPos = 0;
let scrollPos = 0;

export const useTrackReadPageContents = (pageName) => {
  const scrollHandler = () => {
    const scrollTop = gsap.getProperty("html", "scrollTop");
    const clientHeight = gsap.getProperty("html", "clientHeight");
    const offsetHeight = gsap.getProperty("#root > div", "offsetHeight");
    const scrollPercentage = (scrollTop * 100) / (offsetHeight - clientHeight);
    scrollPos = Math.round(scrollPercentage);
    if (scrollPos > maxScrollPos) {
      maxScrollPos = scrollPos;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [pageName]);

  useEffect(() => {
    const st = moment();
    return () => {
      const ed = moment();
      const durationTime = moment.duration(ed.diff(st)).asSeconds();
      track(`read contents`, {
        duration_time: durationTime.toFixed(1),
        max_scroll_position: maxScrollPos,
        end_scroll_position: scrollPos,
        page: pageName,
      });
    };
  }, [pageName]);

  return <></>;
};
