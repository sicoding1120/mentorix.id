import { ResponseApiRouter } from "@/utils/apiResponse";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { useLogic } from "../logic";
import Login from "@/pages/auth/login";

const prisma = new PrismaClient();
const Response = new ResponseApiRouter();
const logic = new useLogic();

export class userService {
  async _getUserAllButNotWithRelations(
    req: NextApiRequest,
    res: NextApiResponse,
    error: any
  ) {
    const users = await prisma.user.findMany({
      // include: {
      //   enrolledClasses: false,
      //   mentoredClasses: false,
      //   comment: false,
      //   followers: false,
      //   following: false,
      // },
    });
    res.status(200).json(Response._getSuccess(users as never));
    if (req.statusCode === 404) {
      res.status(404).json(Response._getFailure(error));
    }
    if (req.statusCode === 500) {
      res.status(500).json(Response._getInternalServerError(error));
    }
  }

  async _getUserAllWithRelations(
    req: NextApiRequest,
    res: NextApiResponse,
    error: any
  ) {
    const users = await prisma.user.findMany({
      // include: {
      //   enrolledClasses: true,
      //   mentoredClasses: true,
      //   comment: true,
      //   followers: true,
      //   following: true,
      // },
    });
    res.status(200).json(Response._getSuccess(users as never));
    if (req.statusCode === 404) {
      res.status(404).json(Response._getFailure(error));
    }
    if (req.statusCode === 500) {
      res.status(500).json(Response._getInternalServerError(error));
    }
  }
  async _getUserSortButNotWithRelations(
    req: NextApiRequest,
    res: NextApiResponse,
    error: any
  ) {
    const user = await prisma.user.findUnique({
      where: { id: req.body.where },
      // include: {
      //   enrolledClasses: false,
      //   mentoredClasses: false,
      //   comment: false,
      //   followers: false,
      //   following: false,
      // },
    });
    res.status(200).json(user as never);
    if (req.statusCode === 404) {
      res.status(404).json(Response._getFailure(error));
    }
    if (req.statusCode === 500) {
      res.status(500).json(Response._getInternalServerError(error));
    }
  }
  async _getUserSortWithRelations(
    req: NextApiRequest,
    res: NextApiResponse,
    error: any
  ) {
    const user = await prisma.user.findUnique({
      where: { id: req.body.where },
      // include: {
      //   enrolledClasses: true,
      //   mentoredClasses: true,
      //   comment: true,
      //   followers: true,
      //   following: true,
      // },
    });
    res.status(200).json(user as never);
    if (req.statusCode === 404) {
      res.status(404).json(Response._getFailure(error));
    }
    if (req.statusCode === 500) {
      res.status(500).json(Response._getInternalServerError(error));
    }
  }

  async _createUSerWithoutRelation(
    req: NextApiRequest,
    res: NextApiResponse,
    error: any
  ) {
    const { username, email, password } = req.body;
    console.log(username, email, password);
    const uuid = logic.generateUUID();
    const passwordSecure = await logic.hashingPassword(password);
    console.log(passwordSecure);
    const create = await prisma.user.create({
      data: {
        id: uuid as string,
        username: username as string,
        email:email as string,
        password: passwordSecure as string,
        fullName: "fullName",
      } as never,
    });
    res.status(201).json(Response._createDataSuccess(create as never));
    if (req.statusCode === 500) {
      res.status(500).json(Response._createDataFailure(error, 500));
    }
    if (req.statusCode === 404) {
      res.status(404).json(Response._createDataFailure(error, 404));
    }
  }
}
