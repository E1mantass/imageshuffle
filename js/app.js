
let image = 12;

let gallery = document.querySelector(".gallery");
let button_show_gallery = document.querySelector('#button_show_gallery');
let button_shuffle_gallery = document.querySelector('#button_shuffle_gallery');

for (let i = 0; i < image; i++) {
    let img = document.createElement('img');
    img.src = `img/${i}.jpeg`;
    gallery.appendChild(img);
    let is_toggled = false;
    img.addEventListener("dblclick", (e) => {
        is_toggled = !is_toggled
        if(is_toggled == true)
        {
            img.src = `img/default.jpg`;
        }   else{
            img.src = `img/${i}.jpeg`
        }
    })
};

button_show_gallery.addEventListener('click', (e) => {
    gallery.style.display = "grid";
    button_show_gallery.style.display = "none";
});

button_shuffle_gallery.addEventListener('click', (e) => {
    for (let i = gallery.children.length; i >= 0; i--) {
        gallery.appendChild(gallery.children[Math.floor(Math.random() * i)]);
    }
});