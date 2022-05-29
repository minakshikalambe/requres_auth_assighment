import { useContext } from "react"
import { AuthContext } from "../context/Auth.Context"
import { useNavigate } from "react-router-dom"

export const Login=()=>{
    const{handleAuth}=useContext(AuthContext)
    const navigate=useNavigate()
return(
    <div>
        <input type="text" placeholder="username"/>
        <input type="text" placeholder="password"/>
        <button
        onClick={()=>{
            handleAuth(true)
            navigate("/", {replace:true})
        }}>Submit</button>
    </div>
)
}