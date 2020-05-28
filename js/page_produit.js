/**
* Cameras db
*/
class Appareil {
    constructor(id,name,price,description,imageURL){
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.imageURL = imageURL;
    }
}

const appareilUn = new Appareil(1,"Name1",340,"blabla1","./img/vcam_1.jpg");
const appareilDeux = new Appareil(2,"Name2",600,"blabla2","./img/vcam_2.jpg");
const appareilTrois = new Appareil(3,"Name3",520,"blabla3","./img/vcam_3.jpg");
const appareilQuatre = new Appareil(4,"Name4",780,"blabla4","./img/vcam_4.jpg");
const AppareilCinq = new Appareil(5,"Name5",250,"blabla5","./img/vcam_5.jpg");

let appareils = [appareilUn,appareilDeux,appareilTrois,appareilQuatre,AppareilCinq];


/**
 * Add product info on product page
 */

productDetails = document.createElement('section');
let productInfo = document.getElementById('produit');
productInfo.appendChild(productDetails);
productDetails.innerHTML = "<div><h3></h3><img/></div><div><p class='product_price'></p><p></p></div>";
