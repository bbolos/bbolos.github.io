//alert("hoi")
const pageItems = [];
const categories = ["PORTFOLIO", "KUNST", "LESGEVEN"];

pageItems.forEach(element => {
    var categorie = element.cat;
    categorie = categorie.toUpperCase();
    categories.push(categorie)
})

const subNav = document.getElementsByClassName("subNav")[0];

var subNavA = [];

categories.forEach(element => {
    var link = document.createElement("a");
    link.innerHTML = element;
    subNavA.push(link);
    subNav.appendChild(link);
});

class pageItem {
    constructor(id, cat, name, text, img){
        this.id = id;
        this.cat = cat;
        this.name = name;
        this.text = text;
        this.img = img;
    }

    createPageItem(){
        var cont = document.getElementsByClassName("content")[0];
        var item = document.createElement("article");
        
        

        cont.appendChild(item);
    }
}