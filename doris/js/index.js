//alert("hoi")
class pageItem {
    constructor(id, cat, name, text, img){
        this.id = id;
        this.cat = cat;
        this.name = name.toUpperCase();
        this.text = text;
        this.img = img;
    }

    createPageItem(){
        var cont = document.getElementsByClassName("content")[0];
        var item = document.createElement("article");
        var img = document.createElement("img");
        img.setAttribute("src",this.img);
        item.appendChild(img);
        var b = document.createElement("b");
        b.innerHTML = this.name;
        item.appendChild(b);
        var p = document.createElement("p");
        p.innerHTML = this.text.slice(0,97) + "...";
        item.appendChild(p);
        cont.appendChild(item);
    }
}

const test = new pageItem(1, "KUNST", "Test", "test ".repeat(50), "img/index.png")

const pageItems = [test, test, test, test, test, test, test];
const categories = ["PORTFOLIO", "KUNST", "LESGEVEN"];

/*
pageItems.forEach(element => {
    var categorie = element.cat;
    categorie = categorie.toUpperCase();
    categories.push(categorie)
})*/

const subNav = document.getElementsByClassName("subNav")[0];

var subNavA = [];

categories.forEach(element => {
    var link = document.createElement("a");
    link.innerHTML = element;
    subNavA.push(link);
    subNav.appendChild(link);
});

pageItems.forEach(element => {
    element.createPageItem();
})

