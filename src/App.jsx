import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { QueryClientProvider } from "react-query";
import useRudkidsQueryClient from "./rudkidsQueryClient";
import { Suspense, useEffect, useLayoutEffect, useState } from "react";
import GlobalStyle from "../src/styles";
import Loader from "./shared_components/Loader";
import PublicBizAssets from "./global/public-biz-assets";
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

  if (!originChecked) {
    return null;
  }

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<Loader />}>
          <Routes
            children={Object.values(routes)?.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={<route.element routeInfo={route} />}
              />
            ))}
          />
        </Suspense>
        <GlobalStyle />
      </QueryClientProvider>
    </>
  );
}

export default App;
