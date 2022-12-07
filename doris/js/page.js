var c = document.cookie;
var id = c.split('=')[1];

for(let i = 0; i < pageItems.length; i++){
    var element = pageItems[i];
    if (element.id == parseInt(id)){
        var art = document.getElementsByClassName("art")[0];
        var h = document.createElement("h1");
        h.innerHTML = element.name;
        art.appendChild(h);
        var img = document.createElement("img");
        img.setAttribute("src", element.img);
        art.appendChild(img);
        var text = document.createElement("p");
        text.innerHTML = element.text;
        art.appendChild(text);

        break;
    }

}