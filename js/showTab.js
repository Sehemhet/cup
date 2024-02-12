document.addEventListener("DOMContentLoaded", function() {
    // Показать первый таб при загрузке страницы
    showTab('id_design');

    // Получить первую кнопку и добавить класс btn_tab_active
    var firstButton = document.querySelector('.btn_tab');
    if (firstButton) {
        firstButton.classList.add('btn_tab_active');
    }
});


function showTab(tabId, button) {
    // Скрыть все табы
    var tabs = document.querySelectorAll('.tabs__block');
    tabs.forEach(function(tab) {
        tab.classList.remove('active-tab');
    });

    // Показать выбранный таб
    var selectedTab = document.getElementById(tabId);
    selectedTab.classList.add('active-tab');

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