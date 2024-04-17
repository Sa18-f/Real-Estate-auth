import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";

const PrivateRoute = ({children}) => {
    const {user, loading} = UseAuth();
    const location = useLocation();

    if(loading){
        return <h1 className="text-4xl">Loading...</h1>
    }

    if(!user){
        return <Navigate to='/login' state={location?.pathname || '/'}/>
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;