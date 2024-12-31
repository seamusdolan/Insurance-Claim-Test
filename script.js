// Car models organized by make
const carModels = {
    'Acura': ['ILX', 'MDX', 'RDX', 'TLX', 'NSX'],
    'Audi': ['A3', 'A4', 'A6', 'Q3', 'Q5', 'Q7', 'R8'],
    'BMW': ['2 Series', '3 Series', '5 Series', 'X1', 'X3', 'X5', 'M3', 'M5'],
    'Chevrolet': ['Malibu', 'Cruze', 'Impala', 'Camaro', 'Corvette', 'Equinox', 'Tahoe', 'Silverado'],
    'Chrysler': ['300', 'Pacifica', 'Voyager'],
    'Dodge': ['Challenger', 'Charger', 'Durango', 'Grand Caravan'],
    'Ford': ['Fusion', 'Mustang', 'Explorer', 'Escape', 'F-150', 'Ranger', 'Edge', 'Bronco'],
    'Honda': ['Civic', 'Accord', 'CR-V', 'Pilot', 'Odyssey', 'HR-V', 'Ridgeline'],
    'Hyundai': ['Elantra', 'Sonata', 'Tucson', 'Santa Fe', 'Kona', 'Palisade'],
    'Jeep': ['Cherokee', 'Grand Cherokee', 'Wrangler', 'Compass', 'Renegade'],
    'Kia': ['Forte', 'Optima', 'Sportage', 'Sorento', 'Telluride', 'Soul'],
    'Lexus': ['IS', 'ES', 'RX', 'NX', 'GX', 'LX', 'LC'],
    'Mazda': ['Mazda3', 'Mazda6', 'CX-3', 'CX-5', 'CX-9', 'MX-5 Miata'],
    'Mercedes-Benz': ['A-Class', 'C-Class', 'E-Class', 'S-Class', 'GLA', 'GLC', 'GLE'],
    'Nissan': ['Altima', 'Maxima', 'Sentra', 'Rogue', 'Murano', 'Pathfinder', '370Z'],
    'Subaru': ['Impreza', 'Legacy', 'Outback', 'Forester', 'Crosstrek', 'Ascent'],
    'Tesla': ['Model 3', 'Model S', 'Model X', 'Model Y'],
    'Toyota': ['Corolla', 'Camry', 'RAV4', 'Highlander', 'Tacoma', 'Tundra', 'Prius'],
    'Volkswagen': ['Jetta', 'Passat', 'Golf', 'Tiguan', 'Atlas', 'ID.4'],
    'Volvo': ['S60', 'S90', 'XC40', 'XC60', 'XC90']
};

// Update model options when make is selected
document.getElementById('make').addEventListener('change', function() {
    const makeSelect = this;
    const modelSelect = document.getElementById('model');
    const selectedMake = makeSelect.value;

    // Clear existing options
    modelSelect.innerHTML = '<option value="">Select Model</option>';

    // If a make is selected, populate models
    if (selectedMake) {
        const models = carModels[selectedMake];
        models.forEach(model => {
            const option = document.createElement('option');
            option.value = model;
            option.textContent = model;
            modelSelect.appendChild(option);
        });
    }
});

// Populate year dropdown with values from 1990 to current year
function populateYearDropdown() {
    const yearSelect = document.getElementById('year');
    const currentYear = new Date().getFullYear();
    const startYear = 1990;

    for (let year = currentYear; year >= startYear; year--) {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearSelect.appendChild(option);
    }
}

// Email validation
function validateEmail(email) {
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    return emailPattern.test(email);
}

// Phone number formatting
function formatPhoneNumber(value) {
    // Remove all non-digit characters
    const cleaned = ('' + value).replace(/\D/g, '');
    
    // Check if the input is of correct length
    const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
    
    if (match) {
        let formatted = '';
        if (match[1]) {
            formatted += `(${match[1]}`;
        }
        if (match[2]) {
            formatted += `) ${match[2]}`;
        }
        if (match[3]) {
            formatted += `-${match[3]}`;
        }
        return formatted;
    }
    return value;
}

// Initialize dropdowns and set default date
document.addEventListener('DOMContentLoaded', function() {
    populateYearDropdown();
    
    // Set today's date as default for accident date
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('accidentDate').value = today;

    // Add email validation
    const emailInput = document.getElementById('email');
    emailInput.addEventListener('input', function() {
        if (!validateEmail(this.value)) {
            this.setCustomValidity('Please enter a valid email address (e.g., example@domain.com)');
        } else {
            this.setCustomValidity('');
        }
    });

    // Add phone number formatting
    const phoneInput = document.getElementById('phone');
    phoneInput.addEventListener('input', function() {
        this.value = formatPhoneNumber(this.value);
    });
});

// Form submission handler
function handleSubmit(event) {
    event.preventDefault();
    // Simulate form processing
    setTimeout(() => {
        window.location.href = 'success.html';
    }, 1000);
}
