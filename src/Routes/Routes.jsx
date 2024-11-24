import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import EstateDetails from "../Pages/EstateDetails/EstateDetails";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";
import Errorpage from "../Pages/ErrorPage/Errorpage";
import About from "../Pages/About/About";
import Home from "../Components/Home/Home";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Errorpage></Errorpage>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/updateProfile',
                element: <PrivateRoute><UpdateProfile /></PrivateRoute>   
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: "/estate/:id",
                element: <PrivateRoute>
                    <EstateDetails></EstateDetails>
                </PrivateRoute>,
                loader: () => fetch('/estates.json'),
            },
            {
                path: "/about",
                element: <PrivateRoute>
                    <About></About>
                </PrivateRoute>
            }
        ]
    }
])

export default Routes;