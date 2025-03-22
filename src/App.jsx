import { Outlet } from "react-router-dom"
import NavBar from "./component/NavBar"
import MyFooter from "./component/MyFooter"



const App = () => {

  return (
    <>
    <NavBar />
   <div className="min-h-screen">
      <Outlet />
   </div>
   <MyFooter />
    </>
  )
}

export default App
