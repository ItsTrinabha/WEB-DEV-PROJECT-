// SYLLABUS DATA
export const syllabusData = {
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
export const quizQuestions = {
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
