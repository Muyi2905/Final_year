const questions = [
    {
        question: "What is FullStack Development?",
        options: [
            "Frontend development only",
            "Backend development only",
            "Development of both frontend and backend",
            "Database administration"
        ],
        answer: 2
    },
    {
        question: "Which programming languages are commonly used for frontend development?",
        options: ["Python", "Java", "HTML/CSS/JavaScript", "PHP"],
        answer: 2
    },
    {
        question: "What is the purpose of a frontend framework like React or Angular?",
        options: [
            "To manage databases",
            "To design user interfaces",
            "To handle server-side logic",
            "To provide network security"
        ],
        answer: 1
    },
    {
        question: "What is a RESTful API?",
        options: [
            "A way to access databases directly",
            "A type of database",
            "A programming language",
            "An architectural style for designing networked applications"
        ],
        answer: 3
    },
    {
        question: "Which database management systems are commonly used for backend development?",
        options: ["MySQL", "Photoshop", "Firebase", "HTML"],
        answer: 0
    },
    {
        question: "What is the purpose of a backend framework like Node.js or Django?",
        options: [
            "To create interactive user interfaces",
            "To build APIs and handle server-side logic",
            "To design responsive layouts",
            "To create visual effects"
        ],
        answer: 1
    },
    {
        question: "What does CRUD stand for in the context of web development?",
        options: [
            "Creating, Rendering, Updating, Deleting",
            "Control, Read, Unlink, Destroy",
            "Creating, Reviewing, Updating, Deleting",
            "Create, Read, Update, Delete"
        ],
        answer: 3
    },
    {
        question: "Which tool can be used to manage different versions of source code?",
        options: ["Photoshop", "Version Control System (VCS)", "Firebase", "HTML"],
        answer: 1
    },
    {
        question: "What is the purpose of a package manager like npm or yarn?",
        options: [
            "To manage database connections",
            "To design user interfaces",
            "To build responsive layouts",
            "To manage dependencies and packages"
        ],
        answer: 3
    },
    {
        question: "What is a single-page application (SPA)?",
        options: [
            "An application that only runs on a single computer",
            "An application with only one web page",
            "An application that performs a single function",
            "An application with a single user"
        ],
        answer: 1
    },
    {
        question: "Which of the following is NOT a frontend framework?",
        options: ["React", "Angular", "Vue", "Node.js"],
        answer: 3
    },
    {
        question: "Which protocol is used to transfer data between a client and server?",
        options: ["HTTP", "FTP", "SSH", "SMTP"],
        answer: 0
    },
    {
        question: "What does API stand for?",
        options: [
            "Application Process Integration",
            "Advanced Programming Interface",
            "Advanced Protocol Interface",
            "Application Programming Interface"
        ],
        answer: 3
    },
    {
        question: "Which of the following is NOT a commonly used frontend library?",
        options: ["jQuery", "Bootstrap", "Material-UI", "Express"],
        answer: 3
    },
    {
        question: "What is the purpose of a reverse proxy?",
        options: [
            "To block access to a website",
            "To protect sensitive data",
            "To cache and distribute network traffic",
            "To encrypt emails"
        ],
        answer: 2
    },
    {
        question: "What is the role of a DevOps engineer in FullStack Development?",
        options: [
            "Designing user interfaces",
            "Managing databases",
            "Testing applications",
            "Ensuring smooth collaboration between development and operations"
        ],
        answer: 3
    },
    {
        question: "What is the purpose of URL encoding?",
        options: [
            "To format URLs in a user-friendly way",
            "To make URLs shorter",
            "To encrypt URLs for security",
            "To ensure special characters in URLs are properly handled"
        ],
        answer: 3
    },
    {
        question: "What is the main advantage of using a virtual machine in web development?",
        options: [
            "Faster load times for websites",
            "Better search engine optimization",
            "Higher security for user data",
            "Isolation and portability of development environments"
        ],
        answer: 3
    },
    {
        question: "What is the purpose of user authentication and authorization in web applications?",
        options: [
            "To prevent users from accessing the website",
            "To restrict users from using certain browsers",
            "To ensure the website is optimized for mobile devices",
            "To control access to certain parts of the application based on user roles and permissions"
        ],
        answer: 3
    },
    {
        question: "What is the role of a load balancer in FullStack Development?",
        options: [
            "To manage backend databases",
            "To distribute network traffic evenly across multiple servers",
            "To optimize frontend user interfaces",
            "To manage user authentication"
        ],
        answer: 1
    },
    {
        question: "Which programming language is commonly used for backend development with Node.js?",
        options: ["Python", "Java", "C#", "JavaScript"],
        answer: 3
    },
    {
        question: "What is the purpose of serverless architecture?",
        options: [
            "To eliminate the need for frontend development",
            "To avoid using servers for hosting web applications",
            "To make backend development easier",
            "To manage user authentication"
        ],
        answer: 1
    },
    {
        question: "What is Continuous Integration (CI) in software development?",
        options: [
            "A programming technique",
            "A process of building and deploying code changes automatically",
            "A type of database",
            "A method of creating user interfaces"
        ],
        answer: 1
    },
    {
        question: "What is the purpose of cross-site scripting (XSS) attacks?",
        options: [
            "To improve website performance",
            "To enhance user experience",
            "To distribute malware or steal sensitive information",
            "To optimize search engine rankings"
        ],
        answer: 2
    },
    {
        question: "Which of the following is NOT a commonly used backend framework?",
        options: ["Express", "Django", "Ruby on Rails", "Vue"],
        answer: 3
    }
];

const form = document.getElementById("assessment-form");
const questionList = document.getElementById("question-list");
const resultSection = document.getElementById("result");
const scoreDisplay = document.getElementById("score");

// Generate question list
questions.forEach((question, index) => {
    const li = document.createElement("li");
    const questionText = document.createTextNode(question.question);
    li.appendChild(questionText);

    const options = document.createElement("ul");
    options.className = "options";

    question.options.forEach((option, optionIndex) => {
        const optionItem = document.createElement("li");
        const optionLabel = document.createElement("label");
        const optionInput = document.createElement("input");
        optionInput.type = "radio";
        optionInput.name = `question-${index}`;
        optionInput.value = optionIndex;
        optionLabel.appendChild(optionInput);
        optionLabel.appendChild(document.createTextNode(option));
        optionItem.appendChild(optionLabel);
        options.appendChild(optionItem);
    });

    li.appendChild(options);
    questionList.appendChild(li);
});

// Handle form submission
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const selectedOptions = document.querySelectorAll("input[type=radio]:checked");
    const userAnswers = Array.from(selectedOptions).map(option => parseInt(option.value));
    const score = calculateScore(userAnswers);

    showResult(score);
});

// Calculate the score
function calculateScore(userAnswers) {
    let score = 0;
    questions.forEach((question, index) => {
        if (question.answer === userAnswers[index]) {
            score++;
        }
    });
    return score;
}

// Display the result
function showResult(score) {
    resultSection.classList.remove("hidden");
    scoreDisplay.textContent = `Your Score: ${score}/${questions.length}`;
}