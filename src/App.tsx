import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/HomePage";
import CoinsPage from "./pages/CoinsPage";
import NewsPage from "./pages/NewsPage";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";

import CurrencyContextProvider from "./components/CurrencyContextProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/coins",
    element: <CoinsPage />,
  },
  {
    path: "/news",
    element: <NewsPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

function App() {
  return (
    <div className="App">
      <CurrencyContextProvider>
        <RouterProvider router={router} />
      </CurrencyContextProvider>
    </div>
  );
}

export default App;
