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
    productImage.className = "product_image";
    productImage.src = `${objetProduit.imageURL}`;

let productPrice = document.createElement('p');
    productPrice.className = "product_price";
    productPrice.innerText = `${objetProduit.price}` + `€`;

let productDescription = document.createElement('p');
    productDescription.className = "description_produit";
    productDescription.innerText = `${objetProduit.description}`;

productDetails.append(productImage, productPrice, productDescription);


/** 
*Add product to basket
 **/

function addToCart() {
    // Check if we already have an array in local storage.
    let productsTable = localStorage.getItem("productList");
    // If not, create the array.
    if (productsTable === null) productsTable = [];
    // If so, decode the array. 
    else productsTable = JSON.parse(productsTable);
    // Check if item is in the array.
    if(productsTable.find(product => product.id !== objetProduit.id)){
        productsTable.push(objetProduit);
    }else{
        productsTable.increase(id, 1);
    };
    // Encode the array.
    productsTable = JSON.stringify(productsTable);
    // Add back to LocalStorage. 
    localStorage.setItem("productList", productsTable);

    window.open("panier.php");
};












