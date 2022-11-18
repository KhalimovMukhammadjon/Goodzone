const express = require("express");
const app = express();

app.use(express.json())


let products = [{
    id: 1,
    name: 'Macbook Pro',
    price: '1100$',
    picture: 'https://macbook.air/picture.jpg',
    description: 'Buy This Macbook'
},
{
    id: 2,
    name: 'Iphone 14',
    price: '1340$',
    picture: 'https://macbook.air/picture.jpg',
    description: 'Buy This Iphone'
}]

app.get("/",(req,res)=>{
    res.send("Welcome")
})

app.get("/store/products",(req,res)=>{
    res.send(products)
})

app.get("/store/products/:id",(req,res)=>{
    res.send(products)
})

app.post("/store/products",(req,res)=>{
    if(!req.body.name || req.body.name.length < 3){
        return res.status(404).send("Name is required")
    }
    const product = {
        id:products.length+1,
        name:req.body.name
    }
    products.push(product)
    res.send(product)
})

app.put("/store/products/:id",(req,res)=>{
    const product = products.find(c=>c.id===parseInt(req.params.id))
    if(!product) res.status(404).send("Storage not found")
    const schema = {
        name: Joi.string().min(3).required()
    }

    product.name = req.body.name
    res.send(product)
    return product
})

app.delete("/store/products/:id", (req,res)=>{
    const product = products.find(c => c.id=== parseInt(req.params.id))
    if(!product) res.status(404).send("Not found")

    const index = products.indexOf(product)
    products.splice(index,1)
    res.send(product)
})


const port = process.env.PORT || 8080
app.listen(port, ()=> console.log(`Listening on the ${port}....`))

