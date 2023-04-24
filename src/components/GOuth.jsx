import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

export default function GOuth() {
  return (
    <div>
      <div>
        <button
          class="w-full items-center justify-center bg-red-800 hover:bg-red-900 active:bg-red-400 transition duration-150 ease-out text-white font-bold py-3 px-11 rounded shadow-md uppercase text-sm flex "
          type="submit"
        >
          <span class="mr-2">
            <FcGoogle />
          </span>
          Continue with Google <Link></Link>
        </button>
      </div>
    </div>
  );
}
