
import React, { lazy,Suspense, useEffect, useState } from "react";
import  ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import About from "./component/about";
import Contact from "./component/contact";
import Error from "./component/Error";
import RestaurantMenu from "./component/RestaurantMenu";
import { createBrowserRouter,Outlet,RouterProvider,Outlet } from "react-router-dom";
//import Glocery from "./component/Glocery";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./component/Cart";


// //Mockup
const Glocery=lazy(()=>import( "./component/Glocery"))

const AppLayout = ()=>{
  const[userName,setUserName]= useState();
//authentication code
useEffect(()=>{
  //Make API call
  const data={name:"Swati Tonge",
  };
setUserName(data.name)
},[]);


 return(
  <Provider store={appStore}>
  <UserContext.Provider value={{loggedInUser:userName,setUserName}}>

  
<div className="aap">
<Header />

<Outlet/>
  </div>
  </UserContext.Provider>
  </Provider>
  )
 };
const appRouter=createBrowserRouter([
  {
    path:"/",
    element: <AppLayout />,
    children:[
      {
      path:"/",
    element: <Body />,
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
      path: "/glocery",
      element: <Suspense fallback={<h1>Loading..</h1>}><Glocery /></Suspense>,
    },
    {
      path: "/restaurants/:resId",
      element: <RestaurantMenu />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    ],
    errorElement:<Error/>
  },
  
]);



const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
