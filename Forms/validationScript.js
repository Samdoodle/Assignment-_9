    // JavaScript code for form validation
	// Prevent form from submitting

      // Retrieve the input field value

      // Regular expression pattern for alphanumeric input

      // Check if the input value matches the pattern

        // Valid input: display confirmation and submit the form

        // Invalid input: display error message

//Saeb Sallam 2296221

const myForm = document.getElementById('myForm')

      myForm.addEventListener('submit', function (e) { 
            
      
      const inputField = document.getElementById('inputField').value;
      const rejex = /^[a-zA-Z0-9]*$/;
      const Result = rejex.test(inputField);

      if (Result){
            alert("Valid Input form submitted successfully!")}

      else  {alert("Invalid Input must be alphanumeric!")
            e.preventDefault();}
});