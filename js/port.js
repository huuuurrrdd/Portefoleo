// const imagens = document.querySelector('.imagens');

// window.addEventListener('wheel', (e) => {
//     const atStart = imagens.scrollLeft === 0;
//     const atEnd = imagens.scrollLeft >= imagens.scrollWidth - imagens.clientWidth;

//     // caso esteja dentro da zona de scroll horizontal
//     if(!atEnd || (atEnd && e.deltaY < 0)){
//         if(!atStart || e.deltaY > 0){
//             e.preventDefault();
//             imagens.scrollLeft += e.deltaY * 10; 
//         }
//     }
// }, { passive: false })

// document.querySelectorAll(".imagens").addEventListener("wheel", function(e) {
//     e.preventDefault();
// }, { passive: false })

// document.querySelector(".slide").addEventListener("wheel", function(e) {
//     e.preventDefault();
// }, { passive: false })


const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const direction = button.dataset.carouselButton === "next" ? "next" : "prev"
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        
        const slides = button
        .closest("[data-carousel]")
        .querySelector('[data-slides]')

        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset

        //se ofset é 1 -> movimento para esquerda, se -1 direita
        //mover active slide

        if(newIndex < 0) newIndex = slides.children.length - 1
        if(newIndex >= slides.children.length) newIndex = 0

        const newSlide = slides.children[newIndex]

        // clean up direction from all slides first
        ;[...slides.children].forEach(slide => {
            delete slide.dataset.direction
        })

        newSlide.dataset.direction = direction
        newSlide.dataset.active = true;
        delete activeSlide.dataset.active
        // slides.children[newIndex].dataset.active = true // coloca o slide ativo
        // delete activeSlide.dataset.active



        
    })
})