import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Step = { label: string; desc: string };
type Brew = { id: string; name: string; img: string; alt: string; steps: Step[] };

const brews: Brew[] = [
  {
    id: 'v60',
    name: 'V60 Pour Over',
    img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=120&q=80',
    alt: 'V60 Pourover',
    steps: [
      { label: 'Rasio', desc: '1:15 — 15g kopi : 225ml air 93°C' },
      { label: 'Bloom', desc: '30ml air, tunggu 30 detik' },
      { label: 'Pour', desc: 'Tuang melingkar pelan, 3–4 tahap' },
      { label: 'Total', desc: '2:30–3:00 menit brew time' },
    ],
  },
  {
    id: 'french',
    name: 'French Press',
    img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=120&q=80',
    alt: 'French Press',
    steps: [
      { label: 'Rasio', desc: '1:12 — 20g kopi : 240ml air 92°C' },
      { label: 'Steep', desc: 'Tutup, tunggu 4 menit penuh' },
      { label: 'Press', desc: 'Tekan perlahan, jangan dipaksa' },
      { label: 'Sajikan', desc: 'Langsung tuang, ampas tetap di bawah' },
    ],
  },
  {
    id: 'aeropress',
    name: 'Aeropress',
    img: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=120&q=80',
    alt: 'Aeropress',
    steps: [
      { label: 'Rasio', desc: '1:10 — 18g kopi : 180ml air 88°C' },
      { label: 'Inverted', desc: 'Posisi terbalik, tambah air' },
      { label: 'Stir', desc: 'Aduk 10 detik, tutup filter' },
      { label: 'Press', desc: 'Balik & tekan pelan ~30 detik' },
    ],
  },
  {
    id: 'tubruk',
    name: 'Kopi Tubruk',
    img: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=120&q=80',
    alt: 'Kopi Tubruk',
    steps: [
      { label: 'Grind', desc: 'Coarse — kasar seperti pasir' },
      { label: 'Seduh', desc: '10g kopi + 150ml air mendidih' },
      { label: 'Tunggu', desc: '3–4 menit sampai ampas mengendap' },
      { label: 'Nikmati', desc: 'Minum dari tepi, jangan diaduk' },
    ],
  },
];

export default function BrewingMethod() {
  const [open, setOpen] = useState<string | null>(null);

  const toggle = (id: string) => setOpen(prev => (prev === id ? null : id));

  return (
    <section className="sec" id="brewing">
      <div className="wrap">
        <motion.div
          className="brew-head"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <span className="label">Brew Guide</span>
          <h2 className="disp-lg">Setiap Metode, Karakter Baru</h2>
          <p>
            Tidak ada cara yang salah menyeduh kopi. Hanya cara yang berbeda
            untuk menemukan rasanya.
          </p>
        </motion.div>

        <div className="brew-grid">
          {brews.map((brew, i) => {
            const isOpen = open === brew.id;
            return (
              <motion.div
                key={brew.id}
                className={`brew-card${isOpen ? ' open' : ''}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <button
                  className="brew-trigger"
                  onClick={() => toggle(brew.id)}
                  aria-expanded={isOpen}
                >
                  <img
                    className="brew-thumb"
                    src={brew.img}
                    alt={brew.alt}
                    loading="lazy"
                  />
                  <span className="brew-label">{brew.name}</span>
                  <motion.svg
                    className="brew-chevron"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </motion.svg>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="detail"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className="brew-inner">
                        {brew.steps.map(step => (
                          <div key={step.label} className="brew-step">
                            <b>{step.label}</b>
                            <span>{step.desc}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
