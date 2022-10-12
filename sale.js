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

function GetOrderById(orderId) {
    // console.log(products)
    // console.log(usersStorage)

    // find order in saleStorage
    let order = {}

    for (let i=0;i<saleStorage.length;i++) {
        let sale = saleStorage[i]
        if (sale.id == orderId) {
            order = sale
        } 
    }

    // findCustomer in userStorage
    let customer = {}

    for (let i=0; i<usersStorage.length; i++) {
        let user = usersStorage[i]
        if (user.id == order.customer_id) {
            customer = user
        }
    }

    // findProduct in productsStorage
    let productss = {}

    for(let i=0; i<products.length; i++){
        let product = products[i]
        if(product.id == order.product_id){
            productss = product
        }
    }
    // 
    // KODNI YOZING
    // 

    let response = {
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



// GetOrderList

// function GetOrderList(){
//     // [
//     //     {
//     //         customer_info: {
//     //             fullname: 'Usmonov Akbar',
//     //             cardNumber: 8600010120224063,
//     //             cardExpDate: '06/26',
//     //             address: 'Tashkent Chorsu'
//     //         },
//     //         product_info: {
//     //             name: 'Macbook Air',
//     //             price: '1050$',
//     //             picture: 'https://macbook.air/picture.jpg',
//     //             description: 'Buy This Macbook'
//     //         },
//     //         quantity: 1,
//     //         created_at: 2022 - 10 - 07T10: 31: 10.618Z
//     //     },
//     //     {
//     //         customer_info: {
//     //             fullname: 'Usmonov Akbar',
//     //             cardNumber: 8600010120224063,
//     //             cardExpDate: '06/26',
//     //             address: 'Tashkent Chorsu'
//     //         },
//     //         product_info: {
//     //             name: 'Macbook Air',
//     //             price: '1050$',
//     //             picture: 'https://macbook.air/picture.jpg',
//     //             description: 'Buy This Macbook'
//     //         },
//     //         quantity: 1,
//     //         created_at: 2022 - 10 - 07T10: 31: 10.618Z
//     //     },
//     //     {
//     //         customer_info: {
//     //             fullname: 'Usmonov Akbar',
//     //             cardNumber: 8600010120224063,
//     //             cardExpDate: '06/26',
//     //             address: 'Tashkent Chorsu'
//     //         },
//     //         product_info: {
//     //             name: 'Macbook Air',
//     //             price: '1050$',
//     //             picture: 'https://macbook.air/picture.jpg',
//     //             description: 'Buy This Macbook'
//     //         },
//     //         quantity: 1,
//     //         created_at: 2022 - 10 - 07T10: 31: 10.618Z
//     //     }
//     //      
//     // ]


// //     let response1 = {
// //         customer_info:{
// //             id: "000123",
// //             fullname: "John Doe",
// //             age: 21,
// //             phoneNumber: "998991234567",
// //             cardNumber: 8600010120224050,
// //             cardExpDate: "12/01",
// //             address: "Tashkent Beshkayragach"
// //         },

// //     }
// //     return 
//  }

function GetOrderList(){

    let response = []
    for (let i=0; i<saleStorage.length; i++) {
        let order = saleStorage[i]
        let singleOrder = GetOrderById(order.id)

        response.push(singleOrder)
    }
    return response
}

// nimaga let customerr = GetOrderById(order.id)
// qib ketgansiz?
// GetOrderById() orderni qaytaradi customerni emas
// xato bu
function GetOrderList1(){
    let response = []
    for(let i=0; i<saleStorage.length; i++){
        let order = saleStorage[i]
        let customerr = GetOrderById(order.id)
        
        response.push("Customer info",customerr.customer_info)
        response.push("Product info",customerr.product_info)
    }
    return response
}

    // let response = []
    // for (let i=0; i<saleStorage.length; i++) {
    //     let order = saleStorage[i]
    //     // let singleOrder = GetOrderById(order.id)

    //     // order.customer_id -> customer_info
    //     // order.product_id -> product_info

    //     response.push(singleOrder)
    // }



    // let order = {}
    // for(let i=0;i<saleStorage.length; i++){
    //     let sale = saleStorage[i]
    //     if(sale.id == orderList){
    //         order = sale
    //     }
    // }




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

module.exports = {GetOrderById,GetOrderList,saleStorage,GetOrderList1,DeleteOrder}