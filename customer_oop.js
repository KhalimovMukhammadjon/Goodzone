

class CustomerObject {

    constructor() {
        // initialize new storage...
        this.storage = []
    }

    // write methods for this class...
    createCustomer(createCustomerEntity) {
        // for (let i=0; i<createCustomerEntity.length; i++){
        //     this.storage.push(createCustomerEntity[i])
            
        // }

        // console.log("without spray ", createCustomerEntity)
        // console.log("with spray ", ...createCustomerEntity)
        this.storage.push(...createCustomerEntity)
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
        console.log("storage",this.storage)
        for(let i=0; i<this.storage.length; i++){
            console.log("for ni ichida")
            let customer = this.storage[i]
            console.log(customer)
            if(customer.name === customerName){
                console.log("if ni ichida")
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
