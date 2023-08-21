const questions = [
    {
        question: "What is Python?",
        options: ["A type of snake", "A programming language", "A software development framework", "A database management system"],
        answer: 1
    },
    {
        question: "Which of the following is not a valid Python variable name?",
        options: ["my_var", "2_var", "_myvar", "myVar"],
        answer: 1
    },
    {
        question: "Which keyword is used to define a function in Python?",
        options: ["method", "function", "define", "def"],
        answer: 3
    },
    {
        question: "What is the output of the following code?\n\nprint(2 ** 3)",
        options: ["23", "8", "6", "16"],
        answer: 1
    },
    {
        question: "What is the purpose of the 'if' statement in Python?",
        options: ["To define a loop", "To import modules", "To define a function", "To make decisions"],
        answer: 3
    },
    {
        question: "Which data type is used to store a sequence of characters in Python?",
        options: ["integer", "string", "float", "list"],
        answer: 1
    },
    {
        question: "What is the correct way to comment out multiple lines in Python?",
        options: ["/* This is a comment */", "// This is a comment", "# This is a comment", "<!-- This is a comment -->"],
        answer: 2
    },
    {
        question: "What is the output of the following code?\n\nmy_list = [1, 2, 3]\nprint(my_list[1])",
        options: ["1", "2", "3", "IndexError"],
        answer: 1
    },
    {
        question: "Which loop is used for iterating over a sequence in Python?",
        options: ["for loop", "while loop", "repeat loop", "if loop"],
        answer: 0
    },
    {
        question: "What is the purpose of the 'import' statement in Python?",
        options: ["To create a new module", "To execute code", "To comment out code", "To import external modules"],
        answer: 3
    },
    {
        question: "What is the correct way to define a tuple in Python?",
        options: ["my_tuple = [1, 2, 3]", "my_tuple = (1, 2, 3)", "my_tuple = {1, 2, 3}", "my_tuple = '1, 2, 3'"],
        answer: 1
    },
    {
        question: "What is the purpose of the 'elif' statement in Python?",
        options: ["To create a loop", "To define a variable", "To handle multiple conditions", "To end the program"],
        answer: 2
    },
    {
        question: "Which operator is used for concatenating strings in Python?",
        options: ["&", "+", "*", "|"],
        answer: 1
    },
    {
        question: "What is the output of the following code?\n\nprint(len('python'))",
        options: ["6", "5", "7", "SyntaxError"],
        answer: 0
    },
    {
        question: "Which function is used to read input from the user in Python?",
        options: ["input()", "read()", "get_input()", "user_input()"],
        answer: 0
    },
    {
        question: "What is the correct way to remove an item from a list in Python?",
        options: ["list.remove(item)", "list.delete(item)", "list.pop(item)", "list.clear(item)"],
        answer: 0
    },
    {
        question: "Which function is used to convert a string to uppercase in Python?",
        options: ["uppercase()", "to_upper()", "upper()", "convert_upper()"],
        answer: 2
    },
    {
        question: "What is the purpose of the 'return' statement in a function?",
        options: ["To exit the program", "To print a value", "To call another function", "To return a value"],
        answer: 3
    },
    {
        question: "What is the output of the following code?\n\nx = 5\ny = '10'\nprint(x + y)",
        options: ["15", "510", "SyntaxError", "TypeError"],
        answer: 3
    },
    {
        question: "Which module is used for working with dates and times in Python?",
        options: ["time", "datetime", "calendar", "date"],
        answer: 1
    },
    {
        question: "What is the correct way to open a file for writing in Python?",
        options: ["open('file.txt', 'w')", "open('file.txt', 'r')", "open('file.txt', 'a')", "write('file.txt')"],
        answer: 0
    },
    {
        question: "Which method is used to remove whitespace from the beginning and end of a string in Python?",
        options: ["trim()", "strip()", "remove_whitespace()", "clean()"],
        answer: 1
    },
    {
        question: "What is the output of the following code?\n\nmy_dict = {'name': 'John', 'age': 30}\nprint(my_dict['name'])",
        options: ["{'name': 'John'}", "'John'", "30", "KeyError"],
        answer: 1
    },
    {
        question: "What is the purpose of the 'try' and 'except' statements in Python?",
        options: ["To define a loop", "To handle exceptions", "To create a condition", "To import modules"],
        answer: 1
    },
    {
        question: "Which function is used to convert a string to an integer in Python?",
        options: ["to_int()", "int()", "convert_to_integer()", "string_to_int()"],
        answer: 1
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
