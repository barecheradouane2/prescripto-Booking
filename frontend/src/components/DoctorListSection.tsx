import {doctors} from '../lib/data';
import DoctorItem from './DoctorItem';
import { useNavigate } from "react-router-dom";

const DoctorListSection = () => {
    const navigate = useNavigate();

    type DoctorType = {
    _id: string;
    name: string;
    speciality: string;
    image: string;
    degree: string;
    experience: string;
    about: string;
    fees: number;
    address: {
        line1: string;
        line2: string;
    };
    phonenumber?: string;
};
  return (
    <div className='flex flex-col items-center gap-10 p-10 '>
            <div>
                <h1 className='text-3xl font-bold text-center mb-5'>Top Doctors to Book</h1>
                <p>
                    Simply browse through our extensive list of trusted doctors.

                </p>
            </div>
            <div  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {doctors.slice(0,10).map((item : DoctorType) => (
                   <DoctorItem  item={item} />
                ))}
            </div>

            <div>
                <button onClick={() => navigate(`/doctors`)} className='bg-[var(--secondcolor)] cursor-pointer text-black px-12 py-3 rounded-full '>
                   More
                </button>
            </div>
    
        </div>
  )
}

export default DoctorListSection