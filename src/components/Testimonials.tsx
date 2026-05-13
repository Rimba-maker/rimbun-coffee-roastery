import { motion } from 'framer-motion';

const reviews = [
  {
    id: 'dimas',
    stars: 5,
    body: '"Gayo Wine Process-nya luar biasa. Saya sudah coba banyak roastery, tapi yang punya karakter red wine sejelas ini baru Rimbun. Dan yang bikin respect, mereka cerita langsung soal petaninya."',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
    name: 'Dimas Rakhmanto',
    role: 'Home Brewer · Jakarta',
  },
  {
    id: 'sari',
    stars: 5,
    body: '"Sudah 8 bulan pakai Rimbun buat cafe kami. Konsistensinya jarang ada tandingan — setiap batch Flores Bajawa rasanya identik. Customer kami yang notice sendiri dan nanya beli di mana."',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
    name: 'Sari Wulandari',
    role: 'Cafe Owner · Bandung',
  },
  {
    id: 'reza',
    stars: 5,
    body: '"Pertama coba Toraja Sapan Natural dari Rimbun saat review buat konten. Jujur, ini yang paling sering saya re-order. Notes-nya persis seperti yang tertulis — jarang ada roastery setransparent ini."',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80',
    name: 'Reza Firmansyah',
    role: 'Food Blogger · Surabaya',
  },
];

export default function Testimonials() {
  return (
    <section className="sec">
      <div className="wrap">
        <motion.div
          className="testi-head"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <span className="label">Testimoni</span>
          <h2 className="disp-lg">Yang Mereka Bilang</h2>
        </motion.div>

        <div className="testi-grid">
          {reviews.map((r, i) => (
            <motion.div
              key={r.id}
              className="testi-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            >
              <div className="testi-stars">{'★'.repeat(r.stars)}</div>
              <p className="testi-body">{r.body}</p>
              <div className="testi-author">
                <img
                  className="testi-avatar"
                  src={r.avatar}
                  alt={r.name}
                  loading="lazy"
                />
                <div>
                  <div className="testi-name">{r.name}</div>
                  <div className="testi-role">{r.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
