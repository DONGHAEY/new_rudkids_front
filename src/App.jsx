import { Route, Routes } from "react-router-dom";
import "./App.css";
import { routes } from "./routes";
import { QueryClientProvider } from "react-query";
import useRudkidsQueryClient from "./queries/rudkidsQueryClient";
import { useEffect } from "react";

function App() {
  const [queryClient] = useRudkidsQueryClient();

  useEffect(() => {
    const FE_ORIGIN = "https://www.rud.kids";
    if (window.location.origin !== FE_ORIGIN) {
      window.location.href = FE_ORIGIN + window.location.pathname;
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

  return (
    <QueryClientProvider client={queryClient}>
      <Routes children={routesChildren} />
    </QueryClientProvider>
  );
}

export default App;
