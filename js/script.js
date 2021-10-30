const menuIcon = document.querySelector(".menu");
const navigation = document.querySelector("nav");

menuIcon.addEventListener("click", function(){
    navigation.classList.toggle("menu-visibility");
})