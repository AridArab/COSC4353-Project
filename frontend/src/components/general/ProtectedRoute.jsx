import {Navigate, Outlet} from "react-router-dom";
import { useAuth } from "../../authprovider/authProvider";

export const ProtectedRoute = () => {
    const { token } = useAuth();


    if (!token) {
        return <Navigate to="/Login"/>;
    }

    return <Outlet/>;
}