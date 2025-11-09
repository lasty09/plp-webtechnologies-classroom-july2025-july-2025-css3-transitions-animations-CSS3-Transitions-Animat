
let discountRate = 0.1; 
let taxRate = 0.08; 


function calculateBasePrice(pricePerNight, numberOfNights) {
    
    let basePrice = pricePerNight * numberOfNights;
    
    return basePrice;
}

function applyDiscount(totalAmount, nights) {
    
    let discount = 0;
    
   
    if (nights > 5) {
        discount = totalAmount * discountRate;
    }
    
    return discount;
}

function calculateTax(amount) {
    
    let tax = amount * taxRate;
    return tax;
}

function formatPrice(price) {
    
    let formatted = "$" + price.toFixed(2);
    return formatted;
}


function calculateTotal() {
    
    let roomPrice = parseFloat(document.getElementById('roomType').value);
    let nights = parseInt(document.getElementById('nights').value);
    
    
    if (nights < 1) {
        alert("Please enter at least 1 night");
        return; 
    }
    

    let basePrice = calculateBasePrice(roomPrice, nights);
    
    
    let discount = applyDiscount(basePrice, nights);
    
   
    let subtotal = basePrice - discount;
    
    
    let tax = calculateTax(subtotal);
    
    
    let finalTotal = subtotal + tax;
    
   
    let formattedBase = formatPrice(basePrice);
    let formattedDiscount = formatPrice(discount);
    let formattedTax = formatPrice(tax);
    let formattedTotal = formatPrice(finalTotal);
    
   
    let resultHTML = `
        <strong>Booking Summary:</strong><br>
        Room Price: ${formattedBase}<br>
        ${discount > 0 ? `Discount (${nights} nights): -${formattedDiscount}<br>` : ''}
        Tax: ${formattedTax}<br>
        <hr style="margin: 10px 0;">
        <strong>Total: ${formattedTotal}</strong>
    `;

    document.getElementById('result').innerHTML = resultHTML;
    
    
    let resultBox = document.getElementById('result');
    resultBox.style.display = 'block';
    resultBox.classList.add('show');
}


function showModal() {
    let modal = document.getElementById('bookingModal');
    
    
    modal.classList.remove('hidden');
    
    
    modal.classList.add('show');
}

function closeModal() {
    let modal = document.getElementById('bookingModal');
    
    
    modal.classList.add('hidden');
    
    
    modal.classList.remove('show');
}


function toggleAmenities() {
    let amenitiesBox = document.getElementById('amenities');
    
    
    if (amenitiesBox.classList.contains('hidden')) {
        
        amenitiesBox.classList.remove('hidden');
        amenitiesBox.classList.add('show');
    } else {
       
        amenitiesBox.classList.add('hidden');
        amenitiesBox.classList.remove('show');
    }
}


function startLoadingAnimation() {
    let loader = document.getElementById('loader');
    
    
    loader.classList.remove('hidden');
    
    setTimeout(function() {
        loader.classList.add('hidden');
        alert("✅ Rooms available! Ready to book.");
    }, 3000); s
}


function confirmBooking() {
    
    closeModal();
    
    
    let successMsg = document.getElementById('successMessage');
    successMsg.classList.remove('hidden');
    
   
    setTimeout(function() {
        successMsg.classList.add('hidden');
    }, 4000);
}


function demonstrateScope() {
   
    let localVariable = "I only exist inside this function";
    
   
    console.log("Global discount rate:", discountRate);
    console.log("Local variable:", localVariable);
    
}


console.log("Discount rate from global scope:", discountRate);



function getGreeting() {
    let hour = new Date().getHours();
    
    if (hour < 12) {
        return "Good morning";
    } else if (hour < 18) {
        return "Good afternoon";
    } else {
        return "Good evening";
    }
}

function isValidEmail(email) {
 
    let hasAtSymbol = email.includes('@');
    let hasDot = email.includes('.');
    
    
    return hasAtSymbol && hasDot;
}
