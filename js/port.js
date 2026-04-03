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