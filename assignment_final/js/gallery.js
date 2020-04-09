var images = document.getElementById('galleryImages');
var caption = document.getElementById('galleryCaption');
var elemetns = document.getElementById('galleryColumn');

fetch('./photos.json')

.then(function (res) {
    res.json().then(function (json) {
        json.forEach(function (el, i) {
            var image = document.createElement('img');

            image.setAttribute('src', el.img);
            image.setAttribute('alt', el.caption);
            image.setAttribute('title', el.caption);

            images.appendChild(image);
        });
        setupCarousel(json);
    });
});

var i;

function gridList () {
    for (i = 0 < elemetns.clientHeight; i++) {
        elements[i].style.width = "100%";
    }
}

function gridView () {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.width = "50%";
    }
}