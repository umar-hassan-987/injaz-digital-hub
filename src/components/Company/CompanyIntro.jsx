import { motion } from 'framer-motion';
import { Code, Users, Globe, Zap } from 'lucide-react';

const highlights = [
  { icon: Code,  title: 'Engineering Excellence', desc: 'Clean, maintainable code built for scale and longevity.'               },
  { icon: Users, title: 'Client-First Culture',   desc: 'Your goals drive every decision we make — always.'                     },
  { icon: Globe, title: 'Global Mindset',         desc: 'Products built for diverse markets and user bases worldwide.'           },
  { icon: Zap,   title: 'Rapid Delivery',         desc: 'Agile sprints that ship real value fast, without cutting corners.'     },
];

export default function CompanyIntro() {
  return (
    <section className="py-24 sm:py-28 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-24 xl:px-32">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="w-12 h-px bg-accent/60" />
          <span className="text-[11px] font-black uppercase tracking-[0.25em] text-accent">Who We Are</span>
        </motion.div>

        <div className="grid lg:grid-cols-[58%_42%] gap-16 lg:gap-24 items-start">

          {/* ── Left — Story ── */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-bold text-gray-900 tracking-tight leading-[1.1] mb-10 text-3xl sm:text-4xl lg:text-5xl"
            >
              A company built on the belief that great software changes lives.
            </motion.h2>

            {[
              'We believe great software should solve real problems, beautifully. From our roots in Islamabad to a global presence in 30+ countries, we prove that world-class engineering is driven by genuine partnership and measurable success.',
              'Our approach balances technical rigor with design intentionality. We don\'t just write code; we architect scalable digital products designed for long-term growth and exceptional user experiences.',
              'Whether delivering high-speed MVPs or complex enterprise platforms, we bring the same level of craft and commitment to every startup, scale-up, and enterprise partner we serve.',
            ].map((para, idx) => (
              <motion.p
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 + idx * 0.15 }}
                className="text-[15px] sm:text-base text-gray-600 leading-relaxed mb-6 max-w-[600px]"
              >
                {para}
              </motion.p>
            ))}
          </div>

          {/* ── Right — Highlight cards ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
                className="group bg-gray-50 hover:bg-white border border-gray-100 hover:border-accent/30 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl shadow-gray-200/40"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/15 transition-colors duration-300">
                  <item.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-gray-900 font-display mb-2 leading-tight">{item.title}</h3>
                <p className="text-[13px] sm:text-[14px] text-gray-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
