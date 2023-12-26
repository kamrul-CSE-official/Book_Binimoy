import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import About from "../Pages/About/About";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import SearchResult from "../Pages/SearchResult/SearchResult";
import DonateForm from "../Pages/DonateForm/DonateForm";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/regester",
        element: <Register />,
      },
      {
        path: "/search/:searchInput",
        element: <SearchResult />,
      },
      {
        path: "/donateBook",
        element: <DonateForm />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default routes