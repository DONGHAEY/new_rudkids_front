import gsap from "gsap";
import { useCallback, useEffect, useState } from "react";

export const useBodyUpdownScroll = () => {
  let maxScrollPos = 0;
  let scrollPos = 0;

  const scrollHandler = useCallback(() => {
    const scrollTop = gsap.getProperty("html", "scrollTop");
    const clientHeight = gsap.getProperty("html", "clientHeight");
    const offsetHeight = gsap.getProperty("body", "offsetHeight");
    const scrollPercentage = (scrollTop * 100) / (offsetHeight - clientHeight);
    scrollPos = scrollPercentage.toFixed(0);
    if (scrollPos <= maxScrollPos) return;
    maxScrollPos = maxScrollPos;
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return { scrollPos, maxScrollPos };
};
