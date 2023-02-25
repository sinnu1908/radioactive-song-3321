let detail = JSON.parse(localStorage.getItem("charges"))||[];

let mrp = document.getElementById("MRP");

let goHome = document.getElementById("image")

goHome.addEventListener("click",()=>{
window.location.href = "./home.html"
})

let totalDiscount = document.getElementById("totalDiscount");

let payableAmount  = document.getElementById("payableAmount");

let countEl = document.getElementById("count")

let Cart = JSON.parse(localStorage.getItem("cart"))||[];

countEl.innerText = Cart.length;

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



let cart = document.querySelector(".cart")
cart.style.backgroundColor = "green";

let address = document.querySelector(".address");
address.style.backgroundColor = "green";

let payment = document.querySelector(".payment");
payment.style.backgroundColor = "green"

let getdata = JSON.parse(localStorage.getItem("cusDetail"))||[];

let nameEl = document.getElementById("name");
nameEl.innerHTML = getdata[getdata.length-1].name

let mobileEl = document.getElementById("mobile");
mobileEl.innerHTML = getdata[getdata.length-1].mobNo

let addressEl = document.getElementById("address");
addressEl.innerHTML = getdata[getdata.length-1].address

let pincodeEl = document.getElementById("pincode");
pincodeEl.innerHTML = getdata[getdata.length-1].pincode


let back = document.getElementById("back");
back.addEventListener("click",()=>{
    window.location.href = "./payment.html"
})