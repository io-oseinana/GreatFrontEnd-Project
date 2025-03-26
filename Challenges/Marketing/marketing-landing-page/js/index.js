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

window.addEventListener('resize', updateBillText);