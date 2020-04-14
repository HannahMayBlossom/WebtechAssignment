var images = document.getElementById('galleryImages');
var caption = document.getElementById('galleryCaption');
var elements = document.getElementById('galleryColumn');

fetch('js/photos.json')

.then(function (res) {
    res.json().then(function (json) {
        console.log(json)
        json.forEach(function (el, i) {
            var image = document.createElement('img');

            image.setAttribute('src', el.img);
            image.setAttribute('alt', el.caption);
            image.setAttribute('title', el.caption);

            images.appendChild(image);
        });
        setupGallery(json);
    });
});

var i;

function gridList () {
    for (i = 0; i < elements.length; i++) {}
        elements[i].style.width = "100%";
    }


