import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';

function Signup() {
  const navigate = useNavigate(); // Initialize useNavigate for redirection
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    try {
      const response = await axios.post("http://localhost:4001/user/signup", userInfo);
      console.log(response.data);
      if (response.data) {
        toast.success('Signed up successfully!', { duration: 3000 }); // Show success message
        localStorage.setItem("Users", JSON.stringify(response.data.user));
        closeModal(); // Close modal
        navigate('/'); // Redirect to home page after signup
      }
    } catch (error) {
      if (error.response) {
        console.log(error);
        toast.error(error.response.data.message);
      }
    }
  };

  const closeModal = () => {
    const modal = document.getElementById("my_modal_3");
    if (modal) {
      modal.close(); // Ensure the modal element exists before closing
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-[600px]">
        <div className="modal-box shadow-4xl bg-white text-black">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Close Button */}
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 cursor-pointer">
              ✕
            </Link>

            <h3 className="font-bold text-lg">Sign Up</h3>

            {/* Name */}
            <div className="mt-4 space-y-2">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-80 px-3 py-1 border rounded-md outline-none bg-white"
                {...register("fullname", { required: "Name is required" })}
              />
              {errors.fullname && (
                <span className="text-red-500">{errors.fullname.message}</span>
              )}
            </div>

            {/* Email */}
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none bg-white"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: "Invalid email format",
                  },
                })}
              />
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </div>

            {/* Password */}
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 border rounded-md outline-none bg-white"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long",
                  },
                })}
              />
              {errors.password && (
                <span className="text-red-500">{errors.password.message}</span>
              )}
            </div>

            {/* Submit Button */}
            <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-white hover:text-orange-500 border border-orange-500 transition-colors duration-300 cursor-pointer"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
