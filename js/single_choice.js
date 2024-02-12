function single_choice(event, targetId, sourceSelector, menuClass, toggleClass, inputIdToClear, arrowIdToRemove) {
    let item = event.target.closest(sourceSelector);
    if (item) {
        let selectedElement = document.getElementById(targetId);
        let itemId = item.getAttribute('data-id');
        let itemName = item.textContent;

        if (selectedElement) {
            // Проверяем, что значение не "Оберіть", прежде чем обновить выбранное значение
            if (itemName !== 'Оберіть') {
                selectedElement.textContent = itemName;
            }
        }

        // Закрываем выпадающее меню после выбора
        removeActClass(menuClass);

        // Очищаем поле ввода и обновляем список
        clearInput(inputIdToClear);

        // Если передан идентификатор стрелочки, убираем класс btn_arrow_activate
        if (arrowIdToRemove) {
            removeArrowActivateClass(arrowIdToRemove);
        }
    }
}

function moveInputToSelected(inputId, selectedId, menuCloseId, searchCleanId, arrowBackId) {
    let newItemInput = document.getElementById(inputId);
    let selectedElement = document.getElementById(selectedId);
    selectedElement.innerHTML = ''; // Очищаем содержимое выбранного элемента
    selectedElement.appendChild(newItemInput); // Перемещаем поле ввода внутрь выбранного элемента
    newItemInput.focus(); // Устанавливаем фокус на поле ввода

    // Закрываем выпадающее меню после выбора
    removeActClass(menuCloseId);

    // Очищаем поле ввода и обновляем список
    clearInput(searchCleanId);

    // Если передан идентификатор стрелочки, убираем класс btn_arrow_activate
    if (arrowBackId) {
        removeArrowActivateClass(arrowBackId);
    }
}
