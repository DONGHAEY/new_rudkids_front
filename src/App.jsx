import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { QueryClientProvider } from "react-query";
import useRudkidsQueryClient from "./rudkidsQueryClient";
import { Suspense, useEffect, useState } from "react";
import GlobalStyle from "../src/styles";
import Loader from "./shared_components/Loader";
function App() {
  const [queryClient] = useRudkidsQueryClient();
  const [originChecked, setOriginChecked] = useState(false);
  useEffect(() => {
    if (originChecked) return;
    const allowOrigins = [
      process.env.REACT_APP_FE_URL,
      "http://localhost:3000",
      "http://192.168.0.11:3001",
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
