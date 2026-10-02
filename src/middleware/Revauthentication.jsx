import { Navigate } from "react-router";
import { Outlet } from "react-router";

function RevAuthentication(){
    const token = localStorage.getItem("token");
    if(token){
        return <Navigate to = '/studentregistration'/>
    }
    return(
        <>
        <Outlet/>
        </>
    )
}
export default RevAuthentication;