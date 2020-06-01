/**
* Cameras db

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
*/

/**
 * Retrieve data from localStorage
 */

let objetProduit = JSON.parse(window.localStorage.getItem("info"));

/**
 * Adding the title as the name stored in localStorage
let pageProduct = document.getElementsByTagName('main');
let productTitle = document.createElement('h2');
    productTitle.innerText = `${objetProduit.name}`;
pageProduct.prepend(productTitle);
*/


/**
 * Adding the rest of the info stored in localStorage
 */

let productDetails = document.getElementById('product_info');
let productImage = document.createElement('img');
    productImage.src = `${objetProduit.imageURL}`;
let productPrice = document.createElement('p');
    productPrice.innerText = `${objetProduit.price}`;
let productDescription = document.createElement('p');
    productDescription.innerText = `${objetProduit.description}`;

productDetails.append(productImage, productPrice, productDescription);




