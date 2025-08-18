export interface ProfileData {
  name: string;
  title: string;
  subtitle: string;
  description: string;
  location: string;
  email: string;
  experience: string;
  avatar: string;
  stats: {
    projects: number;
    experience: string;
    satisfaction: string;
  };
  services: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  socialLinks: {
    github: string;
    linkedin: string;
    twitter: string;
  };
}

export const profileData: ProfileData = {
  name: "Shyam Maurya",
  title: "Developer_&_Cyber Enthusiast",
  subtitle: "Full Stack Developer",
  description: "Ex-Intern at Mobiqliq Global Pvt.Ltd., - Worked for Research and Development at Startup named WHiLE., - Cyber Trainee at Intrainz Innovation., - Secured 3⭐ star rating in CodeChef Starters.",
  location: "Lucknow, Uttar Pradesh, IN",
  email: "shyammaurya1808@gmail.com",
  experience: "12+ months experience",
  avatar: "https://avatars.githubusercontent.com/u/133005048?v=4",
  stats: {
    projects: 11,
    experience: "12+",
    satisfaction: "98%"
  },
  services: [
    {
      title: "MERN Development",
      description: "Building responsive and interactive user websites with MERN, Next.js, and modern CSS frameworks.",
      icon: "Code"
    },
    {
      title: "Backend Development", 
      description: "Creating robust APIs and server-side applications with Node.js, MySQL, and cloud services.",
      icon: "Server"
    },
    {
      title: "Data Structures & Algorithms",
      description: "I practice Data Structures and Algorithms (DSA) using C++, building a strong foundation in problem-solving and coding efficiency.",
      icon: "Code"
    },
    {
      title: "Cybersecurity",
      description: "I'm passionate about cybersecurity, exploring areas like network security, ethical hacking, penetration testing and system privacy to build secure and resilient systems.",
      icon: "ShieldCheck"
    },
    {
      title: "Machine Learning",
      description: "I'm exploring machine learning by building intelligent models that learn from data and solve real-world problems through automation and prediction.",
      icon: "BrainCircuit"
    }
  ],
  socialLinks: {
    github: "https://github.com/shyammaurya606",
    linkedin: "https://linkedin.com/in/shyammaurya606",
    twitter: " "
  }
};

export const aboutData = {
  longDescription: ` Currently, I'm a Final-year B-Tech student at the Institute of Engineering and Technology, Lucknow,
  majoring in Computer Science and Engineering with a specialization in Artificial Intelligence.
  I enjoy solving real-world problems and turning ideas into full-fledged applications.
  I'm also a passionate machine learning and cybersecurity enthusiast, constantly exploring ways to build smart,
  secure, and impactful tech solutions.`
};