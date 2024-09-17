import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { ResponseApiRouter } from "@/utils/apiResponse";

const Response = new ResponseApiRouter();
const prisma = new PrismaClient();
export class classService {
  async _getClassAllButNotWithRelations(
    req: NextApiRequest,
    res: NextApiResponse,
    error: any
  ) {
    const classes = await prisma.class.findMany({});
    res.status(200).json(Response._getSuccess(classes as never));
    if (req.statusCode === 404) {
      res.status(404).json(Response._getFailure(error));
    }
    if (req.statusCode === 500) {
      res.status(500).json(Response._getInternalServerError(error));
    }
  }
  async _getClassAllWithRelations(
    req: NextApiRequest,
    res: NextApiResponse,
    error: any
  ) {
    const classes = await prisma.class.findMany({
      include: {
        Image: true,
        ulasan: true,
        participants: true,
        mentors: true,
        // MateriClass:true
      } ,
    });
    res.status(200).json(Response._getSuccess(classes as never));
    if (req.statusCode === 404) {
      res.status(404).json(Response._getFailure(error));
    }
    if (req.statusCode === 500) {
      res.status(500).json(Response._getInternalServerError(error));
    }
  }

  async _getClassSortButNotWithRelations(
    req: NextApiRequest,
    res: NextApiResponse,
    error: any
  ) {
    const classes = await prisma.class.findUnique({
      where: { id_credential: req.body.where },
    });
    res.status(200).json(classes as never);
    if (req.statusCode === 404) {
      res.status(404).json(Response._getFailure(error));
    }
    if (req.statusCode === 500) {
      res.status(500).json(Response._getInternalServerError(error));
    }
  }

  async _getClassSortWithRelations(
    req: NextApiRequest,
    res: NextApiResponse,
    error: any
  ) {
    const classes = await prisma.class.findUnique({
      where: { id_credential: req.body.where },
    });
    res.status(200).json(classes as never);
    if (req.statusCode === 404) {
      res.status(404).json(Response._getFailure(error));
    }
    if (req.statusCode === 500) {
      res.status(500).json(Response._getInternalServerError(error));
    }
  }

  async _createClassWithRelation(
    req: NextApiRequest,
    res: NextApiResponse,
    error: any
  ) {
    const create = await prisma.class.create({
      data: {
        ...req.body,
        //   participants: {
        //     connect: req.body.relation.participants.map((id_user: string) => ({
        //       id: id_user,
        //     })),
        //   },
        //   mentors: {
        //     connect: req.body.relation.mentors.map((id_user: string) => ({
        //       id: id_user,
        //     })),
        //   },
        //   Image: {
        //     connect: req.body.relation.Image.map((id_image: string) => ({
        //       id: id_image,
        //     })),
        //   },
        //   ulasan: {
        //     connect: req.body.relation.ulasan.map((id_ulasan: string) => ({
        //       id: id_ulasan,
        //     })),
        //   },
        // } as never,
        // include: {
        //   participants: true,
        //   mentors: true,
        //   Image: true,
        //   ulasan: true,
        // },
      },
    });
    res.status(201).json(Response._createDataSuccess(create as never));
    if (req.statusCode === 500) {
      res.status(500).json(Response._createDataFailure(error, 500));
    }
    if (req.statusCode === 404) {
      res.status(404).json(Response._createDataFailure(error, 404));
    }
  }

  async _createClassWithoutRelation(
    req: NextApiRequest,
    res: NextApiResponse,
    error: any
  ) {
    const create = await prisma.class.create({
      data: req.body,
    });
    if (create) {
      res.status(201).json(Response._createDataSuccess(create as never));
    }
    if (req.statusCode === 500) {
      res.status(500).json(Response._createDataFailure(error, 500));
    }
    if (req.statusCode === 404) {
      res.status(404).json(Response._createDataFailure(error, 404));
    }
  }

  async _updateClass(req: NextApiRequest, res: NextApiResponse, error: any) {
    const update = await prisma.class.update({
      where: { id_credential: req.body.where },
      data: req.body.data,
    });
    res.status(200).json(Response._updateDataSuccess(update as never));
    if (req.statusCode === 404) {
      res.status(404).json(Response._updateDataFailureNotFound(error));
    }
    if (req.statusCode === 500) {
      res.status(500).json(Response._updateDataFailureISR(error));
    }
  }
  async _updateParticipantsClass(
    req: NextApiRequest,
    res: NextApiResponse,
    error: any
  ) {
    const update = await prisma.class.update({
      where: { id_credential: req.body.where },
      data: {
        // participants: {
        //   connect: req.body.participants.map((id_user: string) => ({
        //     id: id_user,
        //   })),
        // },
      },
    });
    res.status(200).json(Response._updateDataSuccess(update as never));
    if (req.statusCode === 404) {
      res.status(404).json(Response._updateDataFailureNotFound(error));
    }
    if (req.statusCode === 500) {
      res.status(500).json(Response._updateDataFailureISR(error));
    }
  }

  async _updateMentorsClass(
    req: NextApiRequest,
    res: NextApiResponse,
    error: any
  ) {
    const update = await prisma.class.update({
      where: { id_credential: req.body.where },
      data: {
        // mentors: {
        //   connect: req.body.mentors.map((id_user: any) => ({
        //     id: id_user,
        //   })),
        // },
      },
    } as never);
    res.status(200).json(Response._updateDataSuccess(update as never));
    if (req.statusCode === 404) {
      res.status(404).json(Response._updateDataFailureNotFound(error));
    }
    if (req.statusCode === 500) {
      res.status(500).json(Response._updateDataFailureISR(error));
    }
  }

  async _updateImageClass(
    req: NextApiRequest,
    res: NextApiResponse,
    error: any
  ) {
    const update = await prisma.class.update({
      where: { id_credential: req.body.where },
      data: {
        // Image: {
        //   connect: req.body.ImageClass.map((id_image: string) => ({
        //     id: id_image,
        //   })),
        // },
      },
    });
    res.status(200).json(Response._updateDataSuccess(update as never));
    if (req.statusCode === 404) {
      res.status(404).json(Response._updateDataFailureNotFound(error));
    }
    if (req.statusCode === 500) {
      res.status(500).json(Response._updateDataFailureISR(error));
    }
  }

  async _updateUlasanClass(
    req: NextApiRequest,
    res: NextApiResponse,
    error: any
  ) {
    const update = await prisma.class.update({
      where: { id_credential: req.body.where },
      data: {
        // ulasan: {
        //   connect: req.body.ulasan.map((id_ulasan: string) => ({
        //     id: id_ulasan,
        //   })),
        // },
      },
    });
    res.status(200).json(Response._updateDataSuccess(update as never));
    if (req.statusCode === 404) {
      res.status(404).json(Response._updateDataFailureNotFound(error));
    }
    if (req.statusCode === 500) {
      res.status(500).json(Response._updateDataFailureISR(error));
    }
  }

  async _deleteParticipants(
    req: NextApiRequest,
    res: NextApiResponse,
    error: any
  ) {
    const deleteParticipants = await prisma.class.update({
      where: { id_credential: req.body.where },
      data: {
        // participants: {
        //   disconnect: req.body.participants.map((id_user: string) => ({
        //     id: id_user,
        //   })),
        // },
      },
    });
    res
      .status(200)
      .json(Response._deleteDataSuccess(deleteParticipants as never));
    if (req.statusCode === 404) {
      res.status(404).json(Response._deleteDataFailureNotFound(error));
    }
    if (req.statusCode === 500) {
      res.status(500).json(Response._deleteDataFailureISR(error));
    }
  }

  async _deleteMentorsClass(
    req: NextApiRequest,
    res: NextApiResponse,
    error: any
  ) {
    const deleteMentors = await prisma.class.update({
      where: { id_credential: req.body.where },
      data: {
        // participants: {
        //   disconnect: req.body.participants.map((id_user: string) => ({
        //     id: id_user,
        //   })),
        // },
      },
    });
    res.status(200).json(Response._deleteDataSuccess(deleteMentors as never));
    if (req.statusCode === 404) {
      res.status(404).json(Response._deleteDataFailureNotFound(error));
    }
    if (req.statusCode === 500) {
      res.status(500).json(Response._deleteDataFailureISR(error));
    }
  }

  async _deleteClass(req: NextApiRequest, res: NextApiResponse, error: any) {
    const { id_credential } = req.body;
    const deletedClass = await prisma.class.delete({
      where: { id_credential: id_credential },
    });
    res.status(200).json(Response._deleteDataSuccess(deletedClass as never));
    if (req.statusCode === 404) {
      res.status(404).json(Response._deleteDataFailureNotFound(error));
    }
  }
}
