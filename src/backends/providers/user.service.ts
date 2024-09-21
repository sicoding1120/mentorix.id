import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../utils/prisma";
import { ResponseApiRouter } from "@/utils/apiResponse";
import { error } from "console";

const RestApi = new ResponseApiRouter();
export class userService {
  async _getUserAllWithRelations(
    req: NextApiRequest,
    res: NextApiResponse,
    error: any
  ) {
    const users = await prisma.user.findMany({
      include: {
        comment: true,
        enrolledClasses: true,
        followers: true,
        following: true,
        FotoProfile: true,
        mentoredClasses: true,
        progressClass: true,
      },
    });
    res.status(200).json(RestApi._getSuccess(users as never));
    if (req.statusCode === 500) {
      res.status(500).json(RestApi._getFailure(error as never));
    }
    if (req.statusCode === 404) {
      res.status(404).json(RestApi._getFailure(error as never));
    }
    if (req.statusCode === 400) {
      res.status(400).json(RestApi._getFailure(error as never));
    }
  }

  async _updateProfileUsers(req: NextApiRequest, res: NextApiResponse) {
    const { idUser, firstName, lastName, bio } = req.body;

    try {
      // Proses update user di database
      const usersUpdate = await prisma.user.update({
        where: {
          id: idUser,
        },
        data: {
          firstName: firstName,
          lastName: lastName,
          fullName: `${firstName} ${lastName}`,
          bio: bio,
        },
      });

      // Jika berhasil, kirimkan response sukses
      res.status(200).json(RestApi._updateDataSuccess(usersUpdate as never));
    } catch (error) {
      if (error) {
        // Tangani error internal lainnya
        res.status(500).json(RestApi._updateDataFailureISR(error as never));
      }
    }
  }

  async _FollowerUsers(req: NextApiRequest, res: NextApiResponse) {
    const { idUser, followerId } = req.body; // Ambil followerId dari body

    if (!idUser || !followerId) {
      return res.status(400).json({ message: "Missing idUser or followerId" });
    }

    try {
      const user = await prisma.user.update({
        where: { id: idUser },
        data: {
          followers: {
            connect: { followerId: followerId }, // Pastikan menggunakan ID yang valid
          }as never,
        },
      });
      res.status(201).json(RestApi._createDataSuccess(user as never));
    } catch (error) {
      console.error("Error following user:", error);
      res.status(500).json(RestApi._createDataFailure(error, 500));
    }
  }

  async _FollowingUsers(req: NextApiRequest, res: NextApiResponse) {
    const { idUser, followingId } = req.body; // Ambil followingId dari body

    if (!idUser || !followingId) {
      return res.status(400).json({ message: "Missing idUser or followingId" });
    }

    try {
      const user = await prisma.user.update({
        where: { id: idUser },
        data: {
          following: {
            connect: { followingId: followingId }, // Pastikan menggunakan ID yang valid
          }as never,
        },
      });
      res.status(201).json(RestApi._createDataSuccess(user as never));
    } catch (error) {
      console.error("Error following user:", error);
      res.status(500).json(RestApi._createDataFailure(error, 500));
    }
  }

  async _unFollowerUser(req: NextApiRequest, res: NextApiResponse) {
    const { idUser, followerId } = req.body; // Ambil followerId dari body

    if (!idUser || !followerId) {
      return res.status(400).json({ message: "Missing idUser or followerId" });
    }

    try {
      const user = await prisma.user.update({
        where: { id: idUser },
        data: {
          followers: {
            disconnect: { followerId: followerId }, // Pastikan menggunakan ID yang valid
          }as never,
        },
      });
      console.log("Unfollow successful:", user);
      res.status(200).json(RestApi._createDataSuccess(user as never));
    } catch (error) {
      console.error("Error in unfollowing user:", error);
      res.status(500).json(RestApi._createDataFailure(error, 500));
    }
  }

  async _unFollowingUser(req: NextApiRequest, res: NextApiResponse) {
    const { idUser, followingId } = req.body; // Ambil followingId dari body

    if (!idUser || !followingId) {
      return res.status(400).json({ message: "Missing idUser or followingId" });
    }

    try {
      const user = await prisma.user.update({
        where: { id: idUser },
        data: {
          following: {
            disconnect: { followingId: followingId }, // Pastikan menggunakan ID yang valid
          } as never,
        },
      });
      res.status(200).json(RestApi._createDataSuccess(user as never));
    } catch (error) {
      console.error("Error in unfollowing user:", error);
      res.status(500).json(RestApi._createDataFailure(error, 500));
    }
  }
}
