let changeColor = document.querySelector('#changeColor');
let paragrafi = document.querySelectorAll('p')
changeColor.addEventListener('click', ()=>{
    paragrafi.forEach(paragrafo=>{
        let r = Math.floor(Math.random()*(255 - 0 + 1) + 0)
        let g = Math.floor(Math.random()*(255 - 0 + 1) + 0)
        let b = Math.floor(Math.random()*(255 - 0 + 1) + 0)

        paragrafo.style.color = `rgb(${r}, ${g}, ${b})`
    })
})

let modifyParagraphs = document.querySelector('#Grassetto')
modifyParagraphs.addEventListener('click', ()=>{
    paragrafi.forEach(paragrafo=>{
        paragrafo.classList.toggle('bold')
    })
})


let ScompariParagraphs = document.querySelector('#Scompari')
ScompariParagraphs.addEventListener('click', ()=>{
    paragrafi.forEach(paragrafo=>{
        paragrafo.classList.toggle('display')
    })
})