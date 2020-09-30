const express = require("express");
const mongoose = require("mongoose");
const rotas =require("./rotas/routes");
const app = express();
//mongodb+srv://PantanalReservas:Pantanal@babilonia.vozd8.gcp.mongodb.net/PantanalReservasDB?retryWrites=true&w=majority
//mongodb+srv://PantanalReservas:Pantanal@babilonia.vozd8.gcp.mongodb.net/PantanalDB?retryWrites=true&w=majority
mongoose.connect("mongodb+srv://PantanalReservas:Pantanal@babilonia.vozd8.gcp.mongodb.net/PantanalDB?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json()); 
app.use(rotas);

app.listen(3333); 