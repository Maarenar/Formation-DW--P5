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
        productImage.src = `${panier[i].imageUrl}`;

    let productPrice = document.createElement('p');
        productPrice.innerText = `${panier[i].price}` * `${panier[i].quantity}` + ` €`;

    //create quantity cursor
    let productQuantity = document.createElement('div');
        productQuantity.className = "quantity_cursor";
        
    let quantityMinus = document.createElement('div');
        quantityMinus.innerText = `-`;
        //Add a function to decrease the quantity of the item
        quantityMinus.onclick = function (){
            let productsTable = localStorage.getItem("productList");
            //Decode the array. 
            productsTable = JSON.parse(productsTable);

            if(!productsTable[i]){
                return false;
            }
            productsTable[i].quantity--;
            if(productsTable[i].quantity <= 0 ){
                //remove the item
                productsTable.splice(i,1);
            }
            // Encode the array.
            productsTable = JSON.stringify(productsTable);
            // Add the array back to LocalStorage. 
            localStorage.setItem("productList", productsTable);
        };
        
    let quantityPlus = document.createElement('div');
        quantityPlus.innerText = `+`;
        //Add a function to increase the quantity of the item
        quantityPlus.onclick = function (){
            let productsTable = localStorage.getItem("productList");
            //Decode the array. 
            productsTable = JSON.parse(productsTable);
            
            //increase the quantity
            productsTable[i].quantity++;
        
            // Encode the array.
            productsTable = JSON.stringify(productsTable);
        
            // Add the array back to LocalStorage. 
            localStorage.setItem("productList", productsTable);
            };
        
    let quantityShow = document.createElement('div');
        quantityShow.innerHTML = `${panier[i].quantity}`;

    let productDelete = document.createElement('i');
            productDelete.className = 'fas fa-trash-alt';
            productDelete.onclick = function removeItem(){
                let productsTable = localStorage.getItem("productList");
                //Decode the array. 
                productsTable = JSON.parse(productsTable);
                //remove item
                productsTable.splice(i,1);
                 // Encode the array.
                productsTable = JSON.stringify(productsTable);
        
                // Add the array back to LocalStorage. 
                localStorage.setItem("productList", productsTable);
            }

    productDetails.append(productInfo);
    productInfo.append(leftColumn, rightColumn, productDelete);
    leftColumn.append(productTitle, productImage);
    rightColumn.append(productQuantity, productPrice);
    productQuantity.append(quantityMinus, quantityShow, quantityPlus);
}

/**
 * Calculate total cart price
 */

 let totalPrice = document.getElementById('total_price');
 for(let i = 0; i<panier.length; i++){
    let totalAmount = `${panier[i].price}`;
    totalPrice.innerText = `${totalAmount}` + ` €`;
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
    }else if(!panier){
        let emptyCart = document.getElementById("table_cart");
        let emptyMessage = document.createElement('p');
        emptyMessage.innerText = "Aucun produit dans le panier";
        emptyCart.append(emptyMessage);
    }
};


/**
 * Send order
 */

function sendData(){
    //Defining Contact object
    let formData = document.getElementsByClassName("form-input");
    console.log("formulaire", formData);
    let orderAddress = {
        lastName : formData[0].value,
        firstName : formData[1].value,
        email : formData[2].value,
        address: formData[3].value,
        postcode : formData[4].value,
        city : formData[5].value,
    }
    console.log(orderAddress);

    //Defining array with products ids
    let productsIds = [];
    panier.forEach(function(product){
        productsIds.push(product._id);
    });

    console.log("array product id", productsIds);

    let orderData = { formData, productsIds };

    // Create a request variable and assign a new XMLHttpRequest object to it.

    let request = new XMLHttpRequest();
    request.open("POST", "http://localhost:3000/api/cameras/order");
    request.setRequestHeader("Content-Type", "application/json");
    request.send(JSON.stringify(orderData));
    let orderId = response.orderId;
	localStorage.clear();
    localStorage.setItem("orderId", orderId);
}


  







 
  