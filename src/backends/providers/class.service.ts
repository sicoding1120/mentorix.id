import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

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
        
      },
    });
    res.status(200).json(classes as never);
    if (req.statusCode === 404) {
      res.status(404).json(error);
    }
  }
}