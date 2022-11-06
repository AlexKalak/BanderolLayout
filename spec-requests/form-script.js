{
const body = document.querySelector('body')
const modalWindow = document.querySelector('.new-spec-request-modal-window')

const choosePackageButton = document.querySelector('.choose-package')
const formPackageList = document.querySelector('.form__package-list')
const form =  document.querySelector('.form__container')
const packageActions = document.querySelector('.package-actions')

const wholePackageButton = document.querySelector('.package-action__button-whole-package')
const wholePackageActionsList = document.querySelector('.whole-package__actions-list')

const chooseProductButton = document.querySelector('.package-action__button-choose-products')

const choosenProductsBlock = document.querySelector('.choosen-products')
const productActions = document.querySelector('.product__actions')

choosePackageButton.addEventListener('click', event => {
    form.classList.remove('visible')
    formPackageList.classList.add('visible')
})

formPackageList.addEventListener('click', event => {
    if(event.target.closest('li')){
        const package = event.target.closest('li').innerHTML
        choosePackageButton.innerHTML = package;
        
        form.classList.add('visible')
        formPackageList.classList.remove('visible')
        
        packageActions.classList.add('visible')
    }
})
////////////////////////
wholePackageButton.addEventListener('click', event => {
    form.classList.remove('visible')
    wholePackageActionsList.classList.add('visible')
})
/////////////////////////////////
chooseProductButton.addEventListener('click', () => {
    form.classList.remove('visible')
    productActions.classList.add('visible')
})
}
