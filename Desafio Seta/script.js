const div = document.querySelector('div')
const img = document.createElement("img");


function addSetinha() {
// função que adiciona a setinha

img.setAttribute('src' , 'img/seta.png');
img.setAttribute('width','12px');
div.appendChild(img)


}

function removeSetinha() {
// função que remove a setinha

div.removeChild(img)
}