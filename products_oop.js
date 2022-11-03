
class ProductList{
    constructor(){
        this.storage = []
    }

    createProduct(createBodyList){
        for(let i=0; i<createBodyList.length; i++){
            this.storage.push(createBodyList[i])
        }
        // this.storage.push(...createCustomerEntity)
    }
    
    getProductList(){
        return this.storage
    }

    getSingleById(singleId){
        for(let i=0; i<this.storage.length; i++){
            let product = this.storage[i]
            if(product.id == singleId){
                return product
            }
        }
        return "Not found"
    }

    uptadeById(Id,name){
        for(let i=0; i<this.storage.length; i++){
            let product = this.storage[i]
            if(product.id == Id){
                product.name = name
                return product
            }
        }
        return "Not found"
    }


    deleteProductById(Id){
        for(let i=0; i<this.storage.length; i++){
            let product = this.storage[i]
            if(product.id == Id){
                this.storage.splice(i,1)
                console.log("Delete Product",product)
                return "Deleted"
            }
        }
        return "Not found"
    }
}

module.exports = { ProductList }
