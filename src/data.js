// All portfolio content lives here. Edit this file to update the site.

export const profile = {
  name: 'Gayathri Karri',
  role: 'Front End Developer at Distacart Inc',
  email: 'gayathrikarri289@gmail.com',
  phone: '+91 93812 21289',
  phoneHref: 'tel:+919381221289',
  resume: `${process.env.PUBLIC_URL}/Gayathri_Karri_Resume.pdf`,
  github: 'https://github.com/hidden-profile',
  linkedin: 'https://www.linkedin.com/in/gayathri-karri-03a087243',
  leetcode: 'https://leetcode.com/gayathrikarri289/',
  codechef: 'https://www.codechef.com/users/gayathri622004',
  hackerrank: 'https://www.hackerrank.com/gayathrikarri289',
};

// EmailJS settings for the contact form (public keys, safe to keep in the code)
export const emailjs = {
  serviceId: 'gayathri',
  templateId: 'gayathri',
  publicKey: 'pBMClaAjwIpNp3FXP',
};

export const experience = [
  {
    date: 'Aug 2025 - Present',
    place: 'Distacart Inc',
    title: 'Front End Developer',
    badge: 'Full time',
    sub: 'DistaUSA (Shopify store)',
    points: [
      'Look after the front end of DistaUSA: design, theme code and keeping things running smoothly.',
      'Redesigned the store and keep adding new sections and features. Many of these ideas came from looking at how other online stores work.',
      'Build the UI on top of the Apploy app, which handles the backend.',
      'Work with the teams behind the third-party apps on the store whenever an integration needs fixing.',
      'When I started, the store got around 40-50 orders a day. Today it gets around 200.',
    ],
  },
  {
    date: 'Jan 2025 - Aug 2025',
    place: 'Distacart Inc',
    title: 'Front End Developer Intern',
    points: [
      'Learned Shopify on a live store: managing it, editing themes and building Shopify apps.',
      'Joined full time after the internship.',
    ],
  },
  {
    date: 'May 2024 - Jun 2024',
    place: 'Internship',
    title: 'Web Development Intern',
    points: ['A month of React training, where I built a few small websites.'],
  },
  {
    date: 'May 2023 - Jun 2023',
    place: 'YHills',
    title: 'Artificial Intelligence Intern',
    points: ['Explored and visualised datasets, and built some classification and regression models.'],
  },
];

export const projects = [
  {
    featured: true,
    tag: 'Final year project',
    title: 'Cost-Optimized Predictive Maintenance for Wind Turbines',
    url: 'https://github.com/hidden-profile/cost-optimized-predictive-maintenance-for-wind-turbines-using-ml',
    text:
      'My final year project. It predicts wind turbine generator failures from sensor data. Instead of just going for accuracy, I scored the models on what their mistakes would cost in repairs, replacements and inspections. I tried seven algorithms, and a tuned XGBoost model worked best. There is also a small Streamlit app to try it out.',
    tech: ['Python', 'XGBoost', 'scikit-learn', 'SMOTE', 'Streamlit'],
  },
  {
    tag: 'Generative AI',
    title: 'YouTube Video Summarizer',
    url: 'https://github.com/hidden-profile/youtube-video-summarizer',
    text: 'Paste in a YouTube link and it gives you short notes on the video. It grabs the transcript and asks Gemini to summarise it.',
    tech: ['Python', 'Gemini API', 'Prompting', 'Streamlit'],
  },
  {
    tag: 'Hackathon',
    title: 'Care Companion',
    url: 'https://github.com/hidden-profile/care-companion',
    text: 'Made at a hackathon. A website that helps people find caretakers near them.',
    tech: ['PHP', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    tag: 'Web app',
    title: 'TradeLiber',
    url: 'https://github.com/hidden-profile/tradeliber-onlinebooksresellingsystem',
    text: 'A site where students can sell their old books cheaply to other students who need them.',
    tech: ['PHP', 'MySQL', 'HTML', 'CSS'],
  },
  {
    tag: 'Deep learning',
    title: 'Handwritten Digit Recognition',
    url: 'https://github.com/hidden-profile/handwritten-number-prediction',
    text: 'A small neural network trained on the MNIST dataset to recognise handwritten digits.',
    tech: ['TensorFlow', 'OpenCV', 'Python'],
  },
  {
    tag: 'Desktop app',
    title: 'Student Database Management System',
    url: 'https://github.com/hidden-profile/Student-database-management-system',
    text: 'A desktop app for adding, updating and searching student records, with the data stored in PostgreSQL.',
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
  { date: '2026 - 2028', title: 'MTech, Artificial Intelligence', place: "Vignan's Institute of Information Technology" },
  { date: '2021 - 2025', title: 'BTech, Computer Science and Engineering', place: "Vignan's Institute of Information Technology", score: 'CGPA 9.56' },
  { date: '2019 - 2021', title: 'Intermediate (MPC)', place: 'Sri Chaitanya Junior College, Visakhapatnam' },
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
