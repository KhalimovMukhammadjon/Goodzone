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
    const id = "000"+Math.floor(Math.random() * 50)
    
    products.push({ 
        id, // id ozimiz yaratamiz
        name: createBody.name,
        price: createBody.price,
        picture: createBody.picture,
        description: createBody.description
    })

    return id
}

function UpdateProductPrice(updateBody) {
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
    products = products.filter(item=>item.id !== productId)
    return "Deleted"
     // home task
}

function UpdateProductName(updateBody) {
    // home task
    for (let i = 0; i < products.length; i++) {
        let product = products[i]
        if (updateBody.id == product.id) {
            product.name = updateBody.name
            return "UPDATED"
        }
    }
}

function GetProductByName(productName) {
    // home task
}


module.exports = {CreateProduct, GetProductList, GetSingleProduct,UpdateProductName,DeleteProduct}