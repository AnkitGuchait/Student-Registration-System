import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Layout(){
    return(
        <>
        <div className="container bg-light">
        <Header/>
        <Outlet/>
        <Footer/>
        
        </div>
        </>
    )
}
export default Layout