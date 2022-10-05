const {CreateProduct,UpdateProductPrice,UpdateProduct,GetSingleProduct,products,UpdateProductName,DeleteProduct,GetProductByName,GetProductList} = require("./products.js")



// console.log("yaratish uchun response", CreateProduct([
//     {
//     id: '0020',
//     name: "Macbook Pro",
//     price: "1000$",
//     picture: "https://macbook.air/picture.jpg",
//     description: "Buy This Macbook"    
//     },
    
//     {
//     id: '0030',
//     name: 'Iphone 14 Pro',
//     price: '1500$',
//     picture: 'https://macbook.air/picture.jpg',
//     description: 'Buy This Macbook'
//     }
// ]))



console.log("Updated",UpdateProduct)
console.log("produktlar royxati", GetProductList())
// console.log("produktlar royxati", UpdateProductPrice())



// console.log("Get",GetSingleProduct,products.id)
console.log("get single product ", GetSingleProduct(products.name))
console.log("________________")

console.log(UpdateProductName("0020", "Macbook Air 512GB"),products)
console.log("________________")
console.log(UpdateProductPrice('0030', "1020$"))
console.log("________________")
// console.log(DeleteProduct("0030","YYYY"))
console.log("________________")
console.log(GetProductByName("Iphone 14 Pro"))

console.log("________________")
console.log("Deleted",DeleteProduct('00280'))
