  // Select the USD and PHP input fields
  const usdInput = document.getElementById('usd');
  const phpInput = document.getElementById('php');

  // Define the conversion rate
  const conversionRate = 56.01;

  // Function to update the PHP value
  function updatePHPValue() {
      // Convert the USD value to PHP using the conversion rate
      const usdValue = parseFloat(usdInput.value) || 0;
      const phpValue = usdValue * conversionRate;

      // Update the PHP input field
      phpInput.value = phpValue.toFixed(2);
  }

  // Add an event listener to update the PHP value whenever the USD input changes
  usdInput.addEventListener('input', updatePHPValue);

  // Call the function initially to set the PHP value based on the initial USD value
  updatePHPValue();