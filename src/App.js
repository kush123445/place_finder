import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


import Homepage from './component/Homepage';
import { BrowserRouter , Route } from "react-router-dom";
import Loginpage from './component/Loginpage';
import Registerpage from './component/Registerpage';
import Dash from './component/Dash';
import Aboutuspage from './component/Aboutuspage';
import Contact from './component/Contact';
import Logout from './component/Logout';
import Profile from './component/Profile';
import Add from './component/Add';
import Delete from './component/Delete';
import Addform from './component/Addform';
import Search from './component/Search';
function App() {


  localStorage.setItem("login",false)
  return (
    <>
       <BrowserRouter>
             <switch>
              <Route  exact path="/"  component={Homepage} />
              <Route  exact path="/Login"  component={Loginpage} />
              <Route  exact path="/Register"  component={Registerpage} />
              <Route  exact path="/dashboard"  component={Dash} />
              <Route  exact path="/aboutus"  component={Aboutuspage} />
              <Route  exact path="/contactus"  component={Contact} />
              <Route  exact path="/Logout"  component={Logout} />
              <Route  exact path="/profile"  component={Profile} />
              <Route  exact path="/add"  component={Add} />
              <Route  exact path="/delete"  component={Delete} />
              <Route  exact path="/search"  component={Search} />
              </switch>

       </BrowserRouter>
    
      
    </>


  );
}
export default App;
