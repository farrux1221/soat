function timeShover(){
       
 let timeNow = new Date()  ;
   

 document.querySelector('.hourse').textContent = timeNow.getHours();
 document.querySelector('.minuts').textContent = timeNow.getMinutes();
 document.querySelector('.sekunts').textContent = timeNow.getSeconds();
}
timeShover();
setInterval(function() {
    timeShover();
},1000)