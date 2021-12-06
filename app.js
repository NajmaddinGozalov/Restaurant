let buton = document.getElementById("buton")
let menu = document.getElementById("menu")
let menu_icon = document.getElementById("menu-icon")


buton.addEventListener("click", () => {
    menu.classList.add("margin-menfi")
})

menu_icon.addEventListener("click", () => {
    menu.classList.remove("margin-menfi")
})

// main menu items

let menu_items = document.getElementsByClassName("main_menu_items")
let menu_links = document.getElementsByClassName("linkler")

let menu_item = []
let menu_link = [];

menu_item.push(...menu_items)
menu_link.push(...menu_links);

// bu funksiya sekillerden display klasini silir
function diplay_silen() {
    menu_item.forEach(index => {
        // index.classList.remove("display_none")
        index.classList.remove("opacty")       
    })
}
// bu funksiya klikden gelen adi yoxlayir uygun gelmeyen divleri none edir
function itemsName(ad) {
    diplay_silen();
    menu_item.forEach(index => {
        if (index.getAttribute("name") != ad) {
            index.classList.add("opacty")
        // setTimeout(function(){index.classList.add("opacity"); }, 100);           
        }
    })   
}
// klikden linkin adini oxuyur yuxardaki funksiyaya gonderir
menu_link.forEach(element => {
    element.addEventListener("click", () => {
        if (element.getAttribute("name") == "All") {
            diplay_silen();
        } else {
            itemsName(element.getAttribute("name"));
        }
    })
});
// modal reservation

let modal_reservation = document.getElementsByClassName("modal_reservation")
let modal_full = document.getElementById("modal")
let modul_x=document.getElementById("modul_x")

let modal = [...modal_reservation]

modal.forEach(index => {
    index.addEventListener("click", () => {
        modal_full.classList.remove("visible")
    })
})

modul_x.addEventListener("click", () =>{
    modal_full.classList.add("visible")
   
})


// modal photo

let modal_photo_x = document.getElementById("modal_photo_x");
let modal_photo = document.getElementById("modal_photo");
let AcilaSekil = document.getElementsByClassName("AcilaSekil")
let modalinSekli=document.getElementById("modalinSekli")
let sekiller =document.querySelectorAll("img")

function main(item) {
    modal_photo.classList.remove("visible")
     modalinSekli.src=item
}

    console.log(AcilaSekil);
[...AcilaSekil].forEach(index => {
    index.addEventListener("click", () => {
        main(index.getAttribute("src"));
    })
});


modal_photo_x.addEventListener("click", () => {
    modal_photo.classList.add("visible")
})


// navbarin scrolda rengini deyisir
window.addEventListener("scroll", () => {
    let y = window.scrollY;
    if (y > 0) {
        document.getElementById("navbar").classList.add("bg_black")
    } else {
         document.getElementById("navbar").classList.remove("bg_black")
    }
})