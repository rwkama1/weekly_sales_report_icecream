## Description

An ice cream shop wants a weekly sales report. To do this, you must capture in a system all the sales notes made. Each note contains the quantity and flavor of the popsicles sold. The system must print the number of pallets sold of each flavor, their amount and the total sale. Consider that a note can have several different flavored palettes.

## Usage

```Javascript

  let Ice_Cream_Sale=require("./Ice_Cream_Sale").Ice_Cream_Sale;
  let Sale=require("./Sale").Sale;

let arrayicecream=[];

  let ics=new Ice_Cream_Sale(0.30,"Lemon",2);
  let ics2=new Ice_Cream_Sale(0.25,"Chocolate",8);
  let ics3=new Ice_Cream_Sale(0.45,"Strawberry ",9);
  let ics4=new Ice_Cream_Sale(0.20,"Tamarin",10);
  let ics5=new Ice_Cream_Sale(0.35,"Vanilla",5);
    ics.add_quantity(2);
arrayicecream.push(ics);
arrayicecream.push(ics2);
arrayicecream.push(ics3);
arrayicecream.push(ics4);
arrayicecream.push(ics5);

 let sale=new Sale(arrayicecream);

 sale.arraysale.map(
     icream=>{
         console.log(" Flavor: "+icream.flavor+" Quantity: "+icream.quantity+
         " Amount: USD "+icream.amount())
         console.log("                               ")
     }
 )
 let calc=sale.weekly_sales();
console.log("The total sale is: USD "+calc);

```