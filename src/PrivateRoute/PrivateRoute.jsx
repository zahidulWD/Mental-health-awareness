
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const { user } = useContext(AppContext);
    const location = useLocation();

    if (!user) {
        return <Navigate to="/login" replace state={{ from: location }} />;
    }

    return children

}

export default PrivateRoute;