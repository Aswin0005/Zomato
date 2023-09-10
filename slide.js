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