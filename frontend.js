const { CreateProduct, GetProductList, GetSingleProduct, UpdateProductName, DeleteProduct } = require("./products")

//
// FRONTEND
//

CreateProduct(
    [
        {
            name: "Macbook Prod",
            price: "1000$",
            picture: "https://macbook.air/picture.jpg",
            description: "Buy This Macbook"
        },
        {
            name: "Macbook Air",
            price: "1000$",
            picture: "https://macbook.air/picture.jpg",
            description: "Buy This Macbook"
        },
        {
            name: "Iphone Pro",
            price: "1000$",
            picture: "https://macbook.air/picture.jpg",
            description: "Buy This Macbook"
        }
    ]

)


console.log("produktlar royxati", GetProductList())

console.log(GetSingleProduct("00030"))

console.log("update uchun response", UpdateProductName({
    name: "Macbook Prod2",
    id
}))

console.log("Delete", DeleteProduct())

const idd = GetProductList({
    name: "Macbook Prod",
    price: "1000$",
    picture: "https://macbook.air/picture.jpg",
    description: "Buy This Macbook"
})

console.log("produktlar royxati", GetProductList())
