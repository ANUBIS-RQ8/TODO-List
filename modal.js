// Очистка инпутов
const inputs = document.querySelectorAll('input');
const textArea = document.querySelectorAll('textarea');

let clearInputs = function () {
    for(input of inputs) {
        input.value = '';
    }
}
let clearTextArea = function () {
    for(textarea of textArea) {
        textarea.value = '';
    }
}


// Кнопка добавления задачи
const add = document.querySelector('.add-task');
const modal = document.querySelector('.modal');
add.addEventListener('click', function(){
    modal.classList.add('open')
})

// Кнопки закрытия модального окна
const close = document.querySelector('.close');
const btnClose = document.querySelector('.btn.close');
close.addEventListener('click', function(){
    modal.classList.remove('open');
    clearInputs();
    clearTextArea();
});
btnClose.addEventListener('click', function(){
    modal.classList.remove('open');
    clearInputs();
    clearTextArea();
})

