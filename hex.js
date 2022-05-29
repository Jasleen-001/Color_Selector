const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btn=document.getElementById("btn")
//const color=document.querySelector(".color");
const color=document.getElementsByClassName("color");
btn.onclick=()=>{
    let hexcolor="#";
    for(let i=0;i<6;i++)
     hexcolor+=hex[getRandomNumber()];
    document.body.style.backgroundColor=hexcolor;
    color.textContent=hexcolor;
    console.log(color.textContent);
}

function getRandomNumber(){
    return  Math.floor(Math.random() * hex.length);
}