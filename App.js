import React from "react";
import ReactDOM from "react-dom/client"
import Body from "./src/components/Body";
import Head from "./src/components/Head";
import Footer from "./src/components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./src/components/Contact";
import About from "./src/components/About";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";


  const Applayout = () => {
    return(
    <>
      <Head/>
      <Outlet />
      <Footer />
    </>
    )
  }

  const appRouter = createBrowserRouter([
    {    
      path: "/",
      element: <Applayout />,
      errorElement: <Error />,
      children:[
        {
          path: "/contact",
          element: <Contact /> 
        },
        {
          path: "/about",
          element: <About /> 
        },
        {
          path: "/",
          element: <Body /> 
        },
        {
          path: "/restaurentMenu/:id",
          element: <RestaurantMenu /> 
        },
      ],
    },
    
  ])
  // create root using createRoot
  const root = ReactDOM.createRoot(document.getElementById("root"));
  // passing react element inside root
  root.render(<RouterProvider router={appRouter} />);