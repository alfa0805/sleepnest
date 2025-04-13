import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Page/Home";
import Collection from "../Page/Collection";
import About from "../Page/About";
import Contact from "../Page/Contact";
import Like from "../Page/Like";
import Details from "../Components/Details";
import Winter from "../Pages/Winter";
import Perfect1 from "../Pages/Perfect1";
import Perfect3 from "../Pages/Perfect3";
import Perfect2 from "../Pages/Perfect2";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/collection",
        element: <Collection />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/like",
        element: <Like />,
      },
      {
        path: "/details/:id",
        element: <Details />,
      },
      {
        path: "/perfect/1",
        element: <Perfect1/>,
      },
      {
        path: "/perfect/2",
        element: <Perfect2/>,
      },
      {
        path: "/perfect/3",
        element: <Perfect3/>,
      },
    ],
  },
]);
