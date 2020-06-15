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
const productDetails = document.getElementById('table_cart');

for(let i in panier){
    //create a product container
    let productInfo = document.createElement('div');
        productInfo.className = "product_summary";

    //2 divs to organise content
    let leftColumn = document.createElement('div');
    let rightColumn = document.createElement('div');

    //create product details items
    let productTitle = document.createElement('h3');
        productTitle.innerText = `${panier[i].name}`;
    let productImage = document.createElement('img');
        productImage.src = `${panier[i].imageURL}`;

    let productPrice = document.createElement('p');
        productPrice.innerText = `${panier[i].price}` + ` €`;

    //create quantity cursor
    let productQuantity = document.createElement('div');
        productQuantity.className = "quantity_cursor";
        
    let quantityMinus = document.createElement('div');
        quantityMinus.innerText = `-`;

    let quantityPlus = document.createElement('div');
        quantityPlus.innerText = `+`;

    let quantityShow = document.createElement('div');
        quantityShow.innerHTML = `1`;

    productDetails.append(productInfo);
    productInfo.append(leftColumn, rightColumn);
    leftColumn.append(productTitle, productImage);
    rightColumn.append(productQuantity, productPrice);
    productQuantity.append(quantityMinus, quantityShow, quantityPlus);
};