import { error } from "console";
import { NextApiRequest, NextApiResponse } from "next";
import { classController } from "../../backends/controllers/class.controller";

const classes = new classController();

export default async function Class(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      await classes.getAllDataClassRelation(req, res, Error);
    case "POST":
      await classes.createClassWithoutRelation(req, res, Error);
    case "PUT":
      if (req.body.mentors !== undefined) {
        await classes._updateMentorsClass(req, res, error);
      }
      if (req.body.participants !== undefined) {
        await classes._updateParticipantsClass(req, res, error);
      }
      if (req.body.ulasan !== undefined) {
        await classes._updateUlasanClass(req, res, error);
      }
      if (req.body.image !== undefined) {
        await classes._updateImageClass(req, res, error);
      }
      await classes.updateClass(req, res, error);
  }
}
