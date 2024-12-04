const windowInnerWidth = window.innerWidth
let startCord;
let finCord;
let windowSector;
document.addEventListener("mousedown", function(){
    startCord = event.clientX;
    if(startCord > windowInnerWidth/2) windowSector = "Правая часть экрана";
    else windowSector = "Левая часть экрана";
});
document.addEventListener("mouseup", function(){
   finCord = event.clientX;
   if(startCord - finCord > 0) alert("Влево. " + windowSector);
   else alert("Вправо. " + windowSector);
   startCord = 0;
   finCord = 0;
})
