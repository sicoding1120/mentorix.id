import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { useLogic } from "../logic";
import { ResponseApiRouter } from "@/utils/apiResponse";

const prisma = new PrismaClient();
const logic = new useLogic();
const Response = new ResponseApiRouter();

export class useAuthRouter {
  async _register(req: NextApiRequest, res: NextApiResponse, error: any) {
    const hashPass = await logic.hashingPassword(req.body.password);
    const id = logic.generateUUID();
    const email = req.body.email.includes("@gmail.com") ? req.body.email : undefined
    if (email === undefined) {
      res.status(422).json(Response._createDataFailure(error, 422))
    }
    if (req.statusCode === 500) {
      res.status(500).json(Response._verifyDataFailureISR(error));
    }
    if (req.statusCode === 404) {
      res.status(404).json(Response._verifyDataFailureNotFound(error));
    }
    const user = await prisma.user.create({
      data: {
        id: id,
        username: req.body.username,
        password: hashPass,
        email: email,
      },
    } as never);
    res.status(201).json(Response._verifyDataSuccess(user));
  }
  async _login(req: NextApiRequest, res: NextApiResponse, error: any) {
    console.log(req.body);
    const user = await prisma.user.findUnique({
      where: {
        email: req.body.email,
        password: req.body.password,
      },
    } as never);
    console.log(user);

    if (
      !user ||
      !(await logic.verifyPassword(req.body.password, user.password))
    ) {
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
