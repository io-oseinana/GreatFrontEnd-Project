const navMenu = document.querySelector('#slideout-menu');
const menuBtn = document.querySelector('#mobile-menu-button');
const closeBtn = document.querySelector('#mobile-close-menu-button');

menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});

closeBtn.addEventListener('click', () => {
    navMenu.classList.remove('open');
});


//Pricing tiers plan function

const monthlyPlanBtn = document.querySelector("#monthlyPlanBtn");
const annualPlanBtn = document.querySelector("#annualPlanBtn");

const basicPlanPrice = document.querySelector("#basicPlanPrice");
const basicPlanLabel = document.querySelector('#basicPlanLabel');

const standardPlanPrice = document.querySelector("#standardPlanPrice");
const standardPlanLabel = document.querySelector('#standardPlanLabel');

const premiumPlanPrice = document.querySelector("#premiumPlanPrice");
const premiumPlanLabel = document.querySelector('#premiumPlanLabel');

monthlyPlanBtn.addEventListener("click", () => {
    annualPlanBtn.classList.remove("active");
    monthlyPlanBtn.classList.add("active");

    annualPlanBtn.setAttribute('aria-pressed', 'false');
    monthlyPlanBtn.setAttribute('aria-pressed', 'true');

    basicPlanPrice.textContent = '$9.99';
    basicPlanLabel.textContent = 'Billed monthly';

    standardPlanPrice.textContent = '$19.99';
    standardPlanLabel.textContent = 'Billed monthly';

    premiumPlanPrice.textContent = '$29.99';
    premiumPlanLabel.textContent = 'Billed monthly';
});

annualPlanBtn.addEventListener("click", () => {
    annualPlanBtn.classList.add("active");
    monthlyPlanBtn.classList.remove("active");

    annualPlanBtn.setAttribute('aria-pressed', 'true');
    monthlyPlanBtn.setAttribute('aria-pressed', 'false');

    basicPlanPrice.textContent = '$6.99';
    basicPlanLabel.textContent = 'Billed annually ($84)';

    standardPlanPrice.textContent = '$15.99';
    standardPlanLabel.textContent = 'Billed annually ($192)';

    premiumPlanPrice.textContent = '$25.99';
    premiumPlanLabel.textContent = 'Billed annually ($312)'
});

// Updating the bill text for standard price tier when window is >= 375px

const updateBillText = () => {
    const windowWidth = window.innerWidth;
    const billElement = document.querySelector('#standardPlanLabel');
    if (windowWidth <= 500) {
        billElement.textContent = "Price in USD";
    } else {
        billElement.textContent = billElement.textContent === 'Billed monthly' ? 'Billed monthly' : 'Billed annually';
    }
};

updateBillText();


// FAQ accordion

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

window.addEventListener('resize', updateBillText);