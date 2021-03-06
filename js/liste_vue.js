/**
 * Get the cameras data through API
 */

request('GET','http://localhost:3000/api/cameras', function(appareil){
    displayCameras(appareil);
});

/**
 * Display cameras on homepage
 * */
const listeVue = document.getElementById('liste');

function displayCameras(appareil){
    for(let i in appareil) {
        let productCard = document.createElement('section');
            productCard.classList.add('product_card');
            productCard.onclick = function storeData(){
                window.localStorage.setItem('productDetails', JSON.stringify(appareil[i]));
                window.open("page_produit.html", "_self");
            };

        let productLeftDiv = document.createElement('div');
        let productName = document.createElement('h3');
            productName.innerText = `${appareil[i].name}`;

        let productImage = document.createElement('img');
            productImage.src = `${appareil[i].imageUrl}`;
            console.log(productImage.src);

        let productRightDiv = document.createElement('div');
        let productPrice = document.createElement('p');
            productPrice.classList.add('product_price');
            productPrice.innerText = `${appareil[i].price}` + `€`;

        let productDescription = document.createElement('p');
            productDescription.innerText = `${appareil[i].description}`;

        listeVue.append(productCard);
        productCard.append(productLeftDiv,productRightDiv);
        productLeftDiv.append(productName,productImage);
        productRightDiv.append(productPrice,productDescription);
    }
}