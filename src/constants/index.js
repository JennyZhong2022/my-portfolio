import {
  backend,
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
    title: "Python Developer",
    icon: python,
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
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "MUI",
    icon: MUI,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Django",
    icon: django,
  },

  //   {
  //   name: "Redux Toolkit",
  //   icon: redux,
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
  {
    title: "Sales Customer Service Manager",
    company_name: "Dreamlife Photos & Video",
    icon:  dreamlife,
    iconBg: "#E6DEDD",
    date: "May 2015 - Oct 2017",
    points: [
      "Tailoring a wedding package in accordance to customers needs and budget. Adapting agile methodologies to improve processes and increase sales by 26% over the previous year after being given responsibility for sales.",
      "Liaised effectively with photographers, make-up artists, editors, and clients to tailor wedding packages, enhancing customer satisfaction through excellent communication and collaboration.",
      "Managed customer inquiries and bookings, showcasing responsibility in handling client relations and demonstrating robust organizational abilities.",
      " Addressed and resolved customer issues promptly, resulting in very few complaints due to positive and timely responses. This ensured high service standards and skillful management of any unforeseen challenges.",
    ],
  },
  {
    title: "Healthcare Receptionist & Secretary",
    company_name: "Box Hill Mall Medical Center",
    icon: medical_team,
    iconBg: "#383E56",
    date: "Nov 2017 - May 2022",
    points: [
      "Working as a secretary for an Occupational Physician, managing his schedules, handling all booking enquires by phone and email among patients, insurance companies, legal practices and other organisations. Increased bookings by 30%-40%for the Occupational Physician since working as his secretary, showcasing meticulousness and innovative problem resolution.",
      " Collaborated closely with medical staff and administrative teams, ensuring seamless patient care and office management.",
      "Quickly adapted to diverse medical administrative tasks and efficiently managed emergency situations, ensuring patient safety and operational continuity.",
      "Handled sensitive patient information and complex queries, maintaining confidentiality and demonstrating strong interpersonal communication skills.",
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
      "Demonstrating pro-activeness, I undertook and successfully completed a solo project, showcasing my ability to apply theoretical knowledge in a real-world context",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "General Assembly",
    icon: general_assembly,
    iconBg: "#383E56",
    date: "Jan 2023 - Present",
    points: [
      "Continuously learned and improved skills through self-study and attending General Assembly Software Engineer Immersive courses.",
      "Finished solo projects and team projects with efficient time management, achieving all set objectives and meeting project deadlines.",
      "Acquired full-stack development expertise and applied it to real-world projects.",
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
    image: 'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/09/instagram-image-size.jpg',
    source_code_link: "https://github.com/JennyZhong2022/Dream-Photography",
    website_link:'https://dreamphotography-f9294ed19bab.herokuapp.com/'
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
    website_link:'https://booksnap-ecea12c610c0.herokuapp.com/',
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
    website_link:'https://star-tasker-10a7c6bbe05a.herokuapp.com/tasks/all',
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
    source_code_link: "https://github.com/JennyZhong2022/Hunter",
    website_link:'http://huntergarden.s3-website-ap-southeast-2.amazonaws.com/',
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
  
];

export { services, technologies, experiences, projects };