const  {CreateCustomer,GetUserList,usersStorage,GetUserById,GetUserByName,GetUserByNumber,UpdateUserAdress,UpdateUserNumber,UpdateUser,DeleteUserById} = require("./customers.js")


console.log("Customers",CreateCustomer([
    {
        id: "000123",
        fullname: "John Doe",
        age: 21,
        phoneNumber: "998991234567",
        cardNumber: 8600010120224050,
        cardExpDate: "12/01",
        address: "Tashkent Beshkayragach"
    },
    {
        id: "000124",
        fullname: "Usmonov Akbar",
        age: 19,
        phoneNumber: "998991234555",
        cardNumber: 8600010120224063,
        cardExpDate: "06/26",
        address: "Tashkent Chorsu"
    },
]))


console.log("Customers",GetUserList(19))

console.log("________________")
console.log("Id",GetUserById('000125'))

console.log("________________")
console.log("Name",GetUserByName('H.Kane'))

console.log("________________")
console.log("Phone number",GetUserByNumber('998991234555'))

console.log("________________")
console.log("Adress",UpdateUserAdress('000124','Tashkent Chorsu 54 3'))

console.log("________________")
console.log("Update:Phone number",UpdateUserNumber('000125','998223334554'))

console.log("________________")
console.log("Update",UpdateUser('000125',"44444444",'19'))

console.log("________________")
console.log("Deleted",DeleteUserById('000123333'))




