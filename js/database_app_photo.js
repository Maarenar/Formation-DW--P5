class Appareil {
    constructor(id,name,price,description,imageURL){
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.imageURL = imageURL;
    }
}

const appareilUn = new Appareil(1,"Name1",340,"blabla1","./img/vcam_1.jpg");
const appareilUn = new Appareil(2,"Name2",600,"blabla2","./img/vcam_2.jpg");
const appareilUn = new Appareil(3,"Name3",520,"blabla3","./img/vcam_3.jpg");
const appareilUn = new Appareil(4,"Name4",780,"blabla4","./img/vcam_4.jpg");
const appareilUn = new Appareil(5,"Name5",250,"blabla5","./img/vcam_5.jpg");

let appareilsPhotos = [appareilUn,appareilDeux,appareilTrois,appareilQuatre,AppareilCinq];