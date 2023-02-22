let beutyProducts=document.getElementById("form");

let url=`http://localhost:3000/beautyProducts`;

let btn=document.getElementById("button");

beutyProducts.addEventListener("submit",(event)=>{
event.preventDefault();

    let obj={
        image:form.image.value,
        name:form.name.value,
        brandName:form.brandName.value,
        totalPrice:form.totalPrice.value,
        discount:form.discount.value,
        shipping:form.shipping.value,
        quantity:form.quantity.value,
        rating:{ 
        rated:form.rated.value,
        rating:form.rating.value
        },
        sutability:form.suitability.value
    }

    console.log(obj);

    addData(url,obj)

})


function addData(url,obj){
    fetch(url,{
        method:"POST",
        body:JSON.stringify(obj),
        headers:{
            "Content-type":"application/json"
        }
    })
    .then((res)=>{
        console.log(res.ok)
        return res.json();
    })
}



btn.addEventListener("click",()=>{
    console.log("okkk")
    fetchData(url)
})
function fetchData(url){
    fetch(url)
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        console.log(data)
    })
}