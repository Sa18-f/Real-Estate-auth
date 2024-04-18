import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";

const PrivateRoute = ({children}) => {
    const {user, loading} = UseAuth();
    const location = useLocation();

    if(loading){
        return <h1 className="text-5xl text-center font-bold flex justify-center items-center flex-col min-h-96">Loading...</h1>
    }
    if(user){
        return children
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;