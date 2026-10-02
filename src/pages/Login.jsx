import { useNavigate } from "react-router";

function Login(){

    const nav = useNavigate();
    const handlelogin = ()=>{
        localStorage.setItem("token","abc1234");
        localStorage.setItem("user","ankit");
        nav('/studentregistration');
    }
    return(
        <>
        <div>
            <button type="button" className="btn btn-primary" onClick={handlelogin}>Login</button>
        </div>
        
        </>
    )
}
export default Login;