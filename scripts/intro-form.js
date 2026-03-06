document.addEventListener('DOMContentLoaded', () => {
    const introForm = document.getElementById('intro-form');
    const outputArea = document.getElementById('intro-output'); // Make sure this ID exists in HTML!

    if (introForm) {
        introForm.addEventListener('submit', function(event) {
            // STOP THE REFRESH
            event.preventDefault(); 

            // GATHER DATA
            const firstName = document.getElementById('first_name').value;
            const mi = document.getElementById('middle_initial').value;
            const lastName = document.getElementById('last_name').value;
            const personal = document.getElementById('personal-bg').value;
            const professional = document.getElementById('prof-bg').value;
            const academic = document.getElementById('academic-bg').value;
            const computer = document.getElementById('computer').value;
            
            // HANDLING COURSES
            // This takes the space-separated courses and turns them into <li> items
            const coursesValue = document.getElementById('curcourses').value;
            const courseArray = coursesValue.split(' ');
            let courseListHTML = "<ul>";
            courseArray.forEach(course => {
                if(course.trim() !== "") {
                    courseListHTML += `<li>${course}</li>`;
                }
            });
            courseListHTML += "</ul>";

            // OUTPUT TO PAGE
            if (outputArea) {
                outputArea.innerHTML = `
                    <hr>
                    <h2 class="pageMini">${firstName} ${mi} ${lastName}'s Introduction</h2>
                    <p><strong>Personal Background:</strong> ${personal}</p>
                    <p><strong>Professional Background:</strong> ${professional}</p>
                    <p><strong>Academic Background:</strong> ${academic}</p>
                    <p><strong>Primary Computer:</strong> ${computer}</p>
                    <p><strong>Courses:</strong> ${courseListHTML}</p>
                `;
            }
        });
    }
});