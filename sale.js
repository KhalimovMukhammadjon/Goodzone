// CreateOrder
// GetOrderById
// GetOrderList
// DeleteOrder


// Payment Types: cash, click, uzcard, humo, apelsin

// let order = {
//     customer_id: "000123",
//     product_id: "0010",
//     payment_type: "cash",
//     quantity: 5,
//     created_at: Date.now()
// }


const {products} = require("./products")
const {usersStorage} = require("./customers")


let saleStorage = [
    {
        id: "1234",
        customer_id: "000123",
        product_id: "0010",
        payment_type: "cash",
        quantity: 5,
        created_at: new Date()
    },
    {
        id: "1235",
        customer_id: "000124",
        product_id: "0020",
        payment_type: "cash",
        quantity: 1,
        created_at: new Date()
    }
]

function CreateOrder(createOrderBody) {
    for(createBody of createOrderBody){
        saleStorage.push({
            id: createBody.id,
            customer_id: createBody.customer_id,
            product_id: createBody.product_id,
            payment_type: createBody.payment_type,
            quantity: createBody.quantity,
            created_at: createBody.created_at,
        })
    }
    return "Created"
}


var order = {}
var customer = {}
var productss = {}




function GetOrderById(orderId) {


    // find order in saleStorage
    // let order = {}

    for (let i=0;i<saleStorage.length;i++) {
        let sale = saleStorage[i]
        if (sale.id == orderId) {
            order = sale
        } 
    }

    // findCustomer in userStorage
    // let customer = {}

    for (let i=0; i<usersStorage.length; i++) {
        let user = usersStorage[i]
        if (user.id == order.customer_id) {
            customer = user
        }
    }

    // findProduct in productsStorage
    // let productss = {}

    for(let i=0; i<products.length; i++){
        let product = products[i]
        if(product.id == order.product_id){
            productss = product
        }
    }

    let response = {}
    response = {
        customer_info: {
            fullname: customer.fullname,
            cardNumber: customer.cardNumber,
            cardExpDate: customer.cardExpDate,
            address: customer.address,
        },
        product_info: {
            name: productss.name,
            price: productss.price,
            picture: productss.picture,
            description: productss.description,
        },
        quantity: order.quantity,
        created_at: order.created_at,
    }

    return response
}




function GetOrderList(){

    let response = []
    for (let i=0; i<saleStorage.length; i++) {
        let order = saleStorage[i]
        let singleOrder = GetOrderById(order.id)

        response.push(singleOrder)
    }
    return response
}


// DeleteOrder
function DeleteOrder(orderId){
    for( let i=0; i<saleStorage.length; i++){
        let order = saleStorage[i]
        if(order.id == orderId){
            saleStorage.splice()
            return order
        }
    }
    return "Not found"
}


function GetOrderList1(){
    let response = []



    for (let i=0;i<saleStorage.length;i++) {
        let sale = saleStorage[i]
        if (sale.id == saleStorage){
            order = sale
        } 
        response.push(order)
    }
    

    for (let i=0; i<usersStorage.length; i++) {
        let user = usersStorage[i]
        if (user.id == order.customer_id) {
            customer = user
            response.push(customer)
        }
    }
    
    for(let i=0; i<products.length; i++){
        let product = products[i]
        if(product.id == order.product_id ){
            productts = product
            response.push(productss)
        }
    }

    return response
    
    // let singleOrder = saleStorage(order.id)
    // response.push(singleOrder)
    // return response

}

 



// let response = {
//     customer_info: {
//         fullname: customer.fullname,
//         cardNumber: customer.cardNumber,
//         cardExpDate: customer.cardExpDate,
//         address: customer.address,
//     },
//     product_info: {
//         name: productss.name,
//         price: productss.price,
//         picture: productss.picture,
//         description: productss.description,
//     },
//     quantity: order.quantity,
//     created_at: order.created_at,
// }





module.exports = {GetOrderById,GetOrderList,saleStorage,GetOrderList1,DeleteOrder}