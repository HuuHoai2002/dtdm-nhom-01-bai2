import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id, data } = JSON.parse(req.body);
  try {
    const result = await prisma.document.update({
      where: {
        id,
      },
      data,
    });

    return res.status(200).json(result);
  } catch (error) {
    res.status(403).json({ err: "Error has occured while fetching posts" });
  }
}
