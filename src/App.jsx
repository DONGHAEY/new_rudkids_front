import { Route, Routes } from "react-router-dom";
import "./App.css";
import { routes } from "./routes";
import { QueryClientProvider } from "react-query";
import useRudkidsQueryClient from "./queries/rudkidsQueryClient";

function App() {
  const [queryClient] = useRudkidsQueryClient();

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
