import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { init as amplitudeInit } from "@amplitude/analytics-browser";
import PublicBizAssets from "./global/public-biz-assets";

const imgPreload = (src) => {
  let img = new Image();
  img.crossOrigin = "anonymous";
  img.src = src;
};

const checkCorrectOrigin = () => {
  const correctOrigin = process.env["REACT_APP_FE_URL"];
  const { pathname, search, origin } = window.location;
  const isSameOrigin = correctOrigin === origin;
  if (!isSameOrigin) {
    window.location = correctOrigin + pathname + search;
  }
  return isSameOrigin;
};

const renderApp = () => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <RecoilRoot>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RecoilRoot>
  );
};

const init = () => {
  // if (!checkCorrectOrigin()) return;
  const publicImageUrls = Object.values(PublicBizAssets);
  publicImageUrls?.forEach((imgUrl) => imgPreload(imgUrl));
  amplitudeInit(process.env["REACT_APP_AMPLITUDE_KEY"], {
    defaultTracking: {
      pageViews: false,
    },
  });
  renderApp();
};

init();
