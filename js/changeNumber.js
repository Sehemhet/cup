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