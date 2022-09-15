const { CreateProduct, GetProductList, GetSingleProduct } = require("./products")

//
// FRONTEND
//

console.log("produktlar royxati", GetProductList())
console.log("yaratish uchun response", CreateProduct({
    name: "Macbook Prod",
    price: "1000$",
    picture: "https://macbook.air/picture.jpg",
    description: "Buy This Macbook"
}))

console.log("get single product ", GetSingleProduct("0000002"))

console.log("produktlar royxati", GetProductList())