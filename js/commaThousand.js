document.addEventListener('DOMContentLoaded', function() {
    // Находим все элементы <ul> с классом commaThousand
    var ulElements = document.querySelectorAll('ul.commaThousand');

    // Проходимся по каждому <ul> элементу
    ulElements.forEach(function(ulElement) {
        // Находим все элементы <li> внутри <ul> элемента
        var liElements = ulElement.querySelectorAll('li');

        // Проходимся по каждому <li> элементу
        liElements.forEach(function(liElement) {
            // Находим все элементы <span> внутри <li> элемента
            var spanElements = liElement.querySelectorAll('span');

            // Проходимся по каждому <span> элементу
            spanElements.forEach(function(spanElement) {
                // Получаем содержимое <span> элемента
                var count = parseInt(spanElement.textContent.trim());

                // Если содержимое <span> является числом, добавляем разделитель тысяч
                if (!isNaN(count)) {
                    // Добавляем разделитель тысяч
                    var formattedCount = addThousandSeparators(count);

                    // Заменяем содержимое <span> элемента на отформатированное значение
                    spanElement.textContent = formattedCount;
                }
            });
        });
    });

    // Функция для добавления разделителей тысяч
    function addThousandSeparators(number) {
        // Преобразуем число в строку и разбиваем его на массив по точке (если есть десятичная часть)
        var parts = number.toString().split('.');

        // Получаем целую часть числа
        var integerPart = parts[0];

        // Разбиваем целую часть числа на массив символов
        var integerChars = integerPart.split('');

        // Создаем переменную для хранения результата с разделителями тысяч
        var result = '';

        // Проходим по каждому символу в целой части числа, начиная с конца
        for (var i = integerChars.length - 1; i >= 0; i--) {
            // Добавляем текущий символ к результату
            result = integerChars[i] + result;

            // Если достигнут третий символ с конца и это не последний символ в числе, добавляем разделитель
            if ((integerChars.length - i) % 3 === 0 && i !== 0) {
                result = ',' + result;
            }
        }

        // Если есть десятичная часть числа, добавляем ее обратно к результату
        if (parts.length > 1) {
            result += '.' + parts[1];
        }

        return result;
    }
});
