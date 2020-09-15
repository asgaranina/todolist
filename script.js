// Когда первый раз открыл:
// Пунктов нет ни в todo, ни в done
// Подсказка что надо заполнить
let listItems = document.getElementsByTagName('li');

if (listItems.length == 0) {
    hiString = document.createElement('h3');
    hiString.innerHTML = 'Привет! Введи текст в поле ниже и начни заполнять список';
    ul.append(hiString);
}

// Отменить отмечание:
// 1. Сделать бокс не отмеченным
// 2. Пропадает зачеркивание (класс doneListItem -> toDoListItem)
// 3. Переносится снова в список todo

// Когда все сделано:
// 1. Показать хвалебную надпись с картинкой, что все сделано
// 2. Очистить список сделанного


// Добавление нового пункта:
// 1. Получить даннные из инпута
// 2. Добавить текст новым элементом списка в toDoList
// 3. Очищать инпут
let submit = document.getElementById('submit');

submit.onclick = function() {
    let inputValue = document.getElementById('toDoInput').value;
    toDoItem = document.createElement('li');
    toDoItem.innerHTML = `<input type="checkbox" class="checkBtn"> <span class="listItem toDoListItem"> ${ inputValue }</span>`
    ul.append(toDoItem);
    hiString.remove();
    document.getElementById('toDoInput').value = "";
};

// Отмечание сделанного:
// 1. Отметить пункт зачеркнутым в списке туду (когда инпут чекбокс становится checked, нужно поменять класс toDoListItem ->
// doneListItem)
// 2. Удалить пункт из списка туду 
// 3. Перенести пункт в список done (зачеркнут)

let checkBtn = document.getElementsByClassName('.checkBtn');

checkBtn.onclick = function() {
    
}
