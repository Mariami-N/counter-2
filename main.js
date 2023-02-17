let num = 0;

let minus=document.querySelector(".minus")
let reset=document.querySelector(".reset")
let plus=document.querySelector(".plus")
let p=document.querySelector(".p")

minus.addEventListener("click", function (){
    num -- ;
    p.innerHTML=num;
    p.style.color="red"
})

reset.addEventListener("click", function(){
    num=0;
    p.innerHTML=num;
    p.style.color="rgb(39, 39, 160)";
})

 plus.addEventListener("click", function(){
    num ++ ;
    p.innerHTML=num;
    p.style.color="green"
 })