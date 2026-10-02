import { Navigate,Outlet } from "react-router";


function Authentication(){
    const token = localStorage.getItem("token");
    if(!token){
        return <Navigate to = '/' />
    }
    return (
    <>
    <Outlet/>
    </>
    )
}
export default Authentication