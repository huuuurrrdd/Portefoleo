// const buttons = document.querySelectorAll("[data-carousel-button]")

// buttons.forEach(button => {
//     button.addEventListener("click", () => {
//         const direction = button.dataset.carouselButton === "next" ? "next" : "prev"
//         const offset = button.dataset.carouselButton === "next" ? 1 : -1
        
//         const slides = button
//         .closest("[data-carousel]")
//         .querySelector('[data-slides]')

//         const activeSlide = slides.querySelector("[data-active]")
//         let newIndex = [...slides.children].indexOf(activeSlide) + offset

//         //se ofset é 1 -> movimento para esquerda, se -1 direita
//         //mover active slide

//         if(newIndex < 0) newIndex = slides.children.length - 1
//         if(newIndex >= slides.children.length) newIndex = 0

//         const newSlide = slides.children[newIndex]

//         // clean up direction from all slides first
//         ;[...slides.children].forEach(slide => {
//             delete slide.dataset.direction
//         })

//         newSlide.dataset.direction = direction
//         newSlide.dataset.active = true;
//         delete activeSlide.dataset.active
//         // slides.children[newIndex].dataset.active = true // coloca o slide ativo
//         // delete activeSlide.dataset.active

        
//     })
// })


///// FUNÇÃO CARROSSEL ///////////////////////////////
function setupCarousel(buttonSelector, buttonDataKey) {
    const buttons = document.querySelectorAll(buttonSelector)

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.dataset[buttonDataKey] === "next" ? "next" : "prev"
            const offset = direction === "next" ? 1 : -1

            const slides = button
                .closest("[data-carousel]")
                .querySelector("[data-slides]")

            const activeSlide = slides.querySelector("[data-active]")
            let newIndex = [...slides.children].indexOf(activeSlide) + offset

            if(newIndex < 0) newIndex = slides.children.length - 1
            if(newIndex >= slides.children.length) newIndex = 0

            const newSlide = slides.children[newIndex]

            ;[...slides.children].forEach(slide => {
                delete slide.dataset.direction
            })

            newSlide.dataset.direction = direction
            newSlide.dataset.active = true
            delete activeSlide.dataset.active
        })
    })
}

setupCarousel("[data-carousel-button]", "carouselButton")
setupCarousel("[data-carousel-button-mobile]", "carouselButtonMobile")


///// SELEÇÃO LINGUAS ///////////////////////////////
//selecionar os elementos

let bt_pt = document.querySelector(".bt-pt")
let bt_en = document.querySelector(".bt-en")

let texto_pt = document.querySelectorAll(".pt")
let texto_en = document.querySelectorAll(".en")


    // texto_pt.forEach(element => {
    //     element.style.color = "blue"
    // });

    // texto_en.forEach(element => {
    //     element.style.color = "red"
    //     element.style.display = "block"
    // })


//texto: display: block e display: none

let lang = "pt"

if(lang == "pt"){
    bt_pt.style.backgroundColor = "#BAD3E7";
    bt_pt.style.color = "#000000";

    bt_en.style.backgroundColor = "#000000";
    bt_en.style.color = "#BAD3E7";
    
    texto_en.forEach(element => {
        element.style.display = "none"
    });

    texto_pt.forEach(element => {
        element.style.display = "block"
    });

}

if(lang == "en"){
    bt_en.style.backgroundColor = "#BAD3E7";
    bt_en.style.color = "#000000";

    bt_pt.style.backgroundColor = "#000000";
    bt_pt.style.color = "#BAD3E7";

    texto_en.forEach(element => {
        element.style.display = "block"
    });

    texto_pt.forEach(element => {
        element.style.display = "none"
    });

    // texto_en.style.display = "block"
    // texto_pt.style.display = "none"
}

bt_pt.addEventListener("click", () => {
    lang = "pt"
    // console.log(lang)
    bt_pt.style.backgroundColor = "#BAD3E7";
    bt_pt.style.color = "#000000";

    bt_en.style.backgroundColor = "#000000";
    bt_en.style.color = "#BAD3E7";

    texto_en.forEach(element => {
        element.style.display = "none"
    });

    texto_pt.forEach(element => {
        element.style.display = "block"
    });

})

bt_en.addEventListener("click", () => {
    lang = "en"
    // console.log(lang)
    bt_en.style.backgroundColor = "#BAD3E7";
    bt_en.style.color = "#000000";

    bt_pt.style.backgroundColor = "#000000";
    bt_pt.style.color = "#BAD3E7";

    texto_en.forEach(element => {
        element.style.display = "block"
    });

    texto_pt.forEach(element => {
        element.style.display = "none"
    });

})

// console.log(lang)

// CATEGORIAS PARA TRABALHOS ////////
let allworks = document.querySelectorAll(".work")
let workHighlight = document.querySelectorAll(".hightlight")
let workList = document.querySelector(".works")

//categorias
let website = document.querySelectorAll(".website")
let editorial = document.querySelectorAll(".editorial")
let brand = document.querySelectorAll(".brand")
let uxui = document.querySelectorAll(".uxui")
let game = document.querySelectorAll(".game")
let typography = document.querySelectorAll(".typography")
let sound = document.querySelectorAll(".sound")
let generative = document.querySelectorAll(".generative")
let artistic = document.querySelectorAll(".artistic")
let animation = document.querySelectorAll(".animation")

let allStateElements = [website, editorial, brand, uxui, game, typography, sound, generative, artistic, animation]
let allstates = ["website", "editorial", "brand", "uxui", "game", "typography", "sound", "generative", "artistic", "animation"]


//cada um dos botões
let btDefault = document.querySelector(".bt-default")

let btWebsite = document.querySelector(".bt-website")
let btEditorial = document.querySelector(".bt-editorial")
let btBrand = document.querySelector(".bt-brand")
let btUxui = document.querySelector(".bt-uxui")
let btGame = document.querySelector(".bt-game")
let btTypography = document.querySelector(".bt-typography")
let btSound = document.querySelector(".bt-som")
let btGenerative = document.querySelector(".bt-generative")
let btArtistic = document.querySelector(".bt-artistic")
let btAnimation = document.querySelector(".bt-animation")

//todos os bt topic
let btTopic = document.querySelectorAll(".bt-topic")
let btTopicOn = [false, false, false, false, false, false, false, false, false, false]


let state = "default"

//verificar se todos estao com display block (pode ter uns com flex)

function cleanWorks(){
        
    allworks.forEach(element => {
        element.style.display = "none"
    })
}

function changedState(){ //para sempre que há uma alteração do estado
    cleanWorks()

    if(state == "default"){
        workHighlight.forEach(element => {
            element.style.display = "block"
        })
        btDefault.style.backgroundColor = "#444A34"
        
        btTopic.forEach(bt => bt.style.backgroundColor = "") //reset color
        return
    }


    if(!btTopicOn.includes(true)){
        state = "default"
        changedState()
        return
    }


    btDefault.style.backgroundColor = "" // desativa bt default
    btTopic.forEach((bt, index) => {
        bt.style.backgroundColor = btTopicOn[index] ? "#444A34" : ""
    })

    
        allstates.forEach((stateName, index) => { // usa o index do "allstates" para o "allStateElements"
        if(btTopicOn[index]){ // verificar se é falso ou não
            allStateElements[index].forEach(element => {
                element.style.display = "block"
            })
        }
    })


}

changedState()

btDefault.addEventListener('click', (e) => {
    state = "default"
    btTopicOn = [false, false, false, false, false, false, false, false, false, false]
    changedState()
})

btTopic.forEach((button, index) => {
    button.addEventListener('click', (e) => {
        btTopicOn[index] = !btTopicOn[index] //toggle true/false
        state = "topics"
        changedState()
    })
})


if(state == "all"){

    allworks.forEach(element => {
        element.style.display = "block"
    })
}












