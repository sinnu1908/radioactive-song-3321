let message = document.getElementById("message");
let messageContent = document.querySelector("#message p");

let UserRegister = JSON.parse(localStorage.getItem("userRegister")) || [];
let loginForm = document.getElementById("loginForm");
// let email=document.getElementById("email");
// let pass=document.getElementById("password");
// let SignInBtn=document.getElementById("signInBtn");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let flag = false;
  UserRegister.forEach((element) => {
    if (
      (loginForm.email.value == element.email ||
        loginForm.email.value == element.pNumber) &&
      loginForm.password.value == element.password &&
      loginForm.email.value != "" &&
      loginForm.password.value != ""
    ) {
      flag = true;
    }
  });
  if (flag == true) {
    // alert("login Success");
    message.style.display = "block";
    message.style.backgroundColor = "green";
    messageContent.innerText = "Signin Successful";
    location.replace("index.html");
  } else {
    // alert("Invalid")
    message.style.display = "block";
    messageContent.innerText = "Incorrect Credentials";
  }
});
// function SignIn(data){
//     let flag=false;
//     data.forEach((element)=>{
//         if((email.value===element.email||email.value===element.pNumber) && pass.value===element.password){
//             flag=true;
//         }
//     })
//    if(flag==true){

//    }else{
//     alert("Invalid Credentials")
//    }
// }
