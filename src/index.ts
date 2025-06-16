//Importar a biblioteca Express
import express, {Request, Response} from "express";

//Criar a aplicação Express
const app = express();

//Criar a rota GET principal
app.get("/", (req:Request, res:Response)=>{
    res.send("Bem-vinda, Lari!")
})

//Iniciar o servidor na porta 8080
app.listen(8080,()=>{
    console.log("Servidor iniciado na porta 8080: http://localhost:8080")
});