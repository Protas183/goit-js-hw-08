// Описан в документации
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";


import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galerryContainer = document.querySelector('.gallery');
const imgCards = createImgCards(galleryItems);

galerryContainer.insertAdjacentHTML("beforeend", imgCards);
function createImgCards(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `<a class="gallery__item" href="${original}">
                        <img class="gallery__image" src="${preview}" alt="${description}" />
                    </a>`;
        })
        .join('');
}

let gallery = new SimpleLightbox('.gallery a',{captionsData: 'alt', captionDelay: 250, });


