/**
 * warningMsg handles displaying a "no stocks found" error
 */

const warning = document.querySelector('.warning');

function displayWarning() {
    warning.innerHTML = `<h3>No stocks found. Please add a stock to your collection!</h3>`;
}

function clearWarning() {
    warning.innerHTML = ``;
}