//function handleManualInput(inputElement) {
//    let listItem = inputElement.closest('li');
//    let numberSpan = listItem.querySelector('.item_number');
//    let maxQuantity = parseInt(numberSpan.getAttribute('data-max'));
//
//    let currentValue = parseInt(inputElement.value);
//    currentValue = Math.max(0, Math.min(currentValue, maxQuantity));
//
//    inputElement.value = currentValue;
//    numberSpan.textContent = maxQuantity - currentValue;
//}
//
//
//let selectedItems = []; // Массив для хранения выбранных элементов
//
//function multiple_choice(itemId) {
//    // Проверяем, выбран ли уже элемент
//    if (!selectedItems.includes(itemId)) {
//        selectedItems.push(itemId); // Добавляем элемент в массив выбранных, если его нет там
//    } else {
//        selectedItems = selectedItems.filter(id => id !== itemId); // Убираем элемент из массива, если он уже выбран
//    }
//
//    // Обновляем содержимое целевого контейнера
//    updateSelectedContainer();
//}
//
//function updateSelectedContainer() {
//    let selectedContainer = document.getElementById('js_cl_13_selected');
//    selectedContainer.innerHTML = ''; // Очищаем содержимое целевого контейнера
//
//    // Добавляем выбранные элементы в целевой контейнер
//    selectedItems.forEach(itemId => {
//        let selectedItem = document.createElement('div');
//        selectedItem.textContent = document.querySelector(`li[id-data="${itemId}"]`).textContent.trim();
//        selectedContainer.appendChild(selectedItem);
//    });
//}
