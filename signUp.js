let UserRegister=JSON.parse(localStorage.getItem("userRegister"))||[];
let userRegisterForm=document.getElementById("userRegister");
let message=document.getElementById("message")
userRegisterForm.addEventListener("submit",(event)=>{
    console.log("ockk")
    event.preventDefault();
    let obj={
        name:userRegisterForm.name.value,
        pNumber:userRegisterForm.number.value,
        email:userRegisterForm.email.value,
        password:userRegisterForm.password.value
    }

let flag=false;
UserRegister.forEach((element)=>{
    if((obj.email===element.email || obj.pNumber==element.pNumber)){
        flag=true;
    }
})
if(flag==true){
   message.style.color="blue";
   message.style.fontWeight="500";
    message.innerText="Already Registered.Please Sign in";
    setURDatatoLS(obj);
    message.innerText="SignUp Successfull.Please Sign in";
    setTimeout(()=>{
reDirect();
    },2000);
}else{
    setURDatatoLS(obj);
    message.innerText="SignUp Successfull.Please Sign in";
    setTimeout(()=>{
reDirect();
    },3000);
}
 
})


function setURDatatoLS(obj){
    UserRegister.push(obj);
    localStorage.setItem("userRegister",JSON.stringify(UserRegister))
}

function reDirect(){
    location.replace("signIn.html")
}