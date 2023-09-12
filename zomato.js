import {foodPic} from "./foods.js";

const elementSelect = document.querySelectorAll(".js-delivery-options-button");

elementSelect.forEach((element,i) => {
    elementSelect[i].addEventListener("click", () => {
  
      elementSelect.forEach(el=> el.classList.remove("after-clicking"))
      
      elementSelect[i].classList.add("after-clicking");
    });
  } ) 

//sliding animation
  const content = document.querySelector('.dish-name-slide-container');
let dishesinnerHTML = '';

foodPic.forEach((foodsPic) => {
    dishesinnerHTML += `
    <div class="dish-name-cointainer">
    <img src="${foodsPic.image}">
    <p>${foodsPic.name}</p>
</div>
    `
})

content.innerHTML += dishesinnerHTML;

const slide = document.querySelector('.dish-name-slide-container')

const arrowIcons = document.querySelectorAll('.slide-section span');

const firstImg = document.querySelectorAll('.dish-name-cointainer')[0];


let firstImgWidth = firstImg.clientWidth + 30;



arrowIcons.forEach((icon) => {
    icon.addEventListener('click', () => {
        if(icon.id == "left"){
            slide.scrollLeft -= firstImgWidth;
        } else{
            slide.scrollLeft += firstImgWidth;
        }
    })
})

//