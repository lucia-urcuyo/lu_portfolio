import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Lucia Urcuyo — Data Scientist",
  author: "Lucia Urcuyo",
  description:
    "Data scientist based in San Francisco. I turn raw data into clear insights, models, and decision-ready stories.",
  lang: "en",
  siteLogo: "/lu_mini.png",
  navLinks: [
    { text: "About", href: "#about" },
    { text: "Projects", href: "#projects" },
    { text: "Skills", href: "#skills" },
  ],
  socialLinks: [
    { text: "Twitter", href: "https://github.com/immois/astro-zen" },
    { text: "LinkedIn", href: "https://github.com/immois/astro-zen" },
    { text: "Github", href: "https://github.com/immois/astro-zen" },
    { text: "Youtube", href: "https://github.com/immois/astro-zen" },
    { text: "Dribbble", href: "https://github.com/immois/astro-zen" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Lucia Urcuyo",
    specialty: "Data Scientist",
    summary:
      "Data scientist in San Francisco focused on shipping reliable analytics, experiments, and machine learning models that move the business.",
    email: "example@email.com",
  },
  projects: [
    {
      name: "Mood Predictor",
      summary: "A music streaming app that emulates Spotify's core features.",
      linkPreview: "https://health-dash.streamlit.app/",
      linkSource: "https://github.com/lucia-urcuyo/health",
      image: "/mood.png",
    },
    {
      name: "Diamond Price Predictor",
      summary: "An e-commerce platform that replicates Shopify's key features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/hand.png",
    },
    {
      name: "Perfect Espresso Shot",
      summary: "A social network that replicates the features of Instagram",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/espresso.png",
    },
  ],
  about: {
    description:
      "Hi! I’m Lucia Urcuyo, a Master’s in Data Science candidate at Georgia Tech. I used to be a pastry chef, but now I serve insights instead of sweets. I fell in love with analytics after I started using data to solve everyday problems: like building a stress monitor app or making sure my boyfriend didn’t overspend on my engagement ring. Turns out analytics and baking aren't so different: both need a ton of creativity, science and precision. I just had to swap the sugar for a ton of statistics.",
    image: "/lu.png",
  },
  skills: [
    {
      title: "Languages",
      items: ["Python", "R", "SQL"],
      description: "Analysis, feature engineering, and production-grade scripting.",
    },
    {
      title: "Platforms & Tools",
      items: ["Azure", "GCP", "Git", "Tableau", "Power BI"],
      description: "Cloud environments, version control, and dashboards to ship and monitor data work.",
    },
    {
      title: "Libraries",
      items: ["pandas", "NumPy", "scikit-learn", "Matplotlib", "Seaborn"],
      description: "Python stack for data wrangling, modeling, and visualization.",
    },
    {
      title: "Knowledge",
      items: ["Machine Learning", "Statistical Modeling", "Simulation", "Optimization"],
      description: "Designing experiments, evaluating models, and tuning systems for impact.",
    },
  ],
};

// #5755ff
