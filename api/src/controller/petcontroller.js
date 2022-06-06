import { Router } from "express";
import { inserirPet, cosultarPet} from '../repository/petrepository.js'
const server = Router();

server.post('/pet', async (req, resp) => {
    try {
        const {id, nome} = req.body;
        const resposta = await (inserirPet(id, nome));
        resp.send(resposta);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
}) 


export default server;