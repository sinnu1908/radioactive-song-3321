let danger = document.getElementById("danger");
let dangerContent = document.querySelector("#danger p");

let UserRegister = JSON.parse(localStorage.getItem("userRegister")) || [];
let userRegisterForm = document.getElementById("userRegister");
let message = document.getElementById("message");
userRegisterForm.addEventListener("submit", (event) => {
  //   console.log("ok");
  event.preventDefault();
  let obj = {
    username: userRegisterForm.name.value,
    pNumber: userRegisterForm.number.value,
    email: userRegisterForm.email.value,
    password: userRegisterForm.password.value,
  };
  if (
    userRegisterForm.name.value === "" ||
    userRegisterForm.number.value === "" ||
    userRegisterForm.email.value === "" ||
    userRegisterForm.password.value === ""
  ) {
    // obj.username = userRegisterForm.name.value;
    // obj.pNumber = userRegisterForm.number.value;
    // obj.email = userRegisterForm.email.value;
    // obj.password = userRegisterForm.password.value;
    message.style.display = "block";
    message.innerText = "Please fill empty filed";
  } else {
    //   let flag = false;
    let flag = true;
    UserRegister.forEach((element) => {
      if (obj.email === element.email || obj.pNumber == element.pNumber) {
        //   flag = true;
        flag = false;
      }
    });
    if (flag) {
      // message.style.color = "blue";
      // message.style.fontWeight = "500";
      setURDatatoLS(obj);
      // message.innerText = "Already Registered";
      message.style.display = "block";
      message.style.backgroundColor = "green";
      message.innerText = "Sign Up Successful";
      setTimeout(() => {
        reDirect();
      }, 2000);
    } else {
      // setURDatatoLS(obj);
      message.style.display = "block";
      message.innerText = "Already Registered";
      // message.innerText = "Sign Up Successful";
      // setTimeout(() => {
      //   reDirect();
      // }, 3000);
    }
  }
});

function setURDatatoLS(obj) {
  UserRegister.push(obj);
  localStorage.setItem("userRegister", JSON.stringify(UserRegister));
}

function reDirect() {
  location.replace("signIn.html");
}
