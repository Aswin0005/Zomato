const elementSelect = document.querySelectorAll(".js-delivery-options-button");

elementSelect.forEach((element,i) => {
    elementSelect[i].addEventListener("click", () => {
  
      elementSelect.forEach(el=> el.classList.remove("after-clicking"))
      
      elementSelect[i].classList.add("after-clicking");
    });
  } ) 