// Initialize the intl-tel-input library for a phone input field
export function initializePhoneInput() {
    const phoneInputField = document.querySelector("#phone");
    
    if (!phoneInputField) {
        console.error("Phone input field not found in the DOM.");
        return null;
    }
    
    return window.intlTelInput(phoneInputField, {
        initialCountry: "eg", // Set default country to Egypt
        utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js", // For better performance
    });
}





