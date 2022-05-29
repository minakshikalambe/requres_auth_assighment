
import './App.css';
import { About } from './componets/about';
import { Home } from './componets/home';
import{Routes,Route} from"react-router-dom"
import { Nvabar } from './componets/navbar';
import { UserList } from './componets/userList';
import { UserDetails } from './componets/userDetails';
import{PrivateComponent} from'./componets/privatComponent'
import{Login} from'./componets/login'
function App() {
  return (
    <div className="App">
      <Nvabar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/users" element={<UserList/>}></Route>
      <Route path="/users/:id" element={<PrivateComponent><UserDetails/></PrivateComponent>}></Route>
      <Route path="/login" element={<Login/>}></Route>{" "}
    </Routes>
    </div>
  );
}

export default App;
