import { motion } from 'framer-motion';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-overlay" />

      <motion.div
        className="hero-body"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-tag" variants={item}>
          <span className="label">Fresh Roasted · Single Origin · Indonesia</span>
        </motion.div>

        <motion.h1 className="disp-xl hero-title" variants={item}>
          Kopi Yang Tumbuh<br />
          <em>Bersama Petaninya.</em>
        </motion.h1>

        <motion.p className="hero-sub" variants={item}>
          Single-origin beans dari Aceh, Toraja, dan Flores.<br />
          Dipanggang fresh setiap minggu di roastery kami di Bandung.
        </motion.p>

        <motion.div className="hero-ctas" variants={item}>
          <a href="#kopi" className="btn btn-p">Jelajahi Koleksi</a>
          <a href="#brewing" className="btn btn-o">Pelajari Brewing</a>
        </motion.div>
      </motion.div>

      <div className="hero-scroll">Scroll</div>
    </section>
  );
}
