import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { useState } from "react";
import { routes } from "./routes";

function App() {
  const [queryClient] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
        },
      },
    })
  );

  const routesChildren = Object.keys(routes)?.map((routeKey) => {
    const route = routes[routeKey];
    return (
      <Route path={route.path} element={<route.element routeInfo={route} />} />
    );
  });

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes children={routesChildren} />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
