document.getElementById('search').addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase();
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        const productName = item.querySelector('h3').textContent.toLowerCase();
        if (productName.includes(searchTerm)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
});