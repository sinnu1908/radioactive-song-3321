// ====================== fetching data from API

async function fetchData() {
  try {
    let menDataReq = await fetch("http://localhost:3000/mensWear");
    let menData = await menDataReq.json();
    console.log(menData);
    // cardList(menData);
    renderData(menData);
  } catch (error) {
    console.log(error);
  }
}
fetchData();

// ====================== render data in DOM

let mainCont = document.getElementById("mainCont");

// function cardList(data) {
//     let cardList = `
//     <div>
//     ${
//         data.map((item)=>{
//             return getCard(
//               item.image,
//               item.name,
//               item.brandName,
//               item.totalPrice,
//               item.discount,
//             );
//         }).join("")
//     }
//     </div>
//     `;
//     mainCont.innerHTML = cardList;
// }

function renderData(data) {
  data.forEach((item) => {
    let div = document.createElement("div");
    let divImg = document.createElement("div");
    let img = document.createElement("img");
    let addToCartbtn = document.createElement("button");
    let name = document.createElement("p");
    let brandName = document.createElement("p");
    let totalPrice = document.createElement("h2");
    let discount = document.createElement("p");

    mainCont.append(div);
    divImg.append(img);
    div.append(divImg, addToCartbtn, name, brandName, totalPrice, discount);

    img.src = item.image;
    addToCartbtn.innerText = "Add To Cart";
    name.innerText = item.name;
    brandName.innerText = item.brandName;
    totalPrice.innerText = "₹" + item.totalPrice;
    discount.innerText = item.discount + "% OFF";
  });
}

// ====================== create card

// function getCard(image, name, brandName, totalPrice, discount) {
//   let card = `
//     <div>
//     <div class="image">
//     <img src="${image}" alt="image not found"/>
//     </div>
//     <button>Add To Cart</button>
//     <p><b>${name}</b></p>
//     <p>${brandName}</p>
//     <h2>₹${totalPrice}</h2>
//     <p>${discount}% OFF</p>
//     </div>
//     `;
//   return card;
// }
