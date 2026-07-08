
import {myAppointments} from '@/lib/data';
import Pagination from '../components/Pagination ';
import { useSearchParams } from "react-router-dom";
const MyAppointmentsSection = () => {
      const [searchParams] = useSearchParams();
      const page = Number(searchParams.get("page")) || 1;

    const myappointments =myAppointments;


  return (
    <div className=''>
        <div className="">
            <h1 className="text-2xl font-bold">My Appointments</h1>
            <div>
                {
                    myappointments.map((appointment) => (
                        <div className="flex justify-between  flex-col md:flex-row  items-center gap-4 rounded-lg border border-gray-300 p-4 shadow-md" key={appointment._id}>
                          <div className="flex  gap-2" key={appointment._id}>
                           <div> 
                                <img src={appointment.doctor.image} alt={appointment.doctor.name} className="h-25 w-25 rounded-full object-cover" />
                            </div>
                          <div key={appointment._id} className="flex flex-col gap-2 rounded-lg border border-gray-300 p-4 shadow-md">
                            <h2 className="text-lg font-semibold">{appointment.doctor.name}</h2>
                            <p className="text-gray-600">Date: {appointment.date}</p>
                            <p className="text-gray-600">Time: {appointment.time}</p>
                            <p className="text-gray-600">Status: {appointment.status}</p>
                           </div>
                           </div>
                           <div>
                            <button className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
                                Cancel
                            </button>
                            </div>

                        </div>
                    ))
                }
               

            </div>


             <Pagination page={page} count={myappointments.length} />
        
         
        </div>
    </div>
  )
}

export default MyAppointmentsSection