document.addEventListener('DOMContentLoaded', () => {
    const submitBtn = document.getElementById('submitButton');
    const outputList = document.getElementById('output'); 
    submitBtn.addEventListener('click', function(event) {
        event.preventDefault(); 
        
        const first = document.getElementById('first_name').value.trim();
        const middle = document.getElementById('middle-initial').value.trim();
        const last = document.getElementById('last_name').value.trim();
        const greetingElement = document.getElementById('greeting');

      
        if (first === "") {
            alert("Please enter a first name, can't know if it's your burger without it!");
            return;
        }

        
        let greetingText = `Welcome to Bümulaz' Burgers ${first}`;
        
        if (middle !== "") {
            greetingText += ` ${middle}. ${last}!`; 
        } else {
            greetingText += ` ${last}!`; 
        }
        greetingElement.textContent = greetingText;

        
        let limit = prompt(`How high do you want to count, ${first}?`);
        limit = parseInt(limit);

        
        if (isNaN(limit) || limit <= 0) {
            alert("Yeah... gonna need a number larger than 0 pal.");
            return;
        }

        
        outputList.innerHTML = ""; 
        for (let i = 1; i <= limit; i++) {
            const listItem = document.createElement('li');
            const parity = (i % 2 === 0) ? "even" : "odd"; 
            
            
            listItem.textContent = `${i}) Bümulaz Burger - the number is ${parity}`; 
            listItem.className = parity; 
            
            outputList.appendChild(listItem);
        }
    });
});