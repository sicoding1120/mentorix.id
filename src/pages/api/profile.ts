import { userService } from "@/backends/providers/user.service";
import { error } from "console";
import type { NextApiRequest, NextApiResponse } from "next";

const user = new userService();

export default async function Auth(req: NextApiRequest, res: NextApiResponse) {
  try {
      switch (req.method) {
          case "GET": 
              
              res.status(200).json("hallo world");
        case "PUT":
            await user._updateProfileUsers(req, res, error)
    }
    res.status(405).json({ massage: "bad request" });
  } catch (err) {
    if (err) throw err;
  }
}
