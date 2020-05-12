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
 * Open footer information A propos
 */

function showFooterAPropos(){
    var a = document.getElementById("a_propos");
    var o = document.getElementById("orinoco_info");
    if(a.style.display === "block"){
       a.style.display = "none";
    }else{
        a.style.display = "block";
        o.style.display = "none";
    }
}

/**
 * Open footer information Orinoco&vous
 */

function showFooterOrinoco(){
    var a = document.getElementById("a_propos");
    var o = document.getElementById("orinoco_info");
    if(o.style.display === "block"){
       o.style.display = "none";
    }else{
        o.style.display = "block";
        a.style.display = "none";
    }
}

