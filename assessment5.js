const questions = [
    {
        question: "What is the full form of “AI”?",
        options: ["Artificially Intelligent", "Artificial Intelligence", "Artificially Intelligence", "Advanced Intelligence"],
        answer: 1
    },
    {
        question: "What is Artificial Intelligence?",
        options: [
            "A field that aims to make humans more intelligent",
            "A field that aims to improve the security",
            "A field that aims to develop intelligent machines",
            "A field that aims to mine the data"
        ],
        answer: 2
    },
    {
        question: "Who is the inventor of Artificial Intelligence?",
        options: ["Geoffrey Hinton", "Andrew Ng", "John McCarthy", "Jürgen Schmidhuber"],
        answer: 2
    },
    {
        question: "Which of the following is the branch of Artificial Intelligence?",
        options: ["Machine Learning", "Cyber forensics", "Full-Stack Developer", "Network Design"],
        answer: 0
    },
    {
        question: "What is the goal of Artificial Intelligence?",
        options: [
            "To solve artificial problems",
            "To extract scientific causes",
            "To explain various sorts of intelligence",
            "To solve real-world problems"
        ],
        answer: 3
    },
    {
        question: "Which type of machine learning algorithm uses labeled training data to make predictions?",
        options: ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning", "Semi-Supervised Learning"],
        answer: 0
    },
    {
        question: "What term describes the ability of an AI system to learn from experience and improve its performance over time?",
        options: ["Machine Understanding", "Cognitive Comprehension", "Deep Insight", "Machine Learning"],
        answer: 3
    },
    {
        question: "What is the term for the technology that enables computers to generate human-like text or speech?",
        options: ["Human Simulation Technology", "Natural Language Processing", "Humanoid Communication", "Cognitive Mimicry"],
        answer: 1
    },
    {
        question: "Which AI technique involves training a model using rewards and punishments to maximize desired outcomes?",
        options: ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning", "Transfer Learning"],
        answer: 2
    },
    {
        question: "What field of AI focuses on enabling computers to understand and interpret visual information from the world?",
        options: ["Virtual Reality", "Computer Graphics", "Image Processing", "Computer Vision"],
        answer: 3
    },
    {
        question: "Which company's AI-powered assistant is known as Siri?",
        options: ["Google", "Microsoft", "Amazon", "Apple"],
        answer: 3
    },
    {
        question: "What is the term for AI systems that can perform tasks that usually require human intelligence, such as visual perception or speech recognition?",
        options: ["Humanoid Robots", "Cognitive Agents", "Artificial Intelligentsia", "Artificial Neural Networks"],
        answer: 1
    },
    {
        question: "In AI, what does 'DL' stand for in the term 'DL'?",
        options: ["Deep Language", "Distributed Learning", "Deep Learning", "Digital Learning"],
        answer: 2
    },
    {
        question: "Which famous AI project famously defeated human champions in the game of Go?",
        options: ["Deep Blue", "AlphaGo", "Watson", "Cerebrum"],
        answer: 1
    },
    {
        question: "What AI field focuses on enabling machines to understand and generate human language?",
        options: ["Linguistic Analysis", "Cognitive Linguistics", "Natural Language Processing", "Speech Synthesis"],
        answer: 2
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