/**
 * Get the cameras data
 */ 
 // Create a request variable and assign a new XMLHttpRequest object to it.
let request = new XMLHttpRequest(); //objet
let appareils = [];

request.onreadystatechange = function(){
    if(this.readyState == XMLHttpRequest.DONE && this.status == 200){
        var response = JSON.parse(this.responseText);
        console.log(response.name);
    }
};
// Open a new connection, using the GET request on the URL endpoint
request.open('GET', '​http://localhost:3000/api/cameras');

// Send request
request.send();


/**
 * End of cameras DB
 */


const listeVue = document.getElementById('liste');

for(let i in appareils) {
    let productCard = document.createElement('section');
        productCard.classList.add('product_card');
        productCard.onclick = function storeData(){
            window.localStorage.setItem('productDetails', JSON.stringify(appareils[i]));
            window.open("page_produit.php", "_self");
        };

    let productLeftDiv = document.createElement('div');
    let productName = document.createElement('h3');
        productName.innerText = `${appareils[i].name}`;

    let productImage = document.createElement('img');
        productImage.src = `${appareils[i].imageURL}`;

    let productRightDiv = document.createElement('div');
    let productPrice = document.createElement('p');
        productPrice.classList.add('product_price');
        productPrice.innerText = `${appareils[i].price}` + `€`;

    let productDescription = document.createElement('p');
        productDescription.innerText = `${appareils[i].description}`;

    listeVue.append(productCard);
    productCard.append(productLeftDiv,productRightDiv);
    productLeftDiv.append(productName,productImage);
    productRightDiv.append(productPrice,productDescription);
};

