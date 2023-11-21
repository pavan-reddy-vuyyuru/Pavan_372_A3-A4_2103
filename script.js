const cadToUsdRate = 0.75;
const usdToCadRate = 1.33;

function convertCurrency() {
    const amountInput = document.getElementById('amountInput').value;
    const currencySelect = document.getElementById('currencySelect');
    const currencyDisplay = document.getElementById('currencyDisplay');
    const resultInvalid = document.getElementById('resultInvalid');
    if (isNaN(amountInput) || amountInput === '') {
        resultInvalid.textContent = 'Please enter a valid number for the amount.';
        return;
    }

    const selectedCurrency = currencySelect.value;
    const selectedDisplay = currencyDisplay.value;

    let result;
    if (selectedCurrency === 'cad' && selectedDisplay == 'usd') {
        result = parseFloat(amountInput) * cadToUsdRate;
        console.log(result)
        amountOutput.value = result;
    } else if (selectedCurrency === 'usd' && selectedDisplay == 'cad') {
        result = parseFloat(amountInput) * usdToCadRate;
        console.log(result)
        amountOutput.value = result;
    } else if (selectedCurrency === 'usd' && selectedDisplay == 'usd') {
        result = parseFloat(amountInput);
        console.log(result)
        amountOutput.value = result;
    } else if (selectedCurrency === 'cad' && selectedDisplay == 'cad') {
        result = parseFloat(amountInput);
        console.log(result)
        amountOutput.value = result;
    }
}