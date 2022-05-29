import { useEffect,useState} from "react"
import axios from "axios"
import { Link } from "react-router-dom"

export const UserList=()=>{
    const[users,setUsers]=useState([])
    useEffect(()=>{
    axios.get("https://reqres.in/api/users").then(({data})=>{
      setUsers(data.data)
    })
    },[])
    return <div>
    {users.map(users=><p key={users.id}>
        <Link to={`/users/${users.id}`}>{users.id}{users.first_name}</Link>
    </p>)}
    </div>
}
