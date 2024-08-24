document.addEventListener('DOMContentLoaded', () => {
    const countryInput = document.getElementById('country');
    const dropdownContent = document.querySelector('.dropdown-content');
    const checkboxes = dropdownContent.querySelectorAll('input[type="checkbox"]');

    countryInput.addEventListener('click', () => {
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            let selectedCountries = Array.from(checkboxes)
                .filter(chk => chk.checked)
                .map(chk => chk.value)
                .join(', ');
            countryInput.value = selectedCountries;
        });
    });

    document.addEventListener('click', (e) => {
        if (!dropdownContent.contains(e.target) && e.target !== countryInput) {
            dropdownContent.style.display = 'none';
        }
    });
});