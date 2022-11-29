//alert("hoi")
const categories = ["PORTFOLIO", "KUNST", "LESGEVEN"];

const subNav = document.getElementsByClassName("subNav")[0];

var subNavA = [];

categories.forEach(element => {
    var link = document.createElement("a");
    link.innerHTML = element;
    subNavA.push(link);
    subNav.appendChild(link);
});