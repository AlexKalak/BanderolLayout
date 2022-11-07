{
const actionListArray = document.querySelectorAll('.action__list');
console.log(actionListArray)

actionListArray.forEach(actionList => actionList.addEventListener('click', (event) => {
    console.log('123')
    if(event.target.closest('.select__action')) {
        event.target.closest('.select__action').classList.toggle('selected')
    }
}))
}