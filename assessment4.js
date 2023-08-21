const questions = [
    {
        question: "What is a database schema?",
        options: ["A diagram that represents the structure of a database system", "A collection of related tables in a database", "A set of rules that define the structure of a database", "A tool for querying databases"],
        answer: 2
    },
    {
        question: "Which of the following is a type of database model that uses a graph structure?",
        options: ["Relational Database Model", "Hierarchical Database Model", "Network Database Model", "Entity-Relationship Database Model"],
        answer: 2
    },
    {
        question: "Which normal form eliminates partial dependencies?",
        options: ["First Normal Form (1NF)", "Second Normal Form (2NF)", "Third Normal Form (3NF)", "Boyce-Codd Normal Form (BCNF)"],
        answer: 2
    },
    {
        question: "Which SQL command is used to retrieve data from a database?",
        options: ["SEARCH", "SELECT", "RETRIEVE", "GET"],
        answer: 1
    },
    {
        question: "In a relational database, what is a primary key?",
        options: ["A key used for encryption", "A key used to establish relationships between tables", "A unique identifier for a record in a table", "A key used for sorting data"],
        answer: 2
    },
    {
        question: "What does ACID stand for in the context of database transactions?",
        options: ["All Columns In Database", "Atomicity, Consistency, Isolation, Durability", "Advanced Coding and Integrated Design", "Application Center for Internet Databases"],
        answer: 1
    },
    {
        question: "Which database management system is known for its document-oriented NoSQL approach?",
        options: ["MySQL", "Oracle Database", "MongoDB", "SQLite"],
        answer: 2
    },
    {
        question: "What is the purpose of a foreign key in a relational database?",
        options: ["To ensure data integrity and enforce referential integrity", "To provide a primary key for another table", "To store large binary data", "To store user-defined functions"],
        answer: 0
    },
    {
        question: "What is the process of combining columns from two or more tables into a single result set?",
        options: ["Grouping", "Merging", "Joining", "Combining"],
        answer: 2
    },
    {
        question: "Which of the following SQL statements is used to add new records to a database table?",
        options: ["INSERT", "CREATE", "UPDATE", "ADD"],
        answer: 0
    },
    {
        question: "Which type of database management system is optimized for handling analytical queries and reporting?",
        options: ["OLTP (Online Transaction Processing)", "OLAP (Online Analytical Processing)", "NoSQL", "Hierarchical"],
        answer: 1
    },
    {
        question: "Which of the following represents a one-to-many relationship in a database?",
        options: ["One record in Table A is related to many records in Table B", "One record in Table A is related to one record in Table B", "Many records in Table A are related to many records in Table B", "Many records in Table A are related to one record in Table B"],
        answer: 0
    },
    {
        question: "What is a stored procedure in the context of a database?",
        options: ["A function that performs calculations on data", "A script used to generate reports", "A group of related tables", "A precompiled set of SQL statements"],
        answer: 3
    },
    {
        question: "Which of the following is an example of a non-relational database?",
        options: ["Microsoft Access", "MySQL", "PostgreSQL", "Cassandra"],
        answer: 3
    },
    {
        question: "Which SQL command is used to delete data from a database?",
        options: ["REMOVE", "DELETE", "ERASE", "DROP"],
        answer: 1
    },
    {
        question: "What does the term 'Normalization' refer to in the context of database design?",
        options: ["Organizing data into separate tables for efficiency", "Removing all duplicate data", "Creating primary and foreign keys", "Performing complex calculations"],
        answer: 0
    },
    {
        question: "Which of the following represents a many-to-many relationship in a database?",
        options: ["One record in Table A is related to one record in Table B", "One record in Table A is related to many records in Table B", "Many records in Table A are related to one record in Table B", "Many records in Table A are related to many records in Table B"],
        answer: 3
    },
    {
        question: "What is the purpose of an index in a database?",
        options: ["To store large text or binary data", "To improve the performance of data retrieval operations", "To enforce referential integrity constraints", "To group related data together"],
        answer: 1
    },
    {
        question: "Which SQL statement is used to update data in a database?",
        options: ["INSERT", "SELECT", "UPDATE", "DELETE"],
        answer: 2
    },
    {
        question: "What is the purpose of a database view?",
        options: ["To store large binary data", "To display data from multiple tables as a single virtual table", "To perform complex calculations", "To create a backup of the database"],
        answer: 1
    },
    {
        question: "In a relational database, what is a foreign key?",
        options: ["A key used to encrypt sensitive data", "A key used to establish relationships between tables", "A unique identifier for a record in a table", "A key used for sorting data"],
        answer: 1
    },
    {
        question: "Which SQL command is used to retrieve distinct values from a column?",
        options: ["DISTINCT", "UNIQUE", "DIFFERENT", "SELECT DISTINCT"],
        answer: 3
    },
    {
        question: "What is the process of breaking down complex entities into simpler ones?",
        options: ["Composition", "Decomposition", "Abstraction", "Aggregation"],
        answer: 1
    },
    {
        question: "Which of the following represents a self-referencing relationship in a database?",
        options: ["One record in Table A is related to one record in Table B", "One record in Table A is related to many records in Table B", "Many records in Table A are related to one record in Table B", "A record in Table A is related to another record in the same table"],
        answer: 3
    },
    {
        question: "Which SQL command is used to change the structure of a database table?",
        options: ["MODIFY", "ALTER", "CHANGE", "UPDATE"],
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
