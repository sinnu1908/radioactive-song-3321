let beautyProductsURL=`http://localhost:3000/beautyProducts`
let maindata=[];
let sortedData=[];
let container=document.getElementById("container");
// local Storage stores values
let cartdata=JSON.parse(localStorage.getItem("cart"))||[];

//page load Event Listener
window.addEventListener("load",()=>{
    renderdata(beautyProductsURL)
})

//api fetch function
//fetch and renderdata function
function renderdata(url){
    fetch(url)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{

        let mydata=data.map((element)=>{
            let  obj={
                image:element.image,
                name:element.name,
                brandName:element.brandName,
                totalPrice:+element.totalPrice,
                discount:+element.discount,
                shipping:element.shipping,
                discountPrice:+element.totalPrice-(element.totalPrice*element.discount)/100,
                id:element.id,
               }
               return obj;
        })
        console.log(mydata);

    let sortedArray=mydata.map((ele)=>{
    return ele;
    })

    sortedData=sortedArray;
        //storing data to globally
        maindata=mydata;
    
        //productCard function call
        productCard(mydata)  
    })
    .catch((error)=>{
    console.log("error")
    })
    }


    // product card creation functionality

function productCard(data){
    container.innerHTML=null;

    data.forEach((element,index)=>{
    
        let div=document.createElement("div");

        let pricediv=document.createElement("div");
            pricediv.setAttribute("id","price");
    
    let imgBtndiv=document.createElement("div");
    imgBtndiv.setAttribute("class","imgBtndiv")
        let image=document.createElement("img");
            image.setAttribute("src",element.image);
            image.setAttribute("class","image");

        let BtnAdd=document.createElement("button");
        BtnAdd.setAttribute("class","BtnAdd");
        BtnAdd.innerText="Add to Cart"
      
        BtnAdd.addEventListener("click",function(){
             
        let AlreadyP=false;
        for(let i=0; i<cartdata.length; i++){
            if(cartdata[i].id==element.id){
                AlreadyP=true;
            }
        }
        if(AlreadyP==true){
             alert("Already Present in the Cart")
        }else{
            cartdata.push(element)
                localStorage.setItem("cart",JSON.stringify(cartdata));
                BtnAdd.innerText="Added to Cart";
                BtnAdd.style.backgroundColor="green"
        }
        })

        imgBtndiv.append(image,BtnAdd)
        
        let name=document.createElement("h2");
            name.setAttribute("class","name");
            name.innerText=element.name;
    
        let brandName=document.createElement("p");
            brandName.setAttribute("class","brandName");
            brandName.innerText=element.brandName;
    
        let totalPrice=document.createElement("p");
            totalPrice.setAttribute("class","totalPrice");
            totalPrice.innerText=`₹ ${element.totalPrice}`;
    
        let discountPrice=document.createElement("p");
            discountPrice.setAttribute("class","discountPrice");
            discountPrice.innerText=`₹ ${(Math.floor(element.totalPrice-element.totalPrice*(element.discount)/100)).toLocaleString("en-US")}`
    
    
        let discount=document.createElement("p");
            discount.setAttribute("class","discount");
            discount.innerText=`${element.discount}% Off`;
    
        let shippingDay=document.createElement("p");
            shippingDay.setAttribute("class","shippingDay");
            shippingDay.innerText=`Ships in ${element.shipping} day`;
    
        pricediv.append(discountPrice,totalPrice);
        div.append(imgBtndiv,name,brandName,pricediv,discount,shippingDay);
        container.append(div); 
    })
    }

     //sort by relevance
     let radionButtonRelev=document.getElementById("relevance");   
     radionButtonRelev.onclick=function(){
    productCard(sortedData)
     
   }

      //Lowest Price First functionality
    let radioButtonHL=document.getElementById("LH");

    radioButtonHL.onclick=function(){
        sort(maindata)

        function sort(data){
            let sortdata=data.sort((a,b)=>{
               return a.discountPrice-b.discountPrice;
            });
            productCard(sortdata)
        }
    }

  
    // Highest Price First functionality
    let radioButtonLH=document.getElementById("HL");
    radioButtonLH.onclick=function(){
        sort(maindata)
        function sort(data){
            let sortdata=data.sort((a,b)=>{
                return b.discountPrice-a.discountPrice;
            });
            productCard(sortdata)
        }
    }

    //Sort by ShippingDay functionality
    let radioButtonShippingDay=document.getElementById("shipping");
    radioButtonShippingDay.onclick=function(){
        sort(maindata)
        function sort(data){
            let sortdata=data.sort((a,b)=>{
               return a.shipping-b.shipping;
            });
            productCard(sortdata)
        }
    }


    var filterArray=[];
    var checkboxes=document.querySelectorAll(".brandName");

    for(var checkbox of checkboxes){
        checkbox.addEventListener("click",function(){
          
            if(this.checked==true){
                maindata.forEach((element)=>{
                    if(element.brandName==this.value){
                        filterArray.push(element)
                    }
                })

            }else{
                filterArray=filterArray.filter((elem)=>{
                    if(elem.brandName!==this.value){
                        return true;
                    }
                })   
            }
            if(filterArray.length==0){
                productCard(maindata);
            }else{
                productCard(filterArray)
            }

        })
    
    }

//selected value in search result--start

// if(null!==value && value!==undefined && value!==""){
//     style.value = value;
//     // style.dispatchEvent(new Event('click'));
//     style.click();
//   }
  //selected value in search result--end
    

    




