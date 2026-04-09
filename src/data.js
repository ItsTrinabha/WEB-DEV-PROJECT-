// SYLLABUS DATA
export const syllabusData = {
    ai: [
        { module: 1, title: "AI Foundations", topics: ["AI engineer role and workflow", "AI vs ML vs AGI", "Core AI terminology", "Responsible AI basics"], taxonomy: "Understand" },
        { module: 2, title: "Large Language Models", topics: ["How LLMs work", "Tokens and context windows", "Model options: GPT, Gemini, Claude, Llama", "Inference vs fine-tuning"], taxonomy: "Apply" },
        { module: 3, title: "Prompt Engineering and RAG", topics: ["Zero-shot and few-shot prompting", "Chain-of-thought and ReAct patterns", "Vector databases and retrieval", "Building RAG pipelines"], taxonomy: "Analyze" },
        { module: 4, title: "AI Safety and Deployment", topics: ["Prompt injection and security risks", "Bias, fairness, and privacy", "Content moderation patterns", "Deploying AI features in production"], taxonomy: "Create" },
        { module: 5, title: "AI Agents and Workflows", topics: ["Agent planning", "Tool use patterns", "Memory strategies", "Multi-step automation"], taxonomy: "Apply" },
        { module: 6, title: "MLOps and Evaluation", topics: ["Offline/online evaluation", "Monitoring model drift", "Prompt/version tracking", "A/B testing AI features"], taxonomy: "Analyze" }
    ],
    webdev: [
        { module: 1, title: "Internet and Core Web", topics: ["How the internet works", "HTTP and DNS", "Browsers and rendering", "Hosting fundamentals"], taxonomy: "Understand" },
        { module: 2, title: "Frontend Core", topics: ["HTML semantics", "CSS layout and responsive design", "JavaScript fundamentals", "DOM and browser APIs"], taxonomy: "Apply" },
        { module: 3, title: "Modern Tooling and Frameworks", topics: ["Git and GitHub workflow", "Package managers (npm, pnpm, yarn)", "React and routing", "Build tools like Vite"], taxonomy: "Analyze" },
        { module: 4, title: "Production Skills", topics: ["Testing basics", "Auth and security (CORS, HTTPS)", "Performance optimization", "Deploying frontend apps"], taxonomy: "Create" },
        { module: 5, title: "Backend Integration", topics: ["REST and GraphQL basics", "Authentication flows", "State management with APIs", "Error handling patterns"], taxonomy: "Apply" },
        { module: 6, title: "Advanced Frontend Architecture", topics: ["Design systems", "Accessibility auditing", "SSR and SSG concepts", "Scalable folder structures"], taxonomy: "Analyze" }
    ],
    cybersecurity: [
        { module: 1, title: "Cybersecurity Fundamentals", topics: ["Core IT and hardware basics", "Networking fundamentals and OSI model", "Common protocols and ports", "Basic troubleshooting"], taxonomy: "Understand" },
        { module: 2, title: "Systems and Network Security", topics: ["Windows and Linux essentials", "Permissions and access control", "TLS/SSL and secure communication", "Firewall and endpoint basics"], taxonomy: "Apply" },
        { module: 3, title: "Offensive and Defensive Practice", topics: ["CTF platforms and labs", "Vulnerability assessment basics", "OWASP Top 10 awareness", "Incident response workflow"], taxonomy: "Analyze" },
        { module: 4, title: "Certifications and Career Path", topics: ["Security+ and Network+ roadmap", "CEH/OSCP awareness", "Portfolio projects and reports", "Continuous upskilling strategy"], taxonomy: "Create" },
        { module: 5, title: "Application and Cloud Security", topics: ["Secure coding basics", "Cloud IAM controls", "Container security", "Secrets management"], taxonomy: "Apply" },
        { module: 6, title: "Threat Detection and Response", topics: ["SIEM concepts", "Log analysis workflows", "Playbooks and response", "Post-incident review"], taxonomy: "Analyze" }
    ],
    cloud: [
        { module: 1, title: "Cloud Core Concepts", topics: ["IaaS, PaaS, SaaS", "Regions and availability", "Identity and access", "Networking basics"], taxonomy: "Understand" },
        { module: 2, title: "Cloud Services and Architecture", topics: ["Compute and storage", "Databases and messaging", "Scalable architecture", "Security best practices"], taxonomy: "Apply" },
        { module: 3, title: "Cloud Delivery", topics: ["Deployment pipelines", "Cost optimization", "Disaster recovery", "Production readiness"], taxonomy: "Create" },
        { module: 4, title: "Cloud Operations", topics: ["Monitoring and alerts", "Backup and restore", "High availability patterns", "Capacity planning"], taxonomy: "Apply" },
        { module: 5, title: "Cloud Security and Governance", topics: ["Least privilege IAM", "Compliance controls", "Network segmentation", "Cost governance"], taxonomy: "Analyze" }
    ],
    devops: [
        { module: 1, title: "DevOps Basics", topics: ["Linux fundamentals", "Shell scripting", "Git workflows", "CI/CD concepts"], taxonomy: "Understand" },
        { module: 2, title: "Containers and Orchestration", topics: ["Docker fundamentals", "Container networking", "Kubernetes basics", "Deploying services"], taxonomy: "Apply" },
        { module: 3, title: "Observability and Reliability", topics: ["Monitoring and logging", "Incident management", "Infrastructure as Code", "Release strategies"], taxonomy: "Analyze" },
        { module: 4, title: "CI/CD at Scale", topics: ["Pipeline templates", "Artifact management", "Security scans in pipeline", "Release approvals"], taxonomy: "Apply" },
        { module: 5, title: "Platform Engineering", topics: ["Internal developer platforms", "Golden paths", "Policy-as-code", "SRE collaboration"], taxonomy: "Create" }
    ],
    datascience: [
        { module: 1, title: "Data Science Foundations", topics: ["Python and notebooks", "Statistics and probability", "Data cleaning basics", "Exploratory data analysis"], taxonomy: "Understand" },
        { module: 2, title: "Machine Learning Workflow", topics: ["Feature engineering", "Model training and evaluation", "Cross-validation", "Model interpretability"], taxonomy: "Apply" },
        { module: 3, title: "Data Visualization and Storytelling", topics: ["Matplotlib/Seaborn", "Dashboard basics", "Communicating insights", "Project case studies"], taxonomy: "Create" },
        { module: 4, title: "Applied ML Projects", topics: ["Classification projects", "Regression projects", "Model deployment basics", "Experiment tracking"], taxonomy: "Apply" },
        { module: 5, title: "Advanced Analytics", topics: ["Time-series basics", "NLP fundamentals", "Recommendation systems intro", "Responsible AI in analytics"], taxonomy: "Analyze" }
    ]
};

export const youtubeReferences = {
    ai: [
        { title: 'AI Engineer Roadmap (2026)', url: 'https://www.youtube.com/results?search_query=ai+engineer+roadmap+2026' },
        { title: 'Prompt Engineering + RAG Tutorial', url: 'https://www.youtube.com/results?search_query=prompt+engineering+rag+tutorial' }
    ],
    webdev: [
        { title: 'Web Development Roadmap', url: 'https://www.youtube.com/results?search_query=web+development+roadmap+2026' },
        { title: 'Frontend + React Full Guide', url: 'https://www.youtube.com/results?search_query=frontend+react+full+course' }
    ],
    cybersecurity: [
        { title: 'Cybersecurity Roadmap for Beginners', url: 'https://www.youtube.com/results?search_query=cybersecurity+roadmap+beginner' },
        { title: 'CTF and Security Learning Path', url: 'https://www.youtube.com/results?search_query=ctf+learning+path+cybersecurity' }
    ],
    cloud: [
        { title: 'Cloud Computing Roadmap', url: 'https://www.youtube.com/results?search_query=cloud+computing+roadmap+2026' },
        { title: 'Cloud Architecture Basics', url: 'https://www.youtube.com/results?search_query=cloud+architecture+basics+tutorial' }
    ],
    devops: [
        { title: 'DevOps Roadmap', url: 'https://www.youtube.com/results?search_query=devops+roadmap+2026' },
        { title: 'Docker + Kubernetes for Beginners', url: 'https://www.youtube.com/results?search_query=docker+kubernetes+beginner+tutorial' }
    ],
    datascience: [
        { title: 'Data Science Roadmap', url: 'https://www.youtube.com/results?search_query=data+science+roadmap+2026' },
        { title: 'Machine Learning End-to-End Project', url: 'https://www.youtube.com/results?search_query=machine+learning+end+to+end+project' }
    ]
};

// QUIZ QUESTIONS
export const quizQuestions = {
    AI: [
        { q: "What is the primary role of a vector database in AI apps?", a: ["Store images only", "Retrieve semantically similar chunks", "Train GPUs", "Replace prompts"], correct: 1 },
        { q: "Which prompting approach provides examples in the prompt?", a: ["Zero-shot", "Few-shot", "Top-k", "Fine-tuning"], correct: 1 },
        { q: "RAG stands for:", a: ["Random AI Generation", "Retrieval-Augmented Generation", "Responsive Agent Gateway", "Recursive Attention Graph"], correct: 1 },
        { q: "Which is a major AI safety concern?", a: ["Prompt injection", "CSS specificity", "Port forwarding", "SQL joins"], correct: 0 },
        { q: "Context window in an LLM refers to:", a: ["GPU memory type", "Token limit for a request", "API key length", "Number of users"], correct: 1 },
        { q: "Which method customizes model behavior with training data?", a: ["Fine-tuning", "Zero-shot prompting", "Prompt caching", "Tokenization"], correct: 0 },
        { q: "Which strategy improves factuality by attaching source documents?", a: ["Quantization", "RAG", "Beam search", "Transfer learning"], correct: 1 },
        { q: "Few-shot prompting means:", a: ["No examples provided", "Prompt includes example inputs/outputs", "Model is retrained", "Inference is skipped"], correct: 1 },
        { q: "What does top-p sampling control?", a: ["API key rotation", "Output randomness by cumulative probability", "Embedding size", "GPU temperature"], correct: 1 },
        { q: "A practical way to reduce unsafe outputs is:", a: ["No system prompt", "Constrain and validate responses", "Disable logging", "Use random prompts"], correct: 1 }
    ],
    WebDev: [
        { q: "Which protocol powers most web page requests?", a: ["FTP", "HTTP/HTTPS", "SMTP", "SSH"], correct: 1 },
        { q: "Which tool is commonly used for version control?", a: ["Docker", "Git", "Figma", "Postman"], correct: 1 },
        { q: "Which library is used in this project for UI components?", a: ["React", "Django", "Flask", "Spring"], correct: 0 },
        { q: "Which is a frontend performance best practice?", a: ["Large unoptimized images", "Code splitting", "Inline all scripts", "Disable caching"], correct: 1 },
        { q: "Which concern is part of web security?", a: ["CORS policy", "Font weight", "Color palette", "Line height"], correct: 0 },
        { q: "DNS is used to:", a: ["Compress images", "Map domains to IP addresses", "Encrypt CSS", "Deploy containers"], correct: 1 },
        { q: "Which bundler/dev server is common in modern React apps?", a: ["Vite", "Notepad", "Nginx", "SQLite"], correct: 0 },
        { q: "Semantic HTML mainly improves:", a: ["Accessibility and structure", "GPU usage", "FTP speed", "Binary size only"], correct: 0 },
        { q: "Which statement about HTTPS is true?", a: ["It is optional for security", "It encrypts traffic using TLS", "It replaces HTML", "It blocks JavaScript"], correct: 1 },
        { q: "What is code splitting used for?", a: ["Loading all code upfront", "Reducing initial bundle load", "Replacing CSS", "Disabling routes"], correct: 1 }
    ],
    Cybersecurity: [
        { q: "Which model is commonly used to explain network layers?", a: ["MVC", "OSI", "CIA", "REST"], correct: 1 },
        { q: "Which protocol secures web traffic?", a: ["HTTP", "TLS/HTTPS", "FTP", "Telnet"], correct: 1 },
        { q: "Which item is a common web app risk category?", a: ["OWASP Top 10", "SEO score", "UI contrast", "Bundle size"], correct: 0 },
        { q: "What is CTF in cybersecurity learning?", a: ["Capture The Flag", "Code Test Format", "Cloud Task Force", "Control Transfer Function"], correct: 0 },
        { q: "Least privilege means:", a: ["All users are admins", "Grant minimum required access", "Disable authentication", "Share one account"], correct: 1 },
        { q: "Which is a secure password practice?", a: ["Reuse same password everywhere", "Use long unique passwords", "Share credentials in chat", "Store in plain text"], correct: 1 },
        { q: "Phishing primarily tries to:", a: ["Improve UX", "Steal sensitive information", "Optimize CSS", "Increase bandwidth"], correct: 1 },
        { q: "What does MFA stand for?", a: ["Multi-Factor Authentication", "Main Firewall Access", "Managed File Adapter", "Masked Form API"], correct: 0 },
        { q: "A firewall primarily helps to:", a: ["Design UI", "Filter network traffic", "Render video", "Compile code"], correct: 1 },
        { q: "Common secure response to vulnerabilities is:", a: ["Ignore reports", "Patch and monitor", "Disable backups", "Share root access"], correct: 1 }
    ],
    Cloud: [
        { q: "IaaS provides:", a: ["Managed runtime only", "Virtualized compute/storage/network", "Only SaaS apps", "Only email service"], correct: 1 },
        { q: "Which is an example of PaaS usage?", a: ["Managed app hosting platform", "Physical server rack", "Local text editor", "USB drive"], correct: 0 },
        { q: "Cloud scalability means:", a: ["Fixed resources forever", "Resources can grow/shrink with demand", "No backups", "Manual DNS only"], correct: 1 },
        { q: "What is high availability focused on?", a: ["Uptime and resilience", "Color themes", "Bigger binaries", "Longer code"], correct: 0 },
        { q: "Identity and access management controls:", a: ["Who can access what", "CPU fan speed", "Browser zoom", "Keyboard layout"], correct: 0 },
        { q: "A common cloud storage type is:", a: ["Object storage", "Paper storage", "Analog storage", "Tape UI"], correct: 0 },
        { q: "Cost optimization in cloud often uses:", a: ["Autoscaling and rightsizing", "Always max instance size", "No monitoring", "Hardcoded limits"], correct: 0 },
        { q: "Disaster recovery planning helps with:", a: ["Restoring service after failures", "Changing fonts", "Compiling CSS", "Reducing commits"], correct: 0 },
        { q: "A load balancer primarily:", a: ["Distributes traffic across instances", "Stores passwords", "Edits data labels", "Compiles JS"], correct: 0 },
        { q: "Shared responsibility model means:", a: ["Only provider handles security", "Provider and customer both have roles", "No one handles security", "Only users are responsible"], correct: 1 }
    ],
    DevOps: [
        { q: "What does CI in CI/CD stand for?", a: ["Continuous Integration", "Central Instance", "Code Inspection", "Compiled Infrastructure"], correct: 0 },
        { q: "Which tool is commonly used for containerization?", a: ["Docker", "Photoshop", "Excel", "WordPress"], correct: 0 },
        { q: "Kubernetes is mainly used to:", a: ["Edit videos", "Orchestrate containers", "Write CSS", "Manage DNS only"], correct: 1 },
        { q: "Infrastructure as Code means:", a: ["Manual server setup", "Declarative infrastructure configuration", "No monitoring", "No versioning"], correct: 1 },
        { q: "Which is a key DevOps goal?", a: ["Faster, reliable delivery", "Bigger UI fonts", "No testing", "Single environment only"], correct: 0 },
        { q: "A pipeline stage often includes:", a: ["Build and test", "Drawing logos", "Hardware repair", "Manual commit messages"], correct: 0 },
        { q: "Observability typically includes:", a: ["Logs, metrics, traces", "Only screenshots", "Only comments", "Only backups"], correct: 0 },
        { q: "Blue-green deployment helps with:", a: ["Safer releases with quick rollback", "Database indexing", "Reducing RAM only", "Disabling alerts"], correct: 0 },
        { q: "GitOps emphasizes:", a: ["GUI-only deployment", "Git as source of truth for ops", "No code review", "Manual infrastructure"], correct: 1 },
        { q: "Which practice reduces deployment risk?", a: ["Automated testing", "Skipping review", "Deploying on Friday night blindly", "Disabling monitoring"], correct: 0 }
    ],
    DataScience: [
        { q: "Which language is most commonly used in beginner data science workflows?", a: ["Python", "COBOL", "PHP", "Swift"], correct: 0 },
        { q: "EDA stands for:", a: ["External Data Access", "Exploratory Data Analysis", "Extended Data API", "Error Detection Algorithm"], correct: 1 },
        { q: "Which library is often used for dataframe operations?", a: ["Pandas", "Selenium", "Express", "TensorRT"], correct: 0 },
        { q: "Train-test split is used to:", a: ["Improve UI", "Evaluate model generalization", "Reduce dataset size only", "Encrypt data"], correct: 1 },
        { q: "Feature engineering means:", a: ["Installing drivers", "Creating useful model inputs", "Compressing videos", "Building hardware"], correct: 1 },
        { q: "Which metric is common for classification?", a: ["Accuracy", "Frame rate", "Latency only", "Bitrate"], correct: 0 },
        { q: "Overfitting occurs when a model:", a: ["Performs well on unseen data", "Memorizes training data too much", "Uses no features", "Runs on CPU"], correct: 1 },
        { q: "A confusion matrix is used for:", a: ["Network routing", "Classification result breakdown", "Cloud billing", "Version control"], correct: 1 },
        { q: "Which chart is ideal for distribution visualization?", a: ["Histogram", "Pie chart only", "Area code map", "Tree view"], correct: 0 },
        { q: "Model interpretability helps with:", a: ["Understanding why predictions happen", "Increasing file size", "Disabling bias checks", "Replacing validation"], correct: 0 }
    ]
};
