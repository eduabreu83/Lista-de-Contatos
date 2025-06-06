import express from "express";
import { readFile, writeFile } from "fs/promises";

const dataSource = require('../data/list.txt');
const router = express.Router();

router.post('/contato',async (req, res) => {
  const { name } = req.body;

  if (!name || name.length < 2) {
    return res.json({ error: "Name is required com pelo menos 2 caracteres" });
  }

  let list: string[] = [];

  try {
    const data = await readFile(dataSource, { encoding: 'utf8' });
    list = data.split('\n');
  } catch (err) {
    // Handle file not found or other errors if needed
  }
  list.push(name);
  await writeFile(dataSource, list.join('\n'), { encoding: 'utf8' });
  res.status(201).json({ contato: name });
});

export default router;