// alert()

console.log("Login functionality comming");
// step-1 = ID k dorchi getElementById diye 
document.getElementById("login-btn").addEventListener("click", function (event) {
  event.preventDefault();
  const acountNumber=document.getElementById("Acount-number").value;
  const pin =document.getElementById("pin").value;
  if(acountNumber.length===11){
    if(pin.length === 4){
      
    }
  }
  else{
    console.log("need valid acount number")
  }
});



// //1- get the mobile number input
//   const numberInput = document.getElementById("input-number");
//   const contactNumber = numberInput.value;
//   console.log(contactNumber);

//   //2- get the pin input
//   const inputPin = document.getElementById("input-pin");
//   const pin = inputPin.value;
//   console.log(pin);
//   //3- match pin & mobile number
//   if (contactNumber == "01234567890" && pin == "1234") {
//     //3-1 true:::>> alert> homepage
//     alert("login Success");

//     // window.location.replace("/home.html");
//     window.location.assign("/home.html");
//   } else {
//     //3-2 false:::>> alert> return
//     alert("login Failed");
//     return;
//   }