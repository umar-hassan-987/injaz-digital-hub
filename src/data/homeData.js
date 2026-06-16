import {
  Monitor,
  Smartphone,
  Database,
  Cloud,
  Cpu,
  BarChart3,
  Zap,
  Search,
  Lightbulb,
  Settings,
  Code,
  Shield,
  Rocket,
  Headphones,
} from 'lucide-react';

// Import testimonial avatars
import jonathanAvatar from '../assets/img/testimonials/jonathan.webp';
import elenaAvatar from '../assets/img/testimonials/elena.webp';
import marcusAvatar from '../assets/img/testimonials/marcus.webp';
import sarahAvatar from '../assets/img/testimonials/sarah.webp';

// ─── Services Data ───
export const services = [
  {
    id: 'webDev',
    icon: Monitor,
    title: 'Web Development',
    description: 'Modern, responsive websites and web applications built with cutting-edge technologies for optimal performance.',
  },
  {
    id: 'mobileApp',
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications designed for seamless user experiences on iOS and Android.',
  },
  {
    id: 'customSoftware',
    icon: Database,
    title: 'Custom Software',
    description: 'Tailored software solutions engineered to solve your unique business challenges and streamline operations.',
  },
  {
    id: 'cloudSolutions',
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure setup, migration, and management on AWS, Azure, and Google Cloud.',
  },
  {
    id: 'aiAutomations',
    icon: Cpu,
    title: 'AI Workflow Automations',
    description: 'Optimizing business operations through intelligent AI-driven workflows and automated processes.',
  },
  {
    id: 'digitalMarketing',
    icon: BarChart3,
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies that amplify your brand presence and drive measurable growth.',
  },
  {
    id: 'uiuxDesign',
    icon: Zap,
    title: 'UI/UX Design',
    description: 'User-centered design that combines aesthetics with functionality to create engaging digital experiences.',
  },
  {
    id: 'seo',
    icon: Search,
    title: 'Search Engine Optimization',
    description: 'Strategic SEO solutions that improve your search rankings, drive organic traffic, and maximize visibility.',
  },
];

// ─── Case Studies / Success Stories Data ───
export const caseStudies = [
  {
    id: 'aiAgents',
    title: 'Autonomous AI Agents',
    client: 'Agentic Systems',
    category: 'Artificial Intelligence',
    description: 'Design and deployment of self-evolving "agentic workflows" that handle complex business logic without manual intervention. Leveraging tools like n8n, Make.com, or custom LLM frameworks to automate lead generation, customer support, and data processing.',
    image: 'automation',
    color: '#0F5F6A',
    impact: '-80% Operational Overhead',
    tech: ['n8n', 'Make.com', 'OpenAI', 'Python'],
  },
  {
    id: 'aiSaaS',
    title: 'AI-Integrated SaaS Platforms',
    client: 'NexaScale',
    category: 'SaaS Development',
    description: 'Building scalable, multi-tenant ecosystems that utilize Large Language Models (LLMs) as a core feature. Architecting high-performance web applications using the MERN stack and Next.js with embedded AI functionalities.',
    image: 'healthcare',
    color: '#157F8E',
    impact: '3x Workflow Acceleration',
    tech: ['MERN', 'Next.js', 'PostgreSQL', 'LangChain'],
  },
  {
    id: 'cloudInfra',
    title: 'Cloud & Serverless Infrastructure',
    client: 'CloudNative',
    category: 'DevOps & Infrastructure',
    description: 'Engineering secure, auto-scaling environments that minimize latency and eliminate server management. Implementing .NET 8 or Node.js microservices on cloud providers for high security.',
    image: 'logistics',
    color: '#D6B874',
    impact: '99.9% Uptime SLA',
    tech: ['.NET 8', 'Node.js', 'AWS', 'Terraform'],
  },
  {
    id: 'fintechEscrow',
    title: 'Fintech & Escrow Ecosystems',
    client: 'TrustFlow',
    category: 'Fintech',
    description: 'Developing high-security financial middleware and complex escrow systems for peer-to-peer and B2B transactions. Creating secure API integrations and multi-layered authentication for platforms.',
    image: 'fintech',
    color: '#0A4048',
    impact: 'Zero Transaction Errors',
    tech: ['Node.js', 'Stripe API', 'OAuth 2.0', 'Redis'],
  },
];

