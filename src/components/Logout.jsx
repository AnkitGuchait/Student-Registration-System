import { useNavigate } from "react-router";
function Logout(){
    const nav = useNavigate();
    const handlelogout = ()=>{
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        nav('/')
    }

    
    return(
        <>
        <div className="container">
            <button className="btn btn-danger" onClick={handlelogout}>Logout</button>
        </div>
        
        </>
    )
}
export default Logout;