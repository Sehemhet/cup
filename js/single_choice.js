function single_choice(event, targetId, sourceSelector, menuClass, toggleClass, inputIdToClear) {
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
    }
}
