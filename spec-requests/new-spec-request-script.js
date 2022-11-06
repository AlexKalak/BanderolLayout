{
const newSpecRequestButton = document.querySelector('.new-spec-request-button__container');
const body = document.querySelector('body')
const modalWindow = document.querySelector('.new-spec-request-modal-window')
const closeButton = document.querySelector('.close')

const form = document.querySelector('.form__container')
const choosePackageButton = document.querySelector('.choose-package')
const formPackageList = document.querySelector('.form__package-list')
const wholePackageActionsList = document.querySelector('.whole-package__actions-list')
const packageActions = document.querySelector('.package-actions')
const productActions = document.querySelector('.product__actions')

newSpecRequestButton.addEventListener('click', event => {
    body.classList.add('modal_opened')
    modalWindow.classList.add('visible')
})

closeButton.addEventListener('click', event => {
    form.classList.add('visible')
    choosePackageButton.innerHTML = '<button class="choose-package-button">Выбрать посылку</button>'

    body.classList.remove('modal_opened')
    modalWindow.classList.remove('visible')
    formPackageList.classList.remove('visible')
    wholePackageActionsList.classList.remove('visible')
    packageActions.classList.remove('visible')
    productActions.classList.remove('visible')
})
}