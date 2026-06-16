import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const values = [
  { num: '01', title: 'Client-First Thinking',  desc: "We optimize for your business outcomes, not just the technical brief. Every decision starts with 'what does this mean for the client?'" },
  { num: '02', title: 'Technical Excellence',   desc: "We hold our code to a standard we'd be proud to ship under our own name — documented, tested, and built to last."                  },
  { num: '03', title: 'Radical Transparency',   desc: "Good news travels fast; so does bad news. We surface challenges early so you always know exactly where your project stands."        },
  { num: '04', title: 'Agile Delivery',         desc: "We ship in focused sprints that deliver real value — not months of silence followed by a big reveal that misses the mark."          },
  { num: '05', title: 'Continuous Learning',    desc: "Technology moves fast. We invest in our team's growth so your product always benefits from current best practices."                  },
  { num: '06', title: 'Ownership Mindset',      desc: "We treat your project like it's our own startup. If something is off, we fix it proactively — we don't wait to be asked."          },
];

export default function CoreValues() {
  const { t } = useTranslation();

  return (
    <section className="py-24 sm:py-28 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-24 xl:px-32">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-5"
          >
            <div className="w-10 h-px bg-accent/60" />
            <span className="text-[11px] font-black uppercase tracking-[0.25em] text-accent">
              {t('company.values.subtitle', 'Our DNA')}
            </span>
            <div className="w-10 h-px bg-accent/60" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-gray-900 tracking-tight text-3xl sm:text-4xl lg:text-5xl"
          >
            {t('company.values.title', 'Core Values')}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[15px] sm:text-base text-gray-600 mt-4 max-w-lg mx-auto leading-relaxed"
          >
            {t('company.values.description', 'Six principles that guide how we think, build, and collaborate — on every project, for every client.')}
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {values.map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative bg-gray-50 hover:bg-white border border-gray-100 hover:border-accent/30 rounded-2xl p-6 sm:p-8 overflow-hidden transition-all duration-300 hover:shadow-xl shadow-gray-200/40"
            >
              {/* Left accent bar — slides in on hover */}
              <div
                className="absolute start-0 top-4 bottom-4 w-0.5 bg-accent scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500 rounded-full"
                style={{ boxShadow: '0 0 12px rgba(15,95,106,0.6)' }}
              />

              {/* Number */}
              <div className="text-[11px] font-black text-accent/60 group-hover:text-accent tracking-[0.15em] mb-4 transition-colors duration-300">
                {val.num}
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-gray-900 text-lg sm:text-xl mb-3 leading-tight">
                {t(`company.values.items.${idx}.title`, val.title)}
              </h3>

              {/* Accent rule — grows on hover */}
              <div className="w-6 h-px bg-accent/40 mb-4 group-hover:w-10 transition-all duration-500" />

              {/* Description */}
              <p className="text-[13px] text-gray-500 leading-relaxed">
                {t(`company.values.items.${idx}.desc`, val.desc)}
              </p>

              {/* Large decorative number */}
              <div
                aria-hidden="true"
                className="absolute bottom-2 end-3 font-display font-black text-gray-900/[0.04] select-none pointer-events-none"
                style={{ fontSize: '76px', lineHeight: 1 }}
              >
                {val.num}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
