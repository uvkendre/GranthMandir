import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("Users"));
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    try {
      const response = await axios.post("http://localhost:4001/user/login", userInfo);
      if (response.data) {
        toast.success('Logged in successfully!', { duration: 3000 });
        localStorage.setItem("Users", JSON.stringify(response.data.user));
        setIsLoggedIn(true);
        setTimeout(() => {
          window.location.reload();
        }, 300); // Delayed page reload
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      }
    }
  };

  return (
    <div className='text-white bg-black'>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-white text-slate-800 shadow-xl">
          <form onSubmit={handleSubmit(onSubmit)}>
            <button
              type="button"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 cursor-pointer"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </button>

            <h3 className="font-bold text-lg">Login</h3>

            {/* Email */}
            <div className='mt-4 space-y-2'>
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder='Enter your email'
                className='w-80 px-3 py-1 border rounded-md outline-none bg-white'
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: "Invalid email format",
                  }
                })}
              />
              {errors.email && <span className="text-red-500">{errors.email.message}</span>}
            </div>

            {/* Password */}
            <div className='mt-4 space-y-2'>
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder='Enter your password'
                className='w-80 px-3 py-1 border rounded-md outline-none bg-white'
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long"
                  }
                })}
              />
              {errors.password && <span className="text-red-500">{errors.password.message}</span>}
            </div>

            {/* Buttons */}
            <div className='flex justify-around mt-4'>
              <button
                type="submit"
                className='bg-orange-500 text-white px-3 py-2 rounded-md hover:bg-orange-900 duration-300 cursor-pointer'>
                Login
              </button>
              <p>
                Not registered?{" "}
                <Link to="/signup" className='underline text-blue-500'>
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
