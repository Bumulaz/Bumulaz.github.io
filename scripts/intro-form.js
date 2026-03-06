document.addEventListener('DOMContentLoaded', () => {
    const introForm = document.getElementById('intro-form');
    const formOutput = document.getElementById('form-output');

    introForm.addEventListener('submit', (event) => {
        
        event.preventDefault();

       
        const firstName = document.getElementById('first_name').value;
        const mi = document.getElementById('middle_initial').value;
        const lastName = document.getElementById('last_name').value;
        
        const personalBg = document.getElementById('personal-bg').value;
        const profBg = document.getElementById('prof-bg').value;
        const academicBg = document.getElementById('academic-bg').value;
        const computer = document.getElementById('computer').value;

        
        const courses = Array.from(document.querySelectorAll('.course-input'))
            .map((input) => input.value)
            .filter((val) => val.trim() !== "");

        
        const outputHTML = `
            <h3>Output:</h3>
            <p><strong>Name:</strong> ${firstName} ${mi} ${lastName}</p>
            <p><strong>Personal Background:</strong> ${personalBg}</p>
            <p><strong>Professional Background:</strong> ${profBg}</p>
            <p><strong>Academic Background:</strong> ${academicBg}</p>
            <p><strong>Primary Computer:</strong> ${computer}</p>
            <p><strong>Current Courses:</strong> ${courses.join(', ')}</p>
        `;

        
        formOutput.innerHTML = outputHTML;
        
        
        formOutput.scrollIntoView({ behavior: 'smooth' });
    });
});