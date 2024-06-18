import { Route, Routes, useParams } from "react-router-dom";
import { routes } from "./routes";
import { QueryClientProvider } from "react-query";
import useRudkidsQueryClient from "./rudkidsQueryClient";
import {
  Suspense,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import * as qs from "qs";
import GlobalStyle from "../src/styles";
import Loader from "./shared_components/Loader";
import PublicBizAssets from "./global/public-biz-assets";
import { init } from "@amplitude/analytics-browser";
import { trackPageView, useTrackReadPageContents } from "./shared_analytics";
import SymbolLoader from "./shared_components/SymbolLoader";
import gsap from "gsap";
import symbolSrc from "./shared_components/SymbolLoader/assets/symbol.webp";
import { LoaderUI } from "./shared_components/SymbolLoader/styles";

function App() {
  const [queryClient] = useRudkidsQueryClient();
  const [originChecked, setOriginChecked] = useState(false);

  useEffect(() => {
    if (originChecked) return;
    const allowOrigins = [
      process.env.REACT_APP_FE_URL,
      "http://172.30.1.1:3001",
    ];

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
