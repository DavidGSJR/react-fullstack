const express = require("express");
const app = express();
const mysql = require('mysql2');//isso pegara a versão mais atual do mysql que instalamos


const db = mysql.createPool({
    host:"localhost",
    port:'3307',
    user:"root",
    password:"catolica",
    database:"aula2310",

})

app.use(cors());
app.use(express.json());

app.post("/register",(req, res)=>{
    const {nome} = req.body;
    const {idade} = req.body;
 
    let SQL = "INSERT INTO alunos(nome,idade) VALUES (?,?)";
    
    db.query(SQL,[nome,idade],(err, result)=>{
         console.log(err);
    })
 });

app.listen(3001,()=>{
    console.log("rodando servidor");
});