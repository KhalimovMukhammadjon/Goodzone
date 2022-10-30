

class CustomerObject {

    constructor() {
        // initialize new storage...
        this.storage = [{id:'00026',name: "Akbar", age: 17},]
    }

    // write methods for this class...
    createCustomer(createCustomerEntity) {
        this.storage.push(createCustomerEntity)
    }

    getCustomerList() {
        return this.storage
    }

    getSingleById(singleId){
            for(let i=0; i<this.storage.length; i++){
                let customer = this.storage[i]
                if(customer.id == singleId){
                    return customer
                }
            }
            return "Not found"
    }

    getSingleByName(customerName){
        for(let i=0; i<this.storage.length; i++){
            let customer = this.storage[i]
            if(customer.name === customerName){
                return customer
            }
        }
        return "Not found"
}

    deleteById(Id){
        for(let i=0; i<this.storage.length; i++){
            let customer = this.storage[i]
            if(customer.id == Id){
                this.storage.splice(i,1)
                return 'Deleted'
            }
        }
        return 'Not found'
    }

    uptadeById(Id,name){
        for(let i = 0; i<this.storage.length; i++){
            let customer = this.storage[i]
            if(customer.id === Id ){
                customer.name = name
                return customer
            }
        }
        return "Not found"

    }
    
    // getSingleById
    // deleteById
    // UpdateById
}



module.exports = { CustomerObject }
