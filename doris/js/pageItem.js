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
        if(this.img[0].split('/')[0] == "img"){
            img.setAttribute("src",this.img[0]);
            item.appendChild(img);
        }
        else{
            var imgpdf = this.img[0].split('/')[1].replace(".pdf#view=fit", ".PNG")
            img.setAttribute("src","pdf/" + imgpdf);
            item.appendChild(img);
        }
        var b = document.createElement("b");
        b.innerHTML = this.name;
        item.appendChild(b);
        var p = document.createElement("p");
        p.innerHTML = this.text.slice(0,30) + "...";
        item.appendChild(p);
        cont.appendChild(item);
    }
}

/*
const test1 = new pageItem(1, "OVERIG", "Test1", "test ".repeat(500), ["img/index.png", "img/index.png"])
const test2 = new pageItem(2, "LESGEVEN", "Test2", "test ".repeat(500), ["img/index.png", "img/index.png"])
const test3 = new pageItem(3, "ALLES", "Test3", "test ".repeat(500), ["img/index.png", "img/index.png"])
*/
const nt = "untitled"

const boek = new pageItem(1, "BOEKEN", "Kon ik maar…", "Een boek met teksten vanuit mijn jeugd waarin ik schreef over alles wat mij bezighield. Alles waar ik toen der tijd over schreef ging over mijn toekomst en alle beelden in mijn hoofd die als onmogelijk leken. In mijn boek blik ik hierop terug en citeer ik zinnen uit mijn dagboeken en schriftjes.", ["img/boek.jpg"]);
const hout = new pageItem(2, "OVERIG", nt, "Beweging in cirkelvormen die uitlopen tot spiraal, gemaakt uit resthout.", ["img/hout.PNG"]);
const hk1 = new pageItem(3, "TEKENINGEN", "Portret", "Houtskool op papier ", ["img/hk1.jpg"]);
const hk2 = new pageItem(4, "TEKENINGEN", "Portret", "Houtskool op papier ", ["img/hk2.jpg"]);
const hk3 = new pageItem(5, "TEKENINGEN", "Portret", "Houtskool op papier ", ["img/hk3.jpg"]);
const foto = new pageItem(6, "OVERIG", "Zondagen in palermo", "In zondagen in Palermo ben ik geïnspireerd geraakt door het dagelijkse leven in Palermo. Hier was ik op vakantie en bewonderde ik de drukke winkelstraten vol met mensen die zich allemaal anders gedroegen. Al deze persoonlijkheden vormden de zondag die ik beleefd had in de stad. Deze heb ik vastgelegd en allemaal verwerkt in één beeld.", ["img/ft1.jpg","img/ft2.jpg"])
const sch1 = new pageItem(7, "SCHILDERIJEN", nt, "Acryl op canvas", ["img/sch1.jpg"])
const sch2 = new pageItem(8, "SCHILDERIJEN", "Zelfportret", "Olieverf op canvas", ["img/sch2.jpg"])
const sch3 = new pageItem(9, "SCHILDERIJEN", nt, "Acryl op canvas", ["img/sch3.jpg"])
const sch4 = new pageItem(10, "SCHILDERIJEN", "Biarritz", "Acryl op linnen", ["img/sch4.jpg"])
const sch5 = new pageItem(11, "SCHILDERIJEN", "Digitale bubbel", "Op dit werk is te zien hoe men tegenwoordig geheel aan hun telefoon en digitale wereld vast zit. In het dagelijks leven kijken mensen niet meer op of om, maar iedereen zit vast in de straling tussen het oog en het apparaat.", ["img/sch5.jpg"])
const sch6 = new pageItem(12, "SCHILDERIJEN", nt, "Acryl op canvas", ["img/sch6.jpg"])
const les1 = new pageItem(13, "LESSEN", "Minimalistische kunst zwerfafval", "", ["pdf/op1.pdf#view=fit"]);
const les2 = new pageItem(14, "LESSEN", "Paleiskamer Lodewijk XIV", "", ["pdf/op2.pdf#view=fit"]);
const les3 = new pageItem(15, "LESSEN", "Vreemde vogels papier maché", "", ["pdf/op3.pdf#view=fit"]);



const pageItems = [boek, hout, hk1, hk2, hk3, foto, sch1, sch2, sch3, sch4, sch5, sch6, les1, les2, les3];

function sendPage(id){
    document.cookie = "pageid=" + id;
    location.replace("page.html")
}