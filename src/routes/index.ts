import express from "express";

const router = express.Router();

router.post('/contato', (req, res) =>{
  const { name } = req.body;

  if (!name || name.length < 2) {
    return res.json({ error: "Name is required" });
  }

  res.status(201).json({ contato: name  });
});

export default router;

