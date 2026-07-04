

import { assets } from '../assets/assets_frontend/assets';


const HeaderSection = () => {
    return (
        <div className="flex flex-col items-center bg-[var(--maincolor)] p-10 gap-4 md:flex-row md:justify-center">    

        <div>
            <h1 className="text-4xl font-bold text-white">
                Book Appointment
                <br />
                With Trusted Doctors
            </h1>

            <div className="flex flex-col gap-4 mt-4 text-white">
                <div  className="flex items-center gap-4">
                <img src={assets.group_profiles} alt="heart" className="w-[80px] h-[50px]" />
                <p>
                   Simply browse through our extensive list of trusted doctors,
                   schedule your appointment hassle-free.
                </p>
                </div>

                <a
                  href="#speciality"
                 className="inline-block bg-white text-black cursor-pointer w-[180px] px-4 py-2 rounded-full text-center"
                  >
                Book Now →
                </a>

                

            </div>

        </div>

        <div>

             <img src={assets.header_img} alt="heart" className="w-[500px] h-[400px]"  />

        </div>
         



        </div>
    );
}

export default  HeaderSection