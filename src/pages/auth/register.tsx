import {
  IconBrandFacebookFilled,
  IconBrandGoogle,
  IconBrandGoogleFilled,
} from "@tabler/icons-react";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import { FaKey, FaUser } from "react-icons/fa";
import { useLogic } from "@/backends/logic";
import Cookies from "js-cookie";

const logic = new useLogic();

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [chek, setChek] = useState("");
  console.log(chek, username, password, email);

  const validEmail = logic.validateEmail(email);

  const handleRegister = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://mentorixid.vercel.app/api/auth/register",
        { username, password, email }
      );
      console.log("ok");
    } catch (err) {
      if (err) throw err;
    }
    console.log("ok");
  };

  return (
    <div className="w-full h-screen skeleton flex justify-center items-center">
      <form
        action=""
        className="bg-slate-200 p-8 rounded-xl flex flex-col gap-6 shadow-lg"
      >
        <h1 className="text-4xl font-bold">Register</h1>
        <p className="text-slate-500">
          Daftarkan akun anda untuk memulai <br />
          proses belajarmu di MENTORIX!
        </p>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label
              className={`input ${
                validEmail === true ? "input-success" : "input-error"
              } flex items-center gap-2`}
            >
              <MdEmail />
              <input
                type="text"
                className="grow"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <FaUser />
              <input
                type="text"
                className="grow"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
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
          <div className="w-full flex items-center gap-12">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name=""
                id=""
                onChange={(e) => setChek(e.target.value)}
              />
              <p className="text-sm">
                Saya setuju dengan semua syarat dan ketentuan
              </p>
            </div>
          </div>
          <button
            className="btn"
            title="Register"
            type="button"
            onClick={handleRegister}
          >
            Register
          </button>
          <div className="flex flex-col justify-center items-center gap-4">
            <p>Daftar Dengan</p>
            <div className="flex gap-4">
              <button className="btn btn-white">
                <IconBrandGoogleFilled /> Google
              </button>
              <button className="btn btn-white">
                <IconBrandFacebookFilled /> Facebook
              </button>
            </div>
            <p className="text-sm">
              Sudah punya akun?{" "}
              <Link
                href={"/auth/login"}
                className="font-semibold text-blue-500 text-sm"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
