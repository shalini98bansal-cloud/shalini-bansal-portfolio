export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  details: string[];
}

export interface ProjectItem {
  title: string;
  summary: string;
  details: string[];
  technologies: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface LeadershipItem {
  title: string;
  organization: string;
  period: string;
  summary: string;
  details: string[];
}

export interface ContactInfo {
  email: string;
  resumeUrl: string;
}

export const content = {
  hero: {
    name: "Shalini Bansal",
    role: "Mechanical Engineer",
    tagline: "Passionate about precision engineering, CNC machining, and quality testing. Building the future of manufacturing through innovative automation and design excellence.",
  },
  
  about: {
    title: "About",
    summary: "I'm a dedicated Mechanical Engineer with expertise in CNC machining, CAD design, and quality testing. Currently working as a Machine Test Engineer 2 at Haas Automation, where I focus on developing comprehensive test plans and automated validation processes for CNC machines.",
    details: [
      "Specialized in GD&T (Geometric Dimensioning and Tolerancing) for precision manufacturing",
      "Experienced in 5-axis machining operations and complex part programming",
      "Proficient in Python scripting for test automation and data analysis",
      "Strong background in Design for Manufacturing (DFM) and Design for Assembly (DFA)",
      "Passionate about mentoring and knowledge sharing within engineering teams",
      "Continuously learning about emerging technologies in manufacturing and automation"
    ]
  },
  
  experience: [
    {
      title: "Machine Test Engineer 2",
      company: "Haas Automation",
      period: "June 2022 - Present",
      location: "Oxnard, CA",
      summary: "Develop comprehensive test plans and automated tests for CNC machine validation, focusing on precision machining and quality assurance.",
      details: [
        "Created automated test suites for CNC machine validation, reducing test execution time by 12%",
        "Performed manual test cuts to validate machine features and software bug fixes",
        "Utilized Haas proprietary scripting language for test automation and quality control",
        "Applied GD&T principles in testing scenarios for aerospace and automotive components",
        "Gained hands-on experience with 5-axis CNC machining for complex part validation",
        "Collaborated with cross-functional teams on Design for Manufacturing (DFM) improvements"
      ]
    },
    {
      title: "Researcher",
      company: "University of California, Riverside",
      period: "January 2021 - December 2021",
      location: "Riverside, CA",
      summary: "Designed and built robotic catheter systems for medical applications, combining mechanical engineering with biomedical research.",
      details: [
        "Designed and built robotic catheter for mitral valve repair in human heart",
        "Used Fusion 360 for 3D modeling and design optimization",
        "Gained exposure to medical device industry standards and regulations",
        "Developed technical research paper writing and presentation skills",
        "Assembled complex electromechanical components with precision tolerances"
      ]
    },
    {
      title: "Project Intern",
      company: "Hindustan Aeronautics Limited",
      period: "February 2020 - May 2020",
      location: "Bengaluru, India",
      summary: "Analyzed machining parameters for aircraft engine components using advanced CAD/CAE tools and CNC operations.",
      details: [
        "Collaborated with 3 peers to analyze machining parameters of aircraft engine blisk",
        "Utilized CATIA-V5 and ANSYS for engineering analysis and simulation",
        "Operated 5-axis CNC milling machine for surface roughness evaluation",
        "Contributed to aerospace manufacturing quality standards and documentation"
      ]
    }
  ],
  
  projects: [
    {
      title: "Wood-router Spacer (GD&T, DFA)",
      summary: "Designed precision spacer components for wood routing applications with focus on manufacturability and assembly efficiency.",
      details: [
        "Applied GD&T principles for ±0.001\" tolerance requirements",
        "Optimized design for Design for Assembly (DFA) reducing assembly time by 25%",
        "Created detailed manufacturing drawings and inspection procedures",
        "Coordinated with machining team for prototype development and testing"
      ],
      technologies: ["SolidWorks", "GD&T", "CNC Programming", "Quality Control"]
    },
    {
      title: "Automated Regression Tests (200+)",
      summary: "Developed comprehensive automated test suite for CNC machine validation with over 200 test cases covering all machine functions.",
      details: [
        "Created 200+ automated test cases using Python and Haas scripting",
        "Implemented CI/CD pipeline for continuous testing and validation",
        "Reduced manual testing time by 60% while improving test coverage",
        "Developed reporting dashboard for test results and machine performance metrics"
      ],
      technologies: ["Python", "Test Automation", "CNC Programming", "Data Analysis"]
    },
    {
      title: "Plant Pal App Prototype",
      summary: "Developed mobile app prototype for plant care management with IoT integration for automated watering systems.",
      details: [
        "Designed user interface for plant monitoring and care scheduling",
        "Integrated IoT sensors for soil moisture and light level monitoring",
        "Created automated watering system with Arduino-based controllers",
        "Conducted user testing with 50+ plant enthusiasts for feedback"
      ],
      technologies: ["React Native", "Arduino", "IoT", "User Research"]
    }
  ],
  
  skills: [
    {
      category: "CAD/CAE",
      skills: ["SolidWorks", "CATIA V5", "Fusion 360", "ANSYS", "GD&T", "AutoCAD"]
    },
    {
      category: "Fabrication",
      skills: ["CNC Lathe", "CNC Mill", "5-Axis Machining", "3D Printing", "CAM Programming", "Quality Inspection"]
    },
    {
      category: "Scripting & Automation",
      skills: ["Python", "Haas Scripting", "Test Automation", "Data Analysis", "Git", "CI/CD"]
    },
    {
      category: "Manufacturing",
      skills: ["Design for Manufacturing (DFM)", "Design for Assembly (DFA)", "Process Optimization", "Quality Control", "Lean Manufacturing"]
    }
  ],
  
  leadership: [
    {
      title: "Engineering Mentor",
      organization: "Haas Automation",
      period: "2023 - Present",
      summary: "Mentoring 15 junior engineers on CNC programming, quality testing, and career development.",
      details: [
        "Mentored 15 junior engineers in CNC programming and quality testing methodologies",
        "Developed training materials for GD&T and precision measurement techniques",
        "Facilitated knowledge sharing sessions on advanced machining operations",
        "Provided career guidance and technical skill development support"
      ]
    },
    {
      title: "WRC Mentor",
      organization: "University of California, Riverside",
      period: "2022 - 2023",
      summary: "Mentored women engineering students through the Women's Resource Center mentorship program.",
      details: [
        "Mentored 8 undergraduate women engineering students",
        "Provided guidance on academic planning and career development",
        "Organized networking events and technical workshops",
        "Supported students in navigating challenges in engineering education"
      ]
    },
    {
      title: "Orientation Coordinator",
      organization: "University of California, Riverside",
      period: "2021 - 2022",
      summary: "Coordinated orientation programs for incoming engineering students, reaching 300+ students annually.",
      details: [
        "Led orientation programs for 300+ incoming engineering students",
        "Developed curriculum for engineering fundamentals and campus resources",
        "Coordinated with faculty and staff for comprehensive student onboarding",
        "Trained and managed team of 20 orientation leaders"
      ]
    }
  ],
  
  contact: {
    email: "shalini98bansal@gmail.com",
    resumeUrl: "/resume.pdf"
  }
};
