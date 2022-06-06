import { con } from './connection.js'

export async function inserirPet(pet){
    const comando = `
             INSERT INTO tb_pet(id_pet, nm_pet)
                        values(?, ?) `;
    const [resposta] = await con.query(comando, [pet.]);
    pet.id_pet = resposta.insertId;
    return pet;
}

export async function cosultarPet(pet){
    const comando = `select  id_pet       id,
                             nm_pet       nome
                    from tb_pet
                    where    id_pet    = ?,
                    and      nm_pet    = ?
                ` 
}

