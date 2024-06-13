import { Outlet } from "react-router-dom";
import Login from "./conponents/Logcard.jsx";
const App=()=>{
  return(
    <>
    {/* <Login /> */}
    <Outlet />
    </>
  )
}
export default App;