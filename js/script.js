const linksInternos = document.querySelectorAll('.js-navigator a[href^="#"]');

function scrollSuave(event){
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const destinoScroll = document.querySelector(href);

    destinoScroll.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
}



linksInternos.forEach(function(item){
    item.addEventListener('click', scrollSuave)
})