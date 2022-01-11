// mobileClick part start 
const mobileClick = document.querySelector("#moblieMenuClick");

mobileClick.addEventListener("click", function () {
    this.querySelector("i").classList.toggle("fa-times");
    
    const moblileClickWrap = document.querySelector(".menu");
    
    moblileClickWrap.classList.toggle("showMobileMenu");
})
// mobileClick part end 


window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})


// btncrollTop start
const btnScrollTop = document.querySelector('#btnScrollToTop');
btnScrollTop.addEventListener('click', function () {
    window.scrollTo(0, 0);
});
// btnscrollTop end