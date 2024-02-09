function Action() {
    var target = event.target;
    var sortingClass;

    if (target.classList.contains('sorting_action')) {
        sortingClass = 'id_report_post_item_action_name';
    } else if (target.classList.contains('sorting_name')) {
        sortingClass = 'id_report_post_item_name';
    } else if (target.classList.contains('sorting_count')) {
        sortingClass = 'id_report_post_item_count';
    } else if (target.classList.contains('sorting_master')) {
        sortingClass = 'id_report_post_item_master';
    }

    if (!sortingClass) return;

    var items = document.querySelectorAll('.id_report_post_item');
    var sortedItems = Array.from(items);

    if (target.dataset.sorted === 'ascending') {
        sortedItems.sort(function(a, b) {
            var textA = a.querySelector('.' + sortingClass).textContent.trim();
            var textB = b.querySelector('.' + sortingClass).textContent.trim();
            if (!isNaN(textA) && !isNaN(textB)) {
                return parseFloat(textA) - parseFloat(textB);
            } else {
                return textA.localeCompare(textB);
            }
        });
        target.dataset.sorted = 'descending';
    } else {
        sortedItems.sort(function(a, b) {
            var textA = a.querySelector('.' + sortingClass).textContent.trim();
            var textB = b.querySelector('.' + sortingClass).textContent.trim();
            if (!isNaN(textA) && !isNaN(textB)) {
                return parseFloat(textB) - parseFloat(textA);
            } else {
                return textB.localeCompare(textA);
            }
        });
        target.dataset.sorted = 'ascending';
    }

    var container = document.getElementById('id_report_post');
    container.innerHTML = '';
    sortedItems.forEach(function(item) {
        container.appendChild(item);
    });
}
