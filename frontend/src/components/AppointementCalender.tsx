import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"

const AppointementCalender = () => {
    const [date, setDate] = useState<Date | undefined>(new Date())
    const [Time, setTime] = useState<string | undefined>(undefined)

    const availableTime = [
        {
            id:1,
            time: "09:00 AM"
        },
        {
            id:2,
            time: "09:15AM"
        },{
            id:3,
            time: "9:30 AM"
        },{
            id:4,
            time: "10:00 AM"
        },
        {
            id:5,
            time: "10:15 AM"
        },
        {
            id:6,
            time: "11:00 AM"
        }

    ]
        





  return (
    <div className='flex flex-col gap-4 md:flex-row   p-4'>
         <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
         className="rounded-lg border"
         />

         <div className="flex flex-wrap  justify-baseline gap-2 py-4 border rounded-lg flex-1">

            {
                availableTime.map((time) => (
                    <div key={time.id}
                     className={`border rounded-lg p-2 m-2 h-[50px] cursor-pointer ${time.time === Time ? 'bg-[var(--maincolor)] text-white' : 'bg-white text-black'}`} 
                    
                    onClick={() => setTime(time.time)}
                    >
                        {time.time}
                    </div>
                ))
            }

            

         </div>

          <div>
                <button className="bg-[var(--maincolor)] cursor-pointer text-white px-4 py-2 rounded-lg">
                    Book Appointment
                </button>
            </div>

           

    </div>
  )
}

export default AppointementCalender