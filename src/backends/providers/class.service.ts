import { NextApiRequest, NextApiResponse } from "next";
import { RestApi } from "../utils/response";
import prisma from "../utils/prisma";
import { useLogic } from "../logic";

const logic = new useLogic()

export class classService {
  async _getClassAllWithRelations(
    req: NextApiRequest,
    res: NextApiResponse,
    error: any
  ) {
    const classes = await prisma.class.findMany({
      include: {
        Image: true,
        MateriClass: true,
        mentors: true,
        participants: true,
        ulasan: true,
        progressClass: true,
      },
    });
    res.status(200).json(RestApi._getSuccess(classes as never));
    if (req.statusCode === 404) {
      res.status(404).json(RestApi._getFailure(error as never));
    }
    if (req.statusCode === 500) {
      res.status(500).json(RestApi._getFailure(error as never));
    }
  }

  async _createClass(req: NextApiRequest, res: NextApiResponse, error: any) {
    const create = await prisma.class.create(
      {
        data: req.body
      }
    );
    res.status(201).json(RestApi._createDataSuccess(create as never))
  }


  async _updateDataClass(req: NextApiRequest, res: NextApiResponse) {
    const update = await prisma.class.update({
      where: {
        id_credential : req.body.where
      },
      data: req.body.data
    })
    res.status(200).json(RestApi._updateDataSuccess(update as never))
  }

  async _createMateriClass(req: NextApiRequest, res: NextApiResponse) {
    const idMateri = logic.generateUUID();
    const create = await prisma.materiClass.create({
      data: {
        title: req.body.title,
        id: idMateri,
        Classid_credential: req.body.id_credential,
        urlYoutube: req.body.urlYoutube,
        content: req.body.content,
    }
    })
    
    res.status(201).json(RestApi._createDataSuccess(create as never))
  }

  async _updatePesertaClass(req: NextApiRequest, res: NextApiResponse, error: any) {

    const update = await prisma.class.update({
      where: {
        id_credential: req.body.id_class
      },
      data: {
        participants: {
          connect: {
            id: req.body.id_user
          }
        }
      }
    })
    const updateUser = await prisma.user.update({
      where: {
        id: req.body.id_user
      },
      data: {
        enrolledClasses: {
          connect: {
            id_credential: req.body.id_class
          }
        }
      }
    })
    const userProgressCreate = await prisma.progressClass.create({
      data: {
        id: req.body.id_progress,
        progress: 0, 
        user_id: req.body.id_user,
        class_id: req.body.id_class
      }
    })
    res.status(200).json(RestApi._updateDataSuccess(update as never))
  }
} 
