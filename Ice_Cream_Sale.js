class Ice_Cream_Sale
{
    constructor(pprrice,pflavor,pquantity)
    {
        this.flavor=pflavor;
        this.price=pprrice;
        this.quantity=pquantity;
    }
    amount=()=>
    {
        let amount=this.price*this.quantity;
        return amount  
    }
    add_quantity=(pquantity)=>
    {
        
        this.quantity=this.quantity+pquantity;
    }
   
}
module.exports={Ice_Cream_Sale}