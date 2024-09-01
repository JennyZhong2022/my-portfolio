import {
  backend,
  java,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  // redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  bootstrap,
  nextJs,
  scss ,
 nestJs ,
 spring ,
 aws ,
  MUI,
  django,
  // figma,
  // docker,
  general_assembly,
  medical_team,
  victoria_state_gov,
  slotmachine,
  startasker,
  booksnap,
  dreamphotography,
  huntergarden,
  lovecalculator,
  // threejs,
  python,
  dreamlife,
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
    title: "Full-Stack Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: reactjs,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Java Developer",
    icon: java,
  },
  // {
  //   title: "Python Developer",
  //   icon: python,
  // },
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
    name: "Scss",
    icon: scss,
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
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
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
    name: "git",
    icon: git,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Spring",
    icon: spring,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Next.js",
    icon: nextJs,
  },
  {
    name: "Nest.js",
    icon: nestJs,
  },


  // {
  //   name: "Python",
  //   icon: python,
  // },
  // {
  //   name: "Django",
  //   icon: django,
  // },


  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  // {
  //   title: "Sales Customer Service Manager",
  //   company_name: "Dreamlife Photos & Video",
  //   icon:  dreamlife,
  //   iconBg: "#E6DEDD",
  //   date: "May 2015 - Oct 2017",
  //   points: [
  //     "Customized wedding packages to meet client needs and budgets, utilizing agile methods to boost sales by 26% year-over-year.",
  //     "Coordinated with photographers, makeup artists, and clients to enhance satisfaction through superior communication. ",
  //     "Handled inquiries and bookings efficiently, demonstrating strong organizational skills.",
  //     " Quickly resolved customer issues, maintaining high service standards and minimizing complaints.",
  //   ],
  // },
  {
    title: "Full stack Developer",
    company_name: "General Assembly",
    icon: general_assembly,
    iconBg: "#383E56",
    date: "Oct 2023 - Jan 2024",
    points: [
      "I successfully completed the React Development course and the Software Engineering Immersive program, where I not only met but exceeded project objectives within strict deadlines. Through these experiences, I've developed a robust full-stack development skill set, which I've applied to various projects. This includes working both independently and as part of a team, where my ability to manage time efficiently and collaborate effectively was key to our success.",
      "I developed BookSnap, a single-page application that leverages the Google Books API for efficient reading list management, employing the MERN stack and Agile methodologies. This project, along with more Full Stack APPs, DreamPhotography and Star Tasker, demonstrates my holistic software development skills, encompassing everything from ideation to implementation.",
      "My journey from health administration and sales customer service management to software engineering has been driven by a passion for problem-solving and creating impactful, user-centric software solutions. I am eager to continue this journey, seeking out new opportunities to grow, innovate, and contribute to meaningful projects in the tech world.",
    ],
  },
  {
    title: "Victorian Government's Digital Jobs program Participant",
    company_name: "Victoria State Government",
    icon: victoria_state_gov,
    iconBg:  "#E6DEDD",
    date: "Jan 2023 - Apr 2023",
    points: [
      "I was honored to be selected to participate in a web development training focused on React development, which was hosted by the Victorian Government's Digital Jobs program.",
      "Demonstrating pro-activeness, I undertook and successfully completed a solo project, showcasing my ability to apply theoretical knowledge in a real-world context.",
    ],
  },
  {
    title: "Healthcare Receptionist & Secretary",
    company_name: "Box Hill Mall Medical Center & Langton Medical Center",
    icon: medical_team,
    iconBg: "#383E56",
    date: "Nov 2017 - Present",
    points: [
      "Managed the Occupational Physician's schedule and handled bookings via phone and email with patients, insurers, and legal entities, boosting bookings by 30%-40%.",
      "Enhanced office management and patient care by collaborating with medical and administrative staff.",
      "Maintained confidentiality while handling sensitive information and complex inquiries, showcasing effective communication skills.",
    ],
  },
];



const projects = [
  {
    name: "DreamPhotography",
    description:
      "DreamPhotography is a web-based application designed for wedding photography booking and management. It allows clients to find and message photographers for their wedding booking, while providing a platform for photographers to showcase their work by uploading,deleting photos. Photographers can also upload photos to their clients' album and clients can download photos from their album.The website is responsive too.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "aws",
        color: "pink-text-gradient",
      },
      {
        name: "bootstrap",
        color: "blue-text-gradient",
      },
      {
        name: "heroku",
        color: "green-text-gradient",
      },
    ],
    image: dreamphotography,
    source_code_link: "https://github.com/JennyZhong2022/Dream-Photography",
    website_link:"https://github.com/JennyZhong2022/Dream-Photography"
  },
  
  {
    name: "Star Tasker",
    description:
      "Star Tasker is a user-friendly web application designed to streamline task management. It offers secure user authentication for signup and login, ensuring the protection of user data. Users can effortlessly post tasks, upload multiple images for each task and manage their tasks through a personalized dashboard. Additionally, the application boasts a responsive design too",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongoose",
        color: "pink-text-gradient",
      },
      {
        name: "bootstrap",
        color: "blue-text-gradient",
      },
      {
        name: "cloudinary",
        color: "green-text-gradient",
      },
      {
        name: "expressjs",
        color: "pink-text-gradient",
      },
      {
        name: "heroku",
        color: "blue-text-gradient",
      },
    ],
    image: startasker,
    source_code_link: "https://github.com/JennyZhong2022/Star-Tasker",
    website_link:"https://github.com/JennyZhong2022/Star-Tasker",
  },
  {
    name: "Hunter's Garden",
    description:
      "Hunter's Garden is an engaging single-page website created for a private pet-sitting service. It features the inspiring growth story of Hunter and owner. Moreover, the site is integrated with social media, providing links to the owner's Facebook and Instagram pages. The 'Contact' section is thoughtfully designed with direct email integration, enabling clients to communicate with the owner via a contact form. The website is responsive.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mui",
        color: "green-text-gradient",
      },
      {
        name: "emailjs",
        color: "pink-text-gradient",
      },
      {
        name: "chakra",
        color: "blue-text-gradient",
      },
      {
        name: "aws",
        color: "green-text-gradient",
      },
    ],
    image: huntergarden,
    source_code_link: "https://github.com/JennyZhong2022/Hunter-And-Me",
    website_link:'https://hunter-and-me.onrender.com',
  },
  {
    name: "Slot Machine Game",
    description:
      "A browser based slot machine game. Immerse yourself in the atmosphere with realistic audio effects that enhance your game-play experience. Our game offers flexible betting options and with every spin being entirely random, you're guaranteed a unique and exciting experience every time you play.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "github",
        color: "blue-text-gradient",
      },
      
    ],
    image: slotmachine,
    source_code_link: "https://github.com/JennyZhong2022/Slot-Machine",
    website_link:'https://jennyzhong2022.github.io/Slot-Machine/',
  },
  {
    name: "BookSnap",
    description:
      "BookSnap is a full-stack, single-page web application that allows users to search for books using the Google Books API. Users can search for books, add them to their collection, and manage their reading list. It is a collaborative project involving four team members who worked together for one week, utilizing GitHub branches and Trello to assign tasks. The project focuses on a MERN infrastructure.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "expressjs",
        color: "pink-text-gradient",
      },
      {
        name: "mongoose",
        color: "blue-text-gradient",
      },
      {
        name: "mui",
        color: "green-text-gradient",
      },
      {
        name: "git",
        color: "pink-text-gradient",
      },
      {
        name: "trello",
        color: "blue-text-gradient",
      },
      {
        name: "heroku",
        color: "green-text-gradient",
      },
    ],
    image: booksnap,
    source_code_link: "https://github.com/JennyZhong2022/BookSnap",
    website_link:'https://booksnap-9od4.onrender.com/',
  },
  {
    name: "Love Calculator",
    description:
      "The Love Calculator React App is a delightful, user-friendly application built with React.js. It calculates the compatibility of a relationship by taking two names as input.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mui",
        color: "green-text-gradient",
      },
      {
        name: "aws",
        color: "pink-text-gradient",
      },
   
    ],
    image: lovecalculator,
    source_code_link: "https://github.com/JennyZhong2022/LoveCalculator",
    website_link:'https://lovecalculator-jfxh.onrender.com',
  },
  
];

export { services, technologies, experiences, projects };