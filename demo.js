const form = document.getElementById('myForm');
const closeAlert = document.getElementById('close-alert');
const errorAlert = document.getElementById('error-alert');
const errorMessage = document.getElementById('error-message');

if (form) {
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const fieldIds = ['name', 'email', 'number', 'date'];
        const hasMissingField = fieldIds.some((id) => {
            const field = document.getElementById(id);
            return !field || field.value.trim() === '';
        });

        if (hasMissingField) {
            showError('All fields are required.');
            return;
        }

        alert('Form submitted successfully!');
    });
}

if (closeAlert && errorAlert) {
    closeAlert.addEventListener('click', function() {
        errorAlert.style.display = 'none';
    });
}

function showError(message) {
    if (!errorAlert || !errorMessage) {
        return;
    }
    errorMessage.innerText = message;
    errorAlert.style.display = 'block';
}
