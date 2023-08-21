const questions = [
    {
        question: "What programming languages are commonly used for mobile app development?",
        options: ["Python", "Java", "C++", "Ruby"],
        answer: 1
    },
    {
        question: "Which platform is known for developing native iOS apps?",
        options: ["Android Studio", "Xcode", "Eclipse", "Visual Studio"],
        answer: 1
    },
    {
        question: "What is the purpose of UI/UX design in mobile app development?",
        options: ["Backend programming", "Database management", "User interface and user experience design", "Performance optimization"],
        answer: 2
    },
    {
        question: "What is the role of a hybrid app framework like React Native or Flutter?",
        options: ["Building web applications", "Creating desktop applications", "Developing cross-platform mobile apps", "Designing UI elements"],
        answer: 2
    },
    {
        question: "What is the purpose of the AndroidManifest.xml file in Android app development?",
        options: ["Storing user data", "Managing app resources", "Defining app components and permissions", "Creating UI layouts"],
        answer: 2
    },
    {
        question: "Which programming language is primarily used for Android app development?",
        options: ["Swift", "Kotlin", "Objective-C", "Java"],
        answer: 1
    },
    {
        question: "What does API stand for in the context of mobile app development?",
        options: ["Advanced Programming Interface", "Application Program Integration", "App Package Installer", "Application Programming Interface"],
        answer: 3
    },
    {
        question: "Which mobile app distribution platform is associated with iOS apps?",
        options: ["Google Play Store", "Amazon Appstore", "App Store", "Microsoft Store"],
        answer: 2
    },
    {
        question: "What is a push notification in mobile app development?",
        options: ["A type of user authentication", "An error message", "A system alert", "A message sent from a server to an app on a user's device"],
        answer: 3
    },
    {
        question: "What does IDE stand for in the context of mobile app development?",
        options: ["Integrated Development Environment", "Interactive Design Engine", "Internal Data Exchange", "Internet Data Encryption"],
        answer: 0
    },
    {
        question: "Which platform is known for developing native Android apps?",
        options: ["Android Studio", "Xcode", "Eclipse", "Visual Studio"],
        answer: 0
    },
    {
        question: "What is the purpose of the AppDelegate file in iOS app development?",
        options: ["Managing app permissions", "Creating UI layouts", "Handling app events and lifecycle", "Defining app components"],
        answer: 2
    },
    {
        question: "What is the role of a package manager in mobile app development?",
        options: ["Managing app deployment", "Managing project dependencies", "Creating UI layouts", "Optimizing app performance"],
        answer: 1
    },
    {
        question: "What is the purpose of the build.gradle file in Android app development?",
        options: ["Defining app components", "Creating UI layouts", "Managing app permissions", "Configuring build settings"],
        answer: 3
    },
    {
        question: "Which framework is commonly used for building native iOS apps?",
        options: ["React Native", "Flutter", "SwiftUI", "Xamarin"],
        answer: 2
    },
    {
        question: "What is the role of a debugger in mobile app development?",
        options: ["Creating user interfaces", "Finding and fixing code errors", "Optimizing app performance", "Managing app deployment"],
        answer: 1
    },
    {
        question: "What is a splash screen in mobile app development?",
        options: ["A type of animation", "The main screen of an app", "A loading screen displayed while the app initializes", "A screen for displaying app settings"],
        answer: 2
    },
    {
        question: "What is an APK in Android app development?",
        options: ["A package of app resources", "An app design document", "A database file", "The installation file for an Android app"],
        answer: 3
    },
    {
        question: "Which term refers to the process of making an app available on app stores?",
        options: ["Debugging", "Optimization", "Deployment", "Compiling"],
        answer: 2
    },
    {
        question: "What is the purpose of the storyboard in iOS app development?",
        options: ["Managing app resources", "Defining app components", "Creating UI layouts", "Handling app events and lifecycle"],
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
