const questions = [
    {
        question: "What does the 'CIA' triad stand for in cybersecurity?",
        options: ["Computer Intrusion Alert", "Confidentiality, Integrity, Availability", "Cryptographic Information Analysis", "Centralized Intrusion Analysis"],
        answer: 1
    },
    {
        question: "What is a 'firewall' in the context of network security?",
        options: ["A physical security barrier", "A software tool for managing emails", "A device or software that filters network traffic", "A password protection tool"],
        answer: 2
    },
    // ... continue with more questions ...

    {
        question: "What type of cybersecurity attack involves tricking individuals into revealing sensitive information?",
        options: ["Phishing", "Distributed Denial of Service (DDoS)", "Ransomware", "Malware"],
        answer: 0
    },
    {
        question: "Which encryption protocol is commonly used to secure data transmitted over the internet?",
        options: ["SHA-256", "AES", "RSA", "MD5"],
        answer: 1
    },
    // ... continue with more questions ...

    {
        question: "What is 'two-factor authentication' (2FA)?",
        options: ["Using two different antivirus software", "Logging in using two different passwords", "Using two different firewalls", "A security process that requires two different forms of verification"],
        answer: 3
    },

    {
        question: "What is a 'zero-day vulnerability'?",
        options: ["A software vulnerability with a delay in its discovery", "A security flaw that has existed for zero days", "A vulnerability that is exploited on the first day of its discovery", "A vulnerability that is exploited before a fix is available"],
        answer: 3
    },
    {
        question: "What is the practice of disguising malicious software as legitimate software?",
        options: ["Encryption", "Obfuscation", "Decryption", "Virtualization"],
        answer: 1
    },
    {
        question: "Which cybersecurity attack involves overwhelming a system with a flood of network traffic?",
        options: ["Phishing", "Ransomware", "Spyware", "Distributed Denial of Service (DDoS)"],
        answer: 3
    },
    {
        question: "What does 'SSL' stand for in the context of web security?",
        options: ["Secure Socket Layer", "System Security License", "Strong Security Link", "Security Shield Layer"],
        answer: 0
    },
    {
        question: "What is 'social engineering' in the context of cybersecurity?",
        options: ["The use of robots to conduct security assessments", "The practice of using encryption in social networks", "Manipulating people into divulging confidential information", "A method to secure social media accounts"],
        answer: 2
    },
    // ... continue with more questions ...

    {
        question: "What does 'VPN' stand for in the context of network security?",
        options: ["Virtual Private Network", "Very Private Network", "Verified Personal Network", "Vulnerable Public Network"],
        answer: 0
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

