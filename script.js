let ImgCopo = document.querySelector (".starbucks")
let verde = document.getElementById ('verde')
let rosa = document.getElementById ('rosa')
let caramelo = document.getElementById ('caramelo')
let circulo = document.querySelector (".circulo")

caramelo.addEventListener("click",() => {
    ImgCopo.src = "./img/img2.png"
    circulo.style.background = "#eb7495"
})

verde.addEventListener("click", () => {
    ImgCopo.src = "./img/img1.png"
    circulo.style.background = "#017143"
})

rosa.addEventListener("click", () => {
    ImgCopo.src = "./img/img3.png"
    circulo.style.background = "#d752b1"
})