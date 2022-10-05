// CreateCustomer
// GetUserById
// GetUserList
// UpdateUserById
// DeleteUserById

// let userObject = {
//     fullname: "John Doe",
//     age: 19,
//     phoneNumber: "998991234567",
//     cardNumber: 8600010120224050,
//     cardExpDate: "12/01",
//     address: "Tashkent Beshkayragach"
// }

let usersStorage = [
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
    {
        id: "000125",
        fullname: "H.Kane",
        age: 24,
        phoneNumber: "998991234541",
        cardNumber: 8600010120224075,
        cardExpDate: "09/25",
        address: "Tashkent Chilonzor"
    }
]

function CreateCustomer(createUserBody) {
    
}


function GetUserList(){
    return usersStorage
}


function GetUserById(userId) {
    for(i=0;i<usersStorage.length; i++){
        let user = usersStorage[i]
        if(user.id == userId){
            return user
        }
    }
    return "Not found"
}


function GetUserByName(userName){
    for (let i=0; i<usersStorage.length; i++){
        let user = usersStorage[i]
        if(user.fullname == userName){
            return user
        }
    }
    return "Not found"
}


function GetUserByNumber(userPhoneNumber){
    for(i=0;i<usersStorage.length;i++){
        let user = usersStorage[i]
        if(user.phoneNumber == userPhoneNumber){
            return user
        }
    }
    return "Not found"
}

function UpdateUserAdress(id, address) {
    for(let i=0; i<usersStorage.length; i++){
        let user = usersStorage[i]
        if(user.id == id){
            user.address = address
            return user
        }
    }
    return "Not found"
}


function UpdateUserNumber(id,phoneNumber){
    for(let i=0; i<usersStorage.length; i++){
        let user = usersStorage[i]
        if(user.id == id){
            user.phoneNumber = phoneNumber
            return user
        }
    }
    return "Not found"
}

// function UpdateUser(id,phoneNumber,age){
//     for(let i=0; i<usersStorage.length; i++){
//         let user = usersStorage[i]
//         if(user.id == id){
//             user.phoneNumber = phoneNumber
//             user.age = age
//             return user
//         }
//     }
//     return "Not found"
// }

function UpdateUser(id,phoneNumber,age){
    for(let i=0; i<usersStorage.length; i++){
        let user = usersStorage[i]
        if(user.id == id){
            user.phoneNumber = phoneNumber
            user.age = age
            return user
        }
    }
    return "Not found"
}


function DeleteUserById(userId) {
    for(i=0;i<usersStorage.length;i++){
        let user = usersStorage[i]
        if(user.id = userId){
            usersStorage.splice(i,1)
        }
    }
    return "Deleted"
}


module.exports = {GetUserList,usersStorage,GetUserById,GetUserByName,GetUserByNumber,UpdateUserAdress,UpdateUserNumber,UpdateUser,DeleteUserById}