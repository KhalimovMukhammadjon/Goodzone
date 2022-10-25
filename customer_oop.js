

class CustomerObject {
    constructor() {
        // initialize new storage...
        this.storage = []
    }

    // write methods for this class...
    createCustomer(createCustomerEntity) {
        this.storage.push(createCustomerEntity)
    }
    getCustomerList() {
        return this.storage
    }
    
    // getSingleById
    // deleteById
    // UpdateById
}

module.exports = { CustomerObject }
