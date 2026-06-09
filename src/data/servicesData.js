import {
  Monitor,
  Smartphone,
  Database,
  Cloud,
  Cpu,
  Layers,
  Palette,
  Layout,
  TrendingUp,
  Globe,
  Zap,
  Shield,
  Brain,
  MessageSquare,
  Users,
  BarChart3,
  Code,
  Settings,
} from 'lucide-react';

// ─── Services Detail Data ───
export const servicesDetail = {
  'mobile-apps': {
    slug: 'mobile-apps',
    title: 'Mobile App Development',
    headline: 'Engineering High-Performance Mobile Ecosystems',
    description: 'We build native and cross-platform mobile applications that combine fluid performance with intuitive design. Our mobile solutions are engineered to scale, reaching millions of users while maintaining enterprise-grade security.',
    icon: Smartphone,
    color: '#0d9488',
    category: 'Application Development',
    subServices: [
      { title: 'iOS Development', description: 'Native iPhone and iPad apps built with Swift and SwiftUI.' },
      { title: 'Android Development', description: 'High-performance Android apps developed using Kotlin.' },
      { title: 'Cross-Platform', description: 'Code-efficient solutions using Flutter and React Native.' },
      { title: 'Wearables & IoT', description: 'Extending mobile experiences to Apple Watch and smart devices.' }
    ],
    features: [
      { title: 'Native Performance', description: 'Optimized code for smooth 60fps interactions and rapid load times.', icon: Zap },
      { title: 'Offline First', description: 'Robust data synchronization for seamless usage without connectivity.', icon: Database },
      { title: 'Biometric Security', description: 'Integrated FaceID, Fingerprint, and high-level data encryption.', icon: Shield },
      { title: 'Cloud Sync', description: 'Real-time database integration for cross-device consistency.', icon: Cloud },
    ],
    techStack: ['Swift', 'Kotlin', 'Flutter', 'React Native', 'Firebase', 'GraphQL'],
    stats: [
      { number: '150+', label: 'Apps Launched' },
      { number: '4.9★', label: 'App Store Rating' },
      { number: '10M+', label: 'Total Downloads' },
    ],
    whyUs: [
      { title: 'Device Excellence', description: 'Comprehensive testing on 50+ physical devices to ensure flawless performance.' },
      { title: 'User-Centric UX', description: 'Interfaces engineered for one-handed ergonomics and rapid task completion.' },
      { title: 'App Store Experts', description: '100% success rate for complex Apple App Store and Google Play submissions.' },
      { title: 'Secure Architecture', description: 'Enterprise-grade encryption and biometric authentication integrated by default.' }
    ],
    process: [
      { title: 'Discovery', description: 'Defining your user personas and core feature priority.' },
      { title: 'Design', description: 'Creating high-fidelity prototypes that feel like the real app.' },
      { title: 'Build', description: 'Native development with clean, scalable, and secure code.' },
      { title: 'Launch', description: 'Managing the complex submission and rollout process.' }
    ],
  },
  'web-development': {
    slug: 'web-development',
    title: 'Web App Development',
    headline: 'Modern Web Architectures for Global Scale',
    description: 'From complex enterprise dashboards to high-conversion customer portals, we engineer web applications that are fast, secure, and fully responsive. Our stack is chosen for speed and long-term maintainability.',
    icon: Monitor,
    color: '#6B1538',
    category: 'Application Development',
    subServices: [
      { title: 'Single Page Apps (SPA)', description: 'Fast, fluid web experiences built with React and Next.js.' },
      { title: 'Enterprise Dashboards', description: 'Complex data visualization and management systems.' },
      { title: 'Progressive Web Apps', description: 'Websites that look and feel like native mobile apps.' },
      { title: 'Headless Architectures', description: 'Decoupled frontend/backend for maximum flexibility.' }
    ],
    features: [
      { title: 'SEO Optimized', description: 'SSR and static generation for peak search engine performance.', icon: Globe },
      { title: 'Real-time Updates', description: 'Websocket integration for live data and collaboration.', icon: Zap },
      { title: 'Scalable Hosting', description: 'Edge deployment on Vercel and AWS for global speed.', icon: Cloud },
      { title: 'API Integration', description: 'Seamless connection with your existing software ecosystem.', icon: Layers },
    ],
    techStack: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind', 'PostgreSQL'],
    stats: [
      { number: '300+', label: 'Web Platforms' },
      { number: '99.9%', label: 'Uptime SLA' },
      { number: '40%', label: 'Efficiency Gain' },
    ],
    whyUs: [
      { title: 'Modern Stack', description: 'Utilizing Next.js and React for sub-second transitions and optimal performance.' },
      { title: 'SEO Optimized', description: 'Every architectural choice is vetted for search engine dominance from day one.' },
      { title: 'Edge Deployment', description: 'Global CDN distribution ensuring lightning-fast load times for all users.' },
      { title: 'Scalable Core', description: 'Modular backend architectures designed to handle millions of concurrent requests.' }
    ],
    process: [
      { title: 'Strategy', description: 'Mapping out user journeys and technical requirements.' },
      { title: 'Architecture', description: 'Designing a database and API structure that scales.' },
      { title: 'Engineering', description: 'Building the frontend and backend in rapid agile sprints.' },
      { title: 'Optimization', description: 'Stress testing and performance tuning for launch.' }
    ],
  },
  'custom-software': {
    slug: 'custom-software',
    title: 'Custom Software Development',
    headline: 'Tailored Software Engineered for Your Unique Workflows',
    description: 'Off-the-shelf software often creates bottlenecks. We build bespoke software solutions that map perfectly to your business processes, eliminating manual tasks and driving operational efficiency.',
    icon: Database,
    color: '#4f46e5',
    category: 'Application Development',
    subServices: [
      { title: 'ERP Systems', description: 'Integrated management of core business processes in real-time.' },
      { title: 'Inventory Management', description: 'Smart tracking and automated replenishment systems.' },
      { title: 'Internal Business Tools', description: 'Custom portals that streamline your employee workflows.' },
      { title: 'Legacy Modernization', description: 'Refactoring old systems into modern, scalable architectures.' }
    ],
    features: [
      { title: 'Workflow Automation', description: 'Replacing manual data entry with intelligent automated tasks.', icon: Settings },
      { title: 'Data Security', description: 'Encryption at rest and in transit for sensitive company data.', icon: Shield },
      { title: 'System Integration', description: 'Connecting ERP, CRM, and HR systems into one source of truth.', icon: Layers },
      { title: 'Scalable Core', description: 'Architectures designed to grow alongside your business volume.', icon: Zap },
    ],
    techStack: ['Python', 'Node.js', 'Go', 'Docker', 'Kubernetes', 'PostgreSQL'],
    stats: [
      { number: '100+', label: 'Custom Solutions' },
      { number: '60%', label: 'Cost Reduction' },
      { number: '24/7', label: 'System Monitoring' },
    ],
    whyUs: [
      { title: 'Workflow Precision', description: 'We deep-dive into your unique logic to eliminate operational bottlenecks.' },
      { title: 'IP Protection', description: 'Strict data security protocols to protect your proprietary business algorithms.' },
      { title: 'Legacy Integration', description: 'Seamlessly bridging modern software with your existing legacy ecosystems.' },
      { title: 'Future-Proofing', description: 'Scalable codebases that evolve alongside your changing business requirements.' }
    ],
    process: [
      { title: 'Audit', description: 'Analyzing your current manual processes and bottlenecks.' },
      { title: 'Prototype', description: 'Designing a workflow that simplifies your daily operations.' },
      { title: 'Development', description: 'Building a robust, modular system that grows with you.' },
      { title: 'Integration', description: 'Deploying and training your team on the new platform.' }
    ],
  },
  'ai-automation': {
    slug: 'ai-automation',
    title: 'AI Automation & Integrated Systems',
    headline: 'Intelligent Workflows for the Autonomous Enterprise',
    description: 'We deploy custom AI solutions that transform manual operations into intelligent, self-optimizing systems. From Large Language Models (LLMs) to specialized automation agents, we bring the power of AI to your core workflows.',
    icon: Cpu,
    color: '#7c3aed',
    category: 'Advanced Tech',
    subServices: [
      { title: 'Custom LLM Integration', description: 'Fine-tuned AI models trained on your proprietary data.' },
      { title: 'Intelligent Agents', description: 'Autonomous bots that handle complex multi-step tasks.' },
      { title: 'Workflow Automation', description: 'Connecting your apps into self-driving business processes.' },
      { title: 'Predictive Analytics', description: 'Using machine learning to forecast trends and risks.' }
    ],
    features: [
      { title: 'Cognitive Automation', description: 'Beyond simple bots, AI that understands and makes decisions.', icon: Brain },
      { title: 'Natural Language', description: 'Advanced processing for chatbots and document analysis.', icon: MessageSquare },
      { title: 'Seamless Integration', description: 'Connecting AI with your CRM, ERP, and communication tools.', icon: Layers },
      { title: 'Data Privacy', description: 'Secure, private AI deployments that protect your IP.', icon: Shield },
    ],
    techStack: ['Python', 'PyTorch', 'OpenAI', 'LangChain', 'Pinecone', 'FastAPI'],
    stats: [
      { number: '40+', label: 'AI Models Deployed' },
      { number: '75%', label: 'Avg. Time Saved' },
      { number: '3.5x', label: 'ROI Improvement' },
    ],
    whyUs: [
      { title: 'Proprietary IP', description: 'Building custom AI assets that you own entirely, creating long-term value.' },
      { title: 'Data Privacy', description: 'Secure on-premise or private cloud deployments that never leak sensitive data.' },
      { title: 'Agentic Execution', description: 'AI that doesn’t just talk, it executes complex business workflows autonomously.' },
      { title: 'Model Optimization', description: 'Fine-tuned LLMs optimized for cost-efficiency and high-accuracy responses.' }
    ],
    process: [
      { title: 'Discovery', description: 'Identifying high-impact manual tasks suitable for AI.' },
      { title: 'Model Selection', description: 'Choosing and fine-tuning the right LLM or ML architecture.' },
      { title: 'Integration', description: 'Connecting AI with your existing tools and data sources.' },
      { title: 'Guardrails', description: 'Implementing safety checks and accuracy validation systems.' }
    ],
  },
  'cloud-devops': {
    slug: 'cloud-devops',
    title: 'Cloud & DevOps Strategy',
    headline: 'High-Availability Infrastructure for the Modern Era',
    description: 'We architect and manage cloud ecosystems that are optimized for performance, cost, and reliability. Our DevOps-first approach ensures that your code moves from development to production with zero friction.',
    icon: Cloud,
    color: '#4338ca',
    category: 'Advanced Tech',
    subServices: [
      { title: 'Cloud Infrastructure', description: 'Multi-region deployments on AWS, Azure, and Google Cloud.' },
      { title: 'CI/CD Pipelines', description: 'Automated testing and deployment for rapid release cycles.' },
      { title: 'Containerization', description: 'Scaling applications using Docker and Kubernetes clusters.' },
      { title: 'Cloud Migration', description: 'Transitioning legacy systems to modern cloud architectures.' }
    ],
    features: [
      { title: 'Infrastructure as Code', description: 'Version-controlled infrastructure for perfect reproducibility.', icon: Code },
      { title: 'Auto-Scaling', description: 'Systems that grow and shrink based on real-time demand.', icon: Zap },
      { title: 'Cost Optimization', description: 'Reducing cloud spend through intelligent resource allocation.', icon: BarChart3 },
      { title: '24/7 Monitoring', description: 'Proactive alerting and automated disaster recovery.', icon: Shield },
    ],
    techStack: ['AWS', 'Terraform', 'Docker', 'Kubernetes', 'GitHub Actions', 'Jenkins'],
    stats: [
      { number: '99.99%', label: 'Uptime SLA' },
      { number: '10x', label: 'Deployment Speed' },
      { number: '40%', label: 'Cost Reduction' },
    ],
    whyUs: [
      { title: 'Cloud Agnostic', description: 'Architecting for AWS, Azure, and GCP to prevent vendor lock-in and optimize costs.' },
      { title: 'CI/CD Automation', description: 'Fully automated delivery pipelines for rapid, low-risk software deployment.' },
      { title: 'Hardened Security', description: 'Zero-trust network architectures with proactive threat monitoring and response.' },
      { title: 'Elastic Scaling', description: 'Self-healing infrastructure that scales dynamically based on real-time load.' }
    ],
    process: [
      { title: 'Assessment', description: 'Evaluating your current infra for cost and performance.' },
      { title: 'Cloud Design', description: 'Architecting for high availability and global low-latency.' },
      { title: 'Provisioning', description: 'Deploying infrastructure using code for perfect consistency.' },
      { title: 'Monitoring', description: 'Setting up pro-active alerts and automated recovery.' }
    ],
  },
  'saas-solutions': {
    slug: 'saas-solutions',
    title: 'SaaS Solutions',
    headline: 'Building Scalable Multi-Tenant Platforms',
    description: 'We help you transform your business logic into a scalable Software-as-a-Service product. From subscription management to multi-tenant architectures, we build for high retention and global scale.',
    icon: Layers,
    color: '#0369a1',
    category: 'Advanced Tech',
    subServices: [
      { title: 'Multi-Tenant Architecture', description: 'Secure data isolation for thousands of concurrent users.' },
      { title: 'Subscription Engines', description: 'Recurring billing integration with Stripe and Chargebee.' },
      { title: 'User Management', description: 'Advanced role-based access for enterprise customers.' },
      { title: 'Analytics Dashboards', description: 'Providing users with real-time insights into their data.' }
    ],
    features: [
      { title: 'Global Scalability', description: 'Edge-cached data for low latency across all continents.', icon: Globe },
      { title: 'High Availability', description: 'Redundant systems ensuring your service is never down.', icon: Zap },
      { title: 'Onboarding Flows', description: 'Frictionless entry points to maximize user conversion.', icon: Users },
      { title: 'Custom Workflows', description: 'Allowing users to tailor the platform to their needs.', icon: Settings },
    ],
    techStack: ['Next.js', 'Stripe', 'Node.js', 'PostgreSQL', 'Redis', 'AWS'],
    stats: [
      { number: '20+', label: 'SaaS Platforms' },
      { number: '1M+', label: 'Monthly Users' },
      { number: '95%', label: 'User Retention' },
    ],
    whyUs: [
      { title: 'Tenant Isolation', description: 'Strict data segregation protocols ensuring absolute privacy for your customers.' },
      { title: 'Billing Engines', description: 'Robust recurring revenue models integrated with Stripe, Chargebee, and more.' },
      { title: 'Growth Strategies', description: 'Product-led growth features designed to drive user acquisition and retention.' },
      { title: 'Global Compliance', description: 'GDPR and SOC2 ready architectures for international enterprise markets.' }
    ],
    process: [
      { title: 'Concept', description: 'Defining the multi-tenant architecture and user roles.' },
      { title: 'Platform Build', description: 'Engineering the core engine, billing, and auth layers.' },
      { title: 'Tenant Onboarding', description: 'Creating frictionless setup flows for your customers.' },
      { title: 'Scale-Out', description: 'Optimizing for thousands of concurrent enterprise users.' }
    ],
  },
  'product-design': {
    slug: 'product-design',
    title: 'Product Design',
    headline: 'Visualizing Your Future, One Pixel at a Time',
    description: 'We turn abstract ideas into tangible product concepts. Our design process focuses on feasibility, usability, and aesthetic excellence, ensuring your product stands out in a crowded market.',
    icon: Palette,
    color: '#ec4899',
    category: 'Design & Growth',
    subServices: [
      { title: 'Concept Articulation', description: 'Defining the visual language and core metaphors of your product.' },
      { title: 'High-Fidelity Prototyping', description: 'Clickable models that look and behave like the final product.' },
      { title: 'Brand Identity', description: 'Logo design, typography, and color systems for digital products.' },
      { title: 'Design Systems', description: 'Component libraries that ensure consistency across large platforms.' }
    ],
    features: [
      { title: 'Visual Excellence', description: 'Award-worthy aesthetics that build immediate trust with users.', icon: Palette },
      { title: 'Design Tokens', description: 'Bridging the gap between design and code for rapid iteration.', icon: Code },
      { title: 'Atomic Design', description: 'Building from small components up to full complex pages.', icon: Layers },
      { title: 'Brand Consistency', description: 'Ensuring your brand voice is loud and clear on every screen.', icon: Shield },
    ],
    techStack: ['Figma', 'Adobe CC', 'Principle', 'Spline', 'Protopie', 'Framermotion'],
    stats: [
      { number: '200+', label: 'Products Designed' },
      { number: '15+', label: 'Design Awards' },
      { number: '100%', label: 'User Love' },
    ],
    whyUs: [
      { title: 'Visual Excellence', description: 'Stunning, award-worthy aesthetics that build immediate brand authority.' },
      { title: 'Rapid Validation', description: 'Iterative prototyping to test concepts with users before committing to code.' },
      { title: 'Scalable Systems', description: 'Comprehensive design systems that ensure consistency across all products.' },
      { title: 'Market Resilience', description: 'Designs that stay relevant by balancing current trends with timeless usability.' }
    ],
    process: [
      { title: 'Moodboarding', description: 'Defining the visual soul and personality of your product.' },
      { title: 'UX Flow', description: 'Mapping out every interaction to ensure zero friction.' },
      { title: 'UI Design', description: 'Crafting pixel-perfect screens with a focus on usability.' },
      { title: 'Handover', description: 'Providing developers with a complete, documented design system.' }
    ],
  },
  'ui-ux-design': {
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    headline: 'Interfaces That Feel Like Second Nature',
    description: 'We design experiences that solve problems. By combining psychological principles with modern interface design, we create apps and websites that users love to use and never want to leave.',
    icon: Layout,
    color: '#8b5cf6',
    category: 'Design & Growth',
    subServices: [
      { title: 'User Research', description: 'Understanding your users through interviews and data analysis.' },
      { title: 'Information Architecture', description: 'Structuring content for maximum findability and clarity.' },
      { title: 'Interaction Design', description: 'Designing the micro-animations that make apps feel alive.' },
      { title: 'Usability Testing', description: 'Validating designs with real users to eliminate friction.' }
    ],
    features: [
      { title: 'User-Centric', description: 'Every pixel is placed with a specific user goal in mind.', icon: Users },
      { title: 'Accessibility', description: 'Designing for everyone, including those with disabilities.', icon: Shield },
      { title: 'Fluid Interactions', description: 'Transitions that guide the user through the narrative.', icon: Zap },
      { title: 'Data Driven', description: 'A/B testing and heatmaps to refine the experience.', icon: BarChart3 },
    ],
    techStack: ['Figma', 'Miro', 'Hotjar', 'Google Analytics', 'React', 'Tailwind'],
    stats: [
      { number: '500k+', label: 'Daily Active Users' },
      { number: '40%', label: 'Conversion Increase' },
      { number: '< 2s', label: 'Average Task Time' },
    ],
    whyUs: [
      { title: 'Behavioral UX', description: 'Designing interfaces based on psychological principles of human interaction.' },
      { title: 'Total Accessibility', description: 'Ensuring your digital product is inclusive and WCAG compliant for all users.' },
      { title: 'Frictionless Flows', description: 'Streamlining user journeys to maximize task completion and conversions.' },
      { title: 'Data-Driven Design', description: 'Using heatmaps and A/B testing to refine UI elements based on real usage.' }
    ],
    process: [
      { title: 'User Research', description: 'Interviewing real users to find their true pain points.' },
      { title: 'Wireframing', description: 'Low-fidelity layouts to validate architecture and flows.' },
      { title: 'Interaction', description: 'Designing the micro-animations that make apps feel premium.' },
      { title: 'Validation', description: 'Testing mockups with real users and iterating on feedback.' }
    ],
  },
  'digital-marketing': {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    headline: 'Omni-Channel Strategies for Dominant Growth',
    description: 'We don’t just buy ads; we build growth engines. Our performance marketing team uses data-driven strategies to reach your ideal customers and turn them into lifelong brand advocates.',
    icon: TrendingUp,
    color: '#ea580c',
    category: 'Design & Growth',
    subServices: [
      { title: 'Performance Marketing', description: 'Paid search and social ads optimized for maximum ROI.' },
      { title: 'Content Strategy', description: 'Creating high-value content that builds authority and trust.' },
      { title: 'Social Media Management', description: 'Building communities around your brand mission.' },
      { title: 'Email Automation', description: 'Nurturing leads through personalized, automated sequences.' }
    ],
    features: [
      { title: 'Growth Hacking', description: 'Rapid experimentation to find the most effective growth channels.', icon: Zap },
      { title: 'Full Transparency', description: 'Real-time dashboards showing exactly where your budget goes.', icon: BarChart3 },
      { title: 'A/B Testing', description: 'Constant refinement of copy and creative for peak performance.', icon: Layers },
      { title: 'Audience Targeting', description: 'Precision reach using behavioral and demographic data.', icon: Users },
    ],
    techStack: ['Google Ads', 'Meta Ads', 'HubSpot', 'Mailchimp', 'GA4', 'Semrush'],
    stats: [
      { number: '$50M+', label: 'Managed Ad Spend' },
      { number: '300%', label: 'Avg. Lead Growth' },
      { number: '10x', label: 'ROI Benchmark' },
    ],
    whyUs: [
      { title: 'Full Transparency', description: 'Live, real-time dashboards showing precisely how every dollar is performing.' },
      { title: 'Growth Mentality', description: 'We treat your marketing budget with the same rigor as our own capital.' },
      { title: 'Omni-Channel Reach', description: 'Coordinated strategies that capture users across Search, Social, and Email.' },
      { title: 'Predictive ROI', description: 'Data-driven forecasting to identify and scale high-performing growth channels.' }
    ],
    process: [
      { title: 'Audience Prep', description: 'Defining the precise personas and keywords to target.' },
      { title: 'Creative Build', description: 'Designing high-conversion ads and landing pages.' },
      { title: 'Launch', description: 'Deploying campaigns with granular tracking enabled.' },
      { title: 'Optimization', description: 'A/B testing and budget scaling based on performance.' }
    ],
  },
  'seo': {
    slug: 'seo',
    title: 'Search Engine Optimization',
    headline: 'Organic Visibility That Drives Sustainable Revenue',
    description: 'Stop paying for every click. We optimize your digital presence to dominate search results for the keywords that matter most to your business, building long-term authority and trust.',
    icon: Globe,
    color: '#1d4ed8',
    category: 'Design & Growth',
    subServices: [
      { title: 'Technical SEO', description: 'Ensuring your site is fast, mobile-friendly, and indexable.' },
      { title: 'Content Optimization', description: 'Writing for humans while ranking for search engines.' },
      { title: 'Backlink Building', description: 'Securing high-authority links that boost your credibility.' },
      { title: 'Local SEO', description: 'Dominating search results for your specific geographic areas.' }
    ],
    features: [
      { title: 'Top Rankings', description: 'Targeting Page 1 for your most competitive industry terms.', icon: TrendingUp },
      { title: 'Organic Growth', description: 'Building a consistent stream of traffic without ad spend.', icon: Zap },
      { title: 'Site Authority', description: 'Improving your Domain Rating through strategic content.', icon: Shield },
      { title: 'Competitor Analysis', description: 'Identifying and exploiting gaps in your rivals’ strategies.', icon: BarChart3 },
    ],
    techStack: ['Ahrefs', 'Semrush', 'Screaming Frog', 'Google Search Console', 'Next.js', 'Sanity.io'],
    stats: [
      { number: '10k+', label: 'Keywords Ranked' },
      { number: '500%', label: 'Organic Traffic Lift' },
      { number: '#1', label: 'Ranking Target' },
    ],
    whyUs: [
      { title: 'Technical SEO', description: 'Deep-code optimizations that fix the hidden issues holding your rankings back.' },
      { title: 'Content Authority', description: 'High-value editorial content that earns trust from both humans and Google.' },
      { title: 'Sustainable Rankings', description: 'Strictly white-hat strategies that protect your site from algorithm updates.' },
      { title: 'Market Dominance', description: 'Strategic keyword targeting to capture high-intent traffic before your rivals.' }
    ],
    process: [
      { title: 'SEO Audit', description: 'Deep dive into technical, on-page, and off-page health.' },
      { title: 'Keyword Mapping', description: 'Identifying the high-intent terms your rivals missed.' },
      { title: 'Link Building', description: 'Earning authoritative backlinks from trusted industry sites.' },
      { title: 'Reporting', description: 'Monthly deep-dives into rankings, traffic, and revenue.' }
    ],
  },
};
