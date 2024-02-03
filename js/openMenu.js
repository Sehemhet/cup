function openMenu(elementClass) {
    var elements = document.getElementsByClassName(elementClass);

    Array.from(elements).forEach(function(element) {
        element.classList.toggle('act');
    });
}




