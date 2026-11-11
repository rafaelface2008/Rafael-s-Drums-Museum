import express from 'express'
const app = express();
app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs')
const PORT = 3000;
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static('public'));
import Bateria from './models/bateria.js'
import Baterista from './models/baterista.js'
import Prato from './models/prato.js';



app.get('/', (req, res) => {
  
    
    res.render("index");
})
app.get('/bateria',async (req, res) => {
    const baterias= await Bateria.find();
    res.render("bateria/lst",{baterias});
})
app.get('/bateria/add', (req, res) => {
    res.render("bateria/add");
})
app.post('/bateria/add', async (req, res) => {
 const {nome,marca,cor,madeira,anoFeito,descricao,preco}=req.body
 await Bateria.create({nome,marca,cor,madeira,anoFeito,descricao,preco})
 res.render("bateria/add"); 
 })
 app.get('/bateria/del/:id',async (req, res) => {
    await Bateria.findByIdAndDelete(req.params.id)
    const baterias= await Bateria.find();
    res.render("bateria/lst",{baterias});
})
app.get('/bateria/upd/:id', async (req, res) => {
 const bateria = await Bateria.findById(req.params.id);
 res.render("bateria/upd",{bateria})
})
app.post('/bateria/upd/:id', async (req, res) => {
    const {id,nome,marca,cor,madeira,anoFeito,descricao,preco}=req.body 
    await Bateria.findByIdAndUpdate(id,{nome,marca,cor,madeira,anoFeito,descricao,preco});
    const baterias = await Bateria.find();
 res.render("bateria/lst",{baterias})
})
app.get('/baterista',async (req, res) => {
    const bateristas= await Baterista.find();
    res.render("baterista/lst",{bateristas});
})
app.get('/baterista/add', (req, res) => {
    res.render("baterista/add");
})
app.post('/baterista/add', async (req, res) => {
 const {nome,idade,bateria,baqueta,prato,descricao}=req.body
 await Baterista.create({nome,idade,bateria,baqueta,prato,descricao})
 res.render("baterista/add"); 
 })
 app.get('/baterista/del/:id',async (req, res) => {
    await Baterista.findByIdAndDelete(req.params.id)
    const bateristas= await Baterista.find();
    res.render("baterista/lst",{bateristas});
})
app.get('/baterista/upd/:id', async (req, res) => {
 const baterista = await Baterista.findById(req.params.id);
 res.render("baterista/upd",{baterista})
})
app.post('/baterista/upd/:id', async (req, res) => {
    const {id,nome,idade,bateria,baqueta,prato,descricao}=req.body 
    await Baterista.findByIdAndUpdate(id,{nome,idade,bateria,baqueta,prato,descricao});
    const bateristas = await Baterista.find();
 res.render("baterista/lst",{bateristas})
})
app.get('/prato',async (req, res) => {
    const pratos= await Prato.find();
    res.render("prato/lst",{pratos});
})
app.get('/prato/add', (req, res) => {
    res.render("prato/add");
})
app.post('/prato/add', async (req, res) => {
 const {marca,serie,liga,tipo,descricao,preco}=req.body
 await Prato.create({marca,serie,liga,tipo,descricao,preco})
 res.render("prato/add"); 
 })
 app.get('/prato/del/:id',async (req, res) => {
    await Prato.findByIdAndDelete(req.params.id)
    const pratos= await Prato.find();
    res.render("prato/lst",{pratos});
})
app.get('/prato/upd/:id', async (req, res) => {
 const prato = await Prato.findById(req.params.id);
 res.render("prato/upd",{prato})
})
app.post('/prato/upd/:id', async (req, res) => {
    const {id,marca,serie,liga,tipo,descricao,preco}=req.body 
    await Prato.findByIdAndUpdate(id,{marca,serie,liga,tipo,descricao,preco});
    const pratos = await Prato.find();
 res.render("prato/lst",{pratos})
})
app.listen(PORT, () => {
    console.log(`servidor rodando em http://localhost:${PORT}`);
});
