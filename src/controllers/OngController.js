
const crypto = require('crypto');

const connection = require('../database/connection');


module.exports ={
    async index(req, resp) {
        const ongs = await connection('ongs').select('*');
    
        return resp.json(ongs);
    },



    async create(req, resp){
        const {name, email, city, whatsapp, uf} = req.body;
        const id=crypto.randomBytes(2).toString('HEX');
    
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        });
    
        return resp.json({id});
    }
};