const nameInputEl = document.querySelector('input[name = "name"]');
const ageInputEl = document.querySelector('input[name = "age"]');

const formEl = document.querySelector("form");
const welcomeEl = document.querySelector(".welcome-msg");
console.log(nameInputEl,formEl);

let isValidated = false;
let checkValidated = false;
let inputsElms = [
    nameInputEl,
    ageInputEl
]





const validateEl = (elm)=>{
    elm.nextElementSibling.classList.add("err-hidden");
    elm.classList.remove("err-border");
}

const inValidateEl = (elm)=>{
    elm.nextElementSibling.classList.remove("err-hidden");
    elm.classList.add("err-border");
}

const validateInput = ()=>{
    if(!checkValidated) return;
   validateEl(nameInputEl)
   validateEl(ageInputEl)
    isValidated = true;
    
    if(!nameInputEl.value){
        inValidateEl(nameInputEl)
        isValidated = false;
     }
    if(!ageInputEl.value){
        inValidateEl(ageInputEl)
        isValidated = false;
     }
}


formEl.addEventListener("submit",(e)=>{
     e.preventDefault();
     validateInput()
     checkValidated = true;
     if(isValidated){
        formEl.remove();
        welcomeEl.classList.remove("show-welcome")
     }
})

inputsElms.forEach(elm =>{
    elm.addEventListener("input",()=>{
        validateInput()
    })
})