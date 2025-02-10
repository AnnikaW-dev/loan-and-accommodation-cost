// Function to update slider values dynamically
function updateSliderValue(sliderId, outputId) {
    const slider = document.getElementById(sliderId);
    const output = document.getElementById(outputId);

    // Update output on input change
    slider.addEventListener("input", () => {
        output.textContent = new Intl.NumberFormat('en-US').format(slider.value);
    });

    // Set initial value
    output.textContent = new Intl.NumberFormat('en-US').format(slider.value);
}

// Apply the function to each slider
updateSliderValue("purchase-amount-slider", "purchase-amount-output");
updateSliderValue("down-payment-slider", "down-payment-output");
updateSliderValue("interst-slider", "interst-output");
updateSliderValue("amortization-slider", "amortization-output");
updateSliderValue("interest-costs-slider", "nterest-costs-output"); // Typo fixed
updateSliderValue("total-loan-cost-slider", "total-loan-cost-output");

// Handle the Calculate Button Click
document.getElementById("calculate-btn").addEventListener("click", function () {
    // Retrieve values
    const purchaseAmount = parseFloat(document.getElementById("purchase-amount-slider").value);
    const downPayment = parseFloat(document.getElementById("down-payment-slider").value);
    const interestRate = parseFloat(document.getElementById("interst-slider").value) / 100; // Convert to decimal
    const amortization = parseFloat(document.getElementById("amortization-slider").value);

    // Simple interest cost calculation
    const loanAmount = purchaseAmount - downPayment;
    const interestCost = loanAmount * interestRate;
    const totalLoanCost = loanAmount + interestCost - amortization;

    // Display results
    document.getElementById("nterest-costs-output").textContent = new Intl.NumberFormat('en-US').format(interestCost.toFixed(0));
    document.getElementById("total-loan-cost-output").textContent = new Intl.NumberFormat('en-US').format(totalLoanCost.toFixed(0));
});






