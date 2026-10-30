/* ==========================================================
   ALL YOUR CONTENT LIVES HERE.
   Edit text, add/remove items, save, and refresh the page.
   Tip: keep the commas and quotes exactly as they are.
   ========================================================== */

const PORTFOLIO = {
  /* ---------- General / Home ---------- */
  pageTitle: "Abhiram  Portfolio",
  logoText: "AK",
  logoName: "Abhiram",
  status: "Open to Work ",
  firstName: "Abhiram",
  lastName: "Kolipaka",
  roles: ["Machine Learning Engineer", "Data Scientist", "AI Engineer"], // this is a typing animation
  tagline:
    "Building end-to-end ML pipelines from EDA to production-ready models — with working knowledge of Deep Learning, LLMs, RAG and Gen AI.",
    
  photo: "assets/profile_photo.png",
  photoBadge: "✦ AI/ML Engineer",
  resumeFile: "https://drive.google.com/file/d/1BLocLjj-tA8TIbl5m9oE82C7V99w1R36/view?usp=sharing", // put this PDF next to index.html

  stats: [
    { value: "4+", label: "ML Pipelines Delivered" },
    { value: "6", label: "Projects" },
    { value: "8.0", label: "CGPA" },
  ],

  /* ---------- About ---------- */
  aboutText:
    "Aspiring Data Scientist & ML Engineer focused on building scalable, interpretable models that solve real business problems.",
  about: [
    { icon: "🧠", title: "Strong ML Foundation", text: "Hands-on internship experience building real, production-style models." },
    { icon: "⚙", title: "End-to-End Pipelines", text: "Owned full lifecycle: EDA → feature engineering → modeling → tuning → evaluation." },
    { icon: "📈", title: "Predictive Modeling", text: "Focused on classification, regression and imbalanced data techniques." },
    { icon: "✦", title: "Deep Learning & Gen AI", text: "Working knowledge of PyTorch, LLMs, RAG and Gen AI workflows." },
  ],

  /* ---------- Education ---------- */
  education: {
    degree: "B.Tech in Computer Science Engineering",
    college: "AAR Mahaveer Engineering College, Hyderabad",
    period: "Nov 2022 — May 2026",
    cgpa: "8.0",
    subjects: [],
  },

  /* ---------- Experience ---------- */
  experience: [
    {
      role: "Data Science Consultant — Intern",
      company: "Rubixe Technologies · Bangalore",
      period: "Nov 2025 — May 2026",
      points: [
        "Built 4 end-to-end ML pipelines across Insurance, Telecom, Healthcare and Retail domains.",
        "Owned the full ML lifecycle: EDA → feature engineering → modeling → tuning → evaluation.",
        "Handled severe class imbalance with SMOTE and engineered features from noisy real-world data.",
        "Delivered model comparison reports and business-friendly recommendation documents.",
        "Received positive feedback for shipping production-ready, well-documented ML solutions.",
      ],
    },
  ],

  /* ---------- Skills (each group becomes one card) ---------- */
  skills: [
    { icon: "</>", title: "Languages", items: ["Python", "Java", "C", "SQL"] },
    { icon: "🧠", title: "ML / AI", items: ["Scikit-Learn", "XGBoost", "Random Forest", "SMOTE", "PyTorch", "COCO-SSD", "LLMs", "RAG", "Gen AI"] },
    { icon: "≋", title: "Libraries", items: ["Pandas", "NumPy", "ml5.js", "Matplotlib", "Seaborn"] },
    { icon: "▣", title: "Tools", items: ["Jupyter Notebook", "Google Colab", "Git", "Advanced MS Excel"] },
    { icon: "⛁", title: "Domains", items: ["Insurance", "Telecom", "Healthcare", "Retail", "Computer Vision"] },
    { icon: "📈", title: "Techniques", items: ["Classification", "Regression", "EDA", "Feature Engineering", "Hyperparameter Tuning", "Cross-Validation", "Model Comparison"] },
  ],

  /* ---------- Certifications ---------- */
  certs: [
    { title: "Python for Data Science — Elite", issuer: "NPTEL · IIT Madras (SWAYAM)", meta: "Score: 61% · Jun-Aug 2025"  },
    { title: "Python Certification", issuer: "HackerRank", meta: "Certified · Feb 2026" },
    { title: "SQL Certification", issuer: "HackerRank", meta: "Certified · Mar 2026" },
  ],

  /* ---------- Projects ----------
     type must be "Internship" or "Personal" (used by the filter buttons).
     Add  github: "https://..."  to show a "View on GitHub" link. */
  projects: [
    {
      domain: "Telecom", type: "Internship",
      title: "Telecom Customer Churn Prediction",
      description: "Predicted churn propensity with Random Forest after fixing class imbalance using SMOTE.",
      impact: "Delivered structured CSV output with business retention recommendations.",
      tech: ["Random Forest", "SMOTE", "Pandas", "Scikit-Learn"],
    },
    {
      domain: "Healthcare", type: "Internship",
      title: "Heart Disease Prediction",
      description: "Cardiovascular risk classifier built on 11 patient biomarkers (BP, cholesterol, ECG, angina).",
      impact: "Benchmarked 4 models and recommended the best for early clinical intervention.",
      tech: ["Logistic Regression", "SVM", "Random Forest"],
    },
    {
      domain: "Retail", type: "Internship",
      title: "Mobile Price Range Classification",
      description: "Classified smartphones into 4 price tiers using 20 hardware specs.",
      impact: "Identified RAM as the strongest price predictor for product pricing strategy.",
      tech: ["Random Forest", "SVM", "Feature Importance"],
    },
    {
      domain: "Retail", type: "Internship",
      title: "Automobile Price Prediction",
      description: "Modeled car prices on 26 vehicle attributes with Ridge/Lasso to handle multicollinearity.",
      impact: "Selected the best model on RMSE and R² for management pricing decisions.",
      tech: ["Linear Regression", "Ridge", "Lasso", "XGBoost"],
    },
    {
      domain: "Insurance", type: "Personal",
      title: "Insurance Claim Prediction",
      description: "Processed a 595K-row anonymized dataset (59 features) to predict claim likelihood and cost.",
      impact: "Compared LR, RF and XGBoost — chose XGBoost on AUC-ROC and business cost-sensitivity.",
      tech: ["XGBoost", "SMOTE", "Scikit-Learn", "Pandas"],
      github: "https://github.com/kolipakaAbhiram",
    },
    {
      domain: "Computer Vision", type: "Personal",
      title: "AI Object Detection — Final Year Project",
      description: "Browser-based real-time detection with COCO-SSD — no backend, runs fully client-side.",
      impact: "Detects 80+ categories with live bounding boxes, FPS counter and camera switching.",
      tech: ["TensorFlow.js", "COCO-SSD", "ml5.js", "JavaScript"],
      github: "https://github.com/kolipakaAbhiram",
    },
  ],

  /* ---------- Code / social links (used in the Code section) ---------- */
  codeText: "Browse my repositories and coding practice.",
  links: [
    { label: "GitHub", url: "https://github.com/kolipakaAbhiram" },
    { label: "HackerRank", url: "https://hackerrank.com/profile/Kolipaka_Abhiram" },
    { label: "LinkedIn", url: "https://linkedin.com/in/kolipakaabhiram" },
  ],

  /* ---------- Contact ---------- */
  contactText: "Open to Data Scientist / ML Engineer roles. Drop a message — I reply within 24 hours.",
  email: "kolipaka.abhiram1@gmail.com", // the contact form sends to this address
  contact: [
    { icon: "✉", label: "EMAIL", text: "kolipaka.abhiram1@gmail.com", href: "mailto:kolipaka.abhiram1@gmail.com" },
    { icon: "☎", label: "PHONE", text: "+91 70139 20264", href: "tel:+917013920264" },
    { icon: "📍", label: "LOCATION", text: "Hyderabad, India", href: "#contact" },
    { icon: "in", label: "LINKEDIN", text: "kolipakaabhiram", href: "https://linkedin.com/in/kolipakaabhiram", external: true },
    { icon: "⌥", label: "GITHUB", text: "kolipakaAbhiram", href: "https://github.com/kolipakaAbhiram", external: true },
    { icon: "🏅", label: "HACKERRANK", text: "Kolipaka_Abhiram", href: "https://hackerrank.com/profile/Kolipaka_Abhiram", external: true },
  ],
  footerText: "© 2026 Abhiram Kolipaka — Built with intent & a lot of",
  footerHighlight: "data.",
};
