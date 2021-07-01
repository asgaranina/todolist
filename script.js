//TODO

document.addEventListener('DOMContentLoaded', function() {

    let input = document.getElementById('item-add-input');
    let btn = document.getElementById('item-add-btn');
    let inputValue;
    let toDoList = document.getElementsByClassName('list__todo');
    let doneList = document.getElementsByClassName('list__done');
    let itemsToDo = [];
    let itemsDone = [];
    let toDoListItem = document.getElementsByClassName('list__todo-item');
    let doneListItem = document.getElementsByClassName('list__done-item');
    
    function takeInputValue() {
        inputValue = input.value;
    }

    function addItemToDoList(value) {
        let li = document.createElement('li');
        li.classList.add('list__todo-item');
        li.textContent = value;
    }

    function btnClick() {
        if (!inputValue) {
            return alert('Заполни поле!');
        }
        itemsToDo.push(inputValue);
    }

    input.addEventListener('input', takeInputValue);
    btn.addEventListener('click', btnClick);
    
});