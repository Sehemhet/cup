function removeArrowActivateClass(arrowId) {
    var arrowElement = document.getElementById(arrowId);
    if (arrowElement) {
        arrowElement.classList.remove('btn_arrow_activate');
    }
}
