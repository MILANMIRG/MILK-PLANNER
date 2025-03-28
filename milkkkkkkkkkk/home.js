window.onload = function() {
    const userName = localStorage.getItem('userName');
    const milkPrice = localStorage.getItem('milkPrice');
    const dailyMilkReq = localStorage.getItem('minMilkReq');
    
    // Populate the home page with user data
    document.getElementById('userName').textContent = userName;
    document.getElementById('milkPrice').textContent = milkPrice;
    document.getElementById('dailyMilkReq').textContent = dailyMilkReq;
    
    // Set selected date to current date
    const currentDate = new Date().toISOString().split('T')[0];
    document.getElementById('selectedDate').textContent = currentDate;

    // Event listeners for buttons
    document.getElementById('updateBtn').addEventListener('click', updateMilkDetails);
    document.getElementById('resetBtn').addEventListener('click', resetMilkDetails);
    
    // Toggle button functionality for auto-adding milk
    document.getElementById('autoAddMilkBtn').addEventListener('click', function() {
        const toggleBtn = document.getElementById('autoAddMilkBtn');
        if (toggleBtn.textContent === "RESUME") {
            toggleBtn.textContent = "PAUSE";
        } else {
            toggleBtn.textContent = "RESUME";
        }
    });
};

function updateMilkDetails() {
    const milkPerKg = document.getElementById('milkPerKg').value;
    const selectedDate = document.getElementById('selectedDate').textContent;
    // Update logic (e.g., update calendar or local storage)
    alert(`Milk per kg updated for ${selectedDate}: ${milkPerKg} kg`);
}

function resetMilkDetails() {
    document.getElementById('milkPerKg').value = 0;
    const selectedDate = document.getElementById('selectedDate').textContent;
    alert(`Milk per kg reset for ${selectedDate}`);
}
