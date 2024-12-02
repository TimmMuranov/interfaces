const windowOuterWidth = window.outerWidth //ширина браузера
const windowOuterHeight = window.outerHeight //высота браузера
const fileMenue = document.getElementById("fileMenue");
const openFileMenu = document.getElementById("openFileMenu");
const tableInside = document.getElementById("tableInside");
const instruments = document.getElementById("instruments");
const instrumentsMenue = document.getElementById("instrumentsMenue");

const creatText = document.getElementById("ct");
const creatDir = document.getElementById("cd");
const creatImg = document.getElementById("ci");

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

function creatFiles(button){
    let answer = [2];
    answer[1] = button;
    button.addEventListener("click", function(){
        let fileName = prompt("Введите имя");
        if(fileName === "") {
            alert("Вы не ввели название.");
            return;
        }
        else if(fileName === null){
            alert("Отменяем.");
            return;
        }
    answer[2] = fileName;
    alert("Вы попытались создать файл " + answer[2] + ", нажав на кнопку " + button.id);
    // дальнейшая обработка нажатия.
    // массив answer имеет пару "нажатая кнопка - введенное имя"
    })
}

fileMenue.style.display = "none";
instrumentsMenue.style.display = "none";

noneBlock(openFileMenu,fileMenue);
noneBlock(instruments,instrumentsMenue);
creatFiles(creatText);
creatFiles(creatDir);
creatFiles(creatImg);
//=====================================
