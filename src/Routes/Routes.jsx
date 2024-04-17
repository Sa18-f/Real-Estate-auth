import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import UpdateProfile from "../Navbar/UpdateProfile/UpdateProfile";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import EstateDetails from "../Pages/EstateDetails/EstateDetails";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/updateProfile',
                element: <UpdateProfile></UpdateProfile>
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
        ]
    }
])

export default Routes;