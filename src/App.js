import { useEffect,useState } from "react"
import { Outlet } from "react-router-dom"
import { Navbar } from "./Components/Navbar/Navbar";
import { account } from "./Appwrite/auth";
import {useDispatch } from "react-redux"
import { login,logout } from "./Store/authSlice"
import { Loading } from "./Components/Loading/Loading";

function App() {
  const [loadingSate, setLoadingState] = useState(false)
  const dispatch=useDispatch()
  useEffect(()=>{
    const authHandler = async () => {
      setLoadingState(true)
      const getData = account.get();
      getData.then((data) => {
        console.log(data)
        setLoadingState(false)
        dispatch(login({data}))
      }).catch((error) => {
        console.log(error)
        setLoadingState(false)
      }) 
    } 
    authHandler() 
    },[])

    if(loadingSate){
      return <Loading/>
    }

  return (
<>

  <Navbar/>
  <Outlet/>
</>
  );
}

export default App;

 