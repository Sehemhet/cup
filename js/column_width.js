window.addEventListener('DOMContentLoaded', function () {
    alignWidths('id_report_chapter_item');
    alignWidths('id_report_post_column');
});

function alignWidths(className) {
    var items = document.querySelectorAll('.' + className);
    var maxWidth = 0;

    items.forEach(function (item) {
        var itemWidth = item.getBoundingClientRect().width;
        maxWidth = Math.max(maxWidth, itemWidth);
    });

    items.forEach(function (item) {
        item.style.width = maxWidth + 'px';
    });
}
