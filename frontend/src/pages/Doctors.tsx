import { useParams } from "react-router-dom";

const Doctors = () => {
     const { speciality } = useParams();

  console.log(speciality); // "Gynecologist"
  return (
    <div>
      {speciality ? (
        <h1>{speciality} Doctors</h1>
      ) : (
        <h1>All Doctors</h1>
      )}
    </div>
  );
}

export default Doctors