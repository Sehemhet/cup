function marking(listId) {
    var menuList = document.getElementById(listId); // Получаем список меню по его идентификатору
    if (menuList) {
        var menuItems = menuList.querySelectorAll('li'); // Получаем все элементы списка
        menuItems.forEach(function(item) {
            var input = item.querySelector('input'); // Находим элемент <input> внутри элемента списка
            if (input && input.value.trim() !== '' && input.value.trim() !== '0') {
                item.classList.add('transfer'); // Добавляем класс 'transfer' к найденному элементу <li>
            } else {
                item.classList.remove('transfer'); // Удаляем класс 'transfer', если значения пустые или равны нулю
            }
        });
    }
}
