import React , {lazy , Suspense, useEffect, useState} from "react"
import  ReactDOM  from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import AboutUs from "./components/AboutUs"
import ContactUs from "./components/ContactUs"
import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu"
import Login from "./components/Login"
import userContext from "./utilities/userContext"
import { createBrowserRouter , RouterProvider ,Outlet } from "react-router-dom"
import Cart from "./components/Cart"
import { Provider } from "react-redux"
import appStore from "./utilities/appStore"

const Grocery = lazy(() => import("./components/Grocery"))

const AppLayout = () =>{

     const [userName , setUserName] = useState("naveen")

     useEffect(()=>{
    const data = {
        name : "Golla swathi"
    };
    setUserName(data.name)
     },[])

    return(
        <Provider store={appStore}>
     <userContext.Provider value={{ loggedUser : userName , setUserName}}>
        <div>
            <Header/>
            <Outlet/>
        </div>
     </userContext.Provider>
     </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout/>,
        children :[
            {
            path : "/",
           element : <Body/>,
        },
        {
            path : "/about",
            element : <AboutUs/>,
        },
        {
            path : "/contact",
            element : <ContactUs/>
        },
        {
            path : "/grocery",
            element : (<Suspense fallback={<h1>Loading....</h1>}><Grocery/></Suspense>)
        },
        {
            path : "/restaurant/:resId",
            element : <RestaurantMenu/>
        },
        {
            path : "/cart",
            element : <Cart/>
        },
        
        {
            
                path : "/login",
                element : <Login/>
        }
        
    ],
        errorElement : <Error/>
    },
    
])


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter}/>)