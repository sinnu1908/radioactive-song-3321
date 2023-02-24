

// let goHome = document.getElementById("image")

//     goHome.addEventListener("click",()=>{
//         window.location.href = "./home.html"
//     })

let Cart = JSON.parse(localStorage.getItem("cart"))||[];
// console.log(Cart)

let totalDiscount = document.getElementById("totalDiscount");

let payableAmount  = document.getElementById("payableAmount");

let countEl = document.getElementById("count")

let mainCont = document.getElementById("main-cart");
let container1 = document.getElementById("container1");
let image = document.getElementById("image");
let description = document.getElementById("desc");
let removeBtn = document.getElementById("removeBtn");
let head2 = document.querySelector(".head2")

DisplayData(Cart)

function DisplayData(data){
    container1.innerHTML = "";
    data.forEach((element,ind)=>{

        let imgDiv = document.createElement("div");
        let img = document.createElement("img");
        imgDiv.classList.add("firstDiv")
        img.setAttribute("src",element.image)

        let descDiv = document.createElement("div");
        descDiv.classList.add("middleDiv")

        let desc = document.createElement("h4")
        desc.textContent = element.name;
        
        let price = document.createElement("h2");
        let disPrice = element.discountPrice.toFixed(0);
        price.classList.add("orangePrice")
        
        let discount = document.createElement("h4")
        discount.textContent = `${element.discount}% Off`;
        discount.classList.add("greenDiscount")

        let increment = document.createElement("button");
        increment.innerText = "+";
        increment.setAttribute("class","incrementBtn");

        let quantity = document.createElement("span");
        quantity.classList.add("quantity")
        quantity.innerText = element.quantity

        let decrement = document.createElement("button");
        decrement.innerText = "-";
        decrement.setAttribute("class","decrementBtn");

        let removeDiv = document.createElement("div");
        removeDiv.classList.add("lastDiv")

        let remove = document.createElement("button");
        remove.innerText = "Remove"
        remove.setAttribute("class","remBtn");

        remove.addEventListener("click", () => {
          Cart=Cart.filter((ele)=>{
            return ele.id !== element.id
          })
        localStorage.setItem("cart",JSON.stringify(Cart))
        window.location.reload()
        DisplayData(Cart)
    });


    increment.addEventListener("click", () => {
      ele=element.quantity++;
      localStorage.setItem("cart",JSON.stringify(Cart))
      DisplayData(Cart)
    });
    
    decrement.addEventListener("click", () => {
        if(element.quantity>1){
          ele=element.quantity--
        localStorage.setItem("cart",JSON.stringify(Cart))
        DisplayData(Cart)
        }
    });

        price.textContent = (element.quantity*Number(disPrice))
    
        imgDiv.append(img);
        descDiv.append(desc,price,discount,increment,quantity,decrement)
        removeDiv.append(remove);
        
        container1.append(imgDiv,descDiv,removeDiv)
    });
    
    let sum=0
    let dis;
    let sum1 = 0;
    let discountSum = 0;
    let numberOfPro = 0;
    let discount;

  for(let i=0;i<Cart.length;i++){
    numberOfPro += Cart[i].quantity 
    sum+=Number(Cart[i].discountPrice)*Number(Cart[i].quantity);
    discount = (Number(Cart[i].totalPrice)-Number(Cart[i].discountPrice))*Number(Cart[i].quantity)
    discountSum += Math.ceil(discount);
    // console.log(discountSum)
    totalDiscount.innerHTML = `-₹${discountSum}`
    sum1 += Number(Cart[i].totalPrice)*Number(Cart[i].quantity)
  }
  console.log(discountSum)
  

   total.innerHTML = `₹${sum.toFixed(0)}`;
   
   MRP.innerHTML = `₹${sum1.toFixed(0)}`;

   payableAmount.innerHTML = `₹${sum.toFixed(0)}`;

    let detail = []
    let obj = {
      totalmrp : `₹${sum1}`,
      totaldis : `-₹${discountSum}`,
      payamount : `₹${sum}`
    }
    detail.push(obj);
    localStorage.setItem("charges",JSON.stringify(detail))

    // for(let i=0;i<Cart.length;i++){
    //   numberOfPro += Cart[i].quantity 
    // }
    countEl.innerText = numberOfPro

}



let proceedToPay = document.getElementById("proceedToPay");

proceedToPay.addEventListener("click",()=>{
    window.location.href = "./address.html"
});

// let back = document.getElementById("back");
// back.addEventListener("click",()=>{
//     window.location.href = "./home.html"
// })