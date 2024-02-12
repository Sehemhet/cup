function liveSearch(elementId, searchText) {
    let input = searchText.toUpperCase();
    let listItems = document.querySelectorAll(`#${elementId} .list-item`);

    listItems.forEach(item => {
        let textValue = item.innerText || item.textContent; // Поменял местами
        let shouldBeVisible = textValue.toUpperCase().includes(input);

        if (shouldBeVisible) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}


function liveSearchName(className) {
    var input, filter, items, i, actionSpan, txtValue;
    input = document.getElementById('liveSearch_' + className.replace('id_report_post_item_', ''));
    filter = input.value.toUpperCase();
    items = document.getElementsByClassName('id_report_post_item');

    for (i = 0; i < items.length; i++) {
        actionSpan = items[i].getElementsByClassName(className)[0];
        txtValue = actionSpan.textContent || actionSpan.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            items[i].style.display = ""; // Показываем элемент
        } else {
            items[i].style.display = "none"; // Скрываем элемент
        }
    }
}
