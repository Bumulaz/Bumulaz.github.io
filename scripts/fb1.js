document.addEventListener('DOMContentLoaded', () => {
    const submitBtn = document.getElementById('submitButton');
    const outputList = document.getElementById('output');

    submitBtn.addEventListener('click', function(event) {
        event.preventDefault();

        // 1. Get Inputs
        const first = document.getElementById('first_name').value.trim();
        const middle = document.getElementById('middle-initial').value.trim();
        const last = document.getElementById('last_name').value.trim();
        const greetingElement = document.getElementById('greeting');

        // 2. Simple Validation for Name
        if (first === "") {
            alert("Please enter a first name, can't know if it's your burger without it!");
            return;
        }

        // 3. Set Greeting
        let greetingText = `Welcome to Bumulaz' Burgers, ${first}`;
        if (middle !== "") greetingText += ` ${middle}.`;
        greetingText += ` ${last}!`;
        greetingElement.textContent = greetingText;

        // 4. Get and Validate Count Limit
        let limit = prompt(`How high do you want to count, ${first}?`, "140");
        limit = parseInt(limit);

        if (isNaN(limit) || limit <= 0) {
            alert("Yeah... gonna need a number larger than 0, pal.");
            return;
        }

        // 5. Setup Flexible Variables (Themed words)
        const word3 = "CHEEZ";      // Multiple of 3
        const word5 = "FRIEZZ";     // Multiple of 5
        const defaultWord = "Bümulaz Burger";  // Standard word

        // Clear previous list
        outputList.innerHTML = "";

        // 6. The Loop (FizzBuzz Logic)
        for (let i = 1; i <= limit; i++) {
            const listItem = document.createElement('li');
            let outputText = "";

            // Check divisibility
            if (i % 3 === 0 && i % 5 === 0) {
                outputText = `${word3} ${word5}!`; // Multiple of 3 AND 5
            } else if (i % 3 === 0) {
                outputText = `${word3}!`;         // Multiple of 3
            } else if (i % 5 === 0) {
                outputText = `${word5}!`;         // Multiple of 5
            } else {
                outputText = defaultWord;         // Standard
            }

            // Apply classes for CSS styling
            const parity = (i % 2 === 0) ? "even" : "odd";
            listItem.className = parity;
            
            // Format: "1. CHEEZ!"
            listItem.textContent = `${i}. ${outputText}`;
            outputList.appendChild(listItem);
        }
    });
});