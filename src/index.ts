import path from "node:path";
// importando e rodadndo o express
import express from "express";
// conexao com o mongodb
import mongoose from "mongoose";

import { router } from "./router";

mongoose.connect("mongodb://localhost:27017")
    .then(() => {
        // se logar com o banco roda o API.
        const app = express();
        // saida para o navegador
        const port = 3001;
        //
        app.use("/uploads", express.static( path.resolve(__dirname, "..", "uploads")));
        // manipulando um json
        app.use(express.json());
        // chamando o arquivo router, desta mesma pasta.
        app.use(router);

        app.listen(port, () => {
            console.log(`Conectado com SUCESSO, servidor rodando no http://localhost:${port}`);
        });
    })
    .catch(() => console.log("algo deu errado"));


// rotas:


