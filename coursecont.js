// coursecont.js

// Retrieve the course details and contents based on the course ID from the URL query parameter
function getCourseDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = urlParams.get('id');


    const courses = [
        {
            id: 'course1',
            title: 'Data Structure and Algorithm',
            image: 'data_structure_and_alg.png',
            description: 'Learn about data structures and algorithms and how to apply them in problem-solving.',
            contents: ['Introduction to Data Structures', 'Arrays and Linked Lists', 'Stacks and Queues', 'Trees and Graphs', 'Sorting and Searching Algorithms']
        },

    ];

    // Find the selected course
    const selectedCourse = courses.find(course => course.id === courseId);

    if (selectedCourse) {
        // Update the page elements with the course details
        document.getElementById('course-title').textContent = selectedCourse.title;
        document.getElementById('course-image').src = selectedCourse.image;
        document.getElementById('course-description').textContent = selectedCourse.description;

        // Generate the course contents list
        const courseContents = document.getElementById('course-contents');
        selectedCourse.contents.forEach(content => {
            const listItem = document.createElement('li');
            listItem.textContent = content;
            courseContents.appendChild(listItem);
        });
    } else {
        // Course not found, handle the error or redirect to an error page
        console.error('Course not found.');
    }
}

// Call the function to load the course details when the page is loaded
window.addEventListener('load', getCourseDetails);
