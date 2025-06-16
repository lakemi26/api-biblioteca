import express from "express";
import dotenv from "dotenv";
import livrosRoutes  from "./routes/livros.routes";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/livros", livrosRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})