const questions = [
    {
        question: "What is Machine Learning?",
        options: ["A type of computer vision", "A branch of artificial intelligence", "A type of data analysis", "A type of natural language processing"],
        answer: 1
    },
    {
        question: "Which algorithm is commonly used for supervised classification tasks?",
        options: ["K-Means", "Random Forest", "K-Nearest Neighbors", "Principal Component Analysis"],
        answer: 2
    },
    {
        question: "What is the goal of regression analysis in Machine Learning?",
        options: ["To classify data into categories", "To group similar data points", "To predict a continuous numeric value", "To perform feature extraction"],
        answer: 2
    },
    {
        question: "Which technique is used for reducing the dimensionality of data while preserving its variance?",
        options: ["Linear Regression", "Support Vector Machines", "Decision Trees", "Principal Component Analysis"],
        answer: 3
    },
    {
        question: "What is an activation function commonly used in neural networks?",
        options: ["Mean Squared Error", "Gradient Descent", "ReLU", "K-Means"],
        answer: 2
    },
    {
        question: "Which type of Machine Learning algorithm is used for anomaly detection?",
        options: ["Clustering", "Regression", "Classification", "Unsupervised Learning"],
        answer: 3
    },
    {
        question: "What does the term 'overfitting' refer to in Machine Learning?",
        options: ["When a model performs well on training data but poorly on unseen data", "When a model performs well on unseen data", "When a model performs poorly on both training and unseen data", "When a model has too few parameters"],
        answer: 0
    },
    {
        question: "Which algorithm is used for finding frequent itemsets in a transaction dataset?",
        options: ["Decision Trees", "Apriori", "K-Means", "SVM"],
        answer: 1
    },
    {
        question: "Which Machine Learning technique is used for labeling data into predefined categories?",
        options: ["Clustering", "Regression", "Classification", "Dimensionality Reduction"],
        answer: 2
    },
    {
        question: "In reinforcement learning, what is an 'agent'?",
        options: ["The environment where the learning takes place", "A type of neural network", "The input data for training", "The entity that interacts with the environment"],
        answer: 3
    },
    {
        question: "Which type of learning is characterized by using labeled examples to infer a mapping function from inputs to outputs?",
        options: ["Unsupervised Learning", "Semi-Supervised Learning", "Supervised Learning", "Reinforcement Learning"],
        answer: 2
    },
    {
        question: "What is a hyperparameter in Machine Learning?",
        options: ["The parameters learned by the model during training", "A type of regularization technique", "The training data used to train the model", "A parameter set before training to control the learning process"],
        answer: 3
    },
    {
        question: "Which technique involves creating multiple models and combining their predictions to improve accuracy?",
        options: ["Clustering", "Ensemble Learning", "SVM", "K-Means"],
        answer: 1
    },
    {
        question: "Which Machine Learning approach is used for imitating human-like decision making?",
        options: ["Supervised Learning", "Reinforcement Learning", "Unsupervised Learning", "Semi-Supervised Learning"],
        answer: 1
    },
    {
        question: "What is the purpose of cross-validation in Machine Learning?",
        options: ["To visualize data", "To preprocess data", "To evaluate model performance", "To generate synthetic data"],
        answer: 2
    },
    {
        question: "Which algorithm is used to find the optimal alignment between two sequences, commonly used in bioinformatics?",
        options: ["SVM", "K-Means", "Hidden Markov Models", "Decision Trees"],
        answer: 2
    },
    {
        question: "What is the main drawback of the k-nearest neighbors (KNN) algorithm?",
        options: ["It is computationally expensive during training", "It requires labeled data for training", "It is sensitive to the order of data points", "It doesn't perform well with high-dimensional data"],
        answer: 3
    },
    {
        question: "What is a confusion matrix used for in Machine Learning?",
        options: ["Measuring the accuracy of a model", "Visualizing the decision boundary", "Evaluating clustering performance", "Evaluating classification performance"],
        answer: 3
    },
    {
        question: "Which algorithm is used for hierarchical clustering?",
        options: ["K-Means", "DBSCAN", "Agglomerative Clustering", "SVM"],
        answer: 2
    },
    {
        question: "What is the goal of unsupervised learning?",
        options: ["To make predictions based on labeled data", "To learn a mapping function from inputs to outputs", "To discover patterns and structures in data", "To optimize an objective function"],
        answer: 2
    },
    {
        question: "What does 'bias-variance tradeoff' refer to in Machine Learning?",
        options: ["The relationship between labeled and unlabeled data", "The tradeoff between speed and accuracy of a model", "The tradeoff between underfitting and overfitting", "The tradeoff between training and testing time"],
        answer: 2
    },
    {
        question: "Which technique is used for converting categorical variables into numerical form?",
        options: ["Dimensionality Reduction", "Feature Scaling", "One-Hot Encoding", "Data Augmentation"],
        answer: 2
    },
    {
        question: "What is the main purpose of a validation set in Machine Learning?",
        options: ["To train the model", "To test the model's performance on unseen data", "To evaluate the model's performance during training", "To fine-tune hyperparameters"],
        answer: 3
    },
    {
        question: "What is the goal of generative adversarial networks (GANs) in Machine Learning?",
        options: ["To perform regression tasks", "To create new data samples that resemble real data", "To classify data into categories", "To reduce the dimensionality of data"],
        answer: 1
    },
    {
        question: "Which Machine Learning algorithm is used for time series forecasting?",
        options: ["K-Means", "Random Forest", "ARIMA", "Support Vector Machines"],
        answer: 2
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
