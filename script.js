const inText = document.querySelector('#text-input');
const outText = document.querySelector('#meme-text');
const btfire = document.querySelector('#fire');
const btwater = document.querySelector('#water');
const btearth = document.querySelector('#earth');
const borderBox = document.querySelector('#meme-image-container');
const imageSrc = document.querySelector('#meme-image');
const image1 = document.querySelector('#meme-1');
const image2 = document.querySelector('#meme-2');
const image3 = document.querySelector('#meme-3');
const image4 = document.querySelector('#meme-4');

function makeMeme() {
  outText.innerHTML = inText.value;
}

function makeMemeImage() { // Referencia desta função: https://www.youtube.com/watch?v=9vGFqFbU--c
  const imagem = document.querySelector('#meme-insert').files[0];
  const preview = document.querySelector('img');
  const reader = new FileReader();
  reader.onload = function nomequalquerico() {
    preview.src = reader.result;
  };
  if (imagem) {
    reader.readAsDataURL(imagem);
  } else {
    preview.src = '';
  }
}

function changeBorder(event) {
  borderBox.style.border = event.target.style.border;
}

function getMeme(event) {
  imageSrc.src = event.target.src;
}

makeMemeImage();

inText.addEventListener('input', makeMeme);
btfire.addEventListener('click', changeBorder);
btwater.addEventListener('click', changeBorder);
btearth.addEventListener('click', changeBorder);
image1.addEventListener('click', getMeme);
image2.addEventListener('click', getMeme);
image3.addEventListener('click', getMeme);
image4.addEventListener('click', getMeme);
