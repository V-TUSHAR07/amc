import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitIcon5,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  download2,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";
import logo from "../assets/hero/logo.png";

export const navigation = [
  {
    id: "0",
    title: "Domains ",
    url: "#features",
  },
  {
    id: "1",
    title: "Rules & Regulations",
    url: "#how-to-use",
  },
  {
    id: "2",
    title: "EVENT TIMELINE",
    url: "#timeline",
  },
  {
    id: "3",
    title: "Patrons",    url: "#patrons",

  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [
  download2,
  download2,
  download2,
  download2,
  download2,
];

export const brainwaveServices = [
  "First registration is free – here, the team must submit a theme and an idea related to it. After the conclusion of registrations, 30 teams will be shortlisted.",
  "A mail will be sent to the assigned team lead, if they have been selected, and a second registration will be done, where an amount of Rs. 500 per team must be paid.",
  "Change of theme or modification of problem statement or proposal will not be allowed after submission of the same.",
  "Each domain will have 1 winner, with a prize amount of Rs. 20,000, i.e. 4 domains, each 1 winner.",
  "The allowed team size is 2-4",
  "No members can be added/removed from the team. Team should be the same as at the time of idea submission, contrary to which shall result in disqualification",
  "All code must be written during the event. You are required to build your project from scratch after the commencement of the Hackathon. The first and the last line must be created during the event",
  "All the required hardware parts must be brought by the team only, organizers will not be liable to provide it. Hardware models must be assembled from scratch on-site, no pre-assembled modules are allowed",
  "The registrants up to the age of 25 years as of December 2023 are eligible for participation and prizes. A valid government photo-identification proof is required.",
  "Knowledge of GitHub is a pre-requisite for this event. If you’re new to GitHub, read this getting started guide.",
  "At any given point in time, 2 members must be present at their assigned area. Participants can take breaks alternatively.",
  "Participants are not to engage in any kind of communication with other teams during the event. Post-event, a time slot will be allotted for everyone to have a look around at other projects.",
  "After the first registration, if any domain fails to acquire at least 3 entries, that domain will be removed.",
  "All participants must be present at the venue at least 30 minutes before the commencement of the Hackathon.",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];



export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Cyber Security",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: " AI-ML",
    "text": "AI-ML enables systems to learn, adapt, and respond intelligently to user queries using natural language processing and predictive analytics.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Web 3 / BlockChain",
    text: "Explore the decentralized web where users have control over their data and digital assets, leveraging blockchain technology to ensure security, transparency, and immutability.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Health Care",
    text: "Empowering users with quick and reliable health information, enabling them to make informed decisions and manage their well-being effectively.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Open Innovation",
    text: "Open Innovation encourages collaboration with external partners to drive creativity and accelerate technological progress, leveraging a global network of ideas and resources.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon5,
    imageUrl: benefitImage2,
    light: false,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
