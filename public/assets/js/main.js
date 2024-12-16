// script.js

// Tijdslots en afspraken
const startTime = 8.5; // 08:30
const endTime = 18.0; // 18:00
const timeslots = [];
let currentSlot = null;

// Prijzen per papierformaat en papiersoort
const priceMatrix = {
    A5: { Normaal: 0.10, Glanzend: 0.15 },
    A4: { Normaal: 0.20, Glanzend: 0.30 },
    A3: { Normaal: 0.50, Glanzend: 0.70 },
};

// Init kalender
const timeslotsContainer = document.getElementById('timeslots');
for (let time = startTime; time < endTime; time += 0.25) {
    const hours = Math.floor(time);
    const minutes = (time % 1) * 60;
    const displayTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;

    const timeslotDiv = document.createElement('div');
    timeslotDiv.classList.add('timeslot', 'available');
    timeslotDiv.textContent = displayTime;
    timeslotDiv.dataset.time = displayTime;

    timeslotDiv.addEventListener('click', () => openForm(displayTime));

    timeslotsContainer.appendChild(timeslotDiv);
    timeslots.push({ time: displayTime, appointment: null });
}

// Open formulier
const formContainer = document.getElementById('appointment-form');
const emailInput = document.getElementById('email');
const paperSizeInput = document.getElementById('paper-size');
const paperTypeInput = document.getElementById('paper-type');
const quantityInput = document.getElementById('quantity');
const costInput = document.getElementById('cost');

function openForm(time) {
    currentSlot = timeslots.find(slot => slot.time === time);
    if (currentSlot.appointment) {
        emailInput.value = currentSlot.appointment.email;
        paperSizeInput.value = currentSlot.appointment.paperSize;
        paperTypeInput.value = currentSlot.appointment.paperType;
        quantityInput.value = currentSlot.appointment.quantity;
    } else {
        emailInput.value = '';
        paperSizeInput.value = 'A5';
        paperTypeInput.value = 'Normaal';
        quantityInput.value = 1;
    }
    updateCost();
    formContainer.classList.remove('hidden');
}

// Bereken kosten
function updateCost() {
    const size = paperSizeInput.value;
    const type = paperTypeInput.value;
    const quantity = quantityInput.value;
    const cost = (priceMatrix[size][type] * quantity).toFixed(2);
    costInput.value = `€${cost}`;
}

paperSizeInput.addEventListener('change', updateCost);
paperTypeInput.addEventListener('change', updateCost);
quantityInput.addEventListener('input', updateCost);

// Opslaan
document.getElementById('save-appointment').addEventListener('click', () => {
    const appointment = {
        email: emailInput.value,
        paperSize: paperSizeInput.value,
        paperType: paperTypeInput.value,
        quantity: quantityInput.value,
        cost: costInput.value,
    };
    currentSlot.appointment = appointment;

    const slotDiv = [...timeslotsContainer.children].find(div => div.dataset.time === currentSlot.time);
    slotDiv.classList.remove('available');
    slotDiv.classList.add('booked');
    slotDiv.textContent = `${currentSlot.time} (Bezet)`;

    formContainer.classList.add('hidden');
    alert(`Afspraak bevestigd! Een e-mail wordt gestuurd naar ${appointment.email}.`);
});

// Annuleren
document.getElementById('cancel-appointment').addEventListener('click', () => {
    formContainer.classList.add('hidden');
});

