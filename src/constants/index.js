import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
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
  card1,
  card5,
  card4,
  card3,
  card2,
  card6,
  serverless,
  sourceControl,
  MySql,
  mongodb,
  redis,
  cloudStorage,
  ssl,
  domain
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "#hero",
  },
  {
    id: "1",
    title: "About Us",
    url: "#Aboutus",
  },
  {
    id: "2",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "3",
    title: "Docs",
    url: "#Docs",
  },
  {
    id: "4",
    title: "Support",
    url: "#Support",
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];



export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "All-in-One Cloud Solutions",
    text: "We provide end-to-end cloud services, eliminating the need to juggle multiple vendors. Simplify your operations with our seamless, unified solutions.",
  },
  {
    id: "1",
    title: "Zero Infrastructure Hassles",
    text: "Focus on innovation while we handle the infrastructure. No more maintenance headaches or downtime worries—just smooth operations every step of the way.",
  },
  {
    id: "2",
    title: "24/7 DevOps Assistance",
    text: "Get expert DevOps support around the clock. We ensure your services run smoothly with proactive monitoring and swift issue resolution.",
  },
  {
    id: "3",
    title: "Quick & Easy Onboarding",
    text: "Launch your projects faster with our intuitive setup process. No steep learning curve—just a smooth start to your cloud journey.",
  },
  {
    id: "4",
    title: "Built for Scalability",
    text: "Scale effortlessly as your business grows. Our cloud solutions adapt to your needs, ensuring high performance, even during peak demand.",
  },
  {
    id: "5",
    title: "Seamless Migration",
    text: "Easily migrate from your current setup to our cloud platform with minimal disruption, ensuring a smooth transition without downtime.",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "LaunchPad ",
    description:
      "Perfect for startups and testing environments get started quickly with minimal resources and full flexibility.",
    price: "27",
    features: [
      "Ideal for Dev and QA Environments",
      "Streamlined Infrastructure Setup Saves Developer Time",
      "Simply Git Push to Launch Your Service Instantly",
    ],
  },
  {
    id: "1",
    title: "Skyline",
    description:
      "Scale your business to new heights with robust, enterprise-grade microservice deployments tailored for growing needs.",
    price: "400",
    features: [
      "Round-the-Clock DevOps Support",
      "99.9% SLA Guarantee for Reliability",
      "Infinitely Scalable Solutions for Growing Needs",
    ],
  },
  {
    id: "2",
    title: "Cloud Commander",
    description:
      "Retain full control over your cloud infrastructure with our BYOC (Bring your own cloud) solution, empowering you to command your own cloud ecosystem.",
    price: null,
    features: [
      "Comprehensive Cloud Management for You",
      "Enhanced Performance Optimizations Tailored to Your Needs",
      "Effective Cost Optimizations to Maximize Savings",
      "Disaster-Resilient Systems for Uninterrupted Operations"
    ],
  },
];

export const pricingComparison = [
  {
    id: "0",
    feature: "24/7 Support",
    LaunchPad: "No",
    Skyline: "Yes",
    CloudCommander: "Yes",
    tooltip:
      "Whether round-the-clock customer and technical support is available.",
  },
  {
    id: "2",
    feature: "Highly Scalable",
    LaunchPad: "No",
    Skyline: "Yes",
    CloudCommander: "Yes",
    tooltip:
      "Indicates if the service can scale to handle growing needs without limitations.",
  },
  {
    id: "5",
    feature: "Custom Domain Support",
    LaunchPad: "No",
    Skyline: "Yes",
    CloudCommander: "Yes",
    tooltip: "Whether you can use a custom domain with the plan.",
  },
  {
    id: "1",
    feature: "SLA",
    LaunchPad: "90%",
    Skyline: "99.9%",
    CloudCommander: "99.9%",
    tooltip:
      "Service Level Agreement defines guaranteed uptime for the services.",
  },

  {
    id: "3",
    feature: "Deployment Speed",
    LaunchPad: "Medium",
    Skyline: "Fast",
    CloudCommander: "Customizable",
    tooltip: "The time it takes to deploy applications using the plan.",
  },
  {
    id: "4",
    feature: "Disaster Recovery",
    LaunchPad: "Basic",
    Skyline: "Advanced",
    CloudCommander: "Custom Recovery Plans",
    tooltip:
      "The level of disaster recovery options available to prevent data loss.",
  },

  {
    id: "6",
    feature: "Performance Monitoring",
    LaunchPad: "Limited",
    Skyline: "Full Monitoring",
    CloudCommander: "Tailored Monitoring",
    tooltip:
      "The extent of performance monitoring services provided with the plan.",
  },
  {
    id: "7",
    feature: "Third-Party Integrations",
    LaunchPad: "Limited",
    Skyline: "Extensive",
    CloudCommander: "Fully Customizable",
    tooltip: "Availability of integration with third-party services and APIs.",
  },
  {
    id: "8",
    feature: "Data Backup Frequency",
    LaunchPad: "Weekly",
    Skyline: "Daily",
    CloudCommander: "Hourly or Custom",
    tooltip: "The frequency at which data is backed up for recovery purposes.",
  },
];


export const discountpercentage=17.5;

export const benefits = [
  {
    id: "0",
    title: "Serverless Deployments",
    text: " Effortlessly deploy and scale applications without managing infrastructure, optimizing performance and reducing costs with serverless architecture.",
    backgroundUrl: card1,
    iconUrl: "fa-brands fa-git-alt",
    bgcolor: "#3acfff",
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Source Control Repository",
    text: "Securely manage your code with integrated version control, enabling collaboration, automated workflows, and continuous delivery.",
    backgroundUrl: card2,
    iconUrl: "fa-brands fa-git-alt",
    imageUrl: benefitImage2,
    bgcolor: "#ffca7b",
    light: true,
  },
  {
    id: "2",
    title: "SQL Databases",
    text: "Scalable, managed MySQL and Postgres databases with automatic backups, high availability, and strong security for reliable data management.",
    backgroundUrl: card3,
    iconUrl: "fa-solid fa-database",
    bgcolor: "#d986ee",
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "MongoDB",
    text: "Easily manage unstructured data with MongoDB, offering high performance, scalability, and flexibility for modern applications.",
    backgroundUrl: card4,
    iconUrl: "fa-regular fa-file-code",
    imageUrl: benefitImage2,
    bgcolor: "#b9ef81",
    light: true,
  },
  {
    id: "4",
    title: "Redis",
    text: "Supercharge your application’s performance with Redis, providing lightning-fast caching and real-time data processing.",
    backgroundUrl: card5,
    iconUrl: "fa-solid fa-server",
    bgcolor: " #ef9480",
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Object Storage",
    text: "Secure and scalable object storage for unstructured data, ideal for backups, media files, and large datasets.",
    backgroundUrl: card6,
    iconUrl: "fa-solid fa-file",
    bgcolor: "#8198ef",
    imageUrl: benefitImage2,
  },
  {
    id: "6",
    title: "Observability",
    text: "Gain deep insights into your infrastructure and applications with real-time monitoring, logging, and analytics for proactive management.",
    backgroundUrl: card1,
    iconUrl: "fa-solid fa-chart-line",
    bgcolor: "#3acfff",
    imageUrl: benefitImage2,
  },
  {
    id: "7",
    title: "Alerting",
    text: "Stay informed with real-time alerts and uptime checks for critical services, ensuring swift resolution to maintain uptime and performance.",
    backgroundUrl: card2,
    iconUrl: "fa-solid fa-bell",
    imageUrl: benefitImage2,
    bgcolor: "#ffca7b",
    light: true,
  },
  {
    id: "8",
    title: "APM",
    text: "Monitor, optimize, and troubleshoot application performance with detailed metrics, ensuring seamless user experiences.",
    backgroundUrl: card3,
    iconUrl: "fa-solid fa-bug",
    bgcolor: "#d986ee",
    imageUrl: benefitImage2,
  },
  {
    id: "9",
    title: "SSL Certificates",
    text: "SProtect your website and data with SSL certificates, ensuring secure, encrypted connections for your users.",
    backgroundUrl: card4,
    iconUrl: "fa-brands fa-expeditedssl",
    bgcolor: "#b9ef81",
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "10",
    title: "Custom Domain",
    text: "Set up professional, branded custom domains with ease, enhancing your online presence and user trust.",
    backgroundUrl: card5,
    iconUrl: "fa-solid fa-xmarks-lines",
    bgcolor: "#ef9480",
    imageUrl: benefitImage2,
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

export const webintroduction = {
  heading: "Code your best We'll handle the rest.",
  description: "loremepsum text",
  subheading:
    "Comprehensive cloud and infrastructure solutions for startups. We handle all your cloud, DevOps, and infrastructure needs, letting you concentrate on what matters most—building your business.",
};

export const testimonials = [
  {
    id: 1,
    text: "This service has been a game-changer for my business. The team provided expert support and guidance that helped us scale quickly and efficiently.",
    name: "David Chen",
    title: "Engineer",
    imageUrl: "https://via.placeholder.com/150", // Replace with actual image link
  },
  {
    id: 2,
    text: "Their cloud and DevOps support allowed us to focus on our core business while they handled all infrastructure needs seamlessly.",
    name: "Sarah Johnson",
    title: "CTO",
    imageUrl: "https://via.placeholder.com/150", // Replace with actual image link
  },
  {
    id: 3,
    text: "I highly recommend this team for any startup looking to optimize their cloud infrastructure and streamline operations.",
    name: "Michael Smith",
    title: "Founder",
    imageUrl: "https://via.placeholder.com/150", // Replace with actual image link
  },
];


export const faqData = [
  {
    id:0,
    question: "What services do you offer?",
    answer:
      "We offer comprehensive cloud and DevOps solutions tailored for startups and enterprises. Our services include cloud infrastructure setup, deployment support, monitoring, disaster recovery, and ongoing maintenance.",
  },
  {
    id:1,
    question: "Can I use my own cloud provider?",
    answer:
      "Yes, with our 'Cloud Commander' plan, you can bring your own cloud (BYOC) and retain full control over your cloud infrastructure, while we handle the optimization and management.",
  },
  {
    id:2,
    question: "Do you provide 24/7 support?",
    answer:
      "Yes, our 'Skyline' and 'Cloud Commander' plans come with round-the-clock support to ensure your systems are running smoothly and any issues are addressed promptly.",
  },
  {
    id:3,
    question: "What is the difference between the pricing plans?",
    answer:
      "We offer three pricing plans: 'LaunchPad' for startups and testing environments, 'Skyline' for scaling businesses, and 'Cloud Commander' for customized, enterprise-level solutions. Each plan is designed to fit different needs and budgets.",
  },
  {
    id:4,
    question: "How can I get started?",
    answer:
      "Getting started is easy! Just reach out to us via our contact form or schedule a consultation. We’ll help assess your needs and recommend the best plan to kickstart your cloud journey.",
  },
];
