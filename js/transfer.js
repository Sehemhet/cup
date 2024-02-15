function transfer(sourceListId, destinationId) {
    var sourceList = document.getElementById(sourceListId);
    var destinationList = document.getElementById(destinationId);

    var selectedItems = sourceList.querySelectorAll('.transfer');

    selectedItems.forEach(function(item) {
        item.classList.remove('transfer'); // Убираем класс 'transfer'
        destinationList.appendChild(item); // Перемещаем элемент в другой список
    });
}

document.getElementById('js_cl_13_selected').addEventListener('click', function(event) {
    var target = event.target.closest('li');
    if (target) {
        var inputText = target.querySelector('.input');
        var inputValue = target.querySelector('.numberDisplay');

        if ((inputText && !inputText.value.trim()) || (inputValue && parseInt(inputValue.value) === 0)) {
            // Если значение инпута текста пустое или значение числового инпута равно нулю,
            // перемещаем пункт обратно в исходный список
            target.parentNode.removeChild(target);
            document.getElementById('js_cl_13_list').appendChild(target);

            // Проверяем, пуст ли список js_cl_13_selected, и скрываем его, если это так
            var selectedList = document.getElementById('js_cl_13_selected');
            if (selectedList.childElementCount === 0) {
                selectedList.style.display = 'none';
            }
        }
    }
});

