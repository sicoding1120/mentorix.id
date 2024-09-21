// import { userService } from "@/backends/providers/user.service";
// import { error } from "console";
import prisma from "@/backends/utils/prisma";
import type { NextApiRequest, NextApiResponse } from "next";


export default async function userFollower(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    switch (req.method) {
      case "GET":
       const data = await prisma.userFollower.findMany();
        res.status(200).json(data);
    }
    res.status(405).json({ massage: "bad request" });
  } catch (err) {
    if (err) throw err;
  }
}
