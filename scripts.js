document.addEventListener('DOMContentLoaded', () => {
    const priceElements = document.querySelectorAll('.price');
    const toggleButton = document.getElementById('toggle-pricing');
    
    toggleButton.addEventListener('click', () => {
        priceElements.forEach(price => {
            if (price.textContent.includes('/month')) {
                price.textContent = price.textContent.replace('/month', '/year');
                price.textContent = price.textContent.replace(/\d+/, match => match * 10);
            } else {
                price.textContent = price.textContent.replace('/year', '/month');
                price.textContent = price.textContent.replace(/\d+/, match => match / 10);
            }
        });
    });
});
