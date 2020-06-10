/**
 * Retrieve data from localStorage
 */

let objetProduit = JSON.parse(window.localStorage.getItem("productDetails"));

/**
 * Defining the title as the name stored in localStorage
 */
let pageProduct = document.getElementById('page_title');
let productTitle = document.createElement('h2');
    productTitle.innerText = `${objetProduit.name}`;
pageProduct.appendChild(productTitle);


/**
 * Adding the rest of the info stored in localStorage
 */

let productDetails = document.getElementById('product_info');
let productImage = document.createElement('img');
    productImage.src = `${objetProduit.imageURL}`;
let productPrice = document.createElement('p');
    productPrice.id = "product_price";
    productPrice.innerText = `${objetProduit.price}`;
let productDescription = document.createElement('p');
    productDescription.id = "description_produit";
    productDescription.innerText = `${objetProduit.description}`;

productDetails.append(productImage, productPrice, productDescription);


/** 
*Add product to basket
 **/

function addToBasket() {
    // Check if we already have an array in local storage.
    let x = localStorage.getItem("productList");
    // If not, create the array.
    if (x === null) x = [];
    // If so, decode the array. 
    else x = JSON.parse(x);
    // Add our new item. 

    x.push(objetProduit);
    
    // Encode the array.
    x = JSON.stringify(x);
    // Add back to LocalStorage. 
    localStorage.setItem("productList", x);

    window.open("panier.php");
};











