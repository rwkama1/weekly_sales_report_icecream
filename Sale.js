class Sale
{
    constructor(parraysale)
    {
        this.arraysale=parraysale;
    }
    weekly_sales=()=>
    {
        let total=0;
        this.arraysale.map(
            sale=>{
                total=total+sale.amount();

            }
        )
        return total;
    }
   
}
module.exports={Sale}