import { motion } from 'framer-motion';
import { Compass, Target } from 'lucide-react';

const cards = [
  {
    icon: Compass,
    label: 'Our Vision',
    headline: 'To be the most trusted technology partner for businesses that want to lead their industry.',
    body: "We envision a future where geography is no barrier to world-class engineering. INJAZ aspires to be the partner of choice for the world's most ambitious founders — not because we're the largest firm, but because we're the most invested in your success.",
    gradient: 'from-accent/20 to-transparent',
    glow: 'rgba(139,26,74,0.10)',
    borderGrad: 'from-accent/30 via-white/5 to-white/5',
  },
  {
    icon: Target,
    label: 'Our Mission',
    headline: 'To deliver software that moves businesses forward — on time, on budget, and beyond expectation.',
    body: "Our mission is to close the gap between an idea and its impact. We do this through rigorous engineering, transparent communication, and a relentless commitment to shipping software that actually works — for you and for your users.",
    gradient: 'from-accent/10 to-transparent',
    glow: 'rgba(139,26,74,0.05)',
    borderGrad: 'from-accent/20 via-gray-100 to-gray-50',
  },
];

export default function VisionMission() {
  return (
    <section className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-6 xl:px-32">

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
            <span className="text-[11px] font-black uppercase tracking-[0.25em] text-accent">Purpose</span>
            <div className="w-10 h-px bg-accent/60" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-gray-900 tracking-tight text-3xl sm:text-4xl lg:text-5xl"
          >
            Vision &amp; Mission
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`relative rounded-[24px] p-px bg-gradient-to-br ${card.borderGrad} overflow-hidden`}
            >
              <div
                className="relative bg-white rounded-[23px] p-8 lg:p-10 h-full shadow-2xl shadow-gray-200/50"
              >
                {/* Corner gradient */}
                <div
                  className={`absolute top-0 right-0 w-72 h-72 rounded-full bg-gradient-to-br ${card.gradient} blur-[80px] opacity-70 pointer-events-none`}
                />

                {/* Icon */}
                <div className="relative w-14 h-14 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-6">
                  <card.icon className="w-6 h-6 text-accent" />
                </div>

                {/* Label */}
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-3">{card.label}</div>

                {/* Headline */}
                <h3
                  className="font-display font-bold text-gray-900 leading-[1.2] mb-5 text-xl lg:text-2xl"
                >
                  {card.headline}
                </h3>

                {/* Rule */}
                <div className="w-10 h-px bg-accent/40 mb-5" />

                {/* Body */}
                <p className="text-[14px] text-gray-600 leading-relaxed font-light">{card.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
