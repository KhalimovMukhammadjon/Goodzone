// Create Product
// Update Product
// Get Products List
// Get Single Product
// Delete Product

let products = []


function CreateProduct(createBody) {

    // name: "Macbook Pro",
    // narxi: "1000$",
    // rasmi: "https://macbook_air/rasmi.jpg",
    // description: "Buy Pro Book"

    
    products.push({ 
        id: "000"+Math.floor(Math.random() * 50), // id ozimiz yaratamiz
        name: createBody.name,
        price: createBody.price,
        picture: createBody.picture,
        description: createBody.description
    })

    return "CREATED"
}

function UpdateProduct(updateBody) {
    // id: 0000010
    // narxi: "1000$",
    for (let i = 0; i < products.length; i++) {
        let product = products[i]
        if (updateBody.id == product.id) {
            product.price = updateBody.price
            return "UPDATED"
        }
    }

    return "NOT_FOUND"
}

function GetProductList() {
    return products
}

function GetSingleProduct(productId) {
    for (let m = 0; m < products.length; m++) {
        let product = products[m]

        if (product.id == productId) {
            return product
        }
    }

    return "NOT_FOUND"
}

function DeleteProduct(productId) {
    for (let n=0; n<products.length; n++){
        let product = products[n]

        if(product.id == "MacBook Pro 13"){
            delete CreateProduct.name;
        }
    }
    // home task
}

function UpdateProductName(updateBody) {
    for (let k=0; k<products.length; k++){
        let product = products(k)

        if(product.name=="iPhone 13 Pro"){
            console.log("iPhone 14 Pro")
        }
    }
    // home task
}

function GetProductByName(productName) {
    // home task
}


module.exports = {CreateProduct, GetProductList, GetSingleProduct, UpdateProduct}


