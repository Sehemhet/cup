document.addEventListener('DOMContentLoaded', function() {
    // Знаходимо всі теги li з атрибутами id-data або data-count в списку з класом countRed
    var liItems = document.querySelectorAll('.countRed li[id-data], .countRed li[data-count]');

    // Проходимося по кожному елементу
    liItems.forEach(function(item) {
        var count;

        // Перевіряємо наявність атрибута data-count
        if (item.hasAttribute('data-count')) {
            count = parseInt(item.getAttribute('data-count'));
        }
        // Якщо атрибут data-count відсутній, шукаємо елемент з класом item_number і його атрибутом data-count
        else if (item.querySelector('.item_number')) {
            count = parseInt(item.querySelector('.item_number').getAttribute('data-count'));
        }

        // Якщо значення менше 2000, застосовуємо стиль червоного кольору
        if (count && count < 2000) {
            item.style.color = 'red';
        }
    });
});
