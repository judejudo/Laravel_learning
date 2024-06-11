import {Navigate, createBrowserRouter} from "react-router-dom"
import Login from "./views/log_in"
import SignUp from "./views/sign_up"
import Users from "./views/users"
import NotFound from "./views/not_found"
import DefaultLayout from "./components/DefaultLayout"
import GuestLayout from "./components/GuestLayout"
import Dashboard from "./views/dashboard"

const router = createBrowserRouter(
    [
        {
            path:'/',
            element: <DefaultLayout/>, 
            children:[
                {
                    path:'/',
                    element: <Navigate to={"/users"}/>
                },
                {
                    path:'/users',
                    element: <Users/>
                },
                {
                    path:'/dashboard',
                    element: <Dashboard/>
                },
            ]
        },
        {
            path:'/',
            element: <GuestLayout/>,
            children:[
                {
                    path:'/log_in',
                    element: <Login/>
                },
                {
                    path:'/sign_up',
                    element: <SignUp/>
                }
            ]
        },
        {
            path:'*',
            element: <NotFound/>
        },
        
    ]
)

export default router;