import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../utils/prisma";
import { ResponseApiRouter } from "@/utils/apiResponse";

const RestApi = new ResponseApiRouter();
export class userService {
  async _getUserAllWithRelations(req: NextApiRequest, res: NextApiResponse, error: any) {
    const users = await prisma.user.findMany(
      {
        include: {
          comment: true,
          enrolledClasses: true,
          followers: true,
          following: true,
          FotoProfile: true,
          mentoredClasses: true,
          progressClass: true
        }
      }
    );
    res.status(200).json(RestApi._getSuccess(users as never))
    if (req.statusCode === 500) { 
      res.status(500).json(RestApi._getFailure(error as never))
    }
    if (req.statusCode === 404) {
      res.status(404).json(RestApi._getFailure(error as never))
    }
    if (req.statusCode === 400) {
      res.status(400).json(RestApi._getFailure(error as never))
    }
  }

  async _updateProfileUsers(req:NextApiRequest, res:NextApiResponse, error:any, id?:number) {
    const { id_user,firstName, lastName, bio } = req.body
    const usersCreate = await prisma.user.update({
      where: {
        id: id_user
      },
      data: {
        firstName: firstName,
        lastName: lastName,
        fullName: `${firstName} ${lastName}`,
        bio: bio
      }
    })
    console.log(usersCreate);
    res.status(200).json(RestApi._updateDataSuccess(usersCreate as never))
    if(req.statusCode === 500) {
      res.status(500).json(RestApi._updateDataFailureISR(error as never))
    }
    if (req.statusCode === 404) {
      res.status(404).json(RestApi._updateDataFailureNotFound(error as never))
    }
  }
}
