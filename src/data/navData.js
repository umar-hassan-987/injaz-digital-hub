// ─── Navigation Data ───
export const navLinks = [
  { name: 'Home', path: '/' },
  {
    name: 'Services',
    path: '/services',
    hasMega: true,
    megaColumns: [
      {
        title: 'Application Development',
        links: [
          { name: 'Mobile App Development', path: '/services/mobile-apps' },
          { name: 'Web App Development', path: '/services/web-development' },
          { name: 'Custom Software Development', path: '/services/custom-software' },
        ],
      },
      {
        title: 'Advanced Tech',
        links: [
          { name: 'AI Automation & Integrated Systems', path: '/services/ai-automation' },
          { name: 'Cloud & DevOps Strategy', path: '/services/cloud-devops' },
          { name: 'SaaS Solutions', path: '/services/saas-solutions' },
        ],
      },
      {
        title: 'Design & Growth',
        links: [
          { name: 'Product Design', path: '/services/product-design' },
          { name: 'UI/UX Design', path: '/services/ui-ux-design' },
          { name: 'Digital Marketing', path: '/services/digital-marketing' },
          { name: 'Search Engine Optimization', path: '/services/seo' },
        ],
      },
    ],
  },

  { name: 'Company', path: '/company' },
  { name: 'Contact', path: '/contact' },
];

// ─── Footer Data ───
export const footerLinks = {
  services: [
    { name: 'Web Development', path: '/services/web-development' },
    { name: 'Mobile Apps', path: '/services/mobile-apps' },
    { name: 'Custom Software', path: '/services/custom-software' },
    { name: 'Cloud Solutions', path: '/services/cloud-solutions' },
    { name: 'AI Automations', path: '/services/ai-automations' },
    { name: 'UI/UX Design', path: '/services/ui-ux-design' },
  ],
  company: [
    { name: 'About Us', path: '/company' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
  ],
};
