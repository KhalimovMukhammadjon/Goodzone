const {ProductList} = require("./products_oop")

let productList = new ProductList()

productList.createProduct([
    {
        id: '0021',
        name: 'Macbook Pro',
        price: '1200$',
        picture: 'https://macbook.air/picture.jpg',
        description: 'Buy This Macbook'},
    {
        id: '0022',
        name: 'iPhone 14 Pro',
        price: '1300$',
        picture: 'https://macbook.air/picture.jpg',
        description: 'Buy This iPhone'}
])

console.log(productList.getProductList())





console.log("Id bo`yicha list",productList.getSingleById("0022"))
console.log("Update:",productList.uptadeById("0021","Macbook 14 Pro"))
console.log("Deleted",productList.deleteProductById("0022"))


