import React, { useState } from "react";
import { Link } from "react-router-dom";
import GOuth from "../components/GOuth";

export default function ForgotPassword() {
  const [email, setEmail] = useState(" ")
  ;
  function onChange(e) {
    setEmail(e.target.value);
  }
  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Forget Password</h1>
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
              className="w-full mb-6 px-4 py-2 text-xl text-gray 700 bg-white border-gray-300-rounded transition ease-in-out"
              type="email"
              id="email"
              value={email}
              placeholder="Email address"
              onChange={onChange}
            />

            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
              <p className="mb-6">
                Have an account?{" "}
                <Link
                  to="/sign-in"
                  className="text-red-600 hover:text-red-900 transition duration-200 ease-in-out ml-1"
                >
                  Register
                </Link>
              </p>
              <p>
                <Link
                  to="/sign-in"
                  className="text-purple-600  hover:text-purple-900 transition duration-200 ease-in-out "
                >
                  Sign in instead
                </Link>
              </p>
            </div>
            <div>
              <button
                class="  w-full bg-blue-500 hover:bg-blue-700 transition duration-150 ease-out  text-white font-bold py-3 px-11 rounded shadow-md uppercase text-sm"
                type="submit"
              >
                Send
              </button>
            </div>
            <div className="flex items-center my-4 before:border-t before:flex-1 before:border-gray-300  after:border-t after:flex-1 after:border-gray-300">
              <p className=" text-center font-semibold mx-4">OR</p>
            </div>
            <GOuth />
          </form>
        </div>
      </div>
    </section>
  );
}
