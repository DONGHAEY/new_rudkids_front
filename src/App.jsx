import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { routes } from "./routes";
import { useAxiosInterceptors } from "./hooks/useAxiosInterceptors";
import { QueryClientProvider } from "react-query";
import queryClient from "./queries/rudkidsQueryClient";
import useRudkidsQueryClient from "./queries/rudkidsQueryClient";

function App() {
  // useAxiosInterceptors();

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
