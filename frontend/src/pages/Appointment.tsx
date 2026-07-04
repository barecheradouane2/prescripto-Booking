import { useParams } from "react-router-dom";

const Appointment = () => {
     const { id } = useParams();

  console.log(id); // "66bc7bd18bc4d5b2502bf4c1"
  return (
    <div>
      Appointment for doctor: {id}
    </div>
  )
}

export default Appointment