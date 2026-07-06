import { Link } from "react-router-dom"
import { useForm } from "react-hook-form";

type SignupFormData = {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  gender: string;
  birthday: string;
  password: string;
};

const SignupForm = () => {
   const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>();

  const onSubmit = (data: SignupFormData) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center px-4 ">
      <div className="w-full max-w-md rounded-xl bg-white p-8  border-2 border-gray-300">
        <h2 className="text-2xl font-bold">Create an account</h2>
        <p className="mt-2 text-sm text-gray-600">
          Enter your information below to create your account.
        </p>

       <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Full Name */}
      <div>
        <label className="mb-2 block text-sm font-medium">Full Name</label>
        <input
          {...register("fullName", {
            required: "Full name is required",
          })}
          className="w-full rounded-md border border-gray-300 px-3 py-2"
        />
        {errors.fullName && (
          <p className="mt-1 text-sm text-red-500">
            {errors.fullName.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="mb-2 block text-sm font-medium">Email</label>
        <input
          type="email"
          {...register("email", {
            required: "Email is required",
          })}
          className="w-full rounded-md border border-gray-300 px-3 py-2"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label className="mb-2 block text-sm font-medium">Phone Number</label>
        <input
          type="tel"
          {...register("phone", {
            required: "Phone number is required",
          })}
          className="w-full rounded-md border border-gray-300 px-3 py-2"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-500">
            {errors.phone.message}
          </p>
        )}
      </div>

      {/* Address */}
      <div>
        <label className="mb-2 block text-sm font-medium">Address</label>
        <textarea
          rows={3}
          {...register("address", {
            required: "Address is required",
          })}
          className="w-full rounded-md border border-gray-300 px-3 py-2"
        />
        {errors.address && (
          <p className="mt-1 text-sm text-red-500">
            {errors.address.message}
          </p>
        )}
      </div>

      {/* Gender */}
      <div>
        <label className="mb-2 block text-sm font-medium">Gender</label>
        <select
          {...register("gender", {
            required: "Please select a gender",
          })}
          className="w-full rounded-md border border-gray-300 px-3 py-2"
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        {errors.gender && (
          <p className="mt-1 text-sm text-red-500">
            {errors.gender.message}
          </p>
        )}
      </div>

      {/* Birthday */}
      <div>
        <label className="mb-2 block text-sm font-medium">Birthday</label>
        <input
          type="date"
          {...register("birthday", {
            required: "Birthday is required",
          })}
          className="w-full rounded-md border border-gray-300 px-3 py-2"
        />
        {errors.birthday && (
          <p className="mt-1 text-sm text-red-500">
            {errors.birthday.message}
          </p>
        )}
      </div>

      {/* Password */}
      <div>
        <label className="mb-2 block text-sm font-medium">Password</label>
        <input
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          })}
          className="w-full rounded-md border border-gray-300 px-3 py-2"
        />
        {errors.password && (
          <p className="mt-1 text-sm text-red-500">
            {errors.password.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="w-full rounded-md bg-blue-600 py-2 text-white hover:bg-blue-700"
      >
        Create Account
      </button>
    </form>

        
          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
            
              className="font-medium text-blue-600 hover:underline"
            >
              Sign in
            </Link>
          </p>
      </div>
    </div>
  )
}

export default SignupForm