const button = document.querySelector(".button");
const body = document.querySelector("body");
const header = document.querySelector("header");
const container = document.querySelector(".container-user");
const containerIcons = document.querySelector(".container-icons");
const containerAnime = document.querySelector(".container-anime");
const navigation = document.querySelector(".navigation");


button.addEventListener("click", () => {
    body.classList.toggle("light-theme");
    header.classList.toggle("header-light");
    container.classList.toggle("container-img");
    containerIcons.classList.toggle("container-light");
    containerAnime.classList.toggle("container-anime-light");
    navigation.classList.toggle("navigation-light");
});
