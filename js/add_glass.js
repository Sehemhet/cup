function add_glass(elementId) {
    var element = document.getElementById(elementId);
    var inputValue = element.textContent || element.innerText;

    if (inputValue.trim()) {
        // Если содержимое элемента не пусто, очищаем его и создаем input для ввода нового значения
        element.innerHTML = '<input type="text" class="inputClass fs16" placeholder="Введіть назву">';
        element.querySelector('input').focus(); // Для автоматического фокусирования на вновь созданном input
    } else {
        // Если содержимое элемента пусто, возвращаем исходный текст "Оберіть"
        element.textContent = 'Оберіть';
    }
}

function add_insert(elementId) {
    var element = document.getElementById(elementId);
    var inputValue = element.textContent || element.innerText;

    if (inputValue.trim()) {
        // Если содержимое элемента не пусто, очищаем его и создаем input для ввода нового значения
        element.innerHTML = '<input type="text" class="inputClass fs16" placeholder="Введіть назву">';
        element.querySelector('input').focus(); // Для автоматического фокусирования на вновь созданном input
    } else {
        // Если содержимое элемента пусто, возвращаем исходный текст "Оберіть"
        element.textContent = 'Оберіть';
    }
}

function add_master(elementId) {
    var element = document.getElementById(elementId);
    var inputValue = element.textContent || element.innerText;

    if (inputValue.trim()) {
        // Если содержимое элемента не пусто, очищаем его и создаем input для ввода нового значения
        element.innerHTML = '<input type="text" class="inputClass fs16" placeholder="Введіть назву">';
        element.querySelector('input').focus(); // Для автоматического фокусирования на вновь созданном input
    } else {
        // Если содержимое элемента пусто, возвращаем исходный текст "Оберіть"
        element.textContent = 'Оберіть';
    }
}