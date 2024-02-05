function openMenu(elementClass, arrowId) {
    var elements = document.getElementsByClassName(elementClass);

    Array.from(elements).forEach(function(element) {
        var isActive = element.classList.toggle('act');

        // Применяем/убираем класс btn_arrow_activate только к указанной стрелочке
        var arrowElement = document.getElementById(arrowId);
        if (arrowElement) {
            arrowElement.classList.toggle('btn_arrow_activate', isActive);

            // Если меню не активно, убираем класс btn_arrow_activate
            if (!isActive) {
                arrowElement.classList.remove('btn_arrow_activate');
            }
        }
    });
}


