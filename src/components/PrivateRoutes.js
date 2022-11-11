import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/authVerify";

export const PrivateRoutes = () => {

    const { signed } = useContext(AuthContext);

    return signed ? <Outlet/> : <Navigate to="/Login" />

}