// Vehicle data
const vehicles = {
    LMTV: {
        name: 'Light Medium Tactical Vehicle',
        description: 'LMTV Standard Configuration'
    },
    HMMWV: {
        name: 'High Mobility Multipurpose Wheeled Vehicle',
        description: 'HMMWV Humvee'
    },
    MATV: {
        name: 'Mobility Tactical Vehicle',
        description: 'MATV Platform'
    }
};

const inspectionItems = [
    'Headlights',
    'Taillights',
    'Brake Lights',
    'Turn Signals',
    'Hazard Lights',
    'Oil Level',
    'Fuel Level',
    'Transmission Fluid',
    'Coolant Level',
    'Mileage'
];

// State
let currentVehicle = null;
let checklist = {};

// DOM Elements
const vehicleButtons = document.querySelectorAll('.vehicle-btn');
const vehicleHeader = document.getElementById('vehicleHeader');
const checklistContainer = document.getElementById('checklistContainer');
const resetBtn = document.getElementById('resetBtn');
const exportBtn = document.getElementById('exportBtn');
const completedCount = document.getElementById('completedCount');
const progressFill = document.getElementById('progressFill');
const statusValue = document.getElementById('statusValue');
const statusDisplay = document.getElementById('statusDisplay');
const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendBtn');

// Initialize
function init() {
    vehicleButtons.forEach(btn => {
        btn.addEventListener('click', selectVehicle);
    });
    resetBtn.addEventListener('click', resetChecklist);
    exportBtn.addEventListener('click', exportReport);
    sendBtn.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });
    loadChecklistFromStorage();
}

// Vehicle Selection
function selectVehicle(e) {
    const vehicle = e.currentTarget.dataset.vehicle;
    currentVehicle = vehicle;
    
    // Update UI
    vehicleButtons.forEach(btn => btn.classList.remove('active'));
    e.currentTarget.classList.add('active');
    
    // Initialize checklist for this vehicle
    if (!checklist[vehicle]) {
        checklist[vehicle] = {};
        inspectionItems.forEach(item => {
            checklist[vehicle][item] = false;
        });
    }
    
    // Render checklist
    renderChecklist();
    updateStatus();
    saveChecklistToStorage();
}

// Render Checklist
function renderChecklist() {
    if

