import {
  IconBrandFacebookFilled,
  IconBrandGoogle,
  IconBrandGoogleFilled,
} from "@tabler/icons-react";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaKey } from "react-icons/fa";
import axios from "axios";
import { useRouter } from "next/router";
import { useLogic } from "@/backends/logic";
import bcrypt from "bcryptjs";


const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setDatas] = useState<any>();
  const [verify, setVerify] = useState(false);
  const logic = new useLogic();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/users");
      const users = await res.json();
      setDatas(users);
    };
    fetchData();
  }, [user, password]);

  const verifyPassword = async (password: string, hashPassword: string = "") => {
    return await bcrypt.compare(password, hashPassword);
  };

  

  const handleLogin = async () => {
    const passwordhash = user.data.datas.find((data: any) => data).password
    console.log(verifyPassword(password,passwordhash));
    const filter = user.data.datas.filter(
      (items: any) => items.email == email
    )
    console.log(filter);
  }

  return (
    <div className="w-full h-screen skeleton flex justify-center items-center">
      <div
        className="bg-slate-200 p-8 rounded-xl flex flex-col gap-6 shadow-lg"
      >
        <h1 className="text-4xl font-bold">Login</h1>
        <p className="text-slate-500">
          Masuk ke akun anda untuk melanjutkan <br />
          proses belajarmu di MENTORIX!
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
          <div className="w-full flex items-center gap-12">
            <div className="flex items-center gap-2">
              <input type="checkbox" name="remember" id="remember" />
              <label htmlFor="remember" className="text-sm">
                Ingat saya untuk 30 hari
              </label>
            </div>
            <Link
              href={"/auth/forgotPassword"}
              className="text-blue-500 font-semibold text-sm"
            >
              Lupa Password
            </Link>
          </div>
          <div className="btn btn-success text-white" onClick={handleLogin}>
            Login
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <p>Masuk Dengan</p>
            <div className="flex gap-4">
              <button className="btn btn-white">
                <IconBrandGoogleFilled /> Google
              </button>
              <button className="btn btn-white">
                <IconBrandFacebookFilled /> Facebook
              </button>
            </div>
            <p className="text-sm">
              Belum punya akun?{" "}
              <Link
                href={"/auth/register"}
                className="font-semibold text-blue-500 text-sm"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
