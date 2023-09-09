const elementSelect = document.querySelectorAll('.js-delivery-options-button');
elementSelect.forEach((onClicking,index) => { 
    onClicking.addEventListener('click',() =>  {
        onClicking.classList.add("after-clicking");
})
});
