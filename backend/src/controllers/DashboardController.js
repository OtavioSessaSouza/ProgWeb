const Passeios = require("../models/Passeios");

module.exports = {
    async show(req,res){
        const {usuario_id} = req.headers;
        console.log(req.headers);
        const passeios = await Passeios.find({usuario: usuario_id});
        console.log(passeios);
        return res.json(passeios);
    }
}