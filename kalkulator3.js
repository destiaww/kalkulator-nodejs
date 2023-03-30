const express = require("express") 
const bodyParser = require("body-parser") 
const cors = require("cors") 
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
const PORT = 9900

app.listen(PORT, () => {
    console.log(`Server run on port ${PORT}`)
}) 
app.post("/kalkulator", (req,res) => { 
    let bil1 = Number(req.body.bil1)
    let bil2 = Number(req.body.bil2)
    let penjumlahan=bil1+bil2
    let pengurangan=bil1-bil2
    let perkalian=bil1*bil2
    let pembagian=bil1/bil2

    let response = {
        bil1: bil1,
        bil2: bil2,
        penjumlahan: penjumlahan,
        pengurangan: pengurangan,
        perkalian: perkalian,
        pembagian: pembagian
        }
        res.json(response)
})

app.post("/perulangan", (req,res) =>{;
    let awal=Number(req.body.awal)
    let akhir=Number(req.body.akhir)
    let kelipatan=Number(req.body.kelipatan)

    let i
    let hasil=new Array()
    let total=0;

    for (i=awal;i<=akhir;i+=kelipatan){
        hasil.push(i)
        total +=i
    }

    let response={
        hasil,
        total : total 
    }
    res.json(response)
 })   


    app.post("/penjumlahanArray", (req, res)=>{
        let MatrixA=[[1,3],[4,15]];
    
        let MatrixB=[[7,33],[5,6]];
    
        let hasil=new Array()
        let i
        let j 
        
        for (i=0; i<2;i++){
            for (j=0; j<2;j++){
                hasil.push(MatrixA[i][j]+MatrixB[i][j])
            }
        }
    
    
    
    
        let response = {
        MatrixA:MatrixA,
        MatrixB:MatrixB,
        penjumlahan:hasil
        }
        res.json(response)
    })