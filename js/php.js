
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
