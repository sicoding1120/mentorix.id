import Link from "next/link";
import React, { useEffect, useState } from "react";
import OTPInput, { InputProps } from "react-otp-input";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Verification = () => {
  const router = useRouter();
  const { user_id, isLogin, isVerify } = router.query;
  const [otp, setOtp] = useState("");
  const [tokenotp, setToken] = useState("");
  useEffect(() => {
    let token;
    const generateToken = () => {
      return Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
    };

    const cookie = Cookies.get(`${user_id}`);

    if (cookie !== undefined) {
      token = cookie;
    } else {
      token = `M${generateToken()}`;
    }
    setToken(token as string);
  }, [user_id]);

  const handleOtp = () => {
    if (otp === tokenotp) {
      toast.success("verifikasi  berhasil");
      router.push(`/dashboard/${user_id}`);
      Cookies.set(`${user_id}`, tokenotp, { expires: 7 });
      Cookies.set('user_id', user_id as string, { expires: 7 });
    } else {
      toast.warning("token salah harap coba lagi", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <div className="w-full h-screen skeleton flex justify-center items-center">
      <div className="bg-slate-200 p-8 rounded-xl flex flex-col gap-6 shadow-lg">
        <h1 className="text-4xl font-bold">verifikasi token anda</h1>
        <p className="text-slate-500">
          Masuk token anda untuk melanjutkan <br />
          proses belajarmu di MENTORIX!
        </p>
        <div className="flex flex-col gap-3 ">
          <p className="">Your Token : </p>
          <p className="text-3xl font-bold">{tokenotp}</p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 justify-center">
            <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={5} // Jumlah input
              inputStyle={{
                width: "3rem",
                height: "3rem",
                margin: "0.5rem",
                borderRadius: 10,
              }}
              renderInput={(props: InputProps) => <input {...props} />}
            />
          </div>
          <div className="flex justify-center">
            <button className="text-sm font-semibold hover:text-blue-500 transition-all ">
              kirim ulang token
            </button>
          </div>
          <button className="btn btn-success text-white" onClick={handleOtp}>
            Login
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Verification;
