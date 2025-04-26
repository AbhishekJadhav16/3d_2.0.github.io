import { meta, shopify, starbucks, tesla } from "../assets/images";
import Amazon_logo from '../assets/icons/Amazon_logo.png'; // adjust path based on your project structure
import cybage from '../assets/icons/cybage.png';
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Devops Engineer",
        company_name: "Cybage",  
        icon: cybage,
        iconBg: "#accbe1",
        date: "JAN 2022 – PRESENT",
        points: [
            "Installed, configured, and managed Red Hat OpenShift clusters, ensuring scalability, high availability, and optimal performance.",
            "Performed cluster initialization, networking setup, and managed nodes, pods, and other resources to support application deployments.",
            "Deployed and managed containerized applications using OpenShift Operators and Helm charts for streamlined operations.",
            "Implemented role-based access control (RBAC) to enforce security policies and manage user access effectively.",
            "Ensured compliance and vulnerability management by integrating tools like Trivy, Snyk, and SonarQube into DevSecOps pipelines.",
            "Monitored cluster health and application performance using OpenShift monitoring tools, including Prometheus and Grafana.",
            "Built custom dashboards for tools like Trivy to enhance vulnerability tracking and reporting.",
            "Automated build, test, and deployment processes using Jenkins with master-slave configurations and customized build jobs.",
            "Designed and implemented CI/CD pipelines using Jenkins, Docker, and Amazon S3 for efficient artifact storage and deployment.",
            "Configured and deployed GitLab CI/CD pipelines using GitLab Runner and GitHub Actions pipelines using GitHub Runner.",
            "Migrated CI/CD pipelines, including transitions from GitHub to GitLab and CircleCI to GitHub Actions.",
            "Integrated JFrog Artifactory with tools like Jenkins for seamless artifact management.",
            "Optimized development workflows by implementing best practices in DevOps and DevSecOps across multiple projects.",
            "Delivered comprehensive training programs on ALM tools such as Jira, Confluence, Maven, SonarQube, Jenkins, GitHub, and GitLab to both freshers and experienced professionals.",
            "Developed a centralized training website to manage resources like presentations, notes, bookmarks, calendars, and other training materials."
        ],        
    },
    {
        title: "Customer Service Associate",
        company_name: "Amazon",
        icon: Amazon_logo,
        iconBg: "#b7e4c7",
        date: "June 2018 - May 2021",
        points: [
            "Provided end-to-end technical and non-technical support across multiple regions (North America, Canada, India), building strong problem-solving and communication skills.",
            "Supported diverse platforms including live chat, email, and voice, gaining hands-on experience with ticketing systems, SLA adherence, and multi-channel workflows.",
            "Recognized with 'Customer Obsession', 'Super-Hit', and 'Mega-Hit' awards for delivering consistent, high-quality support experiences.",
            "Completed ACES Stage 1 and 2 certifications, demonstrating data-driven process improvement and operational excellence.",
            "Acted as a Subject Matter Expert (SME), mentoring new associates, troubleshooting escalations, and collaborating cross-functionally—skills directly applicable to Agile/DevOps environments.",
          ]          
    },
    // {
    //     title: "Web Developer",
    //     company_name: "Shopify",
    //     icon: shopify,
    //     iconBg: "#b7e4c7",
    //     date: "Jan 2022 - Jan 2023",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#a2d2ff",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];

