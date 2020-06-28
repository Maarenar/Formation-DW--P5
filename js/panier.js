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
        productPrice.innerText = `${panier[i].price}` * `${panier[i].quantity}` + ` €`;

    //create quantity cursor
    let productQuantity = document.createElement('div');
        productQuantity.className = "quantity_cursor";
        
    let quantityMinus = document.createElement('div');
        quantityMinus.innerText = `-`;
        
    let quantityPlus = document.createElement('div');
        quantityPlus.innerText = `+`;
        quantityPlus.onclick = function addToCart(){
                let productsTable = localStorage.getItem("productList");

                // Check if productsTable exists in local storage
                if (!productsTable) {

                    // If not, initialize the array and add the current object
                    productsTable = [];
                    objetProduit.quantity++;
                    productsTable.push(objetProduit);
                } else {

                    // If yes, decode the array. 
                    productsTable = JSON.parse(productsTable);

                    // check if the object is already in the array
                    if (productsTable.find(product => product.id === objetProduit.id)) {

                        //if yes ==> just increase the value of the key quantity by 1
                        objetProduit.quantity++;
                        for (var i = 0; i < productsTable.length; i++) {
                            if (objetProduit.id === productsTable[i].id) { //look for match with id
                                productsTable[i].quantity++; //add
                                break; //exit loop
                            }
                        }
                    } else {
                        //if not ==> add the object into the array
                        objetProduit.quantity++;
                        productsTable.push(objetProduit);

                    }
                }
                // Encode the array.
                productsTable = JSON.stringify(productsTable);

                // Add the array back to LocalStorage. 
                localStorage.setItem("productList", productsTable);

                let popupAdded = document.getElementById("popup_add");
                if(popupAdded.className === "hide"){
                    popupAdded.classList.replace("hide","popup_show");
                }else{
                    popupAdded.classList.replace("popup_show","hide");
                }
            };

    let quantityShow = document.createElement('div');
        quantityShow.innerHTML = `${panier[i].quantity}`;

    productDetails.append(productInfo);
    productInfo.append(leftColumn, rightColumn);
    leftColumn.append(productTitle, productImage);
    rightColumn.append(productQuantity, productPrice);
    productQuantity.append(quantityMinus, quantityShow, quantityPlus);
}

 /**
 * Show empty cart button
 */

if(panier){
     document.getElementById("empty_basket").classList.replace("hide", "show");
}

 function emptyCart(){
    localStorage.clear();
 }

 /**
 * Show form popup
 */
//ajouter une condition : si panier vide, affiche "votre panier est vide"
function showCloseForm(){
    if (panier){
    document.getElementById("form_order").classList.toggle('form_show');  
    }else{
        let emptyCart = document.getElementById("table_cart");
        let emptyMessage = document.createElement('p');
        emptyMessage.innerText = "Aucun produit dans le panier";
        emptyCart.append(emptyMessage);
    }
};




 
  