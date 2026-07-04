
import { Link } from 'react-router-dom'
import {assets} from '../assets/assets_frontend/assets'
import { isLoggedIn, NavbarItems } from '../lib/data'
import { DropdownMenuIcons } from '../components/DropdownMenuIcons'
import { useState } from 'react';

type NavBarProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};


const NavBar = ({ setIsOpen }: NavBarProps) => {

  const [selected, setSelected] = useState("Home");

  return (
  <div className="flex items-center justify-between p-4 bg-white border-b border-gray-400">
  <div>
    <img
      src={assets.logo}
      alt="logo"  
      className="w-32 h-auto"
    />
  </div>

  <ul className=" hidden md:flex items-center gap-6">
    {NavbarItems.map((item) => (
      <li
        key={item.href}
        onClick={() => setSelected(item.label)}
        className={`text-gray-600 hover:text-gray-900 ${selected === item.label ? 'active' : ''}`}
      >
        <Link to={item.href}>{item.label}</Link>
      </li>
    ))}
  </ul>

 
 <div className="flex items-center gap-4">

  {
    isLoggedIn ? (
      <DropdownMenuIcons/>
    )  : (
       <Link
    to="/login"
    className="bg-blue-500 hidden md:flex text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
  >
    Create Account
  </Link>

    )
  }

  

  <div className="  flex md:hidden  cursor-pointer  items-center flex-col gap-1"  onClick={() => setIsOpen((prev) => !prev)}>
    <div className="w-8 h-1 bg-black"></div>
    <div className="w-8 h-1 bg-black"></div>
    <div className="w-8 h-1 bg-black"></div>

  </div>

</div>


</div>
  )
}

export default  NavBar
