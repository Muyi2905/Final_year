const questions = [
    {
        question: "What is Big Data?",
        options: ["A collection of small data sets", "Structured data with simple relationships", "Data that is too large to be processed by traditional methods", "Data that only includes numerical values"],
        answer: 2
    },
    {
        question: "Which characteristic of Big Data refers to the fact that data is generated continuously and in large volumes?",
        options: ["Variety", "Veracity", "Velocity", "Volume"],
        answer: 2
    },
    {
        question: "Which type of data refers to the unstructured and semi-structured data that doesn't fit neatly into traditional databases?",
        options: ["Structured Data", "NoSQL Data", "Relational Data", "SQL Data"],
        answer: 1
    },
    {
        question: "What does the '3V' model stand for in Big Data?",
        options: ["Variety, Value, Volume", "Veracity, Volume, Velocity", "Volume, Velocity, Variety", "Value, Velocity, Variety"],
        answer: 2
    },
    {
        question: "Which technology is used to process and analyze large-scale data?",
        options: ["Machine Learning", "Data Science", "Hadoop", "Blockchain"],
        answer: 2
    },
    // ... more questions ...
    {
        question: "Which of the following is a common programming language used for Big Data analytics?",
        options: ["Python", "C++", "Java", "Ruby"],
        answer: 0
    },
    {
        question: "What is the term used to describe the process of combining data from different sources to gain more insights?",
        options: ["Data Aggregation", "Data Merging", "Data Fusion", "Data Synchronization"],
        answer: 2
    },
    {
        question: "Which technology allows data to be stored and accessed across multiple servers and locations?",
        options: ["Cloud Computing", "Edge Computing", "Fog Computing", "Distributed Computing"],
        answer: 0
    },
    {
        question: "What is the purpose of data preprocessing in Big Data analytics?",
        options: ["To increase the volume of the data", "To improve data quality", "To remove all data outliers", "To increase the variety of the data"],
        answer: 1
    },
    {
        question: "Which technique is used to uncover hidden patterns, correlations, and other insights from large datasets?",
        options: ["Data Cleansing", "Data Transformation", "Data Visualization", "Data Mining"],
        answer: 3
    },


    {
        question: "Which type of data analytics involves real-time analysis of data streams?",
        options: ["Descriptive Analytics", "Diagnostic Analytics", "Predictive Analytics", "Streaming Analytics"],
        answer: 3
    },
    {
        question: "What is the main purpose of data visualization in Big Data analytics?",
        options: ["To make the data larger", "To make the data more complex", "To transform unstructured data into structured data", "To present data insights in a visual and understandable format"],
        answer: 3
    },
    {
        question: "Which technology is used for storing and processing large datasets in a distributed manner?",
        options: ["Hadoop", "SQL", "NoSQL", "Relational Database"],
        answer: 0
    },
    {
        question: "What is the term for the process of transforming raw data into a more usable format for analysis?",
        options: ["Data Aggregation", "Data Integration", "Data Wrangling", "Data Segmentation"],
        answer: 2
    },
    {
        question: "What is the term for the process of finding patterns and relationships in data?",
        options: ["Data Mining", "Data Cleansing", "Data Visualization", "Data Preparation"],
        answer: 0
    },
    {
        question: "What is the term for data that is too large to be processed by traditional database systems?",
        options: ["Structured Data", "Small Data", "Medium Data", "Big Data"],
        answer: 3
    },
    {
        question: "Which technology is commonly used for creating and managing data pipelines in Big Data environments?",
        options: ["ETL Tools", "IDEs", "Database Management Systems", "Spreadsheets"],
        answer: 0
    },
    {
        question: "What is the process of summarizing, analyzing, and visualizing large datasets to discover actionable insights called?",
        options: ["Data Cleaning", "Data Sampling", "Data Wrangling", "Data Analytics"],
        answer: 3
    },
    {
        question: "Which technique is used to make predictions about future events based on historical data?",
        options: ["Predictive Modeling", "Descriptive Analysis", "Diagnostic Analysis", "Prescriptive Analysis"],
        answer: 0
    },
    {
        question: "What is the term for the unauthorized access, use, or distribution of sensitive data?",
        options: ["Data Privacy", "Data Security", "Data Encryption", "Data Breach"],
        answer: 3
    },
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
