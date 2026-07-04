import type  { DoctorType } from '../lib/data';
import { useNavigate } from "react-router-dom";


const DoctorItem = ({ item }: { item: DoctorType }) => {
  const navigate = useNavigate();

   
  return (
     <div onClick={() => navigate(`/appointment/${item._id}`)} key={item._id} className='flex flex-col border-gray-300 rounded-2xl border-2  gap-2 hover:translate-y-4 transition-transform duration-300'>
       <div className='bg-gray-200  rounded-tr-2xl rounded-tl-2xl cursor-pointer p-2'>
        <img src={item.image} alt={item.name} className='' />
       </div>
       <div className='p-3'>
        <span className="flex items-center gap-2">
            <span className="bg-green-500 w-[10px] h-[10px] rounded-full"></span>
            <span className="text-green-500">Available</span>
        
        </span>
         <h3 className='font-semibold'>{item.name}</h3>
         <p className='text-gray-600'>{item.speciality}</p>


       </div>
      
     </div>
  )
}

export default DoctorItem