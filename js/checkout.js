'use strict';

// Elements
var foodTabs = document.querySelectorAll('[data-food-type]');
var jpModal = document.getElementById('jpModal');
var jpSummary = document.querySelector('.jp-summary');
var jpSummaryBody = document.querySelector('.jp-summary-body');
var jpSummaryPlaceholderText = document.getElementById('jpSummaryPlaceholderText');
var jpSummaryTotalPrice = document.getElementById('jpSummaryTotalPrice');
var stepsContainer = document.getElementById('jp-steps-container');
var templatePicker = document.getElementById('template-picker');
var templateAddress = document.getElementById('template-address');
var templatePayment = document.getElementById('template-payment');

// Triggers
var foodTabLinks = document.querySelectorAll('.js-food-type-link');
var baseLinks = document.querySelectorAll('.js-base-link');
var addToSummaryButton = document.getElementById('addToSummaryButton');
var resetSummaryButton = document.querySelector('.jp-reset');
var selectSetButtons = document.querySelectorAll('.jp-set-button');
var jpModalButtonOpen = document.getElementById('jpModalButtonOpen');
var jpModalButtonClose = document.getElementById('jpModalButtonClose');
var jpModalButtonGoToAddress = document.getElementById('jpModalButtonGoToAddress');
var backButton = document.getElementById('backButton');
var buttonToPay = document.getElementById('buttonToPay');


/* ----------- Doers ----------- */



function openFoodTypeTab(tab, trigger) {
    var hash = trigger.hash.substr(1);
    var tabData = tab.getAttribute('data-food-type');
    tab.classList.add('js-hidden');
    if (hash === tabData) {
        tab.classList.remove('js-hidden');
        trigger.classList.add('active')
    }

    if (hash === 'sets') {
        stepsContainer.classList.remove('d-md-block');
    } else {
        stepsContainer.classList.add('d-md-block');
    }

}

function removeClassInArray(arr, classs) {
    for (var x = 0; x < arr.length; x++) {
        arr[x].classList.remove(classs);
    }
}

function openModal() {
    jpModal.classList.remove('js-hidden');
}

function closeModal() {
    jpModal.classList.add('js-hidden');
}


/* ----------- Listeners ----------- */

// click on food tab
for (var i = 0; i < foodTabLinks.length; i++) {
    foodTabLinks[i].addEventListener('click', function (e) {
        e.preventDefault();
        removeClassInArray(foodTabLinks, 'active');
        var trigger = e.target;
        for (var y = 0; y < foodTabs.length; y++) {
            var tab = foodTabs[y];
            openFoodTypeTab(tab, trigger);
        }
    });
}

// on base button
for (var i = 0; i < baseLinks.length; i++) {
    baseLinks[i].addEventListener('click', function (e) {
        e.preventDefault();
        removeClassInArray(baseLinks, 'active');
        this.classList.add('active');
    });
}

// on set button
for (var i = 0; i < selectSetButtons.length; i++) {
    selectSetButtons[i].addEventListener('click', function (e) {
        e.preventDefault();
        removeClassInArray(selectSetButtons, 'active');
        this.classList.add('active');
    });
}


// addToSummaryButton
addToSummaryButton.addEventListener('click', function (e) {
    e.preventDefault();
    resetSummaryButton.classList.remove('js-hidden');
    jpSummaryBody.classList.remove('js-hidden');
    jpSummaryPlaceholderText.classList.add('js-hidden');
    jpSummaryTotalPrice.innerText = '226';
    jpModalButtonOpen.classList.remove('disabled');
});

// on reset button
resetSummaryButton.addEventListener('click', function (e) {
    e.preventDefault();
    this.classList.add('js-hidden');
    jpSummaryBody.classList.add('js-hidden');
    jpSummaryPlaceholderText.classList.remove('js-hidden');
    jpSummaryTotalPrice.innerText = '0';
    jpModalButtonOpen.classList.add('disabled');
});

// on open modal button
jpModalButtonOpen.addEventListener('click', function (e) {
    e.preventDefault();
    openModal();
});

// on close modal
jpModalButtonClose.addEventListener('click', function (e) {
    e.preventDefault();
    closeModal();
});

// on GoToAddress button (from modal)
jpModalButtonGoToAddress.addEventListener('click', function (e) {
    e.preventDefault();
    closeModal();
    jpModalButtonOpen.classList.add('js-hidden');
    resetSummaryButton.classList.add('js-hidden');
    stepsContainer.classList.add('js-hidden');
    templatePicker.classList.add('js-hidden');
    templateAddress.classList.remove('js-hidden');
    backButton.classList.remove('js-hidden');
});

// on go back button
backButton.addEventListener('click', function (e) {
    e.preventDefault();
    jpModalButtonOpen.classList.remove('js-hidden');
    resetSummaryButton.classList.remove('js-hidden');
    stepsContainer.classList.remove('js-hidden');
    templatePicker.classList.remove('js-hidden');
    templateAddress.classList.add('js-hidden');
    this.classList.add('js-hidden');
});

// on GoToPayment button
buttonGoToPayment.addEventListener('click', function (e) {
    e.preventDefault();
    templateAddress.classList.add('js-hidden');
    backButton.classList.add('js-hidden');
    templatePayment.classList.remove('js-hidden');
    jpSummary.classList.add('jp-summary-final');
});
