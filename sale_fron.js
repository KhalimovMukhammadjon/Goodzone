const {GetOrderById,GetOrderList,saleStorage,GetOrderList1,DeleteOrder} = require("./sale")

console.log("Детали заказов -->", GetOrderById("1235"))
console.log("________________")
console.log("List orderlar ro`yxati", GetOrderList())
// console.log("________________")

console.log("________________")
// console.log("Deleted", DeleteOrder('1235'))

console.log("________________")
console.log("Orderlar ro`yxati 1", GetOrderList1())



