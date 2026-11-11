// All portfolio content lives here. Edit this file to update the site.

export const profile = {
  name: 'Gayathri Karri',
  role: 'Front End Developer at Distacart Inc',
  email: 'gayathrikarri289@gmail.com',
  phone: '+91 93812 21289',
  phoneHref: 'tel:+919381221289',
  location: 'Hyderabad, India',
  resume: `${process.env.PUBLIC_URL}/Gayathri_Karri_Resume.pdf`,
  github: 'https://github.com/hidden-profile',
  linkedin: 'https://www.linkedin.com/in/gayathri-karri-03a087243',
  leetcode: 'https://leetcode.com/gayathrikarri289/',
  codechef: 'https://www.codechef.com/users/gayathri622004',
  hackerrank: 'https://www.hackerrank.com/gayathrikarri289',
};

export const stats = [
  { num: '40-50 → 200', label: 'orders per day on DistaUSA' },
  { num: '1', label: 'front end developer on the store' },
  { num: '300+', label: 'DSA problems solved' },
  { num: '2026-28', label: 'MTech, Artificial Intelligence' },
];

export const experience = [
  {
    date: 'Aug 2025 - Present',
    place: 'Distacart Inc',
    title: 'Front End Developer',
    badge: 'Full time',
    sub: 'DistaUSA (Shopify storefront)',
    points: [
      'Only front end developer on DistaUSA; I handle UI design, development and day-to-day maintenance.',
      'Redesigned the whole storefront and kept shipping new sections and features, many of them my own ideas taken from studying other e-commerce sites.',
      'Daily orders went from roughly 40-50 when I joined to around 200 now.',
      'Work directly with third-party app teams integrated into the store to debug and fix integration issues.',
      'Design and build all customer-facing UI on top of the Apploy-managed backend.',
    ],
  },
  {
    date: 'Jan 2025 - Aug 2025',
    place: 'Distacart Inc',
    title: 'Front End Developer Intern',
    points: [
      'Maintained a production Shopify website and learned store management, theme development and Shopify app creation.',
      'Converted to a full-time role at the end of the internship.',
    ],
  },
  {
    date: 'May 2024 - Jun 2024',
    place: 'Internship',
    title: 'Web Development Intern',
    points: ['One-month training on React fundamentals; built several small websites in React.'],
  },
  {
    date: 'May 2023 - Jun 2023',
    place: 'YHills',
    title: 'Artificial Intelligence Intern',
    points: [
      'Did exploratory data analysis and visualisation on several datasets and built supervised classification and regression models.',
    ],
  },
];

export const projects = [
  {
    featured: true,
    tag: 'Final year project',
    title: 'Cost-Optimized Predictive Maintenance for Wind Turbines',
    url: 'https://github.com/hidden-profile/cost-optimized-predictive-maintenance-for-wind-turbines-using-ml',
    text:
      'Predicts generator failures from 40 anonymised sensor readings (40,000 training rows). Instead of plain accuracy, models were scored on a custom cost metric that weighs repair, replacement and inspection costs. Compared seven algorithms with original, SMOTE-oversampled and undersampled data; a tuned XGBoost pipeline won, scoring 0.79 on the test set (cost within about 1.26x of the theoretical minimum). Served through a Streamlit app.',
    tech: ['Python', 'XGBoost', 'scikit-learn', 'SMOTE', 'Streamlit'],
  },
  {
    tag: 'Generative AI',
    title: 'YouTube Video Summarizer',
    url: 'https://github.com/hidden-profile/youtube-video-summarizer',
    text: 'Paste a YouTube link and get short notes. Pulls the transcript with the YouTube Transcript API and sends it to Google Gemini with a summarisation prompt.',
    tech: ['Python', 'Gemini API', 'Prompting', 'Streamlit'],
  },
  {
    tag: 'Hackathon',
    title: 'Care Companion',
    url: 'https://github.com/hidden-profile/care-companion',
    text: 'A web platform that connects caretakers with people who need care in the same area.',
    tech: ['PHP', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    tag: 'Web app',
    title: 'TradeLiber',
    url: 'https://github.com/hidden-profile/tradeliber-onlinebooksresellingsystem',
    text: "An online marketplace for reselling used books cheaply, so students who can't afford new copies can still get them.",
    tech: ['PHP', 'MySQL', 'HTML', 'CSS'],
  },
  {
    tag: 'Deep learning',
    title: 'Handwritten Digit Recognition',
    url: 'https://github.com/hidden-profile/handwritten-number-prediction',
    text: 'A neural network trained on MNIST with TensorFlow, using OpenCV to load and visualise digit images.',
    tech: ['TensorFlow', 'OpenCV', 'Python'],
  },
  {
    tag: 'Desktop app',
    title: 'Student Database Management System',
    url: 'https://github.com/hidden-profile/Student-database-management-system',
    text: 'A Python GUI app for managing student records with full CRUD operations, backed by PostgreSQL.',
    tech: ['Python', 'PostgreSQL', 'Tkinter'],
  },
];

export const skills = [
  { title: 'Front end', items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Responsive design', 'UI/UX'] },
  { title: 'Shopify & e-commerce', items: ['Liquid', 'Theme development', 'Shopify apps', 'Third-party app integration', 'Store management'] },
  { title: 'AI & ML', items: ['Machine learning', 'scikit-learn', 'XGBoost', 'TensorFlow', 'OpenCV', 'Prompt engineering', 'AI agents (basics)'] },
  { title: 'Languages & backend', items: ['Python', 'PHP', 'Node.js', 'C++', 'DSA'] },
  { title: 'Databases', items: ['MySQL', 'PostgreSQL', 'NoSQL'] },
  { title: 'Tools', items: ['Git & GitHub', 'Jupyter', 'Streamlit', 'Pandas', 'VS Code'] },
];

export const education = [
  { current: true, date: '2026 - 2028', title: 'MTech, Artificial Intelligence', place: "Vignan's Institute of Information Technology", score: 'In progress' },
  { date: '2021 - 2025', title: 'BTech, Computer Science and Engineering', place: "Vignan's Institute of Information Technology", score: 'CGPA 9.56 / 10' },
  { date: '2019 - 2021', title: 'Intermediate (MPC)', place: 'Sri Chaitanya Junior College, Visakhapatnam', score: '975 / 1000' },
];

export const achievements = [
  '9th rank at Code-Furia 6.0, JNTU-GV College of Engineering',
  '5th rank at a college-level ML hackathon',
  '300+ data structures and algorithms problems solved',
  '3-star coder on CodeChef',
  'Responsive Web Design and JavaScript - Sololearn',
  'Python (Basic) - HackerRank',
  'NoSQL Basics - IBM',
  'ML Bootcamp - Google Developer Student Clubs',
];
