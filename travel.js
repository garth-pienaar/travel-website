document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("booking-form");
  const steps = form.querySelectorAll(".step");
  let currentStep = 0;

  function showStep(stepIndex) {
    steps.forEach((step, index) => {
      if (index === stepIndex) {
        step.classList.add("active");
      } else {
        step.classList.remove("active");
      }
    });
  }

  function goToStep(stepIndex) {
    if (stepIndex >= 0 && stepIndex < steps.length) {
      currentStep = stepIndex;
      showStep(currentStep);
    }
  }

  function nextStep() {
    goToStep(currentStep + 1);
  }

  function prevStep() {
    goToStep(currentStep - 1);
  }

  document.querySelectorAll(".next-btn").forEach(button => {
    button.addEventListener("click", nextStep);
  });

  document.querySelectorAll(".prev-btn").forEach(button => {
    button.addEventListener("click", prevStep);
  });

  form.addEventListener("submit", function(event) {
    // Perform form submission or AJAX request here
    event.preventDefault();
    alert("Form submitted successfully!");
  });
  
  // Show the first step initially
  showStep(currentStep);
});
