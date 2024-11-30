const windowOuterWidth = window.outerWidth //ширина браузера
const windowOuterHeight = window.outerHeight //высота браузера

const fileMenue = document.getElementById("fileMenue");
const openFileMenu = document.getElementById("openFileMenu");
const tableInside = document.getElementById("tableInside");
fileMenue.style.display = "none";

openFileMenu.addEventListener("click", function(){
    if(fileMenue.style.display === "none"){
        fileMenue.style.display = "block";
    }
    else{
        fileMenue.style.display = "none";
    }
})
