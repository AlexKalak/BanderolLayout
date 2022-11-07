{
const body = document.querySelector('body');
body.addEventListener('click', (event) => {
    if(event.target.closest('card') && event.target.closest('card').querySelector('main')){
        event.target.closest('card').querySelector('main').classList.toggle('opened')
        event.target.closest('card').querySelector('header').classList.toggle('opened')
    }
})
}