import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const result = await prisma.document.findMany();

    return res.status(200).json(result);
  } catch (error) {
    res.status(403).json({ err: "Error has occured while fetching posts" });
  }
}
