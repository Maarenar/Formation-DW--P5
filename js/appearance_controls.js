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
* Creation of the list of cameras on home page
*/

productCard = document.createElement('div');
let listeVue = document.getElementById('liste');
listeVue.appendChild(productCard);