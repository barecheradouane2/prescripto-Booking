import  DoctorDetailComp from "@/components/DoctorDetailComp";
import AppointementCalender from "@/components/AppointementCalender";

import { useParams } from "react-router-dom";
import Footer from "@/components/Footer";

const DoctorDetail = () => {
      const { id } = useParams();

  return (
    <div className='flex flex-col gap-4 p-2'>

       <DoctorDetailComp id={id!} />

       <AppointementCalender/>

       <Footer/>

    </div>
  )
}

export default DoctorDetail