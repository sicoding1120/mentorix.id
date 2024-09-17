import { generateOTP, sendOTP, createOrUpdateUser } from "@/backends/utils/otp";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, password_email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  const otp = generateOTP();
  await createOrUpdateUser(email, otp);
  await sendOTP(email, otp, email, password_email);

  res.status(200).json({ message: "OTP sent" });
}
