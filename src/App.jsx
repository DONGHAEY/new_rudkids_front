import { Suspense, useEffect } from "react";
import { QueryClientProvider } from "react-query";
import { Route, Routes } from "react-router-dom";
import GlobalStyle from "../src/styles";
import { routes } from "./routes";
import useRudkidsQueryClient from "./rudkidsQueryClient";
import { trackPageView, useTrackReadPageContents } from "./shared_analytics";

import Loader from "./shared_components/Loader";
import { AlertProvider } from "./hooks/useRudAlert";
import { useWindowScrollInit } from "./hooks/useWindowScrollInit";
import { ConfirmProvider } from "./hooks/useRudConfirm";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [queryClient] = useRudkidsQueryClient();
  useWindowScrollInit();

  return (
    <QueryClientProvider client={queryClient}>
      <AlertProvider>
        <ConfirmProvider>
          <Routes>
            {Object.values(routes)?.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <Suspense
                    fallback={
                      route.fallback ?? <Loader pageName={route.name} />
                    }
                  >
                    {route.viewTrack ? (
                      <DefaultTrackPageView pageName={route.name}>
                        <route.element routeInfo={route} />
                      </DefaultTrackPageView>
                    ) : (
                      <route.element routeInfo={route} />
                    )}
                  </Suspense>
                }
              />
            ))}
          </Routes>
          <GlobalStyle />
        </ConfirmProvider>
      </AlertProvider>
    </QueryClientProvider>
  );
}

const DefaultTrackPageView = ({ children, pageName }) => {
  useTrackReadPageContents(pageName);
  useEffect(() => {
    trackPageView(pageName);
  }, [pageName]);

  return children;
};

export default App;
