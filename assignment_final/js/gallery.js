var images = document.getElementById('galleryImages');
var caption = document.getElementById('galleryCaption');
var elements = document.getElementById('galleryColumn');

fetch('js/photos.json')

.then(function (res) {
    res.json().then(function (json) {
        console.log(json)
        json.forEach(function (el, i) {
            var photoFrame = document.createElement('div');

            var image = document.createElement('img');

            image.setAttribute('src', el.img);
            image.setAttribute('alt', el.caption);
            image.setAttribute('title', el.caption);

            photoFrame.appendChild(image);

            var photoCaption = document.createTextNode(el.caption);
            photoFrame.appendChild(photoCaption);
            
            images.appendChild(photoFrame);
        });
        
    });
});

var i;

function gridList () {
    for (i = 0; i < elements.length; i++) {}
        elements[i].style.width = "100%";
}


