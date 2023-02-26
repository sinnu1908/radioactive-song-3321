let footWearProducts=document.getElementById("form");

let url=`https://drab-rose-sturgeon.cyclic.app/footwear`;

let btn=document.getElementById("button");

footWearProducts.addEventListener("submit",(event)=>{
event.preventDefault();

    let obj={
        image:form.image.value,
        name:form.name.value,
        brandName:form.brandName.value,
        totalPrice:form.totalPrice.value,
        discount:form.discount.value,
        shipping:form.shipping.value,
        color:form.color.value,
        size:form.size.value,
        rating:{ 
        rated:form.rated.value,
        rating:form.rating.value
        },
        material:form.material.value,
        designType:form.type.value
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