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
  carrent,
  jobit,
  tripguide,
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

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };