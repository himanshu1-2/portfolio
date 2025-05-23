const sampleData = {
  intros: {
    welcomeText: "Hi, I'm",
    firstName: "Himanshu",
    lastName: "Ajwani",
    caption: "I build scalable backend systems in Node.js",
    description: "With over 5 years of experience in Node.js, MongoDB, and microservices, I specialize in creating performant and scalable backend systems. I'm currently working at Baker Hughes, contributing to industrial asset health management solutions."
  },

  abouts: {
    lottieURL: "https://assets9.lottiefiles.com/packages/lf20_q5pk6p1k.json",
    description1: "I'm a backend engineer passionate about clean architecture, APIs, and performance optimization.",
    description2: "I’ve built e-commerce systems, mentored junior devs, and I’m now solving industrial tech problems at scale.",
    skills: [
      "Node.js", "Express.js", "MongoDB", "JavaScript", "AWS",
      "Microservices", "Docker", "RabbitMQ", "Redis", "Git"
    ]
  },

  experiences: [
    {
      title: "Senior Node.js Developer",
      period: "Feb 2024 - Present",
      company: "Baker Hughes",
      description: "Working on asset health management systems using Node.js, AWS, and microservice architecture. Built services for data ingestion, alerting, and analytics."
    },
    {
      title: "Full Stack Developer",
      period: "Jan 2021 - Jan 2024",
      company: "Zeno Health",
      description: "Led backend development of an e-commerce platform. Optimized APIs, integrated payment gateways, and handled deployment pipelines."
    }
  ],

  projects: [
    {
      title: "E-Commerce Platform",
      description: "Built a full-featured medicine delivery platform including user authentication, search, cart, and order tracking.",
      image: "https://via.placeholder.com/300x200.png?text=E-Commerce",
      link: "https://github.com/himanshuajwani/medicine-shop",
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "AWS"]
    },
    {
      title: "Portfolio Website",
      description: "Personal website to showcase resume, projects, and blogs with an admin panel.",
      image: "https://via.placeholder.com/300x200.png?text=Portfolio",
      link: "https://himanshuajwani.dev",
      technologies: ["React", "Node.js", "MongoDB", "TailwindCSS"]
    }
  ],

  courses: [
    {
      title: "Backend System Design",
      description: "Learned best practices to build scalable distributed backend systems.",
      image: "https://via.placeholder.com/300x200.png?text=System+Design",
      link: "https://example.com/system-design-course"
    },
    {
      title: "Node.js Mastery",
      description: "In-depth course on building scalable Node.js applications with real-world use cases.",
      image: "https://via.placeholder.com/300x200.png?text=Node.js+Course",
      link: "https://example.com/nodejs-course"
    }
  ],

  contacts: {
    name: "Himanshu Ajwani",
    gender: "Male",
    email: "himanshu@example.com",
    mobile: "9876543210",
    age: "27",
    address: "Ulhasnagar, Maharashtra, India"
  }
};

module.exports = sampleData;
