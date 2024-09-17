import nodemailer from "nodemailer";
import prisma from "./prisma";

export function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString(); // Generate 6-digit OTP
}



export async function sendOTP(email:string, otp:string, emailUser:string, emailPass:string) {
//   const { emailUser, emailPass } = await getEmailSettings();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: emailUser,
      pass: emailPass,
    },
  });

  await transporter.sendMail({
    from: `"Your App" <${emailUser}>`,
    to: email,
    subject: "Your OTP Code",
    text: `Your OTP code is ${otp}`,
  });
}

export async function createOrUpdateUser(email:any, otp:any) {
  const otpExpires = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes

  return await prisma.user.upsert({
    where: { email },
    update: {
      otp,
      otpExpires,
    },
    create: {
      email,
      otp,
      otpExpires,
    },
  } as never);
}
