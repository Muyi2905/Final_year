const questions = [
    {
        question: "What is the time complexity of the binary search algorithm?",
        options: ["O(n)", "O(n^2)", "O(log n)", "O(1)"],
        answer: 2
    },
    {
        question: "Which data structure uses the LIFO (Last-In, First-Out) principle?",
        options: ["Queue", "Stack", "Heap", "LinkedList"],
        answer: 1
    },
    {
        question: "Which data structure is based on the Last In First Out (LIFO) principle?",
        options: ["Tree", "Linked List", "Stack", "Queue"],
        answer: 2
    },
    {
        question: "Which of the following application makes use of a circular linked list?",
        options: ["Recursive function calls", "Undo operation in a text editor", "Implement Hash Tables", "Allocating CPU to resources"],
        answer: 1
    },
    {
        question: "What is a bit array?",
        options: ["Data structure that compactly stores bits", "Data structure for representing arrays of records", "Array in which elements are not present in continuous locations", "An array in which most of the elements have the same value"],
        answer: 0
    },
    {
        question: "Which of the following tree data structures is not a balanced binary tree?",
        options: ["Splay tree", "B-tree", "AVL tree", "Red-black tree"],
        answer: 0
    },
    {
        question: "Which of the following is not the type of queue?",
        options: ["Priority queue", "Circular queue", "Single ended queue", "Ordinary queue"],
        answer: 2
    },
    {
        question: "Which of the following data structures can be used for parentheses matching?",
        options: ["n-ary tree", "queue", "priority queue", "stack"],
        answer: 3
    },
    {
        question: "Which algorithm is used in the top tree data structure?",
        options: ["Backtracking", "Divide and Conquer", "Branch", "Greedy"],
        answer: 1
    },
    {
        question: "What is the need for a circular queue?",
        options: ["easier computations", "implement LIFO principle in queues", "effective usage of memory", "to delete elements based on priority"],
        answer: 2
    },
    {
        question: "Which of the following is the most widely used external memory data structure?",
        options: ["B-tree", "Red-black tree", "AVL tree", "Both AVL tree and Red-black tree"],
        answer: 0
    },

    {
        question: "What is the time complexity of the binary search algorithm?",
        options: ["O(n)", "O(n^2)", "O(log n)", "O(1)"],
        answer: 2
    },
    {
        question: "Which data structure uses the LIFO (Last-In, First-Out) principle?",
        options: ["Queue", "Stack", "Heap", "LinkedList"],
        answer: 1
    },
    {
        question: "Which data structure can provide efficient searching of the elements?",
        options: ["Binary search tree", "Unordered lists", "2-3 tree", "Treap"],
        answer: 0
    },
    {
        question: "What is an AVL tree?",
        options: ["A tree which is unbalanced and is a height balanced tree", "A tree which is balanced and is a height balanced tree", "A tree with atmost 3 children", "A tree with three children"],
        answer: 1
    },
    {
        question: "What is the time complexity for searching a key or integer in Van Emde Boas data structure?",
        options: ["O (M!)", "O (log M!)", "O (log (log M))", "O (M^2)"],
        answer: 2
    },
    {
        question: "The optimal data structure used to solve Tower of Hanoi is _________",
        options: ["Tree", "Heap", "Priority queue", "Stack"],
        answer: 3
    },
    {
        question: "What is the use of the bin data structure?",
        options: ["To have efficient traversal", "To have efficient region query", "To have efficient deletion", "To have efficient insertion"],
        answer: 1
    },
    {
        question: "Which is the most appropriate data structure for reversing a word?",
        options: ["Stack", "Queue", "Graph", "Tree"],
        answer: 0
    },
    {
        question: "What is the functionality of the following piece of code?\n\npublic void display()\n{\n\tif(size == 0)\n\t\tSystem.out.println('underflow');\n\telse\n\t{\n\t\tNode current = first;\n\t\twhile(current != null)\n\t\t{\n\t\t\tSystem.out.println(current.getEle());\n\t\t\tcurrent = current.getNext();\n\t\t}\n\t}\n}",
        options: ["Display the list", "Reverse the list", "Reverse the list excluding top-of-the-stack-element", "Display the list excluding top-of-the-stack-element"],
        answer: 0
    },
    {
        question: "Which of the following is the simplest data structure that supports range searching?",
        options: ["AA-trees", "K-d trees", "Heaps", "Binary search trees"],
        answer: 1
    },
    {
        question: "What is the advantage of a hash table as a data structure?",
        options: ["Easy to implement", "Faster access of data", "Exhibit good locality of reference", "Very efficient for less number of entries"],
        answer: 2
    },
    {
        question: "Which type of data structure is a ternary heap?",
        options: ["Hash", "Array", "Priority Stack", "Priority Queue"],
        answer: 3
    },
    {
        question: "What is a dequeue?",
        options: ["A queue implemented with both singly and doubly linked lists", "A queue with insert/delete defined for front side of the queue", "A queue with insert/delete defined for both front and rear ends of the queue", "A queue implemented with a doubly linked list"],
        answer: 2
    },
    {
        question: "A data structure in which elements can be inserted or deleted at/from both ends but not in the middle is?",
        options: ["Priority queue", "Dequeue", "Circular queue", "Queue"],
        answer: 1
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
