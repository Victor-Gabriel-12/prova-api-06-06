import { useState } from 'react';
import {cadastrarPet, consultarPet} from '../api/petApi'
import './index.scss'


export default function Index(){
    const [nome, setNome] = useState('');
    const [id, setId] = useState('');

    async function registrarPet(){
        try {
            const r = await cadastrarPet(nome);
            alert ('pet Inserido')
        } catch (err) {
            alert.err('pet não cadastrado')
        }
    }

    async function listarPet(){
        try {
            const re = await consultarPet(nome.id, nome.nome);
            console.log(re)
            alert(re(nome, id));
        } catch (err) {
            alert.err('Errooooo')
        }
    }

    return(
        <main>
            <div>
                <h1>Cadastrar Pet</h1>
                <input type={Text} value={nome} onChange={e => setNome(e.target.value)} /> 
                <br />
                
                <button onClick={registrarPet}> registrar </button>
            </div>
            <br />
            <br />
            <br />
            <br />
                <div>
                <h1> Consultar Pet</h1>
                <button onClick={listarPet}> buscar </button>
                <br />

                
                <h1> Resposta do input No terminal </h1>
                <input type={Text} value={nome} onChange={e => setNome(e.target.value)}  /> 
                <br />
                <input type={Text} value={id} onChange={e => setId(e.target.value)} /> 

            </div>
        
        </main>
    );
}