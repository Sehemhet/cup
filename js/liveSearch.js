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
