const questions = [
    {
        question: "What is Cloud Computing?",
        options: ["A way to store data on local devices", "A way to access data over the internet", "A type of local network", "A programming language"],
        answer: 1
    },
    {
        question: "Which of the following is a characteristic of Cloud Computing?",
        options: ["Limited scalability", "High upfront costs", "Low availability", "On-demand self-service"],
        answer: 3
    },
    {
        question: "Which Cloud Computing deployment model involves sharing resources among multiple tenants?",
        options: ["Public Cloud", "Private Cloud", "Hybrid Cloud", "Community Cloud"],
        answer: 0
    },
    {
        question: "Which Cloud service model provides virtualized hardware resources over the internet?",
        options: ["SaaS (Software as a Service)", "IaaS (Infrastructure as a Service)", "PaaS (Platform as a Service)", "FaaS (Function as a Service)"],
        answer: 1
    },
    {
        question: "Which Cloud Computing concept involves adding or removing resources based on demand?",
        options: ["Virtualization", "Autoscaling", "Encryption", "Containerization"],
        answer: 1
    },
    {
        question: "What is the primary advantage of using a Cloud service?",
        options: ["Decreased network latency", "Increased hardware ownership", "Reduced maintenance effort", "Limited geographic availability"],
        answer: 2
    },
    {
        question: "Which Cloud security model allows customers to have more control over security measures?",
        options: ["Shared Responsibility Model", "Vendor Lock-in Model", "Data Sovereignty Model", "Customer-Controlled Security Model"],
        answer: 0
    },
    {
        question: "What does the term 'Elasticity' mean in the context of Cloud Computing?",
        options: ["The ability to run only one instance of an application", "The ability to easily migrate between Cloud providers", "The ability to scale resources up or down as needed", "The ability to access the Cloud from anywhere"],
        answer: 2
    },
    {
        question: "What is the purpose of a Content Delivery Network (CDN) in Cloud Computing?",
        options: ["To manage virtual machines", "To provide security for data", "To enhance network speed and reliability", "To develop web applications"],
        answer: 2
    },
    {
        question: "Which Cloud Computing service model is most suitable for developers building and deploying applications?",
        options: ["SaaS (Software as a Service)", "IaaS (Infrastructure as a Service)", "PaaS (Platform as a Service)", "FaaS (Function as a Service)"],
        answer: 2
    },
    {
        question: "Which Cloud service model allows users to access software applications over the internet?",
        options: ["SaaS (Software as a Service)", "IaaS (Infrastructure as a Service)", "PaaS (Platform as a Service)", "FaaS (Function as a Service)"],
        answer: 0
    },
    {
        question: "What is a Virtual Machine (VM) in Cloud Computing?",
        options: ["A physical server", "A container for storing files", "A software simulation of a physical computer", "A network protocol"],
        answer: 2
    },
    {
        question: "Which Cloud Computing deployment model provides resources to a single organization?",
        options: ["Public Cloud", "Private Cloud", "Hybrid Cloud", "Community Cloud"],
        answer: 1
    },
    {
        question: "What is a common concern related to Cloud Computing security?",
        options: ["Vendor lock-in", "Lack of automation", "Data synchronization", "Data breaches"],
        answer: 3
    },
    {
        question: "What does the term 'Multi-tenancy' refer to in Cloud Computing?",
        options: ["The ability to access multiple Cloud providers simultaneously", "The ability to run multiple applications on a single server", "The ability to share resources among multiple users or customers", "The ability to run applications offline"],
        answer: 2
    },
    {
        question: "Which of the following is NOT a Cloud service model?",
        options: ["SaaS (Software as a Service)", "IaaS (Infrastructure as a Service)", "VaaS (Virtualization as a Service)", "PaaS (Platform as a Service)"],
        answer: 2
    },
    {
        question: "What is the purpose of a Load Balancer in Cloud Computing?",
        options: ["To restrict access to Cloud resources", "To store and manage data", "To distribute incoming network traffic across multiple servers", "To secure communication between users and the Cloud"],
        answer: 2
    },
    {
        question: "What is 'Vendor Lock-in' in Cloud Computing?",
        options: ["The process of changing Cloud providers", "The inability to migrate applications and data to a different Cloud provider", "The contractual agreement between a user and a Cloud provider", "The process of creating custom Cloud solutions"],
        answer: 1
    },
    {
        question: "What is a benefit of using Cloud Computing for disaster recovery?",
        options: ["Increased risk of data loss", "Higher costs for data storage", "Faster recovery times and reduced downtime", "Reduced need for network connectivity"],
        answer: 2
    },
    {
        question: "What is the main goal of a Cloud Computing cost model?",
        options: ["To determine the location of Cloud data centers", "To estimate the amount of energy consumed by Cloud resources", "To provide transparency and predictability in pricing", "To maximize Cloud provider profits"],
        answer: 2
    },
    {
        question: "Which Cloud deployment model combines elements of both Public and Private Clouds?",
        options: ["Public Cloud", "Private Cloud", "Hybrid Cloud", "Community Cloud"],
        answer: 2
    },
    {
        question: "What is the primary advantage of using a Hybrid Cloud deployment?",
        options: ["Lower costs compared to Public Clouds", "Greater control over security compared to Private Clouds", "Ability to run applications only on-premises", "Flexibility to choose the right Cloud for each workload"],
        answer: 3
    },
    {
        question: "What is the primary disadvantage of using a Public Cloud deployment?",
        options: ["Lack of scalability", "Limited geographic availability", "High upfront costs", "Less control over data security"],
        answer: 3
    },
    {
        question: "What is the term for the ability to provision and manage Cloud resources through code?",
        options: ["Virtualization", "Automation", "Decentralization", "Containerization"],
        answer: 1
    },
    {
        question: "Which Cloud Computing concept involves running applications in isolated environments?",
        options: ["Virtualization", "Containerization", "Automation", "Decentralization"],
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