import { Route, Routes, useParams } from "react-router-dom";
import { routes } from "./routes";
import { QueryClientProvider } from "react-query";
import useRudkidsQueryClient from "./rudkidsQueryClient";
import { Suspense, useEffect, useLayoutEffect, useMemo, useState } from "react";
import * as qs from "qs";
import GlobalStyle from "../src/styles";
import Loader from "./shared_components/Loader";
import PublicBizAssets from "./global/public-biz-assets";
import { Identify, identify, init } from "@amplitude/analytics-browser";
import { trackPageView, useTrackReadPageContents } from "./shared_analytics";

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

  // ;
  // identify()

  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<Loader />}>
        <Routes>
          {Object.values(routes)?.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={
                route.viewTrack ? (
                  <TrackPageView pageName={route.name}>
                    <route.element routeInfo={route} />
                  </TrackPageView>
                ) : (
                  <route.element routeInfo={route} />
                )
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
  const params = useParams();

  const searchParams = useMemo(() => {
    const searchParams = qs.parse(window.location.search.replace("?", ""));
    return searchParams;
  }, [window.location.search]);

  const options = {
    ...params,
    ...searchParams,
  };
  useTrackReadPageContents(pageName);

  useEffect(() => {
    trackPageView(pageName, options);
  }, [pageName, options]);

  return children;
};

export default App;
