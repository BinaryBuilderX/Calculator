let string = "";
let memory = 0; // Memory storage for M+ and M-
let buttons = document.querySelectorAll('.btn');

// Add event listeners for all buttons
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let btnValue = e.target.innerHTML;

        // Handle the "=" button to calculate the result
        if (btnValue === '=') {
            try {
                string = eval(string);  // Evaluate the expression in string
                document.querySelector('#calcInput').value = string;  // Display the result
            } catch {
                document.querySelector('#calcInput').value = "Error";  // Handle any errors
            }
        }
        // Handle the "C" button to clear the input
        else if (btnValue === 'C') {
            string = "";  // Reset the input string
            document.querySelector('#calcInput').value = string;  // Clear the input field
        }
        // Handle the "M+" button to add the current input to memory
        else if (btnValue === 'M+') {
            memory += parseFloat(document.querySelector('#calcInput').value || 0);
        }
        // Handle the "M-" button to subtract the current input from memory
        else if (btnValue === 'M-') {
            memory -= parseFloat(document.querySelector('#calcInput').value || 0);
        }
        // Handle percentage calculation
        else if (btnValue === '%') {
            string = (parseFloat(string) / 100).toString();
            document.querySelector('#calcInput').value = string;
        }
        // For any other button, append its value to the input string
        else {
            string += btnValue;
            document.querySelector('#calcInput').value = string;  // Display updated string
        }
    });
});
