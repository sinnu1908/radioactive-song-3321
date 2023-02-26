let detail = JSON.parse(localStorage.getItem("charges"))||[];

    let mrp = document.getElementById("MRP");

// let goHome = document.getElementById("image")

// goHome.addEventListener("click",()=>{
//     window.location.href = "./home.html"
// })

let totalDiscount = document.getElementById("totalDiscount");

let payableAmount  = document.getElementById("payableAmount");

let countEl = document.getElementById("count")

let Cart = JSON.parse(localStorage.getItem("cart"))||[];

let container1 = document.getElementById("container1");

let proCount = 0
for(let i=0;i<Cart.length;i++){
    proCount += Cart[i].quantity;
}

let totalmrp = detail[0].totalmrp;
let totalDis = detail[0].totaldis;
let payAmount = detail[0].payamount;
let ProductCount = detail[0].productCount


MRP.innerHTML = totalmrp;
totalDiscount.innerHTML = totalDis

payableAmount.innerHTML = payAmount;

countEl.innerText = proCount;



let form = document.querySelector("form");

let nameEl = document.getElementById("name")
let mobNo = document.getElementById("mobNo")
let address = document.getElementById("address")
let landmark = document.getElementById("landmark")
let pincode = document.getElementById("pincode")

let customerDetail = JSON.parse(localStorage.getItem("cusDetail"))||[];

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    
    let obj = {
        name : nameEl.value,
        mobNo : mobNo.value,
        address : address.value,
        landmark : landmark.value,
        pincode : pincode.value
    }

    customerDetail.push(obj);

    localStorage.setItem("cusDetail",JSON.stringify(customerDetail))||[];
    
});

let cart = document.querySelector(".cart")
cart.style.backgroundColor = "green";

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    if(nameEl.value === "" || mobNo.value === "" || address.value === "" || pincode.value === ""){
        alert("fill address the details")
    }else{
        alert("address details are saved")
        window.location.href = "./payment.html"
    }   
})

let back = document.getElementById("back");
back.addEventListener("click",()=>{
    window.location.href = "./cartPage.html"
})