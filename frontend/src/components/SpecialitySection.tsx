
import {specialityData} from '../lib/data';

import { Link } from 'react-router-dom'

const SpecialitySection = () => {

    type Speciality = {
        
        speciality: string;
        image: string;
    };



  return (
    <div id="speciality" className='flex flex-col items-center gap-10 p-10 '>
        <div>
            <h1 className='text-3xl font-bold text-center mb-5'>Find by Speciality</h1>
            <p>
                Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.
            </p>
        </div>
        <div className='flex gap-2 justify-center  '>
            {specialityData.map((item : Speciality) => (
                <Link to={`/doctors/${item.speciality}`} key={item.speciality}>
                <div key={item.speciality} className='flex flex-col items-center gap-2 hover:translate-y-4 transition-transform duration-300'>
                    <img src={item.image} alt={item.speciality} className='w-[100px] h-[100px] rounded-full' />
                    <p>{item.speciality}</p>
                </div>
                </Link>
            ))}
        </div>

    </div>
  )
}

export default SpecialitySection