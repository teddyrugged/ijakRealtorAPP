import React, { useState } from "react";
import { AiFillEyeInvisible,AiFillEye } from "react-icons/ai";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }
  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Sign In</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src="https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="buildings"
            className="w-full rounded-2xl"
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20 ">
          <form>
            <input
              className="w-full px-4 py-2 text-xl text-gray 700 bg-white border-gray-300-rounded transition ease-in-out"
              type="email"
              id="email"
              value={email}
              placeholder="Email address"
              onChange={onChange}
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                placeholder="Password"
                onChange={onChange}
                className="w-full px-4 py-2 text-xl text-gray 700 bg-white border-gray-300-rounded transition ease-in-out"
              />
              {showPassword ? (
                <AiFillEyeInvisible
                  className="absolute right-1 top-3 text-xl cursor-pointer"
                  onclick={() => setShowPassword((prevState)=> !prevState)}
                />
              ) : (
                <AiFillEye className="absolute right-1 top-3 text-xl cursor-pointer"
                onclick={() => setShowPassword((prevState)=> !prevState)} />
              )}
            </div>

            <button />
          </form>
        </div>
      </div>
    </section>
  );
}
