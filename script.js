function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.add('hidden'));

    // Show the selected section
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.remove('hidden');
    }
}

function handleLogin(event) {
    event.preventDefault();
    // Add login logic here (e.g., validate user credentials)
    alert("Logged in successfully!");
}

function handleRegister(event) {
    event.preventDefault();
    // Add registration logic here (e.g., send data to server)
    alert("Registered successfully!");
}
function handleFarmerSubmit(event) {
    event.preventDefault();
    const farmerName = document.getElementById('farmerName').value;
    const sacksAvailable = document.getElementById('sacksAvailable').value;
    const location = document.getElementById('location').value;
    const availability = document.getElementById('availability').value;

    // Example of form data handling, can be sent to the backend
    console.log({
        farmerName,
        sacksAvailable,
        location,
        availability
    });

    alert("Farmer details submitted successfully!");
}

function handleSchoolSubmit(event) {
    event.preventDefault();
    const schoolName = document.getElementById('schoolName').value;
    const sacksNeeded = document.getElementById('sacksNeeded').value;
    const schoolLocation = document.getElementById('schoolLocation').value;
    const dayNeeded = document.getElementById('dayNeeded').value;

    // Example of form data handling, can be sent to the backend
    console.log({
        schoolName,
        sacksNeeded,
        schoolLocation,
        dayNeeded
    });

    alert("School request submitted successfully!");
}

// Show the home section by default
document.addEventListener('DOMContentLoaded', () => {
    showSection('home');
});
