import { motion } from 'framer-motion';
import { CheckCircle2, Code, TrendingUp, MessageSquare, Shield, Users, Headphones } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const differentiators = [
  {
    icon: Code,
    title: 'Full-Stack Expertise',
    desc: 'From mobile apps to cloud infrastructure — one team handles your entire technology stack with consistent quality and no handoff gaps.',
  },
  {
    icon: TrendingUp,
    title: 'Proven Track Record',
    desc: 'Over 500 successful deployments across healthcare, fintech, logistics, and e-commerce — with a 98% client retention rate that speaks for itself.',
  },
  {
    icon: MessageSquare,
    title: 'Agile & Transparent',
    desc: 'Regular sprint reviews, a dedicated project manager, and direct Slack access to your team. You\'re always fully in the loop.',
  },
  {
    icon: Shield,
    title: 'Security First',
    desc: 'Security and compliance are baked into our development process from day one — not bolted on before launch as an afterthought.',
  },
  {
    icon: Users,
    title: 'Long-term Partnership',
    desc: 'Our clients don\'t hire us once. 78% of our revenue comes from repeat clients who trust us with their growth, quarter after quarter.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Post-Launch Support',
    desc: 'Post-launch maintenance, monitoring, and support are included in every engagement so you\'re never left stranded after go-live.',
  },
];

export default function WhyChooseUs() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';

  return (
    <section className="py-24 sm:py-28 lg:py-32 bg-accent overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-24 xl:px-32">

        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-5"
          >
            <div className="w-12 h-px bg-[var(--color-gold)]" />
            <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[var(--color-gold)]">
              {t('company.whyUs.subtitle', 'The INJAZ Difference')}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-white tracking-tight max-w-2xl text-3xl sm:text-4xl lg:text-5xl"
          >
            {t('company.whyUs.title', 'Why choose INJAZ over 10,000 other dev shops?')}
          </motion.h2>
        </div>

        {/* Differentiator rows */}
        <div className="space-y-px">
          {differentiators.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: isRTL ? 24 : -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
              className="group flex items-start gap-4 sm:gap-6 py-6 sm:py-8 border-b border-white/10 hover:border-[var(--color-gold)]/50 transition-colors duration-300"
            >
              {/* Icon */}
              <div className="shrink-0 w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[var(--color-gold)] transition-colors duration-300 mt-0.5">
                <item.icon className="w-5 h-5 text-[var(--color-gold)] group-hover:text-accent transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-base sm:text-lg font-bold text-white font-display mb-1.5">
                  {t(`company.whyUs.items.${idx}.title`, item.title)}
                </h3>
                <p className="text-[13px] sm:text-sm text-gray-300 leading-relaxed max-w-2xl">
                  {t(`company.whyUs.items.${idx}.desc`, item.desc)}
                </p>
              </div>

              {/* Checkmark — appears on hover */}
              <div className="shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <CheckCircle2 className="w-5 h-5 text-[var(--color-gold)]" />
              </div>

              {/* Decorative index number */}
              <div
                aria-hidden="true"
                className="shrink-0 font-display font-black text-white/[0.04] select-none pointer-events-none self-center hidden sm:block"
                style={{ fontSize: '44px', lineHeight: 1 }}
              >
                {String(idx + 1).padStart(2, '0')}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
