const mongoose = require("mongoose");

const Reservaschema = new mongoose.Schema({
    data:String,
    confimacao:Boolean,
    usuario:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Usuario'
    },
    passeio : {
        type :mongoose.Schema.Types.ObjectId,
        ref:"Passeio"
    }
});

module.exports = mongoose.model("Reservas", Reservaschema);
