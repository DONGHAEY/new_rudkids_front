import { Suspense, useEffect } from "react";
import { QueryClientProvider } from "react-query";
import { Route, Routes, useLocation } from "react-router-dom";
import GlobalStyle from "../src/styles";
import { routes } from "./routes";
import useRudkidsQueryClient from "./rudkidsQueryClient";
import { trackPageView, useTrackReadPageContents } from "./shared_analytics";
import { useWindowScrollInit } from "./hooks/useWindowScrollInit";
import Loader from "./shared_components/Loader";

function App() {
  const [queryClient] = useRudkidsQueryClient();
  const { pathname } = useLocation();

  useWindowScrollInit();

  // const currentRoute = Object.values(routes)?.find(
  //   (route) => route.path === pathname
  // );

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
                  <DefaultTrackPageView pageName={route.name}>
                    <route.element routeInfo={route} />
                  </DefaultTrackPageView>
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

const DefaultTrackPageView = ({ children, pageName }) => {
  useTrackReadPageContents(pageName);
  useEffect(() => {
    trackPageView(pageName);
  }, [pageName]);

  return children;
};

export default App;
