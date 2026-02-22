const formsContainer = document.querySelector(".forms-container");
const maskForms = document.querySelector(".mask-forms");



function openForm() {
    formsContainer.style.left = "0";
    formsContainer.style.transform = "translateX(0)";
    maskForms.style.visibility = "visible";
}

function closeForm() {
    formsContainer.style.left = "0";
    formsContainer.style.transform = "translateX(-98%)";
    maskForms.style.visibility = "hidden";
}
   