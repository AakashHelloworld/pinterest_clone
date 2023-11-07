import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import { Navbar } from "./Components/Navbar/Navbar";
import { account } from "./Appwrite/auth";
import {useDispatch } from "react-redux"
import { login,logout } from "./Store/authSlice"

function App() {
  const dispatch=useDispatch()
  useEffect(()=>{
    const authHandler = async () => {
      const getData = account.get();
      getData.then((data) => {
        console.log(data)
        dispatch(login({data}))
      }).catch((error) => {
        console.log(error)
      }) 
    } 
    authHandler() 
    },[])
  return (
<>
  <Navbar/>
  <Outlet/>
</>
  );
}

export default App;

 