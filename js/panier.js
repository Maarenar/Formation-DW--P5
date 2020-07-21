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
    let totalAmount = `${panier[i].price}` * `${panier[i].quantity}` ;
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
    }else{
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

    // Récupérer la valeur des champs saisis par le client
        
    let firstName = document.getElementById('firstname').value;
    let lastName = document.getElementById('lastname').value;
    let email = document.getElementById('email').value;
    let adress = document.getElementById('adress').value;
    let postCode = document.getElementById('postcode').value;
    let city = document.getElementById('city').value;

    // on met les valeurs dans un objet pour la requete POST

    let contact = {
        "firstName": firstName,
        "lastName": lastName,
        "email": email,
        "address": adress,
        'postcode': postCode,
        "city": city
    };

    // création de l'objet la requete
    let objet = {
    contact,
    panier
    };

    let achat = JSON.stringify(objet);
    if (firstName == ''){
    alert("Veuillez remplir le prénom")
    } else if (lastName == ''){
    alert("Veuillez remplir le nom")
    } else if (email == ''){
    alert("Veuillez remplir l'email")
    } else if (adress == ''){
    alert("Veuillez remplir l'adresse")
    } else if (postCode == ''){
        alert("Veuillez remplir le code postal")
    } else if (city == ''){
    alert("Veuillez remplir la ville")

    //envoi de la commande
    } else {
    let request = new XMLHttpRequest();
        request.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE) {
            //Des que la requete est envoyé,la page de confirmation s'ouvre
            window.open("confirmation.html", "_self");
        }
        }
    request.open("post", "http://localhost:3000/api/cameras/order");
    request.setRequestHeader("Content-Type", "application/json");
    request.send(achat);
    } 
}







 
  