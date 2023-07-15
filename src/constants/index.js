import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";



export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Machine Learning",
    icon: web,
  },
  {
    title: "SQL",
    icon: mobile,
  },
  {
    title: "Microsoft_PowerBI & Microsoft_Excel",
    icon: backend,
  },
  {
    title: "Python",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  
  {
    title: "Data Analytics Consulting Virtual Internship",
    company_name: "KPMG",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "June 2023 - June 2023",
    certificate: "https://drive.google.com/file/d/1S40r-o9YX8k2n_DQiTZxUtL5xOsaOFN3/view?usp=sharing",
    points: [
      "Gained experience in analyzing datasets and identifying data quality issues.",
      "Developed skills in extracting valuable insights from real-world datasets.",
      "Acquired proficiency in creating interactive dashboards and visualizations using Power BI.",
      "Learned to leverage data analytics for evaluating performance, tracking progress, and making data-driven decisions to improve business outcomes.",
    ],
  },
  {
    title: "PowerBI Virtual Case Experience",
    company_name: "Pwc",
    icon: starbucks,
    iconBg: "#383E56",
    date: "June 2023 - June 2023",
    certificate: "https://drive.google.com/file/d/1OLX98sEQLE0j2pm21fLOtpv63rtXLDgm/view?usp=sharing",
    points: [
      "Gained Practical skills in data analytics, business intelligence, and data visualization using Power BI.",
      "Developed Industry experience and understanding of real-life challenges in data analytics.",
      "Increased confidence in abilities and proficiency in generating meaningful insights.",
      "Improved communication and client interaction skills in the context of data analytics.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
 
];

const projects = [
  {
    name: "Detecting Pair of Duplicate Questions",
    description:
      "This Project uses Quora's dataset in which we have to tell whether a given pair of question is duplicate or not. I used Random Forest and XGboost Model. To solve the problem I used concepts like BagofWords, Fuzzywords and also did some feature engineering to maximize",
    tags: [
      {
        name: "Machine Learning",
        color: "blue-text-gradient",
      },
      {
        name: "BagofWords",
        color: "green-text-gradient",
      },
      {
        name: "Fuzzywords",
        color: "pink-text-gradient",
      },
      {
        name: "RandomForest",
        color: "blue-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/AmanSoni1/Quoras_Duplicate_Question",
  },
  {
    name: "Movie Recommendation System",
    description:
      "Machine Learning Algorithm that ﬁlters all the videos or movies based on our preferences and our watch history and provides recommendations to the users.",
    tags: [
      {
        name: "Machine Learning",
        color: "blue-text-gradient",
      },
      {
        name: "Tfidf_Vectorizer",
        color: "green-text-gradient",
      },
      {
        name: "cosine_similarity",
        color: "pink-text-gradient",
      },
      {
        name: "sklearn",
        color: "blue-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/AmanSoni1/Movie-Recommendation-Project-main",
  },
  {
    name: "Car Price Prediction",
    description:
      "I utilized the Linear Regression model for prediction, incorporating concepts such as Pipelines and Hot Encoding. The project involved working with the Raw Quikr DataSet, which was cleaned and preprocessed before applying the model",
    tags: [
      {
        name: "Machine Learning",
        color: "blue-text-gradient",
      },
      {
        name: "Pipeline",
        color: "green-text-gradient",
      },
      {
        name: "Hotencoder",
        color: "pink-text-gradient",
      },
      {
        name: "Linear Regression",
        color: "blue-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/AmanSoni1/Car_Price_prediction",
  },
];

export { services, technologies, experiences, testimonials, projects };
