const javaQuestions = [
    // "What is the difference between '==' and 'equals()' in Java?",
    "What are the four principles of Object-Oriented Programming (OOP)?",
    "Explain the concept of Inheritance in Java.",
    "What is the difference between 'public', 'protected', 'default', and 'private' access modifiers?",
    "What is the purpose of the 'final' keyword in Java?",
    "What is static variable and method in java?",
    "This keyword in java?",
    "Classes and objects with the help of an example",
    "Encapsulation in java",
    "Polymorphism and its types?",
    "What do you mean by function overloading and function overriding?",
    "Abstraction in java?",
    "Abstract class and method in java?",
    "Inheritance and its types?",
    "Why multiple inheritance is not supported in java?",
    "1-D and 2D Arrays in java?",
    
    // Add more Java questions here
];

const questionElement = document.getElementById("question");
const nextButton = document.getElementById("nextButton");

nextButton.addEventListener("click", getRandomQuestion);

function getRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * javaQuestions.length);
    const randomQuestion = javaQuestions[randomIndex];
    questionElement.textContent = randomQuestion;
}

// Display a random question when the page loads
getRandomQuestion();
