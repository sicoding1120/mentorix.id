import { classController } from "@/backends/controllers/class.controller";
import { error } from "console";
import { NextApiRequest, NextApiResponse } from "next";

const classes = new classController()


export default function Images(req: NextApiRequest, res: NextApiResponse) {
    const { query } = req
    console.log(query.category);
    switch (query.category) {
        case 'class':
            switch (req.method) {
                case "GET": 
                    return classes._getClassAllWithRelations(req, res, error);
            }
           
    }

    res.status(200).json({ name: 'John Doe' })
}