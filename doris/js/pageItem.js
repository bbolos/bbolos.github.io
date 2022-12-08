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
        item.setAttribute("onclick","sendPage("+this.id+")");
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

const test1 = new pageItem(1, "KUNST", "Test1", "test ".repeat(500), "img/index.png")
const test2 = new pageItem(2, "LESGEVEN", "Test2", "test ".repeat(500), "img/index.png")
const test3 = new pageItem(3, "ALLES", "Test3", "test ".repeat(500), "img/index.png")

const pageItems = [test1, test2, test3, test1, test2, test3, test1];

function sendPage(id){
    document.cookie = "pageid=" + id;
    location.replace("page.html")
}