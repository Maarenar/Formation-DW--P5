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

 /**
  * Add underline on active menu item
*/

 let activeItem = document.querySelector("#menu_nav > li:nth-child(2)");
 activeItem.classList.add("active_item");




