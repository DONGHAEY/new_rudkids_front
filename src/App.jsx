import { init } from "@amplitude/analytics-browser";
import { Suspense, useEffect } from "react";
import { QueryClientProvider } from "react-query";
import { Route, Routes, useLocation } from "react-router-dom";
import GlobalStyle from "../src/styles";
import PublicBizAssets from "./global/public-biz-assets";
import { routes } from "./routes";
import useRudkidsQueryClient from "./rudkidsQueryClient";
import { trackPageView, useTrackReadPageContents } from "./shared_analytics";
import Loader from "./shared_components/Loader";

function App() {
  const [queryClient] = useRudkidsQueryClient();
  const { pathname, search } = useLocation();

  const imgPreload = (src) => {
    let img = new Image();
    img.crossOrigin = "anonymous";
    img.src = src;
  };

  useEffect(() => {
    init(process.env["REACT_APP_AMPLITUDE_KEY"], {
      defaultTracking: {
        pageViews: false,
      },
    });
    Object.values(PublicBizAssets)?.forEach((imgSrc) => {
      imgPreload(imgSrc);
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, search]);

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
