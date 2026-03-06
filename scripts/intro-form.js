document.addEventListener('DOMContentLoaded', () => {
    const introForm = document.getElementById('intro-form');
    const formOutput = document.getElementById('form-output');

    introForm.addEventListener('submit', (event) => {
        // 1. Prevent the page from refreshing on submit
        event.preventDefault();

        // 2. Capture values from the basic fields
        const firstName = document.getElementById('first_name').value;
        const mi = document.getElementById('middle_initial').value;
        const lastName = document.getElementById('last_name').value;
        
        const personalBg = document.getElementById('personal-bg').value;
        const profBg = document.getElementById('prof-bg').value;
        const academicBg = document.getElementById('academic-bg').value;
        const computer = document.getElementById('computer').value;

        // 3. Capture values from the dynamic course fields
        const courses = Array.from(document.querySelectorAll('.course-input'))
                             .map(input => input.value)
                             .filter(val => val.trim() !== "");

        // 4. Construct the output HTML
        const outputHTML = `
            <h3>Output:</h3>
            <p><strong>Name:</strong> ${firstName} ${mi} ${lastName}</p>
            <p><strong>Personal Background:</strong> ${personalBg}</p>
            <p><strong>Professional Background:</strong> ${profBg}</p>
            <p><strong>Academic Background:</strong> ${academicBg}</p>
            <p><strong>Primary Computer:</strong> ${computer}</p>
            <p><strong>Current Courses:</strong> ${courses.join(', ')}</p>
        `;

        // 5. Display the output
        formOutput.innerHTML = outputHTML;
        
        // Optional: Scroll to the output so the user sees it
        formOutput.scrollIntoView({ behavior: 'smooth' });
    });
});