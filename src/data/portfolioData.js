export const personalInfo = {
  name: "Nishant Patil",
  role: "B.E. IT Student & Software Engineer",
  phone: "+91 9511692910",
  email: "nishantpatil10121@gmail.com",
  location: "Mumbai, India",
  website: "https://nishantpatil.vercel.app",
  websiteLabel: "nishantpatil.vercel.app",
  github: "https://github.com/Nishant0121",
  githubLabel: "github.com/Nishant0121",
  tagline: "BUILDING FUTURE DIGITAL.",
  subTagline: "Software Engineer specializing in full-stack applications, intelligent ML pipelines, and GenAI automation."
};

export const education = {
  degree: "B.E. in Information Technology",
  cgpa: "8.43",
  institution: "Thadomal Shahani Engineering College",
  location: "Mumbai, India",
  status: "Expected Graduation: 2027",
  expectedYear: "2027"
};

export const experiences = [
  {
    company: "Deloitte",
    role: "Software Engineer Intern",
    period: "Jun 2026 – Aug 2026",
    location: "Mumbai, India",
    bullets: [
      "Contributed to the AIC (Analytics Insights Center) website in the External Audit department, building modules including the Feedback Portal and Projection Tracker using React and GenW.AI.",
      "Contributed to audit pipeline automation using Python and LLM-based tools to streamline data processing workflows."
    ]
  },
  {
    company: "Pilji Healthtech Pvt Ltd",
    role: "App Developer Intern",
    period: "Aug 2025 – Feb 2026",
    location: "Remote",
    bullets: [
      "Built a production-grade full-stack mobile app using React Native, Node.js, Express, and PostgreSQL, delivering end-to-end features from onboarding UI to backend data layer.",
      "Designed RESTful APIs for all core app features and implemented JWT-based secure authentication to protect sensitive health data."
    ]
  },
  {
    company: "Digital Guruji",
    role: "Full Stack Web Developer Intern",
    period: "Apr 2025 – Jun 2025",
    location: "Remote",
    bullets: [
      "Built a MERN stack platform unifying multiple Generative AI models (image, video, audio generation) into a single cohesive product used by the company’s client base.",
      "Developed a fully responsive UI with React.js and Tailwind CSS; engineered secure, scalable backend APIs using Node.js, Express, and MongoDB."
    ]
  }
];

export const projects = [
  {
    title: "YouTube Clickbait Classifier",
    subtitle: "Machine Learning & NLP",
    tech: ["Python", "Scikit-learn", "NLP", "TF-IDF", "RoBERTa"],
    techString: "Python, Scikit-learn, NLP, TF-IDF, RoBERTa",
    description: "Multimodal ML pipeline combining RoBERTa text embeddings and CNN thumbnail features to classify YouTube videos with 97.34% accuracy.",
    bullets: [
      "Developed a multimodal ML pipeline combining RoBERTa-based text embeddings and CNN-extracted thumbnail features to classify YouTube videos as clickbait, achieving 97.34% accuracy.",
      "Engineered features including sentiment, lexical signals, and title-thumbnail similarity, applied PCA for dimensionality reduction, and evaluated models using a stacked ensemble approach."
    ],
    link: "https://github.com/Nishant0121/Clickbait-Classification",
    accent: "#c5ff41",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "AutoCommit — VS Code Extension",
    subtitle: "Developer Tooling & LLMs",
    tech: ["TypeScript", "VS Code API", "Git", "LLMs"],
    techString: "TypeScript, VS Code API, Git, LLMs",
    description: "Published VS Code extension with 100+ active installs that auto-generates commit messages using LLMs and staged git diffs.",
    bullets: [
      "Published a VS Code extension with 100+ active installs that auto-generates commit messages by reading staged git diff output via LLM.",
      "Shipped 'Commit Tone' modes (Professional, Pirate, Star Wars) and full Conventional Commits standard support for structured commit history."
    ],
    link: "https://github.com/Nishant0121/AutoCommit",
    accent: "#c5ff41",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Link Up — Multiplayer Gaming Platform",
    subtitle: "Real-Time Web Application",
    tech: ["React.js", "Node.js", "Socket.io", "MongoDB"],
    techString: "React.js, Node.js, Socket.io, MongoDB",
    description: "Real-time multiplayer hub where friends jump into shared game rooms with live bi-directional state synchronization.",
    bullets: [
      "Developed a real-time multiplayer hub where friends can jump into shared game rooms, powered by WebSocket (Socket.io) for live bi-directional state sync.",
      "Architected a scalable room management system handling multiple concurrent game sessions with low-latency updates and persistent session state via MongoDB."
    ],
    link: "https://github.com/Nishant0121/Linkup",
    accent: "#f46c38",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "IPL Win Predictor",
    subtitle: "Data Science & Machine Learning",
    tech: ["Python", "Scikit-learn", "Logistic Regression", "Streamlit"],
    techString: "Python, Scikit-learn, Logistic Regression, Streamlit",
    description: "Real-time IPL match win probability predictor using live match parameters, achieving 87% prediction accuracy.",
    bullets: [
      "Built a real-time IPL match win probability predictor using live features (score, wickets, overs, run rate), achieving 87% prediction accuracy.",
      "Deployed as an interactive Streamlit web app, letting users input live match state and receive instant win probability estimates for both teams."
    ],
    link: "https://github.com/Nishant0121",
    accent: "#f46c38",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=1000&auto=format&fit=crop"
  }
];

export const skillCategories = [
  {
    category: "Languages",
    items: ["JavaScript", "Python", "C/C++", "Java"],
    iconName: "Terminal"
  },
  {
    category: "Web Development",
    items: ["React.js", "Node.js", "Express.js", "REST API", "Tailwind CSS", "Bootstrap", "Next.js"],
    iconName: "Layers"
  },
  {
    category: "Mobile",
    items: ["React Native"],
    iconName: "Smartphone"
  },
  {
    category: "Machine Learning & AI",
    items: ["Scikit-learn", "Pandas", "NumPy", "NLP", "Logistic Regression", "Streamlit", "GenW.AI", "LLMs"],
    iconName: "Cpu"
  },
  {
    category: "Database",
    items: ["Firebase", "MongoDB", "PostgreSQL"],
    iconName: "Database"
  },
  {
    category: "Tools & DevOps",
    items: ["Git", "GitHub", "Postman", "VS Code API"],
    iconName: "Wrench"
  },
  {
    category: "Coursework",
    items: ["Data Structures & Algorithms", "Object-Oriented Programming"],
    iconName: "BookOpen"
  }
];

export const awards = [
  {
    title: "Top 60 Pre-Finalist — Deloitte Hacksplosion 2026",
    shortTitle: "Deloitte Hacksplosion 2026",
    badge: "National Pre-Finalist",
    description: "Advanced with my team through Deloitte India's national hackathon with 21,900+ registrations, building innovative solutions on the GenW.AI platform."
  },
  {
    title: "1st Place — Wabecade Hackathon",
    shortTitle: "1st Place — Wabecade",
    badge: "1st Place Winner",
    description: "Built an ed-tech platform integrating curated learning resources and direct in-platform career opportunities for students."
  },
  {
    title: "1st Place — Need for Code 3.0 Hackathon",
    shortTitle: "1st Place — Need for Code 3.0",
    badge: "1st Place Winner",
    description: "Built a full-stack digital ration card system to replace paper-based verification with automated distribution tracking."
  }
];

export const resumeBentoData = [
  {
    color: '#c5ff41',
    title: 'Nishant Patil',
    description: 'B.E. in Information Technology @ Thadomal Shahani Engineering College (CGPA 8.43, Expected 2027). Software Engineer & Full Stack Developer.',
    label: 'Identity',
    textColor: '#151312'
  },
  {
    color: '#1a1817',
    title: 'Deloitte',
    description: 'Software Engineer Intern. Built AIC website modules (Feedback Portal, Projection Tracker) with React & GenW.AI; automated audit pipelines using Python & LLMs.',
    label: 'Experience',
    textColor: '#ffffff'
  },
  {
    color: '#f46c38',
    title: 'AutoCommit — VS Code Extension',
    description: '100+ active installs. Auto-generates commit messages using LLMs. Shipped Conventional Commits and Commit Tone modes.',
    label: 'Project',
    textColor: '#ffffff'
  },
  {
    color: '#1a1817',
    title: 'Pilji Healthtech',
    description: 'App Developer Intern. Built a production-grade React Native health app with Node.js, Express, and PostgreSQL with JWT auth.',
    label: 'Experience',
    textColor: '#ffffff'
  },
  {
    color: '#c5ff41',
    title: 'Deloitte Hacksplosion 2026',
    description: 'Top 60 Pre-Finalist out of 21,900+ registrations across India, developing AI solutions on the GenW.AI platform.',
    label: 'Achievement',
    textColor: '#151312'
  },
  {
    color: '#1a1817',
    title: 'Technical Skills',
    description: 'JavaScript, Python, C/C++, React.js, Node.js, Express.js, React Native, PostgreSQL, MongoDB, Firebase, Scikit-learn, LLMs.',
    label: 'Skills',
    textColor: '#ffffff'
  }
];
