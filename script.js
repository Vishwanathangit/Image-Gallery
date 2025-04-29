var container = document.querySelector(".container");
var containerimages = document.querySelector(".container__images");
var overlay = document.querySelector(".overlay");
var img1 = document.querySelector(".img1");
var img2 = document.querySelector(".img2");
var img3 = document.querySelector(".img3");
var imgone = document.querySelector(".imgone");
var imgtwo = document.querySelector(".imgtwo");
var imgthree = document.querySelector(".imgthree");
var closeBtn = document.querySelector(".close-btn");

imgone.addEventListener("click", function () {
    overlay.style.display = "flex";
    img1.style.display = "block";
});

imgtwo.addEventListener("click", function () {
    overlay.style.display = "flex";
    img2.style.display = "block";
});

imgthree.addEventListener("click", function () {
    overlay.style.display = "flex";
    img3.style.display = "block";
});

closeBtn.addEventListener("click", function () {
    overlay.style.display = "none";
    img1.style.display = "none";
    img2.style.display = "none";
    img3.style.display = "none";
    containerimages.style.display = "flex";
})