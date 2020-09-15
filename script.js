let listItems = document.getElementsByTagName('li');
let submit = document.getElementById('submit');

//добавление нового дела в список, удаление приветственного сообщение, очистка инпута
function addNewString() {
    let inputValue = document.getElementById('toDoInput').value;
    toDoItem = document.createElement('li');
    toDoItem.innerHTML = `<span class="listItem toDoListItem" id="toDoListItem" onclick="checkThingsDone()"> ${ inputValue }</span>`
    ul.append(toDoItem);
    hiString.remove();
    document.getElementById('toDoInput').value = "";}

// условие появления приветственного сообщения (если вообще нет элементов списка)
if (listItems.length == 0) {
    hiString = document.createElement('h3');
    hiString.innerHTML = 'Hi! Use it wisely! Do not forget to rest!';
    ul.append(hiString);
}

// навешивание события добавления пункта на кнопку ОК
submit.onclick = addNewString;

// Отмечание сделанного:
// 1. Отметить пункт зачеркнутым в списке туду (когда инпут чекбокс становится checked, нужно поменять класс toDoListItem ->
// doneListItem)
// 2. Удалить пункт из списка туду 
// 3. Перенести пункт в список done (зачеркнут)

//checkBox = document.getElementsByID('checkbox');

function checkThingsDone() {
    let doneThingToRemove = document.getElementById('toDoListItem');
    let RemoveThing = doneThingToRemove.cloneNode(true);
    let doneList = document.getElementById('doneList');
    doneThingToRemove.classList.add('doneListItem');
    doneList.append(RemoveThing);
    setTimeout(() => doneThingToRemove.remove(), 500);
}


// Отменить отмечание:
// 1. Сделать бокс не отмеченным
// 2. Пропадает зачеркивание (класс doneListItem -> toDoListItem)
// 3. Переносится снова в список todo

// Когда все сделано:
// 1. Показать хвалебную надпись с картинкой, что все сделано
// 2. Очистить список сделанного