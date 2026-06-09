import { motion } from 'framer-motion';
import { ArrowRight, Lightbulb, Heart, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const pillars = [
  { icon: Lightbulb, label: 'Continuous Learning'   },
  { icon: Heart,     label: 'People-First Culture'  },
  { icon: Rocket,    label: 'Ownership & Impact'    },
];

export default function CompanyCareers() {
  return (
    <>
      {/* ── Careers section ── */}
      <section className="py-24 lg:py-32 relative overflow-hidden bg-white border-t border-gray-100">
        {/* Animated gradient background */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <motion.div
            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 opacity-[0.03]"
            style={{
              background: 'linear-gradient(135deg, #8B1A4A, #ffffff, #8B1A4A, #f8fafc)',
              backgroundSize: '400% 400%',
            }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-accent/5 blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 xl:px-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-8 h-px bg-accent/60" />
            <span className="text-[11px] font-black uppercase tracking-[0.25em] text-accent">Careers</span>
            <div className="w-8 h-px bg-accent/60" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-bold text-gray-900 tracking-tight leading-[1.05] mb-6"
            style={{ fontSize: 'clamp(36px, 4.5vw, 64px)' }}
          >
            Build the future.<br />
            <span className="text-accent italic font-light">With us.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[15px] text-gray-600 max-w-xl mx-auto leading-relaxed mb-10 font-light"
          >
            We're always looking for exceptional engineers, designers, and strategists who want to do the best work
            of their careers in a culture that rewards curiosity, ownership, and craft.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              to="/careers"
              className="group inline-flex items-center gap-2 px-10 py-4 bg-accent text-white font-bold text-[11px] uppercase tracking-widest rounded-xl hover:bg-black transition-colors duration-300 shadow-lg shadow-accent/20"
            >
              View Open Roles
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>

          {/* Culture pillars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap justify-center gap-8 mt-14 pt-10 border-t border-gray-100"
          >
            {pillars.map((p, idx) => (
              <div key={idx} className="flex items-center gap-2.5 text-gray-600">
                <p.icon className="w-4 h-4 text-accent" />
                <span className="text-[13px] font-semibold">{p.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-24 lg:py-36 bg-gray-50 relative overflow-hidden">
        {/* Central radial glow */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center" aria-hidden="true">
          <div className="w-[700px] h-[400px] rounded-full bg-accent/5 blur-[140px]" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 xl:px-32 text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block text-[11px] font-black uppercase tracking-[0.3em] text-accent mb-6"
          >
            Ready to get started?
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-bold text-gray-900 tracking-tight leading-[1.05] mb-6"
            style={{ fontSize: 'clamp(40px, 5vw, 72px)' }}
          >
            Let's build something<br />
            <span className="text-accent italic font-light">extraordinary.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[16px] text-gray-600 max-w-lg mx-auto leading-relaxed mb-12 font-light"
          >
            Tell us about your project. We'll come back with a clear plan, a realistic timeline, and a team
            that's genuinely excited to help you succeed.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-10 py-5 bg-accent text-white font-bold text-[11px] uppercase tracking-widest rounded-xl hover:bg-black transition-colors duration-300 shadow-xl shadow-accent/20"
            >
              Start a Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-10 py-5 border border-gray-200 text-gray-900 font-bold text-[11px] uppercase tracking-widest rounded-xl hover:border-accent/40 hover:bg-gray-50 transition-all duration-300 bg-white"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
