/*
These are references for the DOM Elements. getElementById is used so that we can recall that ID eg. carouselImages for further use, so the code
knows what to effect specifically. 
var is a declaration and is 'processed' before the code is ran. This is used so again, the code knows what exactly to affect. 
*/

var images = document.getElementById('carouselImages');
var caption = document.getElementById('carouselCaption');
var prev = document.getElementById('carouselPrev');
var next = document.getElementById('carouselNext');

/*
fetch runs, in my case while creating this on a local server. I created a json file with my images in and 'fetched' it here. 
It allows us to manipulate the files we created with json easily. The '.then' function is a 'promise' so it promises to return the information we stored. 
'res' is a response to these files and the ojects inside them 
forEach is a for loop that loops through the code every time it is initiated. In this case, it goes through the code for each object. 
it loops over for the element and i. 
the next var, is createElement and in this case its an img, image, so it creates a new element thats an image.
Naturally, the next few are setting attributes, src, the image picture, alt, the alternate text and the title, the caption that should sit underneath. 
Lastly, we need to append the child, which is the image in this case to the thing we're building. 
After all this is done, we need to set up a function to do all this in. In this case, 'setupCarousel'. 
*/

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

/*
Here is where the function is defined and created. 
I needed to set new var- variables, to be able to manipulate the files further so I can get them to sit right in the carousel. 
childElementCount keeps track of the number of children(images) in the element (carousel)
currentImage, is pretty self explanitory as it keeps track of the image appearing in the carousel.
the last var, sets the width, again obviously, I had set this in css but I could here but due to time contraints I did not. cilentWidth is what sets this
If I had not set something in css or even here, it would return zero automatically and if I had a lot of images, I could even end up with a scroll bar. 
*/


function setupCarousel(json) {
    var imageCount = images.childElementCount;
    var currentImage = 1;
    var imageWidth = images.getElementsByTagName('img')[0].clientWidth;

/*
This next bit of code is for the 'previous' button to flick through the images. 
It is an anonymous function that isn't able to be referenced later on. 
preventDefault, means that it is a non-cancelable event. It prevents the function from not happening, in this case the button click
the next line means that if the image does not equal image 1, or the first image in the json file. 
The next line moves the image using the imageWidth as a base to say how far to move it. 
Lastly, the line states how to change the caption with each click of the button. When the button is clicked the img and cpation must change however many clicks taken.
*/


    prev.addEventListener('click', function (e) {
        e.preventDefault()
        if (currentImage != 1) {
            --currentImage;

            images.style.marginLeft = imageWidth - (currentImage * imageWidth) + 'px';
        }

        caption.innerText = json[currentImage - 1].caption;
    });

/*
This code is the same as it's the click function for next rather than prev, which is why there is ++ currentImage, as it goes up the numbers rather than down. 
the last line of the code, not counting the brackets, updates the caption before it loads. 
*/

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
