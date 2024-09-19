import type { NextApiRequest, NextApiResponse } from "next";
import { ApiError } from "next/dist/server/api-utils";
import { userService } from "@/backends/providers/user.service";

const user = new userService();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    switch (req.method) {
      case "GET":
        await user._getUserAllWithRelations(req, res, ApiError);
      case "PUT":
        await user._updateUsers(req,res,Error)
    }
  } catch (err) {
    if (err) throw err;
  }
}
