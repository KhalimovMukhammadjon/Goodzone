const http = require("node:http")
const { v4 } = require("uuid")
// const {v4} = require("uuid")
// const {products} = require(".//products.js")





let products = [{
    id: '0010',
    name: 'Macbook Pro',
    price: '1100$',
    picture: 'https://macbook.air/picture.jpg',
    description: 'Buy This Macbook'
}]


const server = http.createServer(function(req,res){

    // GET storage

   if(req.method == "GET"){
    res.write(JSON.stringify(products))
    res.statusCode = 200
    res.end()
   } else if (req.method == 'POST') {
    let requestBody = ''

    req.on('data', function (chunk) {
      requestBody += chunk
    })
    req.on("end", ()=>{
        const body = JSON.parse(requestBody)
        products.push(body)
        res.statusCode = 201
        console.log(requestBody)
        const {name,price,picture,description} = JSON.parse(requestBody)
        let newProduct = {
            id: v4(),
            name,
            price,
            picture,
            description
        }
        products.push(newProduct)
        // console.log(newStorage)
        res.end()
    })
    } else if(req.method=="PUT"){
    let requestBody = ""

    req.on("data", function(chunk){
        requestBody += chunk
    })
    req.on("end", ()=>{
        const body = JSON.parse(requestBody)
        for(let i=0; i<products.length; i++){
            if(products[i].id==body.id){
                products[i].name = body.name
                products[i].price = body.price
                products[i].description = body.description
                

                res.statusCode = 200
                res.end()
                return
            }
        }
        res.statusCode=404
        res.end()
    })

   }

    // else if(req.url.match(/\/products\/\w+/) && req.method=="PUT"){
    //     let requestBody = ""

    //     req.on("data", (chunk)=>{
    //         requestBody += chunk
    //     })
    //     req.on("end", ()=>{
    //         const body = JSON.parse(requestBody)
    //         for(let i = 0; i<products.length; i++){
    //             if(products[i].id == body.id){
    //                 products[i].name = body.name
    //                 products[i].price = body.price 

    //                 res.statusCode = 201
    //                 res.end()
    //                 return
    //             }
    //         }
    //     })
    // }
    else if(req.method=="DELETE"){
        let requestBody = ""

        req.on("data", (chunk)=>{
            requestBody+= chunk
        })
        req.on("end", ()=>{
            const body = JSON.parse(requestBody)
            for(let i= 0; i<products.length; i++){
                if(products[i].id==body.id){
                    products.splice(i,1)

                    res.statusCode = 201
                    res.end()
                    return "Deleted"
                }
            }
        })
    }



    
})



const host = "localhost"
const port = 3000

server.listen(port,host, function(){
    console.log(`Server running at ${host}:${port}`)
})