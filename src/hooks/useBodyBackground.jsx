import { useLayoutEffect } from "react";

export const useBodyBackground = (background) => {
  useLayoutEffect(() => {
    const before = document.body.style.background;
    document.body.style.background = background;
    return () => {
      document.body.style.background = before;
    };
  }, [background]);

  return null;
};