// ─── Stats Data ───
export const stats = [
  { id: 'solutions', number: '100+', label: 'Digital Solutions Deployed' },
  { id: 'retention', number: '98%', label: 'Client Retention Rate' },
  { id: 'users', number: '1M+', label: 'End-Users Reached' },
  { id: 'years', number: '7+', label: 'Years of Excellence' },
];

// ─── Process Steps ───
export const processSteps = [
  {
    id: 'discovery',
    step: '1',
    title: 'Discovery',
    description: 'We dive deep into understanding your business, goals, and target audience to define the project scope.',
    icon: Lightbulb,
  },
  {
    id: 'planning',
    step: '2',
    title: 'Planning & Design',
    description: 'We create wireframes, prototypes, and visual designs that align with your brand and user needs.',
    icon: Settings,
  },
  {
    id: 'development',
    step: '3',
    title: 'Development',
    description: 'Our engineers build your solution using agile methodology with regular updates and milestones.',
    icon: Code,
  },
  {
    id: 'testing',
    step: '4',
    title: 'Testing & QA',
    description: 'We perform rigorous testing and quality assurance to ensure your product is bug-free and performs optimally.',
    icon: Shield,
  },
  {
    id: 'launch',
    step: '5',
    title: 'Launch',
    description: 'Over 500 successful deployments across healthcare, fintech, logistics, and ecommerce, with a 98% client retention rate that speaks for itself.',
    icon: Rocket,
  },
  {
    id: 'support',
    step: '6',
    title: 'Support',
    description: 'We provide ongoing maintenance, monitoring, and technical support to ensure continued product success.',
    icon: Headphones,
  },
];

// ─── Testimonials ───
export const testimonials = [
  {
    id: 'jonathan',
    quote: "INJAZ's ability to translate complex business requirements into a scalable architectural framework was remarkable. They didn't just build an app; they engineered a foundation for our next decade of growth.",
    author: "Jonathan Vance",
    role: "Chief Technology Officer",
    company: "",
    companySlug: "salesforce",
    rating: 5,
    initials: "JV",
    color: "#C9A453",
    image: jonathanAvatar
  },
  {
    id: 'elena',
    quote: "The level of transparency and technical rigor INJAZ brought to our FinTech migration was unparalleled. Their team managed the transition with zero downtime, exceeding every security benchmark we set.",
    author: "Elena Rodriguez",
    role: "VP of Engineering",
    company: "",
    companySlug: "stripe",
    rating: 5,
    initials: "ER",
    color: "#0F5F6A",
    image: elenaAvatar
  },
  {
    id: 'marcus',
    quote: "We've worked with many agencies, but INJAZ is the only one that truly acts as a partner. Their rapid prototyping and iterative delivery allowed us to beat our competitors to market by three months.",
    author: "Marcus Thorne",
    role: "Head of Product",
    company: "",
    companySlug: "fedex",
    rating: 5,
    initials: "MT",
    color: "#0A4048",
    image: marcusAvatar
  },
  {
    id: 'sarah',
    quote: "Digital transformation is often a messy process, but INJAZ's structured methodology made it feel effortless. They revolutionized our patient intake system while maintaining strict HIPAA compliance.",
    author: "Dr. Sarah Chen",
    role: "Medical Director",
    company: "",
    companySlug: "pfizer",
    rating: 5,
    initials: "SC",
    color: "#157F8E",
    image: sarahAvatar
  }
];
