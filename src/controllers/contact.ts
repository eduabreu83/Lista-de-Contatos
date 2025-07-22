import { RequestHandler } from "express";
import { createContact, deleteContact, getContacts } from "../services/contact";

export const getContactsController:RequestHandler = async (req, res) => {     
    let list = await getContacts();
    res.json({ contato: list });
};

export const createContactsController: RequestHandler = async (req, res) => {
  const {name}= req.body;
  if (!name || name.length < 2) {
    res.json({ error: "Name is required com pelo menos 2 caracteres" });
    return;
  }

  await createContact(name);
  res.status(201).json({ contato: name });
};

export const deleteContactsController: RequestHandler = async (req, res) => {
  const { name } = req.query;
  if (!name) {
    res.status(400).json({ error: "Name is required" });
    return;
  }
  await deleteContact(name as string);
  res.json({contato:name} );
};
