let bill_number = document.querySelector("#bill-no");
let customer_name = document.querySelector("#customer-name");
let finish = document.querySelector("#finsih");
let fruits_list = document.querySelector("#fruits-list");
    let total_amount = document.querySelector("#total-amount");
    let per_price = document.querySelector("#per-price");
    let quantity = document.querySelector("#quantity");


finish.addEventListener("click",()=>{
    
    if(fruits_list=="Apple"){
        document.getElementById("per-price").value = 50
    }
})



