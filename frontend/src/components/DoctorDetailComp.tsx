import {doctors} from "../lib/data";

const DoctorDetailComp = ({ id }: { id: string }) => {
      const doctor = doctors.find((doctor) => doctor._id === id);
  return (
    <div className=''>
      {
        doctor ? (
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="px-8 border rounded">
                <img src={doctor.image} alt="heart" className="w-[500px] h-[300px] bg"  />
            </div>

            <div className="flex flex-col gap-4 p-8 border rounded">
              <h3 className="text-xl font-bold">{doctor.name}</h3>
              <p className="text-gray-600">{doctor.speciality}</p>
              <p className="text-gray-600">{doctor.about}</p>
              <p className="text-gray-600">Experience: {doctor.experience} years</p>
              <p className="text-gray-600">Location: {}</p>
            </div>

          </div>
        ) : (
          <p>Doctor not found.</p>
        )
      }
       
    </div>
  )
}

export default DoctorDetailComp