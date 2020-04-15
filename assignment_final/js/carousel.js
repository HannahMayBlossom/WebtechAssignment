var images = document.getElementById('carouselImages');
var caption = document.getElementById('carouselCaption');
var prev = document.getElementById('carouselPrev');
var next = document.getElementById('carouselNext');

fetch('js/photos.json')

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

function setupCarousel(json) {
    var imageCount = images.childElementCount;
    var currentImage = 1;
    var imageWidth = images.getElementsByTagName('img')[0].clientWidth;


    prev.addEventListener('click', function (e) {
        e.preventDefault()
        if (currentImage != 1) {
            --currentImage;

            images.style.marginLeft = imageWidth - (currentImage * imageWidth) + 'px';
        }

        caption.innerText = json[currentImage - 1].caption;
    });

    next.addEventListener('click', function (e) {
        e.preventDefault()
        if (currentImage != imageCount) {
            ++currentImage;
            images.style.marginLeft = imageWidth - (currentImage * imageWidth) + 'px';
        }

        caption.innerText = json[currentImage - 1].caption;
    });


    caption.innerText = json[currentImage - 1].caption;
};
