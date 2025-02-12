// Function to update slider values dynamically
function updateSliderValue(sliderId, outputId) {
  const slider = document.getElementById(sliderId);
  const output = document.getElementById(outputId);

  // Update output on input change
  slider.addEventListener("input", () => {
    output.textContent = new Intl.NumberFormat().format(slider.value);
  });

  if (output) {
    let unit = "";
    if (
      slider.id.includes("amount") ||
      slider.id.includes("payment") ||
      slider.id.includes("amortization")
    ) {
      unit = " kr";
    } else if (slider.id.includes("interest")) {
      unit = "%";
    }

    // Set initial value
    output.textContent = new Intl.NumberFormat().format(slider.value) + unit;
  }
}

// Apply the function to each slider
updateSliderValue("purchase-amount-slider", "purchase-amount-output");
updateSliderValue("down-payment-slider", "down-payment-output");
updateSliderValue("interest-slider", "interest-output");
updateSliderValue("amortization-slider", "amortization-output");

// Handle the Calculate Button Click
document.getElementById("calculate-btn").addEventListener("click", function () {
  // get values
  const purchaseAmount = parseFloat(
    document.getElementById("purchase-amount-slider").value || 0
  );
  const downPayment = parseFloat(
    document.getElementById("down-payment-slider").value || 0
  );
  const interest = parseFloat(
    document.getElementById("interest-slider").value || 0
  );
  const amortization = parseFloat(
    document.getElementById("amortization-slider").value || 0
  );

  //calculate
  const loanAmount = purchaseAmount - downPayment;
  const loanToValueRatio = ((loanAmount / purchaseAmount) * 100).toFixed(0);
  const monthlyInterest = ((loanAmount * (interest / 100)) / 12).toFixed(0);
  const monthlyTotalCost = (parseFloat(monthlyInterest) + amortization).toFixed(0);
  const yearCost = (monthlyTotalCost * 12).toFixed(0);

  function updateResult(elementId, value) {
    document.getElementById(elementId).textContent =new Intl.NumberFormat().format(value);
  }
  updateResult("yourFirstYear", yearCost) ;
  updateResult("YourMonthlyCost", monthlyTotalCost);
  updateResult("yourPrice", purchaseAmount);
  updateResult("yourDownPayment", downPayment);
  updateResult("yourLoanRatio", loanToValueRatio);
  updateResult("yourMounthlyInterest", monthlyInterest);
  updateResult("yourMortgage", loanAmount);
  updateResult("yourMonthlyAmortization", amortization);
});
