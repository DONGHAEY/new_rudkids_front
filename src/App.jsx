import { init } from "@amplitude/analytics-browser";
import { Suspense, useEffect, useMemo, useState } from "react";
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
      "http://192.168.0.182:3001",
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
  //
  useTrackReadPageContents(pageName);
  useEffect(() => {
    trackPageView(pageName);
  }, [pageName]);

  return children;
};

export default App;
