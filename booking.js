document.addEventListener('DOMContentLoaded', function() {
  // Find all the visible date display inputs
  const dateDisplayInputs = document.querySelectorAll('.date-display-input');

  // Add a click event to each visible input
  dateDisplayInputs.forEach(input => {
    input.addEventListener('click', function() {
      // Find the corresponding hidden date input and open its calendar
      const targetId = this.id.replace('-display', '');
      const hiddenDateInput = document.getElementById(targetId);
      
      // Use showPicker() to programmatically open the calendar view
      if (hiddenDateInput) {
        try {
          hiddenDateInput.showPicker();
        } catch (error) {
          // Fallback for older browsers
          console.error("showPicker() is not supported by this browser.", error);
        }
      }
    });
  });

  // Find all the hidden date inputs
  const hiddenDateInputs = document.querySelectorAll('.hidden-date-input');

  // Add a change event to each hidden input
  hiddenDateInputs.forEach(hiddenInput => {
    hiddenInput.addEventListener('change', function() {
      // Get the ID of the visible input this should update
      const targetDisplayId = this.dataset.target;
      const displayInput = document.getElementById(targetDisplayId);

      // Check if both the hidden and visible inputs exist
      if (this.value && displayInput) {
        // The date value from the input is always "YYYY-MM-DD"
        const dateValue = this.value; 
        
        // Split the date into parts: [YYYY, MM, DD]
        const parts = dateValue.split('-');
        const year = parts[0];
        const month = parts[1];
        const day = parts[2];
        
        // Create the new format "YYYY DD MM"
        const formattedDate = `${year} ${day} ${month}`;
        
        // Update the visible input's value
        displayInput.value = formattedDate;
      }
    });
  });
});