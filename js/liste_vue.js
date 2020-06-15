/**
* Add title on homepage
*/

let homeTitle = "<h2>Appareils photo vintage</h2>";
document.getElementById("title").innerHTML = homeTitle;

/**
* Cameras DB
*/
class Appareil {
    constructor(id,name,price,description,imageURL){
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.imageURL = imageURL;
    }
}

const appareilUn = new Appareil(1,"Fujifilm X-T100",340,"Caractérisé par son profil compact et son aspect raffiné, le Fujifilm X-T100 est un appareil photo polyvalent sans miroir parfait pour les prises de vue quotidiennes. Doté d'un capteur CMOS APS-C 24,2 MP haute résolution pour l'enregistrement d'images fixes et vidéo, le X-T100 est complété par un système autofocus hybride rapide et précis de détection de phase et de contraste, ainsi que par des réglages sophistiqués SR + Auto. représenter une grande variété de types de scène.","./img/vcam_1.jpg");
const appareilDeux = new Appareil(2,"Canon POWERSHOT G9X MARK II SILVER",600,"Avec un processeur Digic 7 et un autofocus performant, le G9X Mark II est beaucoup plus réactif que son prédécesseur en terme de rapidité. Son capteur CMOS 1.0 20,1 Mégapixels et son stabilisateur intelligent délivrent une qualité d'image excellente. Même si l'environnement où vous vous trouvez est de faible luminosité, son objectif de 28-84mm et son ouverture à f/2-4.9 garantit de superbes clichés.","./img/vcam_2.jpg");
const appareilTrois = new Appareil(3,"Appareil Photo Argentique Vintage Rolleicord III",520,"Appareil Photo TLR Vintage emblématique de Rolleicord.Construit en Allemagne entre 1950-1953. Edition avec l’objectif de type Xenar, Spector 1 : 4.5 F=105. Alliant un facteur de forme familier à un ensemble de fonctionnalités améliorées, le X-T20 de Fujifilm est un appareil photo élégant sans miroir conçu pour les tireurs multimédias.","./img/vcam_3.jpg");
const appareilQuatre = new Appareil(4,"Minolta XG 7 appareil",780,"Il s'agit d'un appareil photo entièrement manuel. Ces caméras sont vraiment amusant à tirer et facile à utiliser. Le corps de la caméra est en bon état, il ya quelques sings d'utilisation sur le corps, le corps est en parfait état de fonctionnement, les feux d'obturateur à toutes les vitesses, le viseur est propre.L'appareil photo est livré avec un objectif Minolta 50mm Prime. Il produit de magnifiques images nettes de rasoir.","./img/vcam_4.jpg");
const AppareilCinq = new Appareil(5,"Olympus OM-10 SLr 35MM",250,"Reflex 35mm vintage, Lens est un Olympus OM-System Zuiko Auto-S 1:1,8 50mm.Lentille supplémentaire - J.C. Penny 55-135mm Optique multi-enduite 1:2.8f -135mm, Filtre UV - Super Albinar 49MM, Doté d’une exposition automatique (AE) se base sur le compteur de lumière directe TTL.","./img/vcam_5.jpg");

let appareils = [appareilUn,appareilDeux,appareilTrois,appareilQuatre,AppareilCinq];
/**
 * End of cameras DB
 */


const listeVue = document.getElementById('liste');

for(let i in appareils) {
    let productCard = document.createElement('section');
        productCard.classList.add('product_card');
        productCard.onclick = function storeData(){
            window.localStorage.setItem('productDetails', JSON.stringify(appareils[i]));
            window.open("page_produit.php");
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

