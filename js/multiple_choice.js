function handleManualInput(inputElement) {
    let listItem = inputElement.closest('li');
    let numberSpan = listItem.querySelector('.item_number');
    let maxQuantity = parseInt(numberSpan.getAttribute('data-max'));

    let currentValue = parseInt(inputElement.value);
    currentValue = Math.max(0, Math.min(currentValue, maxQuantity));

    inputElement.value = currentValue;
    numberSpan.textContent = maxQuantity - currentValue;
}