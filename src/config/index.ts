import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Lucia Urcuyo — Data Scientist",
  author: "Lucia Urcuyo",
  description:
    "Data scientist based in Atlanta. I turn raw data into clear insights, models, and decision-ready stories.",
  lang: "en",
  siteLogo: "/lu_mini.png",
  navLinks: [
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
    { text: "Skills", href: "#skills" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/luciaurcuyo/" },
    { text: "GitHub", href: "https://github.com/lucia-urcuyo" },
  ],
  socialImage: "/screen.png",
  canonicalURL: "https://lu-portfolio-delta.vercel.app/",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Lucia Urcuyo",
    specialty: "Data Scientist",
    summary:
      "Data scientist in Atlanta focused on building practical analytics, experiments, and machine learning models that drive decisions and real business impact.",
    email: "lurcuyop@gmail.com",
  },
  projects: [
    {
      name: "LimaLimon",
      summary:
        "A shared household meal-planning app that brings recipes, meal plans, grocery lists, and pantry tracking together in one calm, synchronized workspace.",
      technologies: ["Flutter", "Dart", "Firebase", "Firestore"],
      linkPreview: "https://apps.apple.com/us/app/limalimon/id6761367490",
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/1b/73/30/1b733019-242f-c563-6ca7-3190cdd0a38b/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg",
    },
    {
      name: "Mood Predictor",
      summary:
        "A personal health dashboard that uses daily habit data and logistic regression to estimate tomorrow’s probability of a good mood, reveal key drivers, and suggest practical next steps.",
      technologies: ["Python", "Streamlit", "scikit-learn", "Plotly"],
      linkPreview: "https://health-dash.streamlit.app/",
      linkSource: "https://github.com/lucia-urcuyo/health",
      image: "/mood.png",
    },
    {
      name: "Diamond Price Predictor",
      summary:
        "An interactive pricing explorer powered by separate XGBoost models for natural and lab-grown diamonds, with price estimates, market distributions, and feature importance.",
      technologies: ["Python", "Streamlit", "XGBoost", "Altair"],
      linkPreview: "https://diamond-fair-price.streamlit.app/",
      linkSource: "https://github.com/lucia-urcuyo/diamonds",
      image: "/hand.png",
    },
    // {
    //   name: "Perfect Espresso Shot",
    //   summary: "A social network that replicates the features of Instagram",
    //   linkPreview: "/",
    //   linkSource: "https://github.com/immois/astro-zen",
    //   image: "/espresso.png",
    // },
  ],
  about: {
    description:
      "Hi! I’m Lucia Urcuyo, a Master’s in Data Science graduate from Georgia Tech. I used to be a pastry chef, but now I serve insights instead of sweets. I fell in love with analytics after I started using data to solve everyday problems: like building a stress monitor app or making sure my boyfriend didn’t overspend on my engagement ring. Turns out analytics and baking aren't so different: both need a ton of creativity, science and precision. I just had to swap the sugar for a ton of statistics.",
    image: "/lu.png",
  },
  skills: [
    {
      title: "Programming & Querying",
      items: ["Python", "R", "SQL", "JavaScript", "HTML/CSS"],
      description: "Cleaning, exploring, modeling, and querying data.",
    },
    {
      title: "Modeling & Machine Learning",
      items: [
        "Machine Learning",
        "Statistical Modeling",
        "Experiment Design",
        "Optimization",
        "XGBoost",
        "Optuna",
        "SHAP",
      ],
      description:
        "Building, validating, and interpreting models for decision-making.",
    },
    {
      title: "Analysis & Visualization",
      items: [
        "pandas",
        "Polars",
        "NumPy",
        "scikit-learn",
        "Matplotlib",
        "D3.js",
        "Tableau",
        "Power BI",
        "Plotly",
        "Altair",
      ],
      description:
        "Turning complex datasets into clear, decision-ready insights.",
    },
    {
      title: "Cloud & Data Engineering",
      items: [
        "GCP",
        "BigQuery",
        "Vertex AI",
        "Apache Airflow",
        "Spark",
        "Databricks",
        "AWS",
        "Azure",
        "Splunk",
      ],
      description:
        "Building pipelines and analytical systems across cloud platforms.",
    },
    {
      title: "Application Development",
      items: [
        "Flutter",
        "Dart",
        "Firebase",
        "Firestore",
        "Firebase Functions",
        "Streamlit",
      ],
      description: "Shipping data products and cross-platform applications.",
    },
    {
      title: "AI & Developer Tools",
      items: [
        "LLMs",
        "LLM Tool Calling",
        "Claude Code",
        "Codex",
        "Git",
        "Bitbucket",
        "AI-Assisted Development",
      ],
      description:
        "Building AI-assisted workflows with modern development practices.",
    },
  ],
};
