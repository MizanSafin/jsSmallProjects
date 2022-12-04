const isValidEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  
  const isValidPhone = (phone) => {
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return re.test(String(phone).toLowerCase());
  };

const formEl = document.querySelector(".form");
const nameInputEl = document.querySelector("input[name='name']");
const thanksEl = document.querySelector(".thanks")

let  checkValidation = false;


const  validateInputs = ()=>{
    checkValidation = true;
    nameInputEl.nextElementSibling.classList.add("show-err") 
    nameInputEl.classList.remove("border-err");
    if(!nameInputEl.value){
         nameInputEl.nextElementSibling.classList.remove("show-err") 
         nameInputEl.classList.add("border-err");
         checkValidation = false;
    }
}



formEl.addEventListener("submit",(e)=>{
      e.preventDefault();
      validateInputs();
      if(checkValidation){
        formEl.remove();
        thanksEl.style.display = "block";
      }
})

nameInputEl.addEventListener("input",()=>{
    validateInputs();
})


