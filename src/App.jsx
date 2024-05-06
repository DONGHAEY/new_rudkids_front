import { Route, Routes } from "react-router-dom";
import "./App.css";
import { routes } from "./routes";
import { QueryClientProvider } from "react-query";
import useRudkidsQueryClient from "./queries/rudkidsQueryClient";
import { useEffect, useState } from "react";

function App() {
  const [queryClient] = useRudkidsQueryClient();

  const [originChecked, setOriginChecked] = useState(false);
  useEffect(() => {
    if (window.location.origin !== process.env.REACT_APP_FE_URL) {
      window.location.href =
        process.env.REACT_APP_FE_URL +
        window.location.pathname +
        window.location.search;
    } else {
      setOriginChecked(true);
    }
  }, []);

  const routesChildren = Object.keys(routes)?.map((routeKey) => {
    const route = routes[routeKey];
    return (
      <Route
        key={route.path}
        path={route.path}
        element={<route.element routeInfo={route} />}
      />
    );
  });

  if (!originChecked) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Routes children={routesChildren} />
    </QueryClientProvider>
  );
}

export default App;
