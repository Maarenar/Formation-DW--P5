/**
 * Show form popup
 */

function showCloseForm(){
    document.getElementById("form_order").classList.toggle('form_show');  
}

/**
 * Retrieve data from localStorage
 */

let panier = JSON.parse(window.localStorage.getItem("productList"));
const productDetails = document.getElementById('product_info');

for(let i in panier){
    let productTitle = document.createElement('h3');
        productTitle.innerText = `${panier[i].name}`;
    let productImage = document.createElement('img');
        productImage.src = `${panier[i].imageURL}`;

    let productPrice = document.createElement('p');
        productPrice.innerText = `${panier[i].price}`;

    let productDescription = document.createElement('p');
        productDescription.innerText = `${panier[i].description}`;

    productDetails.append(productTitle,productImage, productPrice, productDescription);
};