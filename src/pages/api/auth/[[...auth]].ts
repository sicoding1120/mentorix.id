import { userService } from "@/backends/providers/user.service";
import { useAuthRouter } from "@/backends/router/auth";
import { error } from "console";
import type { NextApiRequest, NextApiResponse } from "next";

const user = new userService();

const auth = new useAuthRouter();

export default async function Auth(req: NextApiRequest, res: NextApiResponse) {
  const { query } = req;
  console.log(query.auth?.at(0));
  try {
    if (query.auth?.at(0) === 'register') {
      if (req.method === "POST") {
        await user._createUSerWithoutRelation(req, res, error);
      }
      if (req.method === 'GET') {
        res.status(200).json('hallo world')
      }
      res.status(405).json("bad request");
    }
    if (query.auth?.at(0) === 'login') {
      if(req.method === "POST"){
        await auth._login(req, res, error);
      }
      res.status(405).json("bad request");
    }
    res.status(405).json({massage: "bad request"});
  } catch (err) {
    if (err) throw err;
  }
}
