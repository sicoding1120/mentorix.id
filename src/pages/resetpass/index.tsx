import React from "react";
import { FaKey } from "react-icons/fa";

const ResetPass = () => {
  return (
    <div className="w-full h-screen skeleton flex justify-center items-center">
      <div className="bg-slate-200 p-8 rounded-xl flex flex-col gap-6 shadow-lg">
        <h1 className="text-4xl font-bold">New Password</h1>
        <p className="text-slate-500">
          Buat ulang password anda Lorem <br /> amet elit. Commodi adipisci
          rerum qui?
        </p>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <label className="input input-bordered flex items-center gap-2">
              <FaKey />
              <input type="text" className="grow" placeholder="New Password" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <FaKey />
              <input
                type="password"
                className="grow"
                placeholder="Confirm Password"
              />
            </label>
          </div>
          <div className="btn btn-success text-white">Login</div>
        </div>
      </div>
    </div>
  );
};

export default ResetPass;
