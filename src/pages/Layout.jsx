import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function Layout() {
  return (
    <div className="font-mono flex flex-col min-h-screen m-0 p-0 box-border overflow-x-hidden">
        <Navbar />
        <main className='flex-grow'>
        <Outlet />
        </main>
       
        <Footer />
    </div>
  )
}

export default Layout