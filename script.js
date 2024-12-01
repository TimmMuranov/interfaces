const windowOuterWidth = window.outerWidth //ширина браузера
const windowOuterHeight = window.outerHeight //высота браузера
const fileMenue = document.getElementById("fileMenue");
const openFileMenu = document.getElementById("openFileMenu");
const tableInside = document.getElementById("tableInside");
const instruments = document.getElementById("instruments");
const instrumentsMenue = document.getElementById("instrumentsMenue");

//===== Обработчики кнопок ========
function noneBlock(htmlBtn, htmlObj){
    htmlBtn.addEventListener("click", function(){
        if(htmlObj.style.display === "none"){
            htmlObj.style.display = "block";
        }
        else{
            htmlObj.style.display = "none";
        }
    })
}

fileMenue.style.display = "none";
instrumentsMenue.style.display = "none";

noneBlock(openFileMenu,fileMenue);
noneBlock(instruments,instrumentsMenue);
//=====================================
