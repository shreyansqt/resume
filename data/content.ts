export const contentData = [
  {
    title: "Work Experience",
    items: [
      {
        title: "Senior Software Developer (VueJS)",
        subTitle: "One Data GmbH, Remote (from Berlin, Germany)",
        date: `Aug 2021 - Nov 2023
2 yrs 4 mos`,
        description: `🧑🏾‍💻 New green-field project (March 2023 - Present)
- Lead the frontend development using modern stack such as Vue 3, TypeScript, Pinia, Vuetify, etc.
- Challenge designers and product manager helping refine user stories
- Organise user stories into smaller subtasks initiating kick-off by doing API-contracts with backend developers
- Develop UI component library for new Design System from scratch

🧑🏾‍💻 Data Cartography Map Custom Component (Aug 2021 - February 2023)
- Develop SVG-based interactive map showcasing data assets as nodes, and clustering them based on hierarchy
- Improve rendering & interaction performance to ensure visibility of 10,000+ nodes in one viewport.
- Mentor junior developers and onboard new principal developers on the huge code base
- Maintain & upgrade existing UI component library used by multiple teams across the company

💡 Key achievement: Alongside learning a new framework, i.e VueJS, I learnt many mentorship & self-organisation skills, while delivering high-quality code.`,
      },
      {
        title: "Senior Software Engineer (ReactJS)",
        subTitle: "Makers' Den GmbH, Berlin, Germany",
        date: `Aug 2019 - Jul 2021
2 yrs`,
        description: `- Implement web apps & websites for various clients while learning latest technologies like TypeScript, GraphQL, Gatsby, NextJS, Tailwind & Cypress
- Be a part of multicultural teams at client companies, including OLX Group & FRI:DAY

💡 Key achievement: Transformed from front-end to full-stack engineer while attaining more responsibilities.
`,
      },
      {
        title: "Frontend Engineer (ReactJS)",
        subTitle: "Modifi GmbH, Berlin, Germany",
        date: `Sep 2018 - Jul 2019
11 mos`,
        description: `- Implement & maintain ReactJS micro-services for user-facing & internal web apps
- Revamp company's latest responsive website based on ReactJS focussing on performance optimisations & reducing load times
- Participate in product planning, helping define complicated features facilitating financial transactions between international traders

💡 Key Achievement: Learnt Redux state management while managing huge codebase split into 6 micro-services & 5+ component / helper libraries. Collaborated with junior & lead front-end engineers`,
      },
      {
        title: "Front End Developer (ReactJS)",
        subTitle: "sloppy.io, Remote (from Delhi, India)",
        date: `Aug 2016 - Jul 2018
2 yrs`,
        description: `- Overhauled the user interface for sloppy.io's ReactJS web app. Developed new features & improved the app by continuously fixing bugs. Constructed intricate & flexible UI components accompanying custom BEM SASS
- Established sloppy.io's latest Wordpress-based responsive website with focussing on regular Git backups using WP-CLI
- Constructed wao.io's website and revamped their web app based on ReactJS

💡 Key Achievement: Learnt & gained expertise in ReactJS, while managing huge frontend codebase used by 180+ paying customers`,
      },
      {
        title: "Front End Developer (AngularJS & NodeJS)",
        subTitle: "Designori, LLC, Remote (while exploring India)",
        date: `May 2015 - Jul 2016
1 yr 3 mos`,
        description: `- Developed a Learning Management System (for Cirrus Aircrafts) using AngularJS, SASS,
        Bootstrap 3 & NodeJS
- Enhanced my skill set in MEAN Stack & SASS developing eCommerce & Knowledge Base solutions for other company clients

💡 Key Achievement: Refined skills in Vanilla JavaScript & MVC frameworks, while developing full-stack JS web apps`,
      },
      {
        title: "Freelance Front End Developer",
        subTitle: "YourStory Media Pvt. Ltd., Remote (while exploring India)",
        date: `Feb 2015 - Jun 2015
5 mos`,
        description: `- Developed a multi-lingual user-curated stories web app using HTML5, SASS, Bootstrap3,jQuery & jQuery plugins
- Created a single page responsive website using HTML5, SASS & Bootstrap 3

💡 Key Achievement: Shifted from at-location to remote work gaining helpful self-starter skills`,
      },
      {
        title: "Web Designer & Developer",
        subTitle:
          "Pipemonk (formerly ZapStitch) Technologies Pvt. Ltd., Bangalore, India",
        date: `Jul 2014 - Dec 2014
6 mos`,
        description: `- Designed conversion-centric website & landing pages. Converted them to code using HTML5, CSS3 & Bootstrap 3
- Designed a user-centric web app with focus on reduced clicks for creating an integration between 2 SAAS apps. Developed the same using HTML5, SASS & jQuery

💡 Key Achievement: Transformed from Web Designer to Front end Developer while working at a fast-paced startup`,
      },
    ],
  },
  {
    title: "Education",
    items: [
      {
        title: "Certification in Graphic & Web Design",
        subTitle: "Arena Animation (Aptech Learning), New Delhi",
        date: "2014 - 2014",
        description: `- Languages: HTML5, CSS3, Javascript & jQuery
- Softwares: Adobe Creative Suite
- Awarded 1st prize in inter-college web development competition, ArtFest 2014`,
      },
      {
        title: "Bachelor's Degree in Mechanical & Automation Engineering",
        subTitle: "Maharaja Agrasen Institute of Technology, Delhi",
        date: "2010 - 2014",
        description: `- Actively participated in cultural events
- Received industrial training at ATM Automann Pvt. Ltd.
- Constructed a petrol car as final year project in a team of 5`,
      },
    ],
  },
  //   @NOTE: You can add more sections here
  //   {
  //     title: "Projects",
  //     items: [
  //       {
  //         title: "Project 1",
  //         subTitle: "Sub Title",
  //         date: "2015 - 2016",
  //         description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
  //       },
  //     ],
  //   },
];

export type Content = {
  title: string;
  items: {
    title: string;
    subTitle: string;
    date: string;
    description: string;
  }[];
};

export type ContentData = Content[];
