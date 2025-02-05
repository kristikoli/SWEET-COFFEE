document.querySelectorAll('.order-btn').forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.parentElement.querySelector('h3').textContent;
        alert(`Ju porositët: ${productName}`);
    });
});