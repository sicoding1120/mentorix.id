import { NextApiRequest, NextApiResponse } from "next";
import Class from "./class";
import { classService } from "@/backends/providers/class.service";
import { error } from "console";

const classes = new classService()


export default async function Participants(req:NextApiRequest, res:NextApiResponse) {
    switch (req.method) {
        case "GET":
            res.status(200).json("ok");

        case "POST":
            await classes._updatePesertaClass(req,res,error)
        }
}