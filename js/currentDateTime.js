document.addEventListener('DOMContentLoaded', function() {
    // Функция для обновления даты и времени
    function updateDateTime() {
        // Получаем текущую дату и время
        var currentDateTime = new Date();

        // Форматируем дату и время по вашим предпочтениям
        var formattedDateTime = currentDateTime.toLocaleString(); // Например, "01/29/2024, 10:30:00 AM"

        // Обновляем содержимое тега <h6> с отформатированной датой и временем
        document.getElementById('currentDateTime').textContent = formattedDateTime;
    }

    // Обновляем дату и время при загрузке страницы
    updateDateTime();

    // Затем устанавливаем интервал для обновления даты и времени каждую секунду (или другой период)
    setInterval(updateDateTime, 1000); // Обновляем каждую секунду
});
