import { Router } from "express";
import { inserirPet, cosultarPet} from '../repository/petrepository.js'
const server = Router();

server.post('/pet', async (req, resp) => {
    try {
        const {nome} = req.body;
        const resposta = await (inserirPet(nome));
        resp.send(resposta);
    } catch (err) {
        console.log(err);
    }
}) 



export default server;