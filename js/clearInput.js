function clearInput(inputId) {
    var inputElement = document.getElementById(inputId);
    if (inputElement) {
        inputElement.value = '';

        // Запускаем liveSearch для обновления списка
        liveSearch(inputId.replace('liveSearch_', ''), '');
    }
}
