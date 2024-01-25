function changeNumber(element, delta) {
    let inputElement = element.querySelector('.numberDisplay');
    let currentValue = parseInt(inputElement.value);

    let listItem = element.closest('li');
    let numberSpan = listItem.querySelector('.item_number');
    let maxQuantity = parseInt(numberSpan.getAttribute('data-max'));

    if (delta === -1 && currentValue > 0) {
        currentValue--;
    } else if (delta === 1 && currentValue < maxQuantity) {
        currentValue++;
    }

    inputElement.value = currentValue;
    numberSpan.textContent = maxQuantity - currentValue;
}

function handleManualInput(inputElement) {
    let listItem = inputElement.closest('li');
    let numberSpan = listItem.querySelector('.item_number');
    let maxQuantity = parseInt(numberSpan.getAttribute('data-max'));

    let currentValue = parseInt(inputElement.value);
    currentValue = Math.max(0, Math.min(currentValue, maxQuantity));

    inputElement.value = currentValue;
    numberSpan.textContent = maxQuantity - currentValue;
}



    function toggleElementVisibility(elementId, activeClass) {
        var element = document.getElementById(elementId);
        var arrowElement = element.querySelector('.btn_arrow');

        if (element.classList.contains('flex')) {
            element.classList.remove('flex', activeClass);
            element.classList.add('none');
        } else {
            element.style.display = '';
            element.classList.remove('none');
            element.classList.add('flex', activeClass);
        }
    }

    function OpenMaterials() {
        toggleElementVisibility('decor_materials', 'act');
    }

    function OpenRetrieval() {
        toggleElementVisibility('decor_retrival', 'act');
    }

    function OpenWorker() {
        toggleElementVisibility('decor_worker', 'act');
    }

    function OpenButtons() {
        toggleElementVisibility('decor_buttons', 'act');
    }

    function OpenComment() {
        toggleElementVisibility('comment', 'act');
    }
    function OpenComment() {
        toggleElementVisibility('oven_materials', 'act');
    }



function filterList() {
    let input = document.querySelector('#decor_materials .input');
    let filter = input.value.toUpperCase();
    let listItems = document.querySelectorAll('#decor_materials ul li');

    listItems.forEach(item => {
        let textValue = item.textContent || item.innerText;
        let shouldBeVisible = textValue.toUpperCase().indexOf(filter) > -1;

        if (shouldBeVisible) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}


document.addEventListener('DOMContentLoaded', function () {
    let listItem = document.querySelectorAll('#decor_materials ul li');

    listItem.forEach(item => {
        item.addEventListener('click', function () {
            let selectedValue = this.dataset.id;
            let selectedText = this.textContent.trim();

            document.querySelector('.list_open span').textContent = selectedText;
            // Вы также можете использовать selectedValue для других нужд
            // Например, передачи его на сервер или как-то еще
            toggleElementVisibility('decor_materials', 'act');
        });
    });
});


function filterWorkerList() {
    let input = document.querySelector('#decor_worker .input');
    let filter = input.value.toUpperCase();
    let workerListItems = document.querySelectorAll('#workerList li');

    workerListItems.forEach(item => {
        let textValue = item.textContent || item.innerText;
        let shouldBeVisible = textValue.toUpperCase().indexOf(filter) > -1;

        if (shouldBeVisible) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    let workerListItems = document.querySelectorAll('#workerList li');

    workerListItems.forEach(item => {
        item.addEventListener('click', function () {
            let selectedValue = this.dataset.id;
            let selectedText = this.textContent.trim();

            document.querySelector('#selectedWorker').textContent = selectedText;
            // Вы также можете использовать selectedValue для других нужд
            // Например, передачи его на сервер или как-то еще
            toggleElementVisibility('decor_worker', 'act');
        });
    });
});



// JavaScript для переключения табов
document.addEventListener("DOMContentLoaded", function() {
    // Показать первый таб при загрузке страницы
    showTab('id_design');
});

function showTab(tabId) {
    // Скрыть все табы
    var tabs = document.querySelectorAll('.tabs__block');
    tabs.forEach(function(tab) {
        tab.classList.remove('active-tab');
    });

    // Показать выбранный таб
    var selectedTab = document.getElementById(tabId);
    selectedTab.classList.add('active-tab');
}












////Для применения на PHP
//document.addEventListener('DOMContentLoaded', function () {
//    let listItem = document.querySelectorAll('#decor_materials ul li');
//
//    listItem.forEach(item => {
//        item.addEventListener('click', function () {
//            let selectedValue = this.dataset.id;
//            let selectedText = this.textContent.trim();
//
//            document.querySelector('.list_open span').textContent = selectedText;
//            // Вы можете использовать selectedValue для других нужд
//            // Например, передачи его на сервер или как-то еще
//            toggleElementVisibility('decor_materials', 'decor_materials_active');
//        });
//    });
//});


//<?php
//// Получение наименования и преобразование в слаг
//$product_name = get_the_title(); // Получение названия товара из WordPress
//$product_slug = sanitize_title($product_name); // Преобразование в слаг
//
//// Вывод элемента списка с data-id
//echo '<li class="t_active f gap10" data-id="' . esc_attr($product_slug) . '">';
//echo '<span>' . esc_html($product_name) . '</span>';
//echo '</li>';
//?>
