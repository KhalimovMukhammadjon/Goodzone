const {CustomerObject} = require("./customer_oop")

let customerObj = new CustomerObject()

customerObj.createCustomer([            
    {id:'00022',name: "John", age: 21},
    {id:'00023',name: "Ali", age: 19}
])
console.log(customerObj.getCustomerList())



let customerObj1 = new CustomerObject()
customerObj1.getCustomerList()
console.log('List',customerObj1.getSingleById('00022'))



customerObj.getCustomerList()
console.log('DeleteById',customerObj.deleteById('00026'))


// customerObj.getCustomerList()
console.log('ByName',customerObj.getSingleByName("Akbar"))

customerObj.getCustomerList()
console.log('UpdateById',customerObj.uptadeById('00022',"Akmal"))




