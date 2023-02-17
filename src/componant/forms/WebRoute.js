import {Routes,Route} from "react-router-dom";
import About from "./About";
import Cervices from "./Cervices";
import Contact from "./Contact";
import HomeImages from "./HomeImg";
import Login from "./Login";
import Register from "./Register";
import LazyLoaded from "../../LazyLoaded";

function WebRoute(){
return(
    <div>
    <Routes>
        <Route path="/LazyLoaded" element={<LazyLoaded/>}/>
    </Routes>
    </div>
)
}
export default WebRoute;