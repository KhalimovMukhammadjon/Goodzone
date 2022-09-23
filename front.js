const { CreateProduct, GetProductList, GetSingleProduct,UpdateProductName } = require("./ecommerce")

//
// FRONTEND
//

console.log("produktlar royxati", GetProductList())
const id = CreateProduct({
    name: "Macbook Prod",
    price: "1000$",
    picture: "https://macbook.air/picture.jpg",
    description: "Buy This Macbook"
})

console.log("update uchun response", UpdateProductName({
    name: "Macbook Prod2",
    id
}))


console.log("get single product ", GetSingleProduct("0000002"))

console.log("produktlar royxati", GetProductList())