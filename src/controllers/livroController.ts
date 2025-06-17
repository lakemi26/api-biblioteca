import {Request,Response} from "express";
import {db} from "../database/firebase";
import {Livro} from "../models/Livro";

const collection = db.collection("livros");

export const criarLivro = async (req: Request, res: Response):Promise<void> =>{
    try{
        const novoLivro: Livro = req.body;
        const docRef = await collection.add(novoLivro);
        res.status(201).json({id:docRef.id, ...novoLivro});
    }catch(error){
        res.status(500).json({errorMessage: "Erro ao criar o livro",error});
    }
};


export const listarLivros = async (req: Request, res:Response):Promise<void> =>{
    try{
        const snapshot = await collection.get();

        const livros: Livro[] = snapshot.docs.map((doc)=> ({
            id:doc.id,
            ...(doc.data() as Omit<Livro,"id">)
        }));

        res.status(200).json(livros);
    }catch (error){
        res.status(500).json({error:"Erro ao listar livros",detalhe:error});
    }
};


export const atualizarLivro = async (req:Request,res:Response):Promise<void> => {
    try{
        const {id} = req.params;
        const dadosAtualizados: Partial<Livro> = req.body;

        const livroRef = collection.doc(id);
        const doc = await livroRef.get();

        if(!doc.exists){
            res.status(404).json({error:"Livro não encontado"});
            return
        }

        await livroRef.update(dadosAtualizados);

        res.status(200).json({mensagem:"Livro atualizado com sucesso!"});
    }catch(error){
        res.status(500).json({error:"Erro ao atualizar livro.", detalhe:error});
    }
};

export const deletarLivro = async (req:Request,res:Response):Promise<void> =>{
    try{
        const {id} = req.params;

        const livroRef = collection.doc(id);
        const doc = await livroRef.get();

        if(!doc.exists){
            res.status(404).json({error:"Livro não encontrado"});
            return
        }

        await livroRef.delete();

        res.status(200).json({mensagem:"Livro deletado com sucesso!"});
    }catch(error){
        res.status(500).json({mensagem:"Erro ao deletar livro", detalhe: error})
    }
}