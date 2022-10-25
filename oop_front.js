const {CustomerObject} = require("./customer_oop")

let customerObj = new CustomerObject()

customerObj.createCustomer({name: "John", age: 21})
console.log(customerObj.getCustomerList())
