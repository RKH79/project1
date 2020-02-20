let slideBox = document.querySelectorAll("#slideBox .slide");
slideBox[0].style.display = 'block';
let activeSlide = 0;

function slide() {
    activeSlide++;
    if (activeSlide > 4)
        activeSlide = 0;
    if (activeSlide === 0)
        slideBox[4].style.display = 'none';
    else
        slideBox[activeSlide - 1].style.display = 'none';
    slideBox[activeSlide].style.display = 'block';
    //console.log(activeSlide);
}
setInterval(slide(), 1000);