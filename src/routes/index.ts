import express from "express";
import { addContact, deleteContact, getContacts } from "../services/contacts";
const router = express.Router();


router.post('/contato', async (req, res) => {
  const {name}= req.body;
  if (!name || name.length < 2) {
    return res.json({ error: "Name is required com pelo menos 2 caracteres" });
  }

  await addContact(name);
  res.status(201).json({ contato: name });
});

router.get('/contato', async (req, res) => {
  let list = await getContacts();
  res.json({ contato: list });
});

router.delete('/contato', async (req, res) => {
  const { name } = req.query;
  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }
  await deleteContact(name as string);

});

export default router;