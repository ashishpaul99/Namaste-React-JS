import React from "react";
import { lazy } from "react";
import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body"
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
// import About from "./components/About";
import Contact from "./components/contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery"


const Grocery=lazy(()=>import("./components/Grocery"));
const About=lazy(()=>import("./components/About"));


const AppLayout=()=>{
    return(
        <div className="app">
          <Header/>
          <Outlet/>
        </div>
    );
};

// Creating Routing Configuration
const appRouter = createBrowserRouter([
  {
      path:"/",
      element:<AppLayout/>, 
      children:[ {
        path:"/",
        element:<Body/>,
      },
      {
        path:"/about",
        element:<Suspense fallback={<h1>Loading..</h1>}><About/></Suspense>,    
      }
      ,{
        path:"/contact",
        element:<Contact/>,
      },
      {
        path:"/grocery",
        element:<Suspense fallback={<h1>Loading..</h1>}><Grocery/></Suspense>
      },
      {
        path:"/restaurant/:resId",
        element:<RestaurantMenu/>
      }
    ],
      errorElement:<Error/>,
  },
 
]);

const root=ReactDOM.createRoot(document.getElementById("root"));
// passing router configuration
root.render(<RouterProvider router={appRouter}/>);

