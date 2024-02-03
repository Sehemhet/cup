let initialCounts = {}; // Объект для хранения начальных значений

function selectedCount(sourceId, targetId) {
    let sourceElement = document.getElementById(sourceId);
    let targetInput = document.getElementById(targetId);

    if (sourceElement && targetInput) {
        // Если начальное значение не сохранено, сохраняем его
        if (!(sourceId in initialCounts)) {
            initialCounts[sourceId] = parseInt(sourceElement.textContent) || 0;
        }

        let sourceValue = initialCounts[sourceId];
        let targetValue = parseInt(targetInput.value) || 0;

        let resultValue = Math.max(0, sourceValue - targetValue);
        sourceElement.textContent = `${resultValue} ${sourceElement.textContent.split(/\s+/).slice(1).join(' ')}`;
    }
}


