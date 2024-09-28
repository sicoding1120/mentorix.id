import { classService } from "@/backends/providers/class.service";
import { error } from "console";
import { NextApiRequest, NextApiResponse } from "next";

const classes = new classService();

export default async function Class(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "POST":
      await classes._createMateriClass(req,res)
  }
}
