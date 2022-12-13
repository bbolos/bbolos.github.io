var c = document.cookie;
var id = c.split('=')[1];

for(let i = 0; i < pageItems.length; i++){
    var element = pageItems[i];
    if (element.id == parseInt(id)){
        var art = document.getElementsByClassName("art")[0];
        var h = document.createElement("h1");
        h.innerHTML = element.name;
        art.appendChild(h);
        element.img.forEach(el => {
            if(el.split('/')[0] == "img"){
                var img = document.createElement("img");
                img.setAttribute("src", el);
                art.appendChild(img);
                art.appendChild(document.createElement("br"));
            }
            else{
                var iframe = document.createElement("iframe");
                iframe.setAttribute("src", el);
                art.appendChild(iframe);
                art.appendChild(document.createElement("br"));
            }            
        });
        var text = document.createElement("p");
        text.innerHTML = element.text;
        art.appendChild(text);

        break;
    }

}