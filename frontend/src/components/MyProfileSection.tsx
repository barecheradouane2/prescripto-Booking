import { useForm } from "react-hook-form";
import { assets } from "../assets/assets_frontend/assets";

type ProfileForm = {
  name: string;
  email: string;
  phone: string;
  address: string;
  gender: string;
  dateOfBirth: string;
  bloodGroup: string;
};

const user = { name: "radouane", email: "radouanebareche6@gmail.com", phone: "0657130995", address: "mila", Gender: "", dateOfBirth: "", bloodGroup: "", };

const MyProfileSection = () => {
 const {
     register,
     handleSubmit,
     formState: { errors },
   } = useForm<ProfileForm>({
     defaultValues: user,
   });
 
   const onSubmit = (data: ProfileForm) => {
     console.log(data);
     // Send data to your API here
   };
 
   return (
     <div className="flex justify-center py-10">
       <div className="w-full max-w-2xl rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
         {/* Profile Image */}
         <div className="flex flex-col items-center mb-8">
           <img
             src={assets.upload_area}
             alt="profile"
             className="w-32 h-32 rounded-full object-cover"
           />
 
           <h2 className="mt-4 text-2xl font-semibold">
             My Profile
           </h2>
         </div>
 
         <form
           onSubmit={handleSubmit(onSubmit)}
           className="space-y-8"
         >
           {/* CONTACT INFORMATION */}
           <div>
             <h3 className="mb-4 text-lg font-semibold text-blue-600">
               CONTACT INFORMATION
             </h3>
 
             <div className="space-y-4">
               {/* Name */}
               <div className="grid grid-cols-3 items-center gap-4">
                 <label className="font-medium">Name</label>
 
                 <div className="col-span-2">
                   <input
                     {...register("name", {
                       required: "Name is required",
                     })}
                     className="w-full rounded border border-gray-300 px-3 py-2"
                   />
                   {errors.name && (
                     <p className="mt-1 text-sm text-red-500">
                       {errors.name.message}
                     </p>
                   )}
                 </div>
               </div>
 
               {/* Email */}
               <div className="grid grid-cols-3 items-center gap-4">
                 <label className="font-medium">Email</label>
 
                 <div className="col-span-2">
                   <input
                     type="email"
                     {...register("email", {
                       required: "Email is required",
                     })}
                     className="w-full rounded border border-gray-300 px-3 py-2"
                   />
 
                   {errors.email && (
                     <p className="mt-1 text-sm text-red-500">
                       {errors.email.message}
                     </p>
                   )}
                 </div>
               </div>
 
               {/* Phone */}
               <div className="grid grid-cols-3 items-center gap-4">
                 <label className="font-medium">Phone</label>
 
                 <input
                   {...register("phone")}
                   className="col-span-2 rounded border border-gray-300 px-3 py-2"
                 />
               </div>
 
               {/* Address */}
               <div className="grid grid-cols-3 items-center gap-4">
                 <label className="font-medium">Address</label>
 
                 <input
                   {...register("address")}
                   className="col-span-2 rounded border border-gray-300 px-3 py-2"
                 />
               </div>
             </div>
           </div>
 
           {/* PERSONAL INFORMATION */}
           <div>
             <h3 className="mb-4 text-lg font-semibold text-blue-600">
               PERSONAL INFORMATION
             </h3>
 
             <div className="space-y-4">
               {/* Gender */}
               <div className="grid grid-cols-3 items-center gap-4">
                 <label className="font-medium">Gender</label>
 
                 <select
                   {...register("gender")}
                   className="col-span-2 rounded border border-gray-300 px-3 py-2"
                 >
                   <option value="">Select Gender</option>
                   <option value="male">Male</option>
                   <option value="female">Female</option>
                 </select>
               </div>
 
               {/* Date of Birth */}
               <div className="grid grid-cols-3 items-center gap-4">
                 <label className="font-medium">Date of Birth</label>
 
                 <input
                   type="date"
                   {...register("dateOfBirth")}
                   className="col-span-2 rounded border border-gray-300 px-3 py-2"
                 />
               </div>
 
               {/* Blood Group */}
               <div className="grid grid-cols-3 items-center gap-4">
                 <label className="font-medium">Blood Group</label>
 
                 <input
                   {...register("bloodGroup")}
                   placeholder="e.g. O+"
                   className="col-span-2 rounded border border-gray-300 px-3 py-2"
                 />
               </div>
             </div>
           </div>
 
           {/* Submit Button */}
           <div className="flex ">
             <button
               type="submit"
               className="rounded bg-[var(--maincolor)] px-6 py-2 text-white transition hover:opacity-90"
             >
               Save Changes
             </button>
           </div>
         </form>
       </div>
     </div>
   );
}

export default MyProfileSection