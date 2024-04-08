var navbar = document.querySelector("#navbar")
var right = document.querySelector(".right p")
var menu = document.querySelector(".right #menu")
var loader = document.querySelector(".loader")
var close = document.querySelector("#close")
menu.addEventListener("click", function () {
   
        loader.style.right = "0%";
        console.log("jdfb")           
    
})

close.addEventListener("click", function () {
   
    loader.style.right = "-100%";
    console.log("jdfb")           

})

// menu.addEventListener("click", function () {
//     loader.style = "display:node";
//     console.log("jdfb")
// })