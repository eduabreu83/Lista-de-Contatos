
import express from "express";
import { createContactsController, deleteContactsController, getContactsController } from "../controllers/contact";
import { privateRequest } from "../middlewares/auth";

const router = express.Router();

router.post('/contato', privateRequest, createContactsController);
router.get('/contato', getContactsController);
router.delete('/contato', privateRequest, deleteContactsController);
export default router;