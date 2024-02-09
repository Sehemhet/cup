document.addEventListener("DOMContentLoaded", function() {
    // Показать первый таб при загрузке страницы
    showTabStock('tab_design');
});

function showTabStock(tabId, button) {
    // Скрыть все табы
    var tabs = document.querySelectorAll('.tabs__block_stock');
    tabs.forEach(function(tab) {
        tab.classList.remove('active-tab-stock');
    });

    // Показать выбранный таб
    var selectedTab = document.getElementById(tabId);
    selectedTab.classList.add('active-tab-stock');

    // Убрать класс у всех кнопок
    var buttons = document.querySelectorAll('.btn_tab');
    buttons.forEach(function(btn) {
        btn.classList.remove('btn_tab_active');
    });

    // Добавить класс активной кнопке
    if (button) {
        button.classList.add('btn_tab_active');
    }
}