let invia= document.querySelector('#invia');
let titolo= document.querySelector('#titolo');
let descrizione= document.querySelector('#descrizione');
let articoli=document.querySelector('#articoli');

invia.addEventListener('click',()=>{
    let article=document.createElement('article');
    article.classList.add("card-custom")
    let date = new Date();
    let formatDate = date.toLocaleDateString()
    article.innerHTML=`
        <p>Titolo: ${titolo.value}</p>
        <p>Descrizione: ${descrizione.value}</p>
        <p> Pubblicato il: ${formatDate}</p>`
    
    articoli.appendChild(article)
})