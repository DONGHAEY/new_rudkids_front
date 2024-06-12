import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { QueryClientProvider } from "react-query";
import useRudkidsQueryClient from "./rudkidsQueryClient";
import { Suspense, useEffect, useLayoutEffect, useState } from "react";
import GlobalStyle from "../src/styles";
import Loader from "./shared_components/Loader";
import PublicBizAssets from "./global/public-biz-assets";
import { init, track } from "@amplitude/analytics-browser";

function App() {
  const [queryClient] = useRudkidsQueryClient();
  const [originChecked, setOriginChecked] = useState(false);

  useEffect(() => {
    if (originChecked) return;
    const allowOrigins = [process.env.REACT_APP_FE_URL];
    if (!allowOrigins.includes(window.location.origin)) {
      window.location.href =
        process.env.REACT_APP_FE_URL +
        window.location.pathname +
        window.location.search;
    } else {
      setOriginChecked(true);
    }
  }, []);

  useLayoutEffect(() => {
    const imgPreload = (src) => {
      let img = new Image();
      img.src = src;
    };
    Object.values(PublicBizAssets)?.forEach((imgSrc) => {
      imgPreload(imgSrc);
    });
  }, []);

  useEffect(() => {
    if (!originChecked) return;
    init(process.env["REACT_APP_AMPLITUDE_KEY"], {
      defaultTracking: {
        pageViews: false,
      },
    });
  }, [originChecked]);

  if (!originChecked) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<Loader />}>
        <Routes>
          {Object.values(routes)?.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={
                <TrackPageView pageName={route.pageMeta.name}>
                  <route.element routeInfo={route} />
                </TrackPageView>
              }
            />
          ))}
        </Routes>
      </Suspense>
      <GlobalStyle />
    </QueryClientProvider>
  );
}

const TrackPageView = ({ children, pageName }) => {
  useEffect(() => {
    if (!pageName) return;
    track(`view ${pageName} page`);
  }, [pageName]);
  return children;
};

export default App;
