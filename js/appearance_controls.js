/**
 * Open hamburger menu
 */

 function openMenu(){
     var i = document.getElementById("menu_nav");
     if(i.style.display === "block"){
        i.style.display = "none";
     }else{
         i.style.display = "block";
     }
 }