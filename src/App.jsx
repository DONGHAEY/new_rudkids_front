import { init } from "@amplitude/analytics-browser";
import * as qs from "qs";
import { Suspense, useEffect, useLayoutEffect, useMemo, useState } from "react";
import { QueryClientProvider } from "react-query";
import { Route, Routes, useLocation, useParams } from "react-router-dom";
import GlobalStyle from "../src/styles";
import PublicBizAssets from "./global/public-biz-assets";
import { routes } from "./routes";
import useRudkidsQueryClient from "./rudkidsQueryClient";
import { trackPageView, useTrackReadPageContents } from "./shared_analytics";
import Loader from "./shared_components/Loader";

function App() {
  const [queryClient] = useRudkidsQueryClient();
  const [originChecked, setOriginChecked] = useState(false);
  const { pathname, search } = useLocation();

  const imgPreload = (src) => {
    let img = new Image();
    img.crossOrigin = "anonymous";
    img.src = src;
  };

  useEffect(() => {
    if (originChecked) return;
    const allowOrigins = [
      process.env.REACT_APP_FE_URL,
      "http://172.30.1.16:3001",
    ];
    if (!allowOrigins.includes(window.location.origin)) {
      window.location.href = process.env.REACT_APP_FE_URL + pathname + search;
    } else {
      setOriginChecked(true);
    }
  }, [pathname, search]);

  useEffect(() => {
    if (!originChecked) return;
    init(process.env["REACT_APP_AMPLITUDE_KEY"], {
      defaultTracking: {
        pageViews: false,
      },
    });
    Object.values(PublicBizAssets)?.forEach((imgSrc) => {
      imgPreload(imgSrc);
    });
  }, [originChecked]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, search]);

  if (!originChecked) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        {Object.values(routes)?.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              <Suspense fallback={route.fallback ?? <Loader />}>
                {route.viewTrack ? (
                  <TrackPageView
                    pageName={route.name}
                    children={<route.element routeInfo={route} />}
                  />
                ) : (
                  <route.element routeInfo={route} />
                )}
              </Suspense>
            }
          />
        ))}
      </Routes>
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
    let c_url = window.location.href + window.location.search;
    const c_url_ = sessionStorage.getItem("c_url");
    if (c_url_ !== c_url) {
      sessionStorage.setItem("c_url", c_url);
      trackPageView(pageName, options);
    }
  }, [pageName, options]);

  return children;
};

export default App;
