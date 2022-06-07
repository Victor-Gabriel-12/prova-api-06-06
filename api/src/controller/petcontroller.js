import { Router } from "express";
import { inserirPet, consultarPet} from '../repository/petRepository.js'
const server = Router();

server.post('/pet', async (req, resp) => {
    try {
        const petInserir = req.body
        const petAdicionado = await inserirPet(petInserir)
        resp.send(petAdicionado)
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
}) 

server.get('/pet', async (req,resp) => {
    try {
        const petConsultar = await consultarPet();
        resp.send(petConsultar);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }

})


export default server;