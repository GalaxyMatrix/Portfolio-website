const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Certifications", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Sep 2, 2025",
    title:
      "IBM AI Engineering Professional Certificate",
    image: "/images/IBM.png",
    link: "https://www.credly.com/badges/541682d3-6c1c-4cc8-a115-80e6ebda202b/linked_in_profile",
  },
  {
    id: 2,
    date: "Aug 28, 2025",
    title: "Azure AI Fundamentals Certification",
    image: "/images/Microsoft Fundamentals.png",
    link: "https://learn.microsoft.com/api/credentials/share/en-us/GalaxyMatrix-7207/BF6EF7AE6F8E8F5B?sharingId",
  },
  {
    id: 3,
    date: "Aug 15, 2025",
    title: "AWS Certified Cloud Practitioner",
    image: "/images/AWS.png",
    link: "https://www.credly.com/badges/4d06068c-7a49-4cc1-be36-db6aec5858a4/linked_in_profile",
  },
  {
    id: 4,
    date: "April 23, 2026",
    title: "MLOPS Specialization - Duke University",
    image: "/images/Duke University.png",
    link: "https://www.coursera.org/account/accomplishments/specialization/1TMXHYXXGXYI",
  }
];

const techStack = [
  {
    category: "Languages",
    items: ["React.js", "Next.js", "TypeScript", "JavaScript",  "Python"],
  },
  
  {
    category: "Styling",
    items: ["Tailwind CSS", "Sass", "CSS"],
  },
  {
    category: "Backend and APIs",
    items: ["Node.js", "Express", "FastAPI", "Microservices" ],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL",  "MySQL", "Vector Databases"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker", "AWS", "Kubernetes"],
  },
  {
    category: "AI/ML",
    items: [  "Pandas", "NumPy", "TensorFlow", "PyTorch", "LangChain", "RAG"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/GalaxyMatrix",
  },
  {
    id: 2,
    text: "Gmail",
    icon: "/icons/atom.svg",
    bg: "#4bcb63",
    link: "mailto:coranchunilall7@gmail.com",
  },
  {
    id: 3,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "https://x.com/Coran_Matrix",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/coranchunilall/",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/Coran2.jpeg",
  },
  {
    id: 2,
    img: "/images/Motivation.jpeg",
  },
  {
    id: 3,
    img: "/images/Pulsing future of sports and technology.png",
  },
  {
    id: 4,
    img: "/images/Coran3.jpeg",

  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "DocuMind AI - RAG Document Assistant",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5",
      windowPosition: "top-[5vh] left-[3vw]",
      children: [
        {
          id: 1,
          name: "DocuMind AI - RAG Document Assistant Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",  
          description: [
            "📄 PDF Document Upload - Upload and process PDF files into searchable embeddings\n🤖 AI-Powered Q&A - Ask questions and get instant answers from your documents\n🎨 Beautiful UI - Modern gradient design with smooth animations\n☁️ Cloud Deployed - Fully hosted on Render and Streamlit Cloud\n🗑️ Database Management - Clear all documents with one click\n📚 Source Attribution - See which documents your answers came from\n⚡ Instant Responses - Direct synchronous query processing"
          ],
        },
        {
          id: 2,
          name: "DocuMind AI - RAG Document Assistant",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/GalaxyMatrix/RAG-Application?tab=readme-ov-file",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "DocuMind.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/DocuMind.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-60 right-20",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "AI Research Agent - Multi-Source Intelligence Platform",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[35vh] left-[3vw]",
      children: [
        {
          id: 1,
          name: "AI Research Agent - Multi-Source Intelligence Platform.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "The AI Research Agent is a sophisticated multi-source intelligence platform that revolutionizes how users gather and analyze information. By leveraging cutting-edge AI technologies and parallel processing workflows, it delivers comprehensive research insights in seconds rather than hours.",
            "🔍 Multi-Source Search: Simultaneously queries Google, Bing, and Reddit",
            "🤖 AI-Powered Analysis: Uses GPT-4 for intelligent content synthesis",
            "⚡ Fast Insights: Delivers comprehensive research insights in seconds",
            "🎨 Interactive Interface: Professional Streamlit web application",
          ],
        },
        {
          id: 2,
          name: "AI Research Agent - Multi-Source Intelligence Platform",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/GalaxyMatrix/Advanced-AI-research-Agent-",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "AI Research Agent - Multi-Source Intelligence Platform.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/Ai Research Agent.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-60 left-5",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Acquisitions API",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[65vh] left-[3vw]",
      children: [
        {
          id: 1,
          name: "Acquisitions API.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Production-Grade Node.js Express API with Complete CI/CD Pipeline, Docker Containerization, and Kubernetes Support",

    
          ],
        },
        {
          id: 2,
          name: "Acquisitions API.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/GalaxyMatrix/acquisitions",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "Acquisitions API.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/Acquisitions API.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-60 right-20",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/Coran.png",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/Coran2.jpeg",
    },
    {
      id: 3,
      name: "conference-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/Coran3.jpeg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/Coran.png",
      description: [
        `Hey! I’m Coran 👋, Aspiring AI Engineer with a solid foundation in machine learning, deep learning, and cloud-based AI systems. Skilled in
          building intelligent applications using Python, FastAPI, LangGraph, and modern ML techniques, with hands-on experience
          developing RAG systems, research agents, and scalable backend services. Backed by certifications in IBM AI Engineering,
          Azure AI Fundamentals, and AWS Cloud, I’m driven to design reliable, high-impact AI solutions that enhance automation,
          decision-making, and real-world performance. Passionate about continuous learning, experimentation, and pushing the
          boundaries of applied AI.`,
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Coran Chunilall CV - Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };