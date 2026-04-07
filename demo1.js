// SYLLABUS DATA
const syllabusData = {
    web: [
        { module: 1, title: "Introduction", topics: ["WWW History", "Telnet/FTP", "E-commerce", "Video Conferencing"], taxonomy: "Remember" },
        { module: 2, title: "ISP & Servers", topics: ["IP Address", "DNS", "Browsers", "Web vs App Servers"], taxonomy: "Understand" },
        { module: 2, title: "HTML Basics", topics: ["HTML Tags", "Structure", "Block Elements", "Char Refs"], taxonomy: "Understand" }
    ],
    frontend: [
        { module: 6, title: "React Basics", topics: ["Setup", "JSX Basics", "Components", "Component API"], taxonomy: "Understand" },
        { module: 7, title: "State & Data", topics: ["React Props", "State Management", "Hooks", "Routing"], taxonomy: "Apply" }
    ],
    fullstack: [
        { module: 1, title: "Introduction", topics: ["WWW History", "Cloud Computing", "Video Conferencing"], taxonomy: "Remember" },
        { module: 2, title: "HTML Markup", topics: ["Semantic Elements", "Images", "Nav/Header/Footer"], taxonomy: "Apply" },
        { module: 3, title: "CSS & Styling", topics: ["Selectors", "Box Model", "Hosting", "GIT"], taxonomy: "Apply" },
        { module: 4, title: "JavaScript DOM", topics: ["DOM", "Forms", "Event Handlers"], taxonomy: "Create" },
        { module: 5, title: "Advanced JS", topics: ["Loops", "Canvas Drawing", "Event Listeners"], taxonomy: "Analyze" },
        { module: 6, title: "React Basics", topics: ["JSX", "Life Cycle", "Constructors"], taxonomy: "Understand" },
        { module: 7, title: "Advanced React", topics: ["Hooks", "Routing", "Props Validation"], taxonomy: "Apply" }
    ]
};

// QUIZ QUESTIONS
const quizQuestions = {
    Fundamentals: [
        { q: "Which server handles dynamic business logic?", a: ["Web Server", "Application Server", "IP Address", "Telnet"], correct: 1 },
        { q: "Which is a character reference in HTML?", a: ["<div>", "<span>", "&nbsp;", "<br>"], correct: 2 },
        { q: "What does DNS stand for?", a: ["Digital Name Server", "Domain Name System", "Data Network Service", "None"], correct: 1 },
        { q: "Which protocol is for remote file transfer?", a: ["HTTP", "SMTP", "FTP", "DNS"], correct: 2 },
        { q: "Is <span> a block element?", a: ["Yes", "No"], correct: 1 }
    ],
    CSS: [
        { q: "Which property is part of the box model?", a: ["Color", "Font-Size", "Padding", "Display"], correct: 2 },
        { q: "How do you select an element by ID?", a: [".my-id", "#my-id", "id=my-id", "*my-id"], correct: 1 },
        { q: "Which property allows stacking elements?", a: ["position", "display", "z-index", "stack-level"], correct: 2 },
        { q: "External CSS is linked using which tag?", a: ["<style>", "<link>", "<css>", "<script>"], correct: 1 },
        { q: "Which property makes text bold?", a: ["font-style", "font-weight", "text-decoration", "text-bold"], correct: 1 }
    ],
    JavaScript: [
        { q: "What does DOM stand for?", a: ["Data Order Mode", "Document Object Model", "Digital Object Method", "None"], correct: 1 },
        { q: "Which event detects a mouse leaving an element?", a: ["onclick", "onmouseover", "onmouseout", "onchange"], correct: 2 },
        { q: "Which loop runs at least once?", a: ["for loop", "while loop", "do-while loop", "all of them"], correct: 2 },
        { q: "Which tag provides a drawing area in JS?", a: ["<svg>", "<img>", "<canvas>", "<div>"], correct: 2 },
        { q: "How do you get a value from a form input?", a: [".getText()", ".value", ".content", ".innerText"], correct: 1 }
    ],
    React: [
        { q: "What is JSX?", a: ["JavaScript XML", "JSON Extension", "Java X-Ray", "None"], correct: 0 },
        { q: "Which hook manages component state?", a: ["useEffect", "useContext", "useState", "useReducer"], correct: 2 },
        { q: "React was created by which company?", a: ["Google", "Meta (Facebook)", "Microsoft", "Twitter"], correct: 1 },
        { q: "Props are read-only.", a: ["True", "False"], correct: 0 },
        { q: "What helps you inspect the React component tree?", a: ["Console", "Network Tab", "React Dev Tools", "Sources"], correct: 2 }
    ]
};

let currentQuiz = {
    category: "", questions: [], currentIndex: 0, score: 0, timer: 15, timerInterval: null, startTime: null, selectedAnswer: null
};

// UI HELPERS
function showSection(sectionId) {
    document.querySelectorAll('section').forEach(s => s.classList.add('hidden'));
    document.getElementById(`${sectionId}-section`).classList.remove('hidden');
    if (sectionId !== 'quiz') quitQuiz();
    window.scrollTo(0, 0);
}

// ROADMAP LOGIC
function generateRoadmap(domain) {
    const display = document.getElementById('roadmap-display');
    display.innerHTML = '';
    
    syllabusData[domain].forEach((step, index) => {
        const card = document.createElement('div');
        card.className = 'roadmap-card-item animate-bounce-in';
        card.style.animationDelay = `${index * 0.1}s`;
        
        card.innerHTML = `
            <div class="flex justify-between items-center mb-2">
                <span class="font-bold text-blue-500 uppercase text-xs">Module ${step.module}</span>
                <span class="bg-yellow-100 px-2 py-1 text-[10px] font-bold rounded">${step.taxonomy}</span>
            </div>
            <h3 class="text-xl font-bold mb-3">${step.title}</h3>
            <ul class="list-disc list-inside text-gray-600 font-medium">
                ${step.topics.map(t => `<li>${t}</li>`).join('')}
            </ul>
        `;
        display.appendChild(card);
    });
}

// QUIZ LOGIC
function startQuiz(category) {
    currentQuiz.category = category;
    currentQuiz.questions = [...quizQuestions[category]].sort(() => Math.random() - 0.5);
    currentQuiz.currentIndex = 0;
    currentQuiz.score = 0;
    currentQuiz.startTime = Date.now();
    
    document.getElementById('quiz-intro').classList.add('hidden');
    document.getElementById('quiz-active').classList.remove('hidden');
    document.getElementById('quiz-summary').classList.add('hidden');
    document.getElementById('quiz-category').innerText = `Category: ${category}`;
    
    loadQuestion();
}

function loadQuestion() {
    const q = currentQuiz.questions[currentQuiz.currentIndex];
    currentQuiz.selectedAnswer = null;
    currentQuiz.timer = 15;
    
    document.getElementById('quiz-progress').innerText = `Question ${currentQuiz.currentIndex + 1} / ${currentQuiz.questions.length}`;
    document.getElementById('question-text').innerText = q.q;
    document.getElementById('quiz-timer').innerText = `${currentQuiz.timer}s`;
    
    const optionsBox = document.getElementById('options-container');
    optionsBox.innerHTML = '';
    
    q.a.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option';
        btn.innerText = opt;
        btn.onclick = () => selectOption(idx, btn);
        optionsBox.appendChild(btn);
    });

    document.getElementById('next-btn').disabled = true;
    startTimer();
}

function startTimer() {
    clearInterval(currentQuiz.timerInterval);
    currentQuiz.timerInterval = setInterval(() => {
        currentQuiz.timer--;
        document.getElementById('quiz-timer').innerText = `${currentQuiz.timer}s`;
        if (currentQuiz.timer <= 0) {
            clearInterval(currentQuiz.timerInterval);
            handleNext();
        }
    }, 1000);
}

function selectOption(index, element) {
    currentQuiz.selectedAnswer = index;
    document.querySelectorAll('.quiz-option').forEach(btn => btn.classList.remove('selected-option'));
    element.classList.add('selected-option');
    document.getElementById('next-btn').disabled = false;
}

function handleNext() {
    const q = currentQuiz.questions[currentQuiz.currentIndex];
    if (currentQuiz.selectedAnswer === q.correct) currentQuiz.score++;

    currentQuiz.currentIndex++;
    if (currentQuiz.currentIndex < currentQuiz.questions.length) {
        loadQuestion();
    } else {
        showSummary();
    }
}

function showSummary() {
    clearInterval(currentQuiz.timerInterval);
    const percentage = Math.round((currentQuiz.score / currentQuiz.questions.length) * 100);
    
    document.getElementById('quiz-active').classList.add('hidden');
    document.getElementById('quiz-summary').classList.remove('hidden');
    
    document.getElementById('score-circle').innerText = `${percentage}%`;
    
    let msg = "";
    if (percentage >= 80) msg = "Excellent work! You are an expert! 🌟";
    else if (percentage >= 50) msg = "Good effort! Keep studying! 📚";
    else msg = "You should check the roadmap again... 😅";
    
    document.getElementById('summary-msg').innerText = msg;
}

function quitQuiz() {
    clearInterval(currentQuiz.timerInterval);
    document.getElementById('quiz-intro').classList.remove('hidden');
    document.getElementById('quiz-active').classList.add('hidden');
    document.getElementById('quiz-summary').classList.add('hidden');
}