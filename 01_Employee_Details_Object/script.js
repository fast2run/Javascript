const mainDiv=document.querySelector(".grid");

const product = [
    {
        Product_id:1,
        Product_name:"Laptops",
        Product_avail:12,
        Product_price:25000
    },
    {
        Product_id:2,
        Product_name:"Mobiles",
        Product_avail:10,
        Product_price:15000
    },
    {
        Product_id:3,
        Product_name:"airpod",
        Product_avail:12,
        Product_price:25000
    },
    {
        Product_id:4,
        Product_name:"Laptop",
        Product_avail:12,
        Product_price:25000
    },
    {
        Product_id:5,
        Product_name:"Watches",
        Product_avail:5,
        Product_price:1000
    },
    {
        Product_id:6,
        Product_name:"Tap",
        Product_avail:25,
        Product_price:18000
    },
    
]

const result = product.map(function(prod){
    const divis=document.createElement("div");
    divis.classList="dis";
    mainDiv.appendChild(divis);    
    divis.innerHTML=`<div>Product_Id : ${prod.Product_id}</div>
    <div>Product_Name : ${prod.Product_name}</div>
    <div>Product_Availability : ${prod.Product_avail}</div>
    <div>Product_Price : ${prod.Product_price}</div>`   
})


