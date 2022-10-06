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

function CreateOrder(createOrderBody) {}

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
    let product = {}

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
            name: "",
            price: "",
            picture: "",
            description: "",
        },
        quantity: order.quantity,
        created_at: order.created_at,
    }

    return response
}


module.exports = {GetOrderById}