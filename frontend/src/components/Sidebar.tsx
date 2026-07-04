import {  NavbarItems } from '../lib/data'

import { Link } from 'react-router-dom'

type NavBarProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};


const Sidebar = ({ setIsOpen }: NavBarProps) => {
  return (
    <div className=' flex flex-col md:hidden bg-gray-50 w-full h-full absolute z-10 top-0 right-0  '>

          <div className="flex items-center justify-end p-4">
 
           <div onClick={() => setIsOpen((prev) => !prev)} className="flex item-center justify-center cursor-pointer p-4 w-5 h-5 rounded-full bg-white shadow-md">
              x
           </div>

        </div>

             <ul className=" flex flex-col justify-center gap-4 items-center ">
                 {NavbarItems.map((item) => (
                      <li
                      key={item.href}
                      className="text-gray-600 hover:text-gray-900"
                        >
                      <Link to={item.href}>{item.label}</Link>
                         </li>
                       ))}
             </ul>


    </div>
  )
}

export default Sidebar