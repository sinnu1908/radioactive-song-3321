let detail = JSON.parse(localStorage.getItem("charges"))||[];

let mrp = document.getElementById("MRP");

// let goHome = document.getElementById("image")

// goHome.addEventListener("click",()=>{
// window.location.href = "./home.html"
// })

let totalDiscount = document.getElementById("totalDiscount");

let payableAmount  = document.getElementById("payableAmount");

let countEl = document.getElementById("count")

let Cart = JSON.parse(localStorage.getItem("cart"))||[];

console.log(Cart)

let container1 = document.getElementById("container1");



let totalmrp = detail[0].totalmrp;
let totalDis = detail[0].totaldis;
let payAmount = detail[0].payamount;
let ProductCount = detail[0].productCount

let proCount = 0
for(let i=0;i<Cart.length;i++){
    proCount += Cart[i].quantity;
}

MRP.innerHTML = totalmrp;
totalDiscount.innerHTML = totalDis

payableAmount.innerHTML = payAmount;

countEl.innerHTML = proCount;



let form = document.querySelector("form");
let mobNo = document.getElementById("mobNo")
let address = document.querySelector(".address")
let landmark = document.getElementById("landmark")
let pincode = document.getElementById("pincode")

let customerDetail = JSON.parse(localStorage.getItem("cardDetail"))||[];


form.addEventListener("submit",(e)=>{
e.preventDefault();

let obj = {
    name : name.value,
    cardNo : cardNumber.value,
    issueDate : issue.value,
    expiryDate : expiry.value,
}

customerDetail.push(obj);

localStorage.setItem("cardDetail",JSON.stringify(customerDetail))||[];

});


form.addEventListener("submit",()=>{
    
    if(name.value === "" || cardNumber.value === "" || issue.value === "" || expiry.value === ""){
        alert("fill the card details");
    }else{
        alert("Payment Done");
        window.location.href = "./receipt.html"
    }
})


let cart = document.querySelector(".cart")
cart.style.backgroundColor = "green";
address.style.backgroundColor = "green"

let getdata = JSON.parse(localStorage.getItem("cusDetail"))||[];

let deliverAdd = document.getElementById("deliverAdd");

deliverAdd.innerHTML = getdata[getdata.length-1].address;

let change = document.getElementById("change")


change.addEventListener("click",()=>{
    window.location.href = "./address.html"
})

let back = document.getElementById("back");
back.addEventListener("click",()=>{
    window.location.href = "./address.html"
})

