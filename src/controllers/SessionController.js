const connection = require('../database/connection');
const { create } = require('./OngController');

module.exports ={
    async create(req, resp){
        const {id} = req.body;

        const ong = await connection('ongs')
            .where('id', id)
            .select('name', 'city')
            .first();

        if(!ong) {
            return resp.status(400).json({error: 'Não existe ONG cadastrada com esse ID.'});
        }
        return resp.json(ong);
    }
}