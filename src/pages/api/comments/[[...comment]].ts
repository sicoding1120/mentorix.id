// import { classController } from "@/backends/controllers/class.controller";
// import { PrismaClient } from "@prisma/client";
// import { error } from "console";
// import { NextApiRequest, NextApiResponse } from "next";

// const classes = new classController();
// const prisma = new PrismaClient();

// export default async function Comments(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const { query } = req;
//   switch (query.category) {
//     case "class":
//       switch (req.method) {
//         case "GET":
//           const comments = await prisma.comment.findMany({});
//           res.status(200).json(comments);
//         case "POST":
//           const createComment = await prisma.comment.create({
//             data: {
//               ...req.body,
//               Class: {
//                 connect: {
//                   id_credential: req.body.relation.classId_credential,
//                 },
//               },
//               user: {
//                 connect: {
//                   id: req.body.relation.userId
//                 },
//               },
//             },
//           });
//           res.status(201).json(createComment);
//       }
//   }
// }
