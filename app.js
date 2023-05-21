var express=require('express')
var bodyParser=require('body-parser')


var app=express()
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.send("welcome to my web ")
})

app.post('/read', (req,res)=>{
    var getNum1=parseFloat(req.body.num1)
    var getNum2=parseFloat(req.body.num2)
    var result= getNum1 + getNum2
    res.json( { 'sum':result} )

})
app.post('/add',(req,res)=>{
    var first=parseFloat(req.body.no1)
    var sec=parseFloat(req.body.no2)
    var result=first + sec
    res.json( { 'sum': result

})

})


app.listen(3000,()=>{
    console.log("server started at http://localhost:3000")
})