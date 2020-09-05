const lightBox = document.getElementById('light-box');
const lightBoxBody = document.getElementById('light-box-body');
const lightBoxView = document.getElementById('light-box-view');
document.getElementById('light-box-close').onclick = function () {
    lightBoxView.style.display = 'none';
    lightBoxBody.innerHTML = '';

};
const children = lightBox.children;
let current;
let images = [];
for (let index = 0; index < children.length; index++) {
    images[index] = children[index].firstElementChild;
    children[index].firstElementChild.addEventListener('click', function (event) {
        lightBoxView.style.display = 'block';
        lightBoxBody.append(event.target.cloneNode());
        current = event.target;
    });
}
function nextImage() {
    for (let index = 0; index < children.length; index++) {
        if (index === children.length - 1) {
            index = 0;
            current = images[index];
        }
        if (images[index] === current) {
            lightBoxBody.innerHTML = '';
            lightBoxBody.append(images[++index].cloneNode());
            current = images[index];
            return 0;
        }
    }
}

function previousImage() {
    for (let index = children.length - 1; index >= 0; index--) {
        if (index === 0) {
            index = children.length - 1;
            current = images[index];
        }
        if (images[index] === current) {
            lightBoxBody.innerHTML = '';
            lightBoxBody.append(images[--index].cloneNode());
            current = images[index];
            return 0;
        }
    }
}
