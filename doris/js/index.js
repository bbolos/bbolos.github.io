//alert("hoi")
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
    link.setAttribute("onclick", "selectCatItems(\"" + element + "\")")
    subNavA.push(link);
    subNav.appendChild(link);
});

function selectCatItems(catName){
    document.getElementsByClassName("content")[0].innerHTML = "";
    if(catName == "PORTFOLIO"){
        pageItems.forEach(element => {
            element.createPageItem();
        })
    }
    else{
        pageItems.forEach(element => {
            if(element.cat == catName){
                element.createPageItem();
            }
        })
    }
}

selectCatItems("PORTFOLIO")