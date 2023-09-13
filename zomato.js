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

//API 

const accessPoint = 'https://api.edamam.com/api/recipes/v2/';
const app_id = 'f84c0adc';
const app_key = 'fb6dfdefbb8939996f47254b7b7b9a5c';
const type = 'public';
const diet = 'high-protein';
const URL = `${accessPoint}?app_id=${app_id}&app_key=${app_key}&type=${type}&diet=${diet}`

let foodDetailsConatiner = '';

async function foodData(){
    const response = await fetch(URL);
    const data = await response.json();
    const foodInfo = data.hits;
    foodInfo.forEach((foodDetails) => {
        const imageURL = foodDetails.recipe.images.REGULAR.url;
        console.log(imageURL);
        const cuisineType = foodDetails.recipe.cuisineType[0];
        console.log(cuisineType);
        const dishName = foodDetails.recipe.label;
        console.log(dishName);

        document.querySelector('.grid-container')
        .innerHTML += `<div class="foods-master-container">
        <img class ="food-image" src="${imageURL}">
        <p>${dishName}</p>
        <div class="des-price-container">
            <p>${cuisineType}</p>
            <p>₹350 for one</p>
        </div>
        <hr>
        <div class="safety-delivery-container">
            <img src="./Pics/deliverAssured.webp">
            <p>Follows all Max Safety measures to ensure your food is safe</p>
        </div>
    </div>
`
    })
}

console.log();

foodData();
