document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const milkPrice = document.getElementById('milkPrice').value;
    const minMilkReq = document.getElementById('minMilkReq').value;

    // Save data to local storage (simplified version)
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userName', name);
    localStorage.setItem('userAddress', address);
    localStorage.setItem('milkPrice', milkPrice);
    localStorage.setItem('minMilkReq', minMilkReq);

    alert("Signup successful! Now you can proceed to the home page.");
    window.location.href = 'home.html'; // Redirect to home page
});
