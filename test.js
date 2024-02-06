console.log("hello there");
let doctitle = document.title;
window.addEventListener("blur",()=>{
    document.title = "xkadir nta tamak ???";

})
window.addEventListener("focus",()=>{
    document.title = doctitle
})