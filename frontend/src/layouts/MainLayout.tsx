import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";





const MainLayout = () => {

const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen   md:px-[70px]  lg:px-[150px]" >
      < NavBar  setIsOpen={setIsOpen}/>

       {
        isOpen && (
          <Sidebar setIsOpen={setIsOpen}/>
        )

       } 


      <main className="pt-4 px-2">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout