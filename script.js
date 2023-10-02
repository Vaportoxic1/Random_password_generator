const passwordbox = document.getElementById("password");
const button_generate = document.getElementById("button-generate");
const copybutton = document.querySelector(".display img");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()=-~[]{}\|'/?.>,<:; *+";

const allChars = upperCase + lowerCase + number + symbol;

function createpassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random()*upperCase.length)];
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password += number[Math.floor(Math.random()*number.length)];
    password += symbol[Math.floor(Math.random()*symbol.length)];

    while(length > password.length){
        password += allChars[Math.floor(Math.random()*allChars.length)];
    }
    passwordbox.value = password;
}

function copyPassword(){
    passwordbox.select();
    const textToCopy = passwordbox.value;
navigator.clipboard.writeText(textToCopy)
  .then(() => {
    alert('Text copied to clipboard successfully.');
  })
}
button_generate.addEventListener("click", ()=>{
       createpassword();
});

copybutton.addEventListener("click", ()=>{
       copyPassword()
});