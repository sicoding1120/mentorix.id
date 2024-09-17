// import { Blog } from "@/backends/interfaces/data";
// import { PrismaClient } from "@prisma/client";
// import { NextApiRequest, NextApiResponse } from "next";

// const prisma = new PrismaClient();

// export default async function Blogs(req: NextApiRequest, res: NextApiResponse) {
//   try {
//     switch (req.method) {
//       case "GET":
//         const users = await prisma.blog.findMany();
//         res.status(200).json(users);
//         if (!users) {
//           res.status(404).json({ message: "No users found" });
//         }
//       case "POST":
//         // await user.Create(req, res)
//         const {
//           title,
//           subTitle,
//           content,
//           author,
//           date,
//           kategori,
//           userId,
//           views,
//         } = req.body;
//         if (!title || !subTitle || !content || !author || !date || !userId) {
//           return;
//         } else {
//           const newBlog = {
//             title: title,
//             subTitle,
//             content,
//             author,
//             date: new Date(date),
//             kategori,
//             userId,
//             views,
//           };
//           const send = await prisma.blog.create({ data: newBlog } as never);
//           res.status(200).json(send);
//         }
//     }
//   } catch (err) {
//     if (err) throw err;
//   }
// }
