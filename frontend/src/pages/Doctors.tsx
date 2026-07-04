import Footer from "@/components/Footer";
import { Link, useParams } from "react-router-dom";
import {doctors, specialityData} from '../lib/data';
import  type {SpecialityType} from '../lib/data';
import DoctorItem from "@/components/DoctorItem";
import type {DoctorType} from "../lib/data";
import { useSearchParams } from "react-router-dom";
import Pagination from "@/components/Pagination ";


const Doctors = () => {
     const { speciality } = useParams();
     const [searchParams] = useSearchParams();
      const page = Number(searchParams.get("page")) || 1;


  const doctorListItems = speciality
  ? doctors.filter(doctor => doctor.speciality === speciality)
  : doctors; // 



  return (
    <div className="flex flex-col gap-4 p-2">
      <h3>Browse through the doctors specialist.</h3>

      <div className="flex flex-col gap-4 md:flex-row">
        <div>

          <button className="bg-blue-500 md:hidden text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">
            <Link to="/doctors">Filter</Link>
          </button>

          <div className="flex flex-col gap-2 mt-4">
             
             {specialityData.map((item : SpecialityType) => (
                <Link to={`/doctors/${item.speciality}`} key={item.speciality}>
                <div key={item.speciality} className={`w-full px-2   py-2 border rounded ${speciality === item.speciality ? 'bg-gray-200' : 'bg-white text-black'}`}>
                    
                    <p className="px-10">{item.speciality}</p>
                </div>
                </Link>
            ))}
          

          </div>
         

        </div>

        <div className="flex flex-col gap-4 flex-1">
          <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">

          {doctorListItems.map((item : DoctorType) => (
                   <DoctorItem  item={item} />
           ))}

       

        </div>
          <Pagination page={page} count={doctorListItems.length} />
        </div>

        

      </div>

      <Footer />


     
    </div>
  );
}

export default Doctors