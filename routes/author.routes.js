import express from "express";
import { PrismaClient } from "@prisma/client";
const router = express.Router();
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  const authors = await prisma.author.findMany({ include: { books: true } });
  res.json(authors);
});

export default router;