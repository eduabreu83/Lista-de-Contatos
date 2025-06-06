import express from "express";
import { readFile, writeFile } from "fs/promises";
const dataSource = '../data/list.txt';
const router = express.Router();


import { Request, Response } from "express";

router.post('/contato', async (req: Request, res: Response) => {
  const { name } = req.body;

  if (typeof name !== 'string' || name.length < 2) {
    return res.json({ error: "Name is required com pelo menos 2 caracteres" });
  }

  let list: string[] = [];
  try{
    const data = await readFile(dataSource, { encoding: 'utf8' });
    list = data.split('\n');
  } catch (err) {}

  list.push(name);
  await writeFile(dataSource, list.join('\n'));

  res.status(201).json({ contato: name });
});

export default router;