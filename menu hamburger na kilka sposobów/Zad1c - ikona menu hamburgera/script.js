 const burger = document.querySelector(".burger");
 const burgerIcon = document.querySelector(".fa-bars");
 const xIcon = document.querySelector(".fa-times");
 const column = document.querySelector("aside");

 burger.addEventListener("click", function () {

     burgerIcon.classList.toggle("show");
     xIcon.classList.toggle("show");
     column.classList.toggle("show");


 })