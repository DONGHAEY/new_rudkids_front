import { useLayoutEffect } from "react";

export const useBodyBackground = (background) => {
  //
  useLayoutEffect(() => {
    //사용전 index.html themecolor 고정 없게 해둬야함.
    // const before = document.body.style.background;
    document.body.style.background = background;
    // return () => {
    //   document.body.style.background = before;
    // };
  }, [background]);

  return null;
};
