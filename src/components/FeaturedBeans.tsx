import { motion } from 'framer-motion';

const beans = [
  {
    id: 'gayo',
    origin: 'Aceh · Wine Process',
    name: 'Gayo Wine Process',
    notes: 'Red wine · Dark chocolate · Plum',
    price: 'Rp 145.000',
    img: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80',
    alt: 'Kemasan kopi Aceh Gayo Wine Process',
  },
  {
    id: 'sapan',
    origin: 'Toraja · Natural',
    name: 'Sapan Natural',
    notes: 'Tropical fruit · Brown sugar · Smooth',
    price: 'Rp 135.000',
    img: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=600&q=80',
    alt: 'Kemasan Toraja Sapan Natural',
  },
  {
    id: 'bajawa',
    origin: 'Flores · Honey',
    name: 'Bajawa Honey',
    notes: 'Caramel · Nutty · Citrus zest',
    price: 'Rp 130.000',
    img: 'https://images.unsplash.com/photo-1459755486867-b55449bb39ff?auto=format&fit=crop&w=600&q=80',
    alt: 'Kemasan Flores Bajawa Honey Process',
  },
  {
    id: 'house',
    origin: 'House Blend · Medium',
    name: 'Signature Rimbun',
    notes: 'Balanced · Chocolate · Low acidity',
    price: 'Rp 110.000',
    img: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=600&q=80',
    alt: 'Rimbun House Blend Signature',
  },
];

export default function FeaturedBeans() {
  return (
    <section className="sec sec-d" id="kopi">
      <div className="wrap">
        <motion.div
          className="beans-head"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <span className="label">Koleksi Kami</span>
          <h2 className="disp-lg">Pilih Karakter Favoritmu</h2>
          <p>Setiap origin punya profil rasa yang berbeda. Mana yang cocok untukmu?</p>
        </motion.div>

        <div className="beans-grid">
          {beans.map((bean, i) => (
            <motion.div
              key={bean.id}
              className="bean-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="bean-img-wrap">
                <img
                  className="bean-img"
                  src={bean.img}
                  alt={bean.alt}
                  loading="lazy"
                />
              </div>
              <div className="bean-body">
                <div className="bean-origin">{bean.origin}</div>
                <div className="bean-name">{bean.name}</div>
                <div className="bean-notes">{bean.notes}</div>
                <div className="bean-price">
                  {bean.price} <span>/ 200g</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
