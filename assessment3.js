const questions = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "High-level Text Management Language", "Home Tool Markup Language", "Hyperlink and Text Markup Language"],
        answer: 0
    },
    {
        question: "Which of the following is used for styling web pages?",
        options: ["JavaScript", "Python", "CSS", "Java"],
        answer: 2
    },
    {
        question: "Which tag is used for creating an ordered list in HTML?",
        options: ["<ul>", "<ol>", "<li>", "<dl>"],
        answer: 1
    },
    {
        question: "What does CSS stand for?",
        options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
        answer: 1
    },
    {
        question: "Which HTML tag is used for creating a hyperlink?",
        options: ["<a>", "<h>", "<link>", "<p>"],
        answer: 0
    },
    {
        question: "What is the purpose of the <head> element in an HTML document?",
        options: ["It contains the main content of the document.", "It defines the header of the document.", "It defines the footer of the document.", "It contains metadata about the document."],
        answer: 3
    },
    {
        question: "Which attribute is used to specify the URL of the image in the <img> tag?",
        options: ["src", "url", "href", "link"],
        answer: 0
    },
    {
        question: "What is the role of JavaScript in web development?",
        options: ["Styling the web page", "Creating and enhancing the user interface", "Managing the server-side logic", "Defining the structure of the web page"],
        answer: 1
    },
    {
        question: "Which HTML element is used to define the structure of an HTML table?",
        options: ["<table>", "<tr>", "<td>", "<th>"],
        answer: 0
    },
    {
        question: "What is the correct way to comment out multiple lines in HTML?",
        options: ["<!-- This is a comment -->", "/* This is a comment */", "// This is a comment", "<!-- This is a comment"],
        answer: 1
    },
    {
        question: "Which CSS property is used to change the font color of an element?",
        options: ["color", "font-color", "text-color", "font-style"],
        answer: 0
    },
    {
        question: "Which of the following is a programming language commonly used for building web applications?",
        options: ["HTML", "CSS", "Java", "Python"],
        answer: 2
    },
    {
        question: "What does the 'HTTP' stand for in a URL?",
        options: ["Hyper Text Transfer Protocol", "High-level Text Transmission Protocol", "Home Tool Transfer Protocol", "Hyperlink and Text Transfer Protocol"],
        answer: 0
    },
    {
        question: "Which tag is used to define a section of a web page?",
        options: ["<div>", "<section>", "<article>", "<span>"],
        answer: 1
    },
    {
        question: "Which of the following is NOT a valid CSS selector?",
        options: ["#id-selector", ".class-selector", "$element-selector", "element-selector"],
        answer: 2
    },
    {
        question: "Which HTML element is used to create an input field for submitting a form?",
        options: ["<form>", "<input>", "<submit>", "<button>"],
        answer: 1
    },
    {
        question: "What is the purpose of the <meta> tag in HTML?",
        options: ["It defines a hyperlink.", "It specifies the heading of the document.", "It provides metadata about the document.", "It defines a table structure."],
        answer: 2
    },
    {
        question: "Which property is used in CSS to control the spacing between elements?",
        options: ["margin", "padding", "border", "spacing"],
        answer: 0
    },
    {
        question: "Which of the following is NOT a web browser?",
        options: ["Google Chrome", "Mozilla Firefox", "Internet Explorer", "Python Safari"],
        answer: 3
    },
    {
        question: "What is the role of a web server in web development?",
        options: ["Creating user interfaces", "Storing and managing data", "Accessing external APIs", "Displaying web pages"],
        answer: 1
    },
    {
        question: "Which attribute is used to define a unique identifier for an HTML element?",
        options: ["id", "class", "name", "identifier"],
        answer: 0
    },
    {
        question: "Which CSS property is used to control the size of text?",
        options: ["font-size", "text-size", "font-style", "text-style"],
        answer: 0
    },
    {
        question: "Which of the following is NOT a valid HTTP status code?",
        options: ["200 OK", "404 Not Found", "500 Server Error", "403 Forbidden"],
        answer: 2
    },
    {
        question: "What is the purpose of the <script> element in an HTML document?",
        options: ["It defines a section of the document.", "It includes external stylesheets.", "It contains JavaScript code.", "It defines a hyperlink."],
        answer: 2
    }
]

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

