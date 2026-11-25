const translations = {
  navbar: {
    fr: {
      about: "À propos",
      skills: "Compétences",
      projects: "Projets",
      background: "Parcours",
    },
    en: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      background: "Background",
    },
  },

  intro: {
    fr: {
      tag: "Développeur Full Stack",
      sub: "Master 2 Informatique - Université Sorbonne Paris Nord - Parcours Programmation, Sûreté et Sécurité",
      desc: `Futur développeur Full Stack, 
      construire un projet de sa création à sa finalisation est pour moi une source d'apprentissage, 
      ce que je recherche c'est un stage d'une durée de 4 à 6 mois en tant que développeur Full Stack dans une équipe dans laquelle je pourrais apporter ma touche personnelle et pourrais apprendre d'elle`,
      btnCV: "Télécharger mon CV",
      btnProjects: "Voir mes projets",
    },
    en: {
      tag: "Full Stack Developer",
      sub: "Master's in Computer Science (2nd year) - Sorbonne Paris Nord University - Programming, Safety and Security track",
      desc: "Future Full Stack developer, building a project from its creation to its completion is a real source of learning for me. I am looking for a 4 to 6 month internship as a Full Stack developer, in a team where I can bring my own personal touch and learn from others.",
      btnCV: "Download my CV",
      btnProjects: "See my projects",
    },
  },

  projects: {
    fr: [
      {
        title: "Cinelog",
        description:`Projet d'applications de catalogue de films,
        Utilisation de l'API The Movie DataBase (TMDB), 
        création de compte, 
        connexion, déconnexion,
        filtrage des films
        En cours de développement`,
        tags: ["React", "Vite", "CSS"],
        githubUrl: "https://github.com/kuchiro/cinelog",
        demoUrl: "https://portfolio-cinelog.netlify.app",
      },
      {
        title: "Portfolio",
        description:
          "Mon portfolio personnel réalisé avec React, qui regroupe mes compétences, mes projets et mon parcours.",
        tags: ["React", "JavaScript", "CSS", "Vite", "React Router"],
        githubUrl: "https://github.com/kuchiro/portfolio-react",
        demoUrl: "https://portfolio-stephanewu.netlify.app",
      },
      {
        title: "Tenzies",
        description:`Projet d'apprentissage de React sur Scrimba : 
        le jeu Tenzies, un choix entre 4 et 30 dés, avec un timer, 
        un compteur de relances de dés et d'un bouton pause.`,
        tags: ["React", "Vite", "CSS"],
        githubUrl: "https://github.com/kuchiro/tenzies",
        demoUrl: "https://portfolio-tenzies.netlify.app",
      },
      {
        title: "Age Of War",
        description:`Jeu de stratégie développé sous Unity en équipe de 2.
        Jouable dans le navigateur grâce à l'export WebGL.`,
        tags: ["Unity", "C#", "WebGL"],
        githubUrl: "https://github.com/kuchiro/AgeOfWar",
        demoUrl: "https://uspnaow.netlify.app",
      },
      {
        title: "Falling Snake",
        description:`
        Jeu dérivé de Snake développé en Java avec une architecture MVC.
        Rendu jouable dans le navigateur grâce à CheerpJ.`,
        tags: ["Java", "Swing", "MVC", "CheerpJ"],
        githubUrl: "https://github.com/kuchiro/Falling-Snake",
        demoUrl: "https://fallingsnake.netlify.app",
      },
    ],
    en: [
      {
        title: "Portfolio",
        description:
          "My personal portfolio built with React, bringing together my skills, projects and background.",
        tags: ["React", "JavaScript", "CSS", "Vite", "React Router"],
        githubUrl: "https://github.com/kuchiro/portfolio-react",
        demoUrl: "https://portfolio-stephanewu.netlify.app",
      },
      {
        title: "Tenzies",
        description:
          "React learning project from Scrimba: the Tenzies game, extended with a timer, a roll counter and a pause button.",
        tags: ["React", "Vite", "CSS"],
        githubUrl: "https://github.com/kuchiro/tenzies",
        demoUrl: "https://portfolio-tenzies.netlify.app",
      },
      {
        title: "Age Of War",
        description:
          "Strategy game built with Unity in a team of 2.\nPlayable in the browser thanks to the WebGL export.",
        tags: ["Unity", "C#", "WebGL"],
        githubUrl: "https://github.com/kuchiro/AgeOfWar",
        demoUrl: "https://uspnaow.netlify.app",
      },
      {
        title: "Falling Snake",
        description:
          "Snake-inspired game built in Java with an MVC architecture.\nPlayable in the browser thanks to CheerpJ.",
        tags: ["Java", "Swing", "MVC", "CheerpJ"],
        githubUrl: "https://github.com/kuchiro/Falling-Snake",
        demoUrl: "https://fallingsnake.netlify.app",
      },
    ],
  },

  techStack: {
    fr: [
      {
        category: "Frontend",
        techs: [
          { name: "React", icon: "devicon-react-original" },
          { name: "Next.js", icon: "devicon-nextjs-plain" },
          { name: "TypeScript", icon: "devicon-typescript-plain" },
          { name: "JavaScript", icon: "devicon-javascript-plain" },
          { name: "HTML", icon: "devicon-html5-plain" },
          { name: "CSS", icon: "devicon-css3-plain" },
          { name: "Vite", icon: "devicon-vitejs-plain" },
          { name: "React Router", icon: "devicon-reactrouter-plain" },
        ],
      },
      {
        category: "Backend",
        techs: [
          { name: "Node.js", icon: "devicon-nodejs-plain" },
          { name: "Express", icon: "devicon-express-original" },
          { name: "Prisma", icon: "devicon-prisma-original" },
          { name: "Laravel", icon: "devicon-laravel-original" },
          { name: "PHP", icon: "devicon-php-plain" },
          { name: "Spring Boot", icon: "devicon-spring-original" },
          { name: "Java", icon: "devicon-java-plain" },
        ],
      },
      {
        category: "Bases de données",
        techs: [
          { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
          { name: "MySQL", icon: "devicon-mysql-original" },
        ],
      },
      {
        category: "Outils",
        techs: [
          { name: "Git", icon: "devicon-git-plain" },
          { name: "GitHub", icon: "devicon-github-original" },
          { name: "Docker", icon: "devicon-docker-plain" },
          { name: "Vitest", icon: "devicon-vitest-plain" },
          { name: "Vercel", icon: "devicon-vercel-original" },
          { name: "Netlify", icon: "devicon-netlify-plain" },
        ],
      },
      {
        category: "Jeu vidéo & autres langages",
        techs: [
          { name: "Unity", icon: "devicon-unity-plain" },
          { name: "C#", icon: "devicon-csharp-plain" },
          { name: "Python", icon: "devicon-python-plain" },
          { name: "C", icon: "devicon-c-plain" },
          { name: "OCaml", icon: "devicon-ocaml-plain" },
        ],
      },
    ],
    en: [
      {
        category: "Frontend",
        techs: [
          { name: "React", icon: "devicon-react-original" },
          { name: "Next.js", icon: "devicon-nextjs-plain" },
          { name: "TypeScript", icon: "devicon-typescript-plain" },
          { name: "JavaScript", icon: "devicon-javascript-plain" },
          { name: "HTML", icon: "devicon-html5-plain" },
          { name: "CSS", icon: "devicon-css3-plain" },
          { name: "Vite", icon: "devicon-vitejs-plain" },
          { name: "React Router", icon: "devicon-reactrouter-plain" },
        ],
      },
      {
        category: "Backend",
        techs: [
          { name: "Node.js", icon: "devicon-nodejs-plain" },
          { name: "Express", icon: "devicon-express-original" },
          { name: "Prisma", icon: "devicon-prisma-original" },
          { name: "Laravel", icon: "devicon-laravel-original" },
          { name: "PHP", icon: "devicon-php-plain" },
          { name: "Spring Boot", icon: "devicon-spring-original" },
          { name: "Java", icon: "devicon-java-plain" },
        ],
      },
      {
        category: "Databases",
        techs: [
          { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
          { name: "MySQL", icon: "devicon-mysql-original" },
        ],
      },
      {
        category: "Tools",
        techs: [
          { name: "Git", icon: "devicon-git-plain" },
          { name: "GitHub", icon: "devicon-github-original" },
          { name: "Docker", icon: "devicon-docker-plain" },
          { name: "Vitest", icon: "devicon-vitest-plain" },
          { name: "Vercel", icon: "devicon-vercel-original" },
          { name: "Netlify", icon: "devicon-netlify-plain" },
        ],
      },
      {
        category: "Game dev & other languages",
        techs: [
          { name: "Unity", icon: "devicon-unity-plain" },
          { name: "C#", icon: "devicon-csharp-plain" },
          { name: "Python", icon: "devicon-python-plain" },
          { name: "C", icon: "devicon-c-plain" },
          { name: "OCaml", icon: "devicon-ocaml-plain" },
        ],
      },
    ],
  },

  background: {
    fr: [
      {
        type: "education",
        title: "Master 2 Informatique - Programmation, Sûreté et Sécurité",
        place: "Université Sorbonne Paris Nord",
        date: "2025 – 2027",
      },
      {
        type: "work",
        side: "right",
        title: "Employé polyvalent",
        place: "Bureau de tabac - Puteaux",
        date: "Mai 2026 – Septembre 2026",
        desc: "Accueil et conseil client, encaissement, gestion des stocks, service en brasserie.\nAutonomie et travail en équipe dans un commerce à fort passage.",
      },
      {
        type: "work",
        side: "left",
        title: "Employé polyvalent",
        place: "Bureau de tabac - Stains",
        date: "Avril 2025 – Septembre 2025",
        desc: "Accueil et conseil client, encaissement, gestion des stocks.",
      },
      {
        type: "education",
        title: "Master 1 Informatique",
        place: "Université Sorbonne Paris Nord",
        date: "2024 – 2025",
      },
      {
        type: "work",
        side: "right",
        title: "Stage de recherche",
        place: "Laboratoire - INRIA - Lille",
        date: "Juin 2024 – Août 2024",
        desc: "Développement et évaluation de techniques de sélection de cibles en réalité augmentée.\nImplémentation sous Unity pour HoloLens 2.\nAdaptation et amélioration de techniques existantes.",
      },
      {
        type: "education",
        title: "Master 1 - Réalité Virtuelle et Augmentée",
        place: "Université de Lille",
        date: "2023 – 2024",
      },
    ],
    en: [
      {
        type: "education",
        title: "Master's in Computer Science (2nd year) - Programming, Safety and Security",
        place: "Sorbonne Paris Nord University",
        date: "2025 – 2027",
      },
      {
        type: "work",
        side: "right",
        title: "Sales assistant",
        place: "Tobacco shop - Puteaux",
        date: "May 2026 – September 2026",
        desc: "Customer service, checkout, stock management, bar service.\nAutonomy and teamwork in a busy shop.",
      },
      {
        type: "work",
        side: "left",
        title: "Sales assistant",
        place: "Tobacco shop - Stains",
        date: "April 2025 – September 2025",
        desc: "Customer service, checkout, stock management.",
      },
      {
        type: "education",
        title: "Master's in Computer Science (1st year)",
        place: "Sorbonne Paris Nord University",
        date: "2024 – 2025",
      },
      {
        type: "work",
        side: "right",
        title: "Research internship",
        place: "Laboratory - INRIA - Lille",
        date: "June 2024 – August 2024",
        desc: "Development and evaluation of target selection techniques in augmented reality.\nImplementation in Unity for HoloLens 2.\nAdaptation and improvement of existing techniques.",
      },
      {
        type: "education",
        title: "Master's (1st year) - Virtual and Augmented Reality",
        place: "University of Lille",
        date: "2023 – 2024",
      },
    ],
  },

  sections: {
    fr: {
      skills: "Compétences",
      projects: "Mes projets",
      background: "Parcours",
      demo: "Voir la démo",
    },
    en: {
      skills: "Skills",
      projects: "My projects",
      background: "Background",
      demo: "Live demo",
    },
  },

  footer: {
    fr: {
      role: "Développeur Full Stack",
      rights: "Tous droits réservés.",
    },
    en: {
      role: "Full Stack Developer",
      rights: "All rights reserved.",
    },
  },
};

export default translations;
