import express from "express";
import { PrismaClient } from "@prisma/client";
const router = express.Router();
const prisma = new PrismaClient();

router.post("/", async (req, res) => {
  const { title, genre, publicationYear, authorId } = req.body;
  try {
    const book = await prisma.book.create({
      data: { title, genre, publicationYear, authorId }
    });
    res.json(book);
  } catch (error) {
    res.status(400).json({ error: "Failed to create book" });
  }
});

router.get("/", async (req, res) => {
  const books = await prisma.book.findMany({ include: { author: true } });
  res.json(books);
});

export default router;
