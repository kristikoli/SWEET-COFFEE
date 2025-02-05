document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const menuItems = document.querySelectorAll('.menu-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');

            // Hiq klasën 'active' nga të gjitha butonat
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Shto klasën 'active' në butonin e klikuar
            button.classList.add('active');

            // Filtro produktet
            menuItems.forEach(item => {
                const itemCategory = item.parentElement.getAttribute('data-category');
                if (category === 'all' || itemCategory === category) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});