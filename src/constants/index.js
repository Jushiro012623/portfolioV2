export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'Zentry',
    desc: 'Zentry unites every player from countless games and platforms, fostering a vibrant community where collaboration and competition thrive across diverse virtual worlds.',
    subdesc:
      'Built as a cutting-edge SaaS app with React.js, GSAP, and Tailwind CSS, PodcastPro delivers high performance, smooth animations, and a scalable, responsive design.',
    href: 'https://zentry-inky.vercel.app/',
    texture: '/textures/project/hero-1.mp4',
    logo: '/assets/zentry-logo.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'GSAP',
        path: '/assets/gsap.png',
      },
    ],
  },
  {
    title: 'Thriump Co. E-Commerce',
    desc: 'Triump is your go-to thrift shop where you can find a wide range of thrifted products at unbeatable prices, offering unique, high-quality items that fit every budget and style.',
    subdesc:
    "With Thriump Co., experience seamless real-time collaboration with no lag, powered by React.js and Express.js' latest features.",
    href: 'https://github.com/Jushiro012623/triump-co/',
    texture: '/textures/project/hero-2.mp4',
    logo: '/assets/tc.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Express.js',
        path: 'assets/express.svg',
      },
      {
        id: 3,
        name: 'Tailwind CSS',
        path: 'assets/tailwindcss.png',
      },

    ],
  },
  {
    title: 'Barangay Management System',
    desc: 'The Barangay Management System is designed to streamline operations, improve communication, and enhance services for Barangay 107 residents and councils.',
    subdesc:
      'With a focus on efficiency, BMS integrantes complex forms and SMS notifications, by using Next.js and MongoDB that enhance operational workflows.',
    href: 'https://bms-sage.vercel.app/',
    texture: '/textures/project/hero-3.mp4',
    logo: '/assets/barangay.png',
    logoStyle: {
        backgroundColor: '#0E1F38',
        border: '0.2px solid #0E2D58',
        boxShadow: '0px 0px 60px 0px #2F67B64D',
      },
      spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'Next.js',
        path: '/assets/next.svg',
      },
      {
        id: 2,
        name: 'Mantine',
        path: 'assets/mantine.png',
      },
      {
        id: 3,
        name: 'MongoDB',
        path: '/assets/mongo.svg',
      },
    ],
  },
  {
    title: 'UDMAPS Augmented Reality Navigation',
    desc: 'UDMAPS AR is an innovative augmented reality navigation platform designed to help users navigate the college vicinity. It provides real-time, interactive directions, allowing users to easily find buildings, classrooms, and facilities within the campus using AR technology',
    subdesc:
        "Built with Unity3D , Blender3D, C# and Firebase, UDMAPS uses Machine Learning to offer intelligent, real-time navigation, adapting to users' needs and providing optimized routes across the college campus.",
    href: 'https://drive.google.com/drive/u/0/folders/1FCb0pzqOHMw5LsKuaIywVHWXvsM4zlhF',
    texture: '/textures/project/hero-4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
        backgroundColor: '#1C1A43',
        border: '0.2px solid #252262',
        boxShadow: '0px 0px 60px 0px #635BFF4D',
      },
      spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'C#',
        path: '/assets/csharp.svg',
      },
      {
        id: 2,
        name: 'Unity',
        path: 'assets/unity.svg',
      },
      {
        id: 3,
        name: 'Blender3D',
        path: '/assets/blender.svg',
      },
      {
        id: 4,
        name: 'Firebase',
        path: '/assets/firebase.svg',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Pisopay',
    pos: 'Backend Web Developer',
    duration: '2024 - Present',
    title: "I create and maintain server-side systems, design APIs, and manage databases to ensure seamless data flow. I focus on optimizing performance, implementing security measures, and building scalable solutions that support reliable, high-performance applications and smooth integration with front-end components.",
    icon: '/assets/piso.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Department of Education - Manila ',
    pos: 'Intern | Web Developer',
    duration: '2023',
    title: "During my time as a developer with DepEd Manila, I contribute to the enhancement of educational technology systems, streamlining processes, and improving access to resources for students and educators across the region.",
    icon: '/assets/deped.png',
    animation: 'clapping',
  },
//   {
//     id: 3,
//     name: 'Notion',
//     pos: 'Junior Web Developer',
//     duration: '2019 - 2020',
//     title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
//     icon: '/assets/notion.svg',
//     animation: 'salute',
//   },
];
