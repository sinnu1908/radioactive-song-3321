let MensProductUrl=`https://drab-rose-sturgeon.cyclic.app/mensWear/`
let maindata=[];
let sortedData=[];
let container=document.getElementById("container");
// local Storage stores values
let cartdata=JSON.parse(localStorage.getItem("cart"))||[];

//page load Event Listener
window.addEventListener("load",()=>{
    renderdata(MensProductUrl)
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
            cartdata.push({...element,quantity:1})
                localStorage.setItem("cart",JSON.stringify(cartdata));
                BtnAdd.innerText="Added to Cart";
                BtnAdd.style.backgroundColor="green"
        }
        })

        imgBtndiv.append(image,BtnAdd)
        
        let name=document.createElement("h2");
            name.setAttribute("class","name");
            if(element.name.length>45){
                name.innerText=`${element.name.substring(0,45)}...`;
            }else{
                name.innerText=element.name;
            }
           
    
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

//filter functionality

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

        }
        else
        {
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

let discountArray=[];
let discountLessThanTen=document.getElementById("discountlessthanTen");

let dtArray=[];
discountLessThanTen.addEventListener("click",function(){

    if(this.checked==true){
         
        if(filterArray.length==0){
           maindata.forEach((element)=>{
            if(element.discount<10){
             dtArray.push(element)
            }
           })
        }else if(filterArray.length>0){
            filterArray.forEach((elem)=>{
                if(elem.discount<10){
                    dtArray.push(elem)
                }
            })
        }
        console.log(dtArray)
    }else{
        dtArray=dtArray.filter((item)=>{
            if(item.discount<10){
                return false;
            }else{
                return true;
            }
        })
    }
console.log(dtArray)
    if(filterArray.length==0 && dtArray.length==0){
        productCard(maindata)
    }else if(dtArray.length==0){
        productCard(filterArray)
    }else{
        productCard(dtArray)
    }
})

//10-30% discount
let discountTentoThirty=document.getElementById("discountTentoThirty");

discountTentoThirty.addEventListener("click",function(){
console.log("okk")
    if(this.checked==true){
         
        if(filterArray.length==0){
           maindata.forEach((element)=>{
            if(element.discount>10 && element.discount<=30){
             dtArray.push(element)
            }
           })
        }else if(filterArray.length>0){
            filterArray.forEach((elem)=>{
                if(elem.discount>10 && elem.discount<=30){
                    dtArray.push(elem)
                }
            })
        }
    }else{
        dtArray=dtArray.filter((item)=>{
            if(item.discount>10 && item.discount<=30){
                return false;
            }else{
                return true;
            }
        })
    }

    if(filterArray.length==0 && dtArray.length==0){
        productCard(maindata)
    }else if(dtArray.length==0){
        productCard(filterArray)
    }else{
        productCard(dtArray)
    }
})

//30-50% discount
let discountThirtyOnetoFifty=document.getElementById("discountThirtyOnetoFifty");

discountThirtyOnetoFifty.addEventListener("click",function(){
    console.log("okk")
        if(this.checked==true){
             
            if(filterArray.length==0){
               maindata.forEach((element)=>{
                if(element.discount>30 && element.discount<=50){
                 dtArray.push(element)
                }
               })
            }else if(filterArray.length>0){
                filterArray.forEach((elem)=>{
                    if(elem.discount>30 && elem.discount<=50){
                        dtArray.push(elem)
                    }
                })
            }
        }else{
            dtArray=dtArray.filter((item)=>{
                if(item.discount>30 && item.discount<=50){
                    return false;
                }else{
                    return true;
                }
            })
        }
    
        if(filterArray.length==0 && dtArray.length==0){
            productCard(maindata)
        }else if(dtArray.length==0){
            productCard(filterArray)
        }else{
            productCard(dtArray)
        }
    })
    
    let discountMorethanFifty=document.getElementById("discountMorethanFifty");

    discountMorethanFifty.addEventListener("click",function(){
    console.log("okk")
        if(this.checked==true){
             
            if(filterArray.length==0){
               maindata.forEach((element)=>{
                if(element.discount>50){
                 dtArray.push(element)
                }
               })
            }else if(filterArray.length>0){
                filterArray.forEach((elem)=>{
                    if(elem.discount>50){
                        dtArray.push(elem)
                    }
                })
            }
        }else{
            dtArray=dtArray.filter((item)=>{
                if(item.discount>50){
                    return false;
                }else{
                    return true;
                }
            })
        }
    
        if(filterArray.length==0 && dtArray.length==0){
            productCard(maindata)
        }else if(dtArray.length==0){
            productCard(filterArray)
        }else{
            productCard(dtArray)
        }
    })

// SEARCH FUNCTIONALITY

let searchInpt=document.getElementById("searchInpt");
let searchBtn=document.getElementById("serachBtn");

// searchBtn.addEventListener("click",()=>{
//     console.log(searchInpt.value)
// })

searchInpt.addEventListener("input",()=>{
    
let newData=maindata.filter((elem)=>{
    return elem.name.toLowerCase().includes(searchInpt.value.toLowerCase());
})
productCard(newData)
})
