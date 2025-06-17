import express from "express";
import {
  atualizarLivro,
  criarLivro,
  deletarLivro,
  listarLivros,
} from "../controllers/livroController";

const router = express.Router();

router.post("/", criarLivro);
router.get("/", listarLivros);
router.put("/:id", atualizarLivro);
router.delete("/:id", deletarLivro);

export default router;
