// const selectEl = document.querySelector(".select");
// console.log(selectEl)
// selectEl.addEventListener("change",(e)=>{
//     console.log(e.target.value)

//     document.body.style.backgroundColor = e.target.value;

// })
const btnEl = document.querySelector(".btn");

let colorArray = ["red","green","black","blue","yellow","pink"]
// 0 -5 

btnEl.addEventListener("click",()=>{
       let randomNum =Math.floor( Math.random()*colorArray.length);
       document.body.style.backgroundColor = colorArray[randomNum];
       console.log(colorArray[randomNum])
})