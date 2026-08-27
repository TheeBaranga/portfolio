export const projects = [
  {
    featured: true,
    status: "Currently Building",
    title: "Motii",
    description:
      "A vehicle maintenance and intelligence platform built to help drivers stay ahead of mileage, servicing, insurance, and the everyday details that keep a car healthy.",
    takeaway: "Product architecture across the mobile experience, data model, and API layer.",
    tech: ["React Native", "Expo", "Django", "DRF", "SQLite"],
    github: "",
    live: "",
    image: `${import.meta.env.BASE_URL}images/motii.png`,
  },

  {
    featured: true,
    status: "Live Project",
    title: "Sleep Health Predictor",
    description:
      "An end-to-end machine learning application that predicts sleep disorders from lifestyle and health metrics through a Flask web interface.",
    takeaway: "Serving a trained machine-learning model through a usable Flask application.",
    tech: ["Python", "Flask", "Scikit-learn", "Pandas"],
    github: "https://github.com/TheeBaranga/sleep-health-predictor.git",
    live: "https://sleep-health-predictor.onrender.com",
    image: `${import.meta.env.BASE_URL}images/sleep-health.png`,
  },

  {
    featured: true,
    status: "Knowledge-Based System",
    title: "Car Fault Diagnosis Expert System",
    description:
      "A rule-based expert system that reasons over vehicle symptoms and known fault patterns to suggest likely causes and possible next steps.",
    takeaway: "Rule-based inference, explainable decisions, and structured diagnostic logic.",
    tech: ["Python", "Rule-Based Reasoning", "Expert Systems"],
    github: "https://github.com/TheeBaranga/Car-Fault-Diagnosis-Expert-System.git",
    live: "",
    image: `${import.meta.env.BASE_URL}images/car-fault-diagnosis.png`,
  },

  {
    featured: false,
    status: "Case-Based Reasoning",
    title: "Case-Based Reasoning System",
    description:
      "A case-based reasoning system that follows the Retrieve, Reuse, Revise, and Retain cycle to solve new problems from previous cases.",
    tech: ["Python", "CBR", "Knowledge-Based Systems"],
    github: "https://github.com/TheeBaranga/apt3020b-cbr-671960.git",
    live: "",
    image: `${import.meta.env.BASE_URL}images/cbr-system.png`,
  },

  {
    featured: false,
    status: "Frontend Project",
    title: "E-Commerce Platform",
    description:
      "An Amazon-inspired shopping interface with dynamic cart management, asynchronous product loading, order tracking, and modular JavaScript architecture.",
    takeaway: "Application state, asynchronous product data, and modular frontend architecture.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/TheeBaranga/Amazon-E-Commerce.git",
    live: "",
    image: `${import.meta.env.BASE_URL}images/ecommerce.png`,
  },

  {
    featured: false,
    status: "Portfolio",
    title: "Developer Portfolio",
    description:
      "My personal portfolio built with React, Tailwind CSS, and Framer Motion to present the projects I build and how I am growing as a software engineer.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/TheeBaranga/portfolio.git",
    live: "",
    image: `${import.meta.env.BASE_URL}images/portfolio.png`,
  },
];
