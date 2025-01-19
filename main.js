let el = document.querySelector(".scroller");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  el.style.width = `${(scrollTop / height) * 100}%`;
});




let btn=document.getElementById("btn");
window.onscroll= function(){
    if(document.documentElement.scrollTop>1000){
        btn.style.display="block"
    }else{
        btn.style.display= "none"
    }
}
btn.addEventListener("click",()=>{
    window.scroll({
        top:0,
    })
})




// let cards=document.getElementsByClassName("cards");
// let index=0
// function show(){
//     if(index>9){
//         index=0
//     }if(index<0){
//         index=9
//     }
//     for(i=0;i<cards.length;i++){
//         cards[i].style.display="none"
//     }
//     cards[index].style.display="block"
// }
// show()
// function button(f){
//     index +=f
//     show()
// }


window.onload = () => {
    let local = window.localStorage.getItem("visit");
    if (local !== null) {
        local = parseInt(local) + 1
    } else {
        local = 50
    }
    window.localStorage.setItem("visit", local)
    document.getElementById("vistoer").innerHTML = local
}