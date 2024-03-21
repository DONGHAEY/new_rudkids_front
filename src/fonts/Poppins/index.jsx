import PoppinsBoldFont from "./Poppins-Bold.ttf";
import PoppinsSemiBoldFont from "./Poppins-SemiBold.ttf";
import PoppinsMediumFont from "./Poppins-Medium.ttf";
import { css } from "styled-components";

export const PoppinsFonts = {
  poppinsBold: {
    src: PoppinsBoldFont,
    fontFamily: "Poppins-Bold",
  },
  poppinsSemiBold: {
    src: PoppinsSemiBoldFont,
    fontFamily: "Poppins-SemiBold",
  },
  poppinsMedium: {
    src: PoppinsMediumFont,
    fontFamily: "Poppins-Medium",
  },
};

export const PopinsFontsCss = css`
  ${Object.keys(PoppinsFonts).map((popinsFontInfoKey) => {
    const popinsFontInfo = PoppinsFonts[popinsFontInfoKey];
    return `@font-face {
    font-family: "${popinsFontInfo.fontFamily}";
    src: url(${popinsFontInfo.src}) format("woff2");
    font-display: swap;
  }`;
  })}
`;
