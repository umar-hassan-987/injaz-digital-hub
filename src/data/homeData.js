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
    icon: Monitor,
    title: 'Web Development',
    description: 'Modern, responsive websites and web applications built with cutting-edge technologies for optimal performance.',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications designed for seamless user experiences on iOS and Android.',
  },
  {
    icon: Database,
    title: 'Custom Software',
    description: 'Tailored software solutions engineered to solve your unique business challenges and streamline operations.',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure setup, migration, and management on AWS, Azure, and Google Cloud.',
  },
  {
    icon: Cpu,
    title: 'AI Workflow Automations',
    description: 'Optimizing business operations through intelligent AI-driven workflows and automated processes.',
  },
  {
    icon: BarChart3,
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies that amplify your brand presence and drive measurable growth.',
  },
  {
    icon: Zap,
    title: 'UI/UX Design',
    description: 'User-centered design that combines aesthetics with functionality to create engaging digital experiences.',
  },
  {
    icon: Search,
    title: 'Search Engine Optimization',
    description: 'Strategic SEO solutions that improve your search rankings, drive organic traffic, and maximize visibility.',
  },
];

// ─── Case Studies / Success Stories Data ───
export const caseStudies = [
  {
    title: 'Autonomous AI Agents',
    client: 'Agentic Systems',
    category: 'Artificial Intelligence',
    description: 'Design and deployment of self-evolving "agentic workflows" that handle complex business logic without manual intervention. Leveraging tools like n8n, Make.com, or custom LLM frameworks to automate lead generation, customer support, and data processing.',
    image: 'automation',
    color: '#8B1A4A',
    impact: '-80% Operational Overhead',
    tech: ['n8n', 'Make.com', 'OpenAI', 'Python'],
  },
  {
    title: 'AI-Integrated SaaS Platforms',
    client: 'NexaScale',
    category: 'SaaS Development',
    description: 'Building scalable, multi-tenant ecosystems that utilize Large Language Models (LLMs) as a core feature. Architecting high-performance web applications using the MERN stack and Next.js with embedded AI functionalities.',
    image: 'healthcare',
    color: '#4ECDC4',
    impact: '3x Workflow Acceleration',
    tech: ['MERN', 'Next.js', 'PostgreSQL', 'LangChain'],
  },
  {
    title: 'Cloud & Serverless Infrastructure',
    client: 'CloudNative',
    category: 'DevOps & Infrastructure',
    description: 'Engineering secure, auto-scaling environments that minimize latency and eliminate server management. Implementing .NET 8 or Node.js microservices on cloud providers for high security.',
    image: 'logistics',
    color: '#FF8C42',
    impact: '99.9% Uptime SLA',
    tech: ['.NET 8', 'Node.js', 'AWS', 'Terraform'],
  },
  {
    title: 'Fintech & Escrow Ecosystems',
    client: 'TrustFlow',
    category: 'Fintech',
    description: 'Developing high-security financial middleware and complex escrow systems for peer-to-peer and B2B transactions. Creating secure API integrations and multi-layered authentication for platforms.',
    image: 'fintech',
    color: '#A78BFA',
    impact: 'Zero Transaction Errors',
    tech: ['Node.js', 'Stripe API', 'OAuth 2.0', 'Redis'],
  },
];

// ─── Stats Data ───
export const stats = [
  { number: '100+', label: 'Digital Solutions Deployed' },
  { number: '98%', label: 'Client Retention Rate' },
  { number: '1M+', label: 'End-Users Reached' },
  { number: '7+', label: 'Years of Excellence' },
];

// ─── Process Steps ───
export const processSteps = [
  {
    step: '1',
    title: 'Discovery',
    description: 'We dive deep into understanding your business, goals, and target audience to define the project scope.',
    icon: Lightbulb,
  },
  {
    step: '2',
    title: 'Planning & Design',
    description: 'We create wireframes, prototypes, and visual designs that align with your brand and user needs.',
    icon: Settings,
  },
  {
    step: '3',
    title: 'Development',
    description: 'Our engineers build your solution using agile methodology with regular updates and milestones.',
    icon: Code,
  },
  {
    step: '4',
    title: 'Testing & QA',
    description: 'We perform rigorous testing and quality assurance to ensure your product is bug-free and performs optimally.',
    icon: Shield,
  },
  {
    step: '5',
    title: 'Launch',
    description: 'Over 500 successful deployments across healthcare, fintech, logistics, and ecommerce, with a 98% client retention rate that speaks for itself.',
    icon: Rocket,
  },
  {
    step: '6',
    title: 'Support',
    description: 'We provide ongoing maintenance, monitoring, and technical support to ensure continued product success.',
    icon: Headphones,
  },
];

// ─── Testimonials ───
export const testimonials = [
  {
    quote: "ENJAZ's ability to translate complex business requirements into a scalable architectural framework was remarkable. They didn't just build an app; they engineered a foundation for our next decade of growth.",
    author: "Jonathan Vance",
    role: "Chief Technology Officer",
    company: "",
    companySlug: "salesforce",
    rating: 5,
    initials: "JV",
    color: "#00A1E0",
    image: jonathanAvatar
  },
  {
    quote: "The level of transparency and technical rigor ENJAZ brought to our FinTech migration was unparalleled. Their team managed the transition with zero downtime, exceeding every security benchmark we set.",
    author: "Elena Rodriguez",
    role: "VP of Engineering",
    company: "",
    companySlug: "stripe",
    rating: 5,
    initials: "ER",
    color: "#635BFF",
    image: elenaAvatar
  },
  {
    quote: "We've worked with many agencies, but ENJAZ is the only one that truly acts as a partner. Their rapid prototyping and iterative delivery allowed us to beat our competitors to market by three months.",
    author: "Marcus Thorne",
    role: "Head of Product",
    company: "",
    companySlug: "fedex",
    rating: 5,
    initials: "MT",
    color: "#4D148C",
    image: marcusAvatar
  },
  {
    quote: "Digital transformation is often a messy process, but ENJAZ's structured methodology made it feel effortless. They revolutionized our patient intake system while maintaining strict HIPAA compliance.",
    author: "Dr. Sarah Chen",
    role: "Medical Director",
    company: "",
    companySlug: "pfizer",
    rating: 5,
    initials: "SC",
    color: "#0070BF",
    image: sarahAvatar
  }
];
