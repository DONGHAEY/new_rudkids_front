import { Route, Routes } from "react-router-dom";
import "./App.css";
import { routes } from "./routes";
import { useAxiosInterceptors } from "./hooks/useAxiosInterceptors";

function App() {
  useAxiosInterceptors();

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

  return <Routes children={routesChildren} />;
}

export default App;
