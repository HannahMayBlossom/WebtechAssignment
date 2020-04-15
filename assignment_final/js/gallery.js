/*
For the top part of the code see Carousel.js.
*/
var images = document.getElementById('galleryImages');
var caption = document.getElementById('galleryCaption');

fetch('js/photos.json')

.then(function (res) {
    res.json().then(function (json) {
        json.forEach(function (el, i) {
            /*Created variable photoframe to encompass the images and captions so I can manipulate them seperately. Each item is fetched from the json file
and placed within the frame.
appendChild(image) inserts the images into the frame, 
createElement (p), creates the element called p for the captions to go in
appendChild(caption) creates the text in the frame
caption.appendChild, places the captions to their correct place using the captions created in the json file
photoframe.appendchild inserts the captions into the framm itself
and lastly the images are placed in the frame as well. 

*/
            var photoFrame = document.createElement('div');

            var image = document.createElement('img');

            image.setAttribute('src', el.img);
            image.setAttribute('alt', el.caption);
            image.setAttribute('title', el.caption);

            photoFrame.appendChild(image);
            var caption = document.createElement("p")

            var photoCaption = document.createTextNode(el.caption);
            caption.appendChild(photoCaption);
            photoFrame.appendChild(caption);
            images.appendChild(photoFrame);
        });
        
    });
});

var i;
/*
the function works, by setting every element to 100%
*/
function gridList () {
    for (i = 0; i < elements.length; i++) {}
        elements[i].style.width = "100%";
}
