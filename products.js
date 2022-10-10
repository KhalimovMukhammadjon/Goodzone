// const prompt = require('prompt-sync')({sigint:true});


let products = [
    {
        id: '0010',
        name: 'Macbook Pro',
        price: '1100$',
        picture: 'https://macbook.air/picture.jpg',
        description: 'Buy This Macbook'
    },
    {
        id: '0020',
        name: 'Macbook Air',
        price: '1050$',
        picture: 'https://macbook.air/picture.jpg',
        description: 'Buy This Macbook'
    },
    {
        id: '0030',
        name: 'Iphone 14 Pro',
        price: '1500$',
        picture: 'https://macbook.air/picture.jpg',
        description: 'Buy This Macbook'
    },
    {
        id: '0040',
        name: 'Samsung S22',
        price: '1040$',
        picture: 'https://macbook.air/picture.jpg',
        description: 'Buy This Phone'
    }
]


function CreateProduct(createBodyList) {
    for (createBody of createBodyList) {
        products.push({
            id: createBody.id,
            name: createBody.name,
            price: createBody.price,
            picture: createBody.picture,
            description: createBody.description,
        })
    }
    return "Created"
}



function UpdateProduct(updateBody) {
    // name:Macbook 13 
    for (let i = 0; i < products.length; i++) {
        let product = products[i]
        if (updateBody.id == productid) {
            product.price = updateBody.price
            return "Updated"
        }
    }
    return "Not Found"
}

// function UpdateProductPrice(updateBody) {
//     // id: 0000010
//     // narxi: "1000$",
//     for (let i = 0; i < products.length; i++) {
//         let product = products[i]
//         if (updateBody.id == product.id) {
//             product.price = updateBody.price
//             return "UPDATED"
//         }
//     }

//     return "NOT_FOUND"
// }

// function UpdateProductName(productId, name){
//     let productIndex = products.findIndex(item => item.id === productId)
//     products[productIndex].name = name;
//     return products
// }



function UpdateProductName(id, name) {
    for (let m = 0; m < products.length; m++) {
        let product = products[m]
        if (product.id == id) {
            console.log(product.id)
            product.name = name
            return "Update"
        }
    }
    return "Not found"
}




function UpdateProductPrice(id, price) {
    for (let m = 0; m < products.length; m++) {
        let product = products[m]
        if (product.id == id) {
            console.log(product.id)
            product.price = price
            return
        }
    }
    return "Not found"
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
    return "Not found"
}


// function DeleteProduct(productId,name){
//     let productIndex = products.findIndex(item => item.id === productId)
//     products[productIndex].name = name;
//     return products
// }

function DeleteProduct(productId) {
    let copyDeletedProduct = {}
    for (let i = 0; i < products.length; i++) {
        if (products[i].id == productId) {
            copyDeletedProduct = products[i]
            products.slice(i, 1)
            return copyDeletedProduct
        }
    }

    return "Not found"
}




// function GetProductByName(productName,name){
//     for (let m=0; m<products.length; m++){
//         let product = products[m]
//         if(product.name == productName){
//             return product
//         }
//     }
//     return "Not found"
// }
function GetProductByName(name) {
    for (let m = 0; m < products.length; m++) {
        let product = products[m]
        if (product.name == name) {
            return product
        }
    }
    return "Not found"
}

function UpdateProductPrice(id, price) {
    for (let m = 0; m < products.length; m++) {
        let product = products[m]
        if (product.id == id) {
            console.log(product.id)
            product.price = price
            return
        }
    }
    return "Not found"
}

module.exports = { CreateProduct, UpdateProductPrice, UpdateProduct, GetSingleProduct, products, UpdateProductName, DeleteProduct, GetProductByName, GetProductList }