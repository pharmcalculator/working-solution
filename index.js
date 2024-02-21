document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('calculator-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        var desiredConcentration = parseFloat(document.getElementById('desired-concentration').value);
        var desiredVolume = parseFloat(document.getElementById('desired-volume').value);
        var stockConcentration = parseFloat(document.getElementById('stock-concentration').value);

        var stockVolume = (desiredConcentration * desiredVolume) / (stockConcentration * 1000);

        stockVolume = stockVolume.toFixed(2); // Round up to two decimal places

        var resultContainer = document.getElementById('result-container');
        resultContainer.innerHTML = `
            <div class="result-box">
                <p class="factor-label">Stock Solution Volume needed (uL):</p>
                <p class="factor-value">${stockVolume}</p>
            </div>
        `;
    });
});