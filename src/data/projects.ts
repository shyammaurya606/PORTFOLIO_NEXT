export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  tech: string[];
  githubUrl?: string | null;
  liveUrl?: string | null;
  images: string[];
  featured: boolean;
  isComplete: boolean; // ✅ new field
  createdAt: string | Date;
  updatedAt: string | Date;
}

export const projects: Project[] = [
  {
    id: "1",
    title: 'S-3 Platform',
    slug: 's-3-platform',
    description:
      "Platform that display SPORTS_STREAMING_SITES that helps users to discover where they can watch live sports events online based on their location and preferences.",
    tech: ["React", "JavaScript", "Firebase", "APIs", "TailwindCSS"],
    githubUrl: "https://github.com/shyammaurya606/project-1",
    liveUrl: 'https://project-nu-lake.vercel.app/',
    images: ["https://thumbs.dreamstime.com/b/irresistible-attack-rage-multi-sports-collage-hockey-soccer-american-football-players-conceptual-photo-emotional-110067569.jpg"],
    featured: true,
    isComplete: true, // ✅ added
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-20'),
  },
  {
    id: "2",
    title: "RealTime Group GPS",
    slug: "realtime-group-gps",
    description:
      "REALTIME_GROUP_GPS is tracking platform designed to help multiple users share their live locations within a private group.",
    tech: ["Express", "Node.js", "Socket.io", "MongoDB", "RESTful API", "Leaflet"],
    githubUrl: "https://github.com/shyammaurya606/REALTIME_GROUP_GPS",
    liveUrl: 'https://realtime-group-gps-1.onrender.com/',
    images: [
      "https://c4.wallpaperflare.com/wallpaper/981/674/477/earth-neon-black-background-world-map-hd-wallpaper-preview.jpg",
    ],
    featured: true,
    isComplete: true, // ✅ added
    createdAt: new Date('2024-02-01'),
    updatedAt: new Date('2024-02-10'),
  },
  {
    id: "3",
    title: "Living CalC Canvas",
    slug: "living-calc-canvas",
    description:
      "An AI-powered calculator that transforms your handwritten drawings into dynamic mathematical expressions.",
    tech: ["Python", "Gemini API", "TypeScript", "Latex(rendering)"],
    githubUrl: "https://github.com/shyammaurya606/LIVING_CALC",
    liveUrl: 'https://calc-fe.vercel.app/',
    images: [
      "https://miro.medium.com/v2/resize%3Afit%3A1200/1%2AoiNWwZNv8Qf827EYHJ2nnA.jpeg",
    ],
    featured: true,
    isComplete: true, // ✅ example of incomplete
    createdAt: new Date('2024-02-01'),
    updatedAt: new Date('2024-02-10'),
  },
  {
    id: "4",
    slug: "ai-course-generator",
    title: "AI Course Generator",
    description:
      "The AI Course Generator is an intelligent web platform that leverages generative AI to create customized educational coursebooks on any given topic.",
    tech: ["Next.js", "TypeScript", "JavaScript", "Gemini API", "Tailwind CSS"],
    images: [
      "https://easy-peasy.ai/cdn-cgi/image/quality%3D80%2Cformat%3Dauto%2Cwidth%3D700/https%3A//media.easy-peasy.ai/f1a98533-750a-404d-826a-5940e5c09b1b/f74b648b-a002-4320-98ab-5e365a970636.png",
    ],
    githubUrl: "https://github.com/shyammaurya606/ai--course-book-generator",
    liveUrl: "https://ai-coursebook-generator.netlify.app/",
    featured: false,
    isComplete: false, // ✅ added
    createdAt: new Date('2024-02-01'),
    updatedAt: new Date('2024-02-10'),
  },
  {
    id: "5",
    slug: "free-books-library",
    title: "Free Books Library",
    description:
      "A free online platform to read books instantly without sign-up or registration. Provides a clean, user-friendly interface with fast access and smooth reading experience.",
    tech: ["Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Firebase"],
    images: [
      "https://media.istockphoto.com/id/1453378866/video/hand-turning-pages-of-a-book-close-up-cinematic-slow-motion.jpg?s=640x640&k=20&c=UWqAJODnV8RTehBk_SuyhXEBjnyfdKc9eFzkaAE8M64=",
    ],
    githubUrl: "https://github.com/shyammaurya606/My-Library",
    liveUrl: " ",
    featured: false,
    isComplete: false, // ✅ added
    createdAt: new Date('2024-02-01'),
    updatedAt: new Date('2024-02-10'),
  },
  {
    id: "5",
    slug: "web-contacts-scraper",
    title: "Web Contacts Scraper",
    description:
      "A lightweight tool that extracts contact information (emails, phone numbers, social links) from websites. Helps users collect and organize leads quickly without manual searching..",
    tech: ["React", "JavaScript", "Tailwind CSS", "HTML"],
    images: [
      "https://www.shutterstock.com/image-illustration/web-scraping-text-written-over-260nw-2435079055.jpg",
    ],
    githubUrl: "https://github.com/shyammaurya606/Web-Contact-Detail-Scraper",
    liveUrl: "https://web-contact-scraper.netlify.app/",
    featured: false,
    isComplete: true, // ✅ added
    createdAt: new Date('2024-02-01'),
    updatedAt: new Date('2024-02-10'),
  },
  {
    id: "5",
    slug: "chess-dotcom",
    title: "Chess DotCom",
    description:
      "This project is a real-time multiplayer chess game built using Socket.IO for bi-directional communication between clients and the server.",
    tech: ["JavaScript", "Socket.io", "Express", "Tailwind CSS", "Chess.js"],
    images: [
      "https://www.freevector.com/uploads/vector/preview/9302/FreeVector-008-Chess-Illustrations-M_2.jpg",
    ],
    githubUrl: "https://github.com/shyammaurya606/CHESS_DOT_COM",
    liveUrl: "https://chesswithshyam.onrender.com/",
    featured: false,
    isComplete: true, // ✅ added
    createdAt: new Date('2024-02-01'),
    updatedAt: new Date('2024-02-10'),
  },
  
  {
    id: "6",
    slug: "weather-dashboard",
    title: "Weather Dashboard",
    description:
      "The Weather Dashboard is a lightweight and user-friendly web application that allows users to check real-time weather information for any city worldwide.",
    tech: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
    images: [
      "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg",
    ],
    githubUrl: "https://github.com/shyammaurya606/WEATHER_app",
    liveUrl: "https://gettingweatherbyshyam.netlify.app/#",
    featured: false,
    isComplete: true, // ✅ added
    createdAt: new Date('2024-02-01'),
    updatedAt: new Date('2024-02-10'),
  },
  {
    id: "7",
    slug: "chat-application",
    title: "Chat Application",
    description:
      "The Chat Application is a real-time messaging platform built with Socket.IO, enabling users to communicate instantly through a shared chat room.",
    tech: ["JavaScript", "HTML", "Socket.io", "CSS"],
    images: [
      "https://img.freepik.com/free-vector/gradient-phone-text-bubble-collection_23-2149525017.jpg?q=80&semt=ais_hybrid&w=740",
    ],
    githubUrl: "https://github.com/shyammaurya606/GROUP_GROVE",
    liveUrl: "https://ai-chat-demo.vercel.app",
    featured: false,
    isComplete: true, // ✅ added
    createdAt: new Date('2024-02-01'),
    updatedAt: new Date('2024-02-10'),
  },
  {
    id: "8",
    slug: "movies-landing-page",
    title: "Movies Landing Page",
    description:
      "This Movie Landing Page is a visually appealing, static website that showcases a movie or a set of movies using a clean layout and engaging design.",
    tech: ["React", "Tailwind CSS"],
    images: [
      "https://www.sketchappsources.com/resources/source-image/the-movie-box-landing-page.jpg",
    ],
    githubUrl: "https://github.com/shyammaurya606/STREAM_IT",
    liveUrl: "https://ai-chat-demo.vercel.app",
    featured: false,
    isComplete: true, // ✅ added
    createdAt: new Date('2024-02-01'),
    updatedAt: new Date('2024-02-10'),
  }
];

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
};

export const getProjectBySlug = (slug: string): Project | null => {
  return projects.find(project => project.slug === slug) || null;
};
