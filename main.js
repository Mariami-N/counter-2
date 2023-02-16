let minus=document.querySelector(".minus")
let reset=document.querySelector(".reset")
let plus=document.querySelector(".plus")
let zero=document.querySelector(".zero")



minus.addEventListener("click", function (){
    zero -- ;
    zero.innerHTML=minus.value
})

reset.addEventListener("click", function(){
    zero===0;
    zero.innerHTML=reset.value
})

 plus.addEventListener("click", function(){
    zero ++ ;
    zero.innerHTML=plus.value
 })