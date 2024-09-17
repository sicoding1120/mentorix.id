import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { useLogic } from "../logic";
import { ResponseApiRouter } from "@/utils/apiResponse";

const prisma = new PrismaClient();
const logic = new useLogic();
const Response = new ResponseApiRouter();

export class useAuthRouter {

    async _register(req:NextApiRequest,res:NextApiResponse) {

    }
  async _login(req: NextApiRequest, res: NextApiResponse, error: any) {
    const user = await prisma.user.findUnique({
      where: {
        name: req.body.username,
        password: req.body.password,
      },
    } as never);

    if (!user || !(await logic.verifyPassword(req.body.password, user.password)) ) {
      res.status(401).json(Response._verifyDataFailure401(error));
    }
    res.status(200).json(Response._verifyDataSuccess(user));
    if (req.statusCode === 500) {
      res.status(500).json(Response._verifyDataFailureISR(error));
    }
    if (req.statusCode === 404) {
      res.status(404).json(Response._verifyDataFailureNotFound(error));
    }
  }
}
