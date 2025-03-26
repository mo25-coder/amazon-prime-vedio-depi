import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LogIn from "../pages/LogIn/LogIn";
import SignUp from "../pages/SignUp/SignUp";
import AccountAndSettings from "../pages/AccountAndSettings/AccountAndSettings";
import Homepage from "../pages/Homepage/Homepage";
import KidsAccount from "../pages/KidsAccount/KidsAccount";
import ManageAccounts from "../pages/ManageAccounts/ManageAccounts";
import Movies from "../pages/Movies/Movies";
import MyStuff from "../pages/MyStuff/MyStuff";
import ShowDetails from "../pages/ShowDetails/ShowDetails";
import TvShows from "../pages/TvShows/TvShows";
import Category from "../pages/Categories/Category";

import "../assets/fontawesome-free-6.6.0-web/css/all.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "LogIn",
        element: <LogIn />,
      },
      {
        path: "SignUp",
        element: <SignUp />,
      },
      {
        path: "AccountAndSettings",
        element: <AccountAndSettings />,
      },
      {
        path: "Category/:categoryType",
        element: <Category />,
      },

      {
        path: "Homepage",
        element: <Homepage />,
      },
      {
        path: "KidsAccount",
        element: <KidsAccount />,
      },
      {
        path: "ManageAccounts",
        element: <ManageAccounts />,
      },
      {
        path: "Movies",
        element: <Movies />,
      },
      {
        path: "MyStuff",
        element: <MyStuff />,
      },
      {
        path: "ShowDetails",
        element: <ShowDetails />,
      },
      {
        path: "TvShows",
        element: <TvShows />,
      },
      {
        path: "",
        element: <App />,
      },
    ],
  },
]);

export default router;
