import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client"
import Body from "./src/components/Body";
import Head from "./src/components/Head";
import Footer from "./src/components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import Contact from "./src/components/Contact";
import About from "./src/components/About";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
import Profile from "./src/components/Profile";
import Instamart from "./src/components/Instamart";
import { Provider } from "react-redux";
import store from "./src/utils/store";
import Cart from "./src/components/Cart";

// const Body = lazy(() => import("./src/components/Body"))
const Contact = lazy(() => import("./src/components/Contact"))

  const Applayout = () => {
    const [userInfo, setUserInfo] = useState({
      user: {
        name: "Eshwar",
        email: "eshwar@gmail.com"
      }
    })
    return(
    <Provider store={store}>
      <Head/>
      <Outlet />
      <Footer />
    </Provider>
    )
  }

  const appRouter = createBrowserRouter([
    {    
      path: "/",
      element: <Applayout />,
      errorElement: <Error />,
      children:[
        {
          path: "/",
          element: <Body /> 
        },
        {
          path: "/contact",
          element: <Suspense fallback={"Loading..."}><Contact /> </Suspense>
        },
        {
          path: "/instamart",
          element: <Suspense fallback={"Loading..."}><Instamart /> </Suspense>
        },
        {
          path: "/cart",
          element: <Cart />
        },
        {
          path: "/about",
          element: <About />,
          children: [
            {
            path: "profile",
            element: <Profile />
            }
          ]
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