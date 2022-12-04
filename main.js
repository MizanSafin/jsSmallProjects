// function createHeart() {
//     const heart = document.createElement("div");
//     heart.classList.add("heart");

//     heart.style.left = Math.random() * 100 + "vw";
//     heart.style.animationDuration = Math.random() * 2 + 3 + "s";

//     heart.innerText = "💜";

//     document.body.appendChild(heart);

//     setTimeout(() => {
//         heart.remove();
//     }, 5000);
// }

// setInterval(createHeart, 300);
// let farenheits =  [98,97,99,100,101,102,103,104];

// function celciusArray(){
//     let celcius = farenheits.map(item =>{
//         return  ((item - 32 )* 5/9).toFixed(2)
//      })
//      return celcius
// }

// let result = celciusArray();


// console.log(result)

const formEl = document.querySelector("form");
const nameInputEl = document.querySelector('input[name="name"]')
const ageInputElement = document.querySelector('input[name="age"]')
const thanksEl = document.querySelector(".thanks");


let isFormValid = false;
let checkFormValid = false;
const inputelms = [
    nameInputEl,
    ageInputElement
]

// const isValidEmail = (email) => {
//     const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
//   };
  
//   const isValidPhone = (phone) => {
//     const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
//     return re.test(String(phone).toLowerCase());
//   };

const checkValidation =(elm)=>{
    elm.nextElementSibling.classList.add("error-msg"); 
    elm.classList.remove("errorBorder");
}

const checkInvalidation = (elm)=>{
    elm.nextElementSibling.classList.remove("error-msg"); 
    elm.classList.add("errorBorder");
}
const validateInput = ()=>{
    checkValidation(nameInputEl)
    checkValidation(ageInputElement)
     isFormValid = true;
    if(!checkFormValid) return;
  
    if(!nameInputEl.value){
          checkInvalidation(nameInputEl)
         isFormValid=false;
    }
    if(!ageInputElement.value){
          checkInvalidation(nameInputEl)
          isFormValid=false;
    }
}

formEl.addEventListener("click",(e)=>{
   e.preventDefault();
   checkFormValid = true;
   validateInput();
   if(isFormValid){
    formEl.remove();
    thanksEl.classList.remove("hidden")
   }
})

inputelms.forEach(elm =>{
    elm.addEventListener("input",()=>{
        validateInput()
    })
})





const date = new Date(2022 )


