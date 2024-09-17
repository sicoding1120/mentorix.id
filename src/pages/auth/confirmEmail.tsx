import axios from 'axios';
import router from 'next/router';
import React, { useState } from 'react'
import { FaKey } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const ConfirmEmail = () => {
      const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleOtpRequest = async () => {
      try {
          const res = await axios.post('/api/sent-otp', { email, password })
          router.push('/auth/send-otp')
      } catch (err) {
        if(err) throw err
      }
    };

  return (
    <div className="w-full h-screen skeleton flex justify-center items-center">
      <form
        action=""
        className="bg-slate-200 p-8 rounded-xl flex flex-col gap-6 shadow-lg"
      >
        <h1 className="text-4xl font-bold">confim your email</h1>
        <p className="text-slate-500">
          Masuk ke akun email anda untuk melanjutkan <br />
          proses otp
        </p>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="input input-bordered flex items-center gap-2">
              <MdEmail />
              <input
                type="text"
                className="grow"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <FaKey />
              <input
                type="password"
                className="grow"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          <button className="btn btn-success text-white" onClick={() => handleOtpRequest}>
            send otp request
          </button>
        </div>
      </form>
    </div>
  );
}

export default ConfirmEmail