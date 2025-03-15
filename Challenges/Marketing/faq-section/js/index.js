document.addEventListener('DOMContentLoaded', () => {
    const accordionButtons = document.querySelectorAll('.faq__accordion__button');

    accordionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            const icons = button.querySelectorAll('.faq__accordion__toggle-icon');
            const isOpen = button.getAttribute('aria-expanded') === 'true';

            // Toggle content visibility with smooth animation
            if (isOpen) {
                content.style.maxHeight = null;
                content.classList.remove('active');
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
                content.classList.add('active');
            }

            // Update aria-expanded for accessibility
            button.setAttribute('aria-expanded', !isOpen);

            // Toggle icons visibility
            icons.forEach(icon => {
                if (icon.classList.contains('active-icon')) {
                    icon.classList.toggle('hidden', isOpen);
                } else if (icon.classList.contains('not-active-icon')) {
                    icon.classList.toggle('hidden', !isOpen);
                }
            });
        });
    });

    // Expanding and collapsing all accordion items

    const expandAll = document.getElementById('expand-all')
    const collapseAll = document.getElementById('collapse-all')

    expandAll.addEventListener('click', () => {
        expandAll.classList.add('hidden');
        collapseAll.classList.remove('hidden');
        accordionButtons.forEach(button => {
            const content = button.nextElementSibling;
            const icons = button.querySelectorAll('.faq__accordion__toggle-icon');
            button.setAttribute('aria-expanded', 'true');
            content.style.maxHeight = content.scrollHeight + 'px';
            content.classList.add('active');
            icons.forEach(icon => {
                if (icon.classList.contains('active-icon')) {
                    icon.classList.remove('hidden');
                } else if (icon.classList.contains('not-active-icon')) {
                    icon.classList.add('hidden');
                }
            });
        });
    });

    collapseAll.addEventListener('click', () => {
        expandAll.classList.remove('hidden');
        collapseAll.classList.toggle('hidden');
        accordionButtons.forEach(button => {
            const content = button.nextElementSibling;
            const icons = button.querySelectorAll('.faq__accordion__toggle-icon');
            button.setAttribute('aria-expanded', 'false');
            content.style.maxHeight = null;
            content.classList.remove('active');
            icons.forEach(icon => {
                if (icon.classList.contains('active-icon')) {
                    icon.classList.add('hidden');
                } else if (icon.classList.contains('not-active-icon')) {
                    icon.classList.remove('hidden');
                }
            });
        });
    });
});
