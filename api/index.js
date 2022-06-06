import 'dotenv/config'
import petcontroller from './src/controller/petcontroller.js'

import express from 'express'
import cors from 'cors'

const server = express();
server.use(cors());
server.use(express.json());

server.use(petcontroller);

server.listen(process.env.PORT, 
            () => console.log(`API online na porta ${process.env.PORT}`));