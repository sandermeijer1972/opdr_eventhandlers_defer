const buttonGeklikt = document.getElementById("mybutton");
buttonGeklikt.addEventListener('click', function() {
    alert("Button clicked!");
});
const bodyClr = document.getElementById("body-bg");
const changeColor = document.getElementById("change-background");
changeColor.addEventListener('click', function() {
    bodyClr.classList.toggle("red-background");
});

