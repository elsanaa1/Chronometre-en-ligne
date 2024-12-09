//les variables dont on a besoin
var ms,s,h,mn,p,sp,btn_start,btn_stop,t;
 ms=0,s=0,mn=0,h=0;  





//fonctioins pour initialiser les variables quand la page se charge
window.onload=function(){

     sp=document.getElementsByTagName("span")
     btn_start=document.getElementById('start')
     btn_stop=document.getElementById('stop')
     ms=0,s=0,mn=0,h=0; t; 
}



//mettre en place le compteur 
function update_crono(){
    
ms+=1;
if(ms==10){
    ms=1;
    s+=1
}

if(s==60){
    s=0
    mn+=1
}
if(mn==60){
    mn=0
    h+=1
}
//inserer les valeurs dans la page chronometre 
sp[0].innerText=h+"h";
sp[1].innerText=mn+"min";
sp[2].innerText=s+"s";
sp[3].innerText=ms+"ms";

}





function start(){
    
    // sp=document.getElementsByTagName("span")
    // sp[1].innerHtml=200+"h"
    // sp[0].innerText=200+"h";
    // var test=sp[1].innerHtml;
    // alert(test);

// execution de la fonction update_crono toutes les 100s
t=setInterval(update_crono,100);
btn_start.disabled=true;

}




function stop(){
    //supppression de l'intervalle t cree
    clearInterval(t)
    btn_start.disabled=false
}




//initialiser les valeurs du compteur
function reset(){
    //stop calcul 
    clearInterval(t);
    btn_start.disabled=false;
     // set a 0 tt les valeurs 
    h=mn=s=ms=0;
    // inserer les valeurs 
    sp[0].innerText=h+"h";
    sp[1].innerText=mn+"min";
    sp[2].innerText=s+"s";
    sp[3].innerText=ms+"ms";

}


