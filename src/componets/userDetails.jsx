import { useParams} from "react-router-dom"
import { useEffect,useState} from "react"
import axios from "axios";

export const UserDetails=()=>{
       const{id}=useParams()
       const[user,setUser]=useState([]);
     

       useEffect(()=>{
           axios.get(`https://reqres.in/api/users/${id}`).then(({data})=>{

               setUser(data.data)
           })
       },[]);
    
    return <div>
        <img src={user.avatar} alt=""/>
        <div>First name :{user.first_name}</div>
        <div>Last name :{user.last_name}</div>
    </div>
}
