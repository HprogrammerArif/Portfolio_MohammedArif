import { createBrowserRouter } from "react-router-dom";

import Main from "../layouts/Main";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Showcase from "../pages/Showcase";
import Reviews from "../pages/Reviews";
import Contact from "../pages/Contact";
import HomePage2 from "../pages/HomePage2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [
      {
        index: true,
        //element: <HomePage2/>
        element: <Home/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/services',
        element: <Services/>
      },
      {
        path: '/showcase',
        element: <Showcase/>
      },
      {
        path: '/reviews',
        element: <Reviews/>
      },
      {
        path: '/contact',
        element: <Contact/>
      },
    ]
  },
]);

export default router;
