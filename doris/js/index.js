//alert("hoi")
const categories = ["ALLES", "BOEKEN", "TEKENINGEN", "SCHILDERIJEN", "LESSEN", "OVERIG"];

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
    if(catName == "ALLES"){
        pageItems.forEach(element => {
            if(element.cat != "LESSEN"){
                element.createPageItem();
            }
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

selectCatItems("ALLES")

function knopKlik(){
    var sn = document.getElementsByClassName("subNav")[0];
    var dp = document.querySelector(".subNav").style.display;
    if(dp != "none"){
        sn.style.display = "block";
    }
    else{
        sn.style.display = "none";
    }
}