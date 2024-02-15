function transfer(sourceListId, destinationId, arrowIdToRemove, menuClass, inputIdToClear) {
    var sourceList = document.getElementById(sourceListId);
    var destinationList = document.getElementById(destinationId);

    var selectedItems = sourceList.querySelectorAll('.transfer');

    selectedItems.forEach(function(item) {
        item.classList.remove('transfer'); // Убираем класс 'transfer'
        destinationList.appendChild(item); // Перемещаем элемент в другой список
    });

    // Закрываем выпадающее меню после выбора
    if (menuClass) {
        removeActClass(menuClass);
    }

    // Если передан идентификатор стрелочки, убираем класс btn_arrow_activate
    if (arrowIdToRemove) {
        removeArrowActivateClass(arrowIdToRemove);
    }
}


function moveListItem(sourceListId, destinationListId) {
    var sourceList = document.getElementById(sourceListId);
    var destinationList = document.getElementById(destinationListId);

    return function(event) {
        var target = event.target.closest('li');
        if (target) {
            var inputText = target.querySelector('.input');
            var inputValue = target.querySelector('.numberDisplay');

            if ((inputText && !inputText.value.trim()) || (inputValue && parseInt(inputValue.value) === 0)) {
                // Если значение инпута текста пустое или значение числового инпута равно нулю,
                // перемещаем пункт обратно в исходный список
                target.parentNode.removeChild(target);
                destinationList.appendChild(target);

                // Проверяем, пуст ли список, и скрываем его, если это так
                if (destinationList.childElementCount === 0) {
                    destinationList.style.display = 'none';
                }
            }
        }
    };
}

document.getElementById('js_cl_13_selected').addEventListener('click', moveListItem('js_cl_13_selected', 'js_cl_13_list'));
document.getElementById('js_cl_33_selected').addEventListener('click', moveListItem('js_cl_33_selected', 'js_cl_33_list'));
document.getElementById('js_cl_43_selected').addEventListener('click', moveListItem('js_cl_43_selected', 'js_cl_43_list'));
document.getElementById('js_cl_53_selected').addEventListener('click', moveListItem('js_cl_53_selected', 'js_cl_53_list'));
