# PRD: Rimbun Coffee Roastery — Brand Kopi Specialty Lokal

## 1. Brand Identity

**Nama Brand:** Rimbun Coffee Roastery
**Alasan Naming:** "Rimbun" = lebat, subur, mengakar — mencerminkan asal kopi dari hutan pegunungan Indonesia. Cocok untuk brand yang highlight single-origin & traceability.

**Tagline:** *"Dari Hutan Indonesia, Diseduh Dengan Cerita."*

**Target Audience:**
- Coffee enthusiast usia 22-40
- Urban professional di kota besar (Jakarta, Bandung, Surabaya, Medan)
- Home brewer yang cari single-origin beans
- Cafe owner B2B (wholesale)

**Brand Voice:**
- Tone: Tenang, premium tapi tidak elitis, edukatif
- Style copywriting: Storytelling tentang petani & origin, sensory descriptor (notes, body, acidity)
- Avoid: Bahasa kaku/teknis berlebihan tanpa konteks

---

## 2. Tech Stack

- **Framework:** Astro 5 (SSG)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript (strict)
- **Animation:** Framer Motion via React islands
- **Deploy:** Netlify (static)
- **Images:** Unsplash + Pexels (free commercial license)
- **Optional:** Astro Content Collections untuk product catalog

---

## 3. Section Breakdown

| # | Section | Type | Tujuan |
|---|---------|------|--------|
| 1 | Navbar | `.astro` static | Navigation, logo, CTA "Belanja Kopi" |
| 2 | Hero | React island `client:load` | First impression, brand statement |
| 3 | About Story | `.astro` static | Narasi tentang origin & misi |
| 4 | Featured Beans | React island `client:visible` | Showcase 3-4 single-origin produk |
| 5 | Brewing Method | React island `client:visible` | Edukasi brew guide (V60, Aeropress, Tubruk) |
| 6 | Roastery Process | `.astro` static + image gallery | Behind the scene roasting |
| 7 | Wholesale CTA | `.astro` static | B2B section untuk cafe owner |
| 8 | Testimonial | React island `client:visible` | Social proof customer |
| 9 | Footer | `.astro` static | Kontak, sosmed, newsletter |

---

## 4. Copywriting (Bahasa Indonesia)

### Navbar
- Menu: Kopi Kami • Brew Guide • Cerita • Wholesale • Kontak
- CTA: **Belanja Sekarang**

### Hero
- **Headline:** Kopi Yang Tumbuh Bersama Petaninya.
- **Subheadline:** Single-origin beans dari Aceh, Toraja, dan Flores. Dipanggang fresh setiap minggu di roastery kami di Bandung.
- **CTA Primary:** Jelajahi Koleksi
- **CTA Secondary:** Pelajari Brewing

### About Story
- **Heading:** Bukan Sekadar Kopi, Tapi Perjalanan
- **Body:** Kami memulai Rimbun pada 2021 dengan satu prinsip: setiap biji kopi punya cerita. Mulai dari petani Gayo yang menanam di ketinggian 1.500 mdpl, sampai proses honey process yang butuh kesabaran 14 hari. Kami bayar petani 30% di atas harga pasar — karena kualitas tidak pernah murah.

### Featured Beans
- **Heading:** Pilih Karakter Favoritmu
- **Subheading:** Setiap origin punya profil rasa yang berbeda. Mana yang cocok untukmu?

Product cards (3-4):
1. **Aceh Gayo Wine Process** — Notes: Red wine, dark chocolate, plum. *Rp 145.000 / 200g*
2. **Toraja Sapan Natural** — Notes: Tropical fruit, brown sugar, smooth. *Rp 135.000 / 200g*
3. **Flores Bajawa Honey** — Notes: Caramel, nutty, citrus zest. *Rp 130.000 / 200g*
4. **House Blend "Rimbun"** — Notes: Balanced, chocolate, low acidity. *Rp 110.000 / 200g*

### Brewing Method
- **Heading:** Setiap Metode, Karakter Baru
- **Body:** Tidak ada cara yang salah menyeduh kopi. Hanya cara yang berbeda untuk menemukan rasanya.

Cards: V60 • French Press • Aeropress • Tubruk (klik buat expand recipe)

### Roastery Process
- **Heading:** Dari Green Bean ke Cangkirmu
- **Body:** Kami roasting dalam batch kecil (max 5kg) setiap hari Senin dan Kamis. Kopi yang sampai ke tanganmu tidak pernah lebih dari 7 hari sejak roast date.

### Wholesale CTA
- **Heading:** Buka Cafe? Mari Berkolaborasi.
- **Body:** Kami suplai 40+ cafe di Indonesia dengan harga khusus, training barista, dan custom blend. Minimum order 5kg.
- **CTA:** Diskusi Kerjasama

### Testimonial
- **Heading:** Yang Mereka Bilang
- 3 testimonial: home brewer, cafe owner, food blogger

### Footer
- Tagline: *"Diseduh dengan cinta, dari rimba Indonesia."*
- Kontak: WA, email, alamat roastery Bandung
- Newsletter: "Dapatkan update biji kopi baru setiap bulan"

---

## 5. Image References

> Catatan: URL pattern Unsplash format `https://images.unsplash.com/photo-[id]`. Untuk Claude Code, fetch via Unsplash search API atau download manual dari URL berikut.

| Section | Source | URL / Search Term | Alt Text | Dimensi |
|---------|--------|-------------------|----------|---------|
| Hero BG | Unsplash | https://unsplash.com/s/photos/coffee-roastery-dark | "Biji kopi dipanggang di roastery" | 1920x1080 |
| About | Unsplash | https://unsplash.com/s/photos/coffee-farmer-indonesia | "Petani kopi memanen ceri merah" | 1200x800 |
| Featured Bean 1 | Pexels | https://www.pexels.com/search/coffee%20beans%20bag/ | "Kemasan kopi Aceh Gayo" | 800x800 |
| Featured Bean 2 | Pexels | https://www.pexels.com/search/coffee%20beans%20package/ | "Kemasan Toraja Sapan" | 800x800 |
| Featured Bean 3 | Pexels | https://www.pexels.com/search/specialty%20coffee%20bag/ | "Kemasan Flores Bajawa" | 800x800 |
| Brewing - V60 | Unsplash | https://unsplash.com/s/photos/v60-pourover | "V60 pour over brewing" | 600x800 |
| Brewing - French Press | Unsplash | https://unsplash.com/s/photos/french-press-coffee | "French press kopi" | 600x800 |
| Brewing - Aeropress | Unsplash | https://unsplash.com/s/photos/aeropress | "Aeropress coffee maker" | 600x800 |
| Roastery Process | Unsplash | https://unsplash.com/s/photos/coffee-roasting-machine | "Mesin roasting kopi batch" | 1600x900 |
| Wholesale | Unsplash | https://unsplash.com/s/photos/cafe-bar | "Cafe minimalis modern" | 1200x800 |
| Testimonial avatars | Pexels | https://www.pexels.com/search/indonesian%20portrait/ | Portrait Indonesian | 200x200 |

**Tip implementation:** Gunakan `astro:assets` untuk auto-optimize. Format `.webp` dengan fallback `.jpg`.

---

## 6. Animation Spec (Framer Motion)

### Hero (React island, `client:load`)
```tsx
// Variants
const heroVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.15 }
  }
}

// Background image: subtle Ken Burns effect
scale: [1, 1.05], duration: 20s, repeat: Infinity, repeatType: "reverse"
```

### Featured Beans (React island, `client:visible`)
- **Trigger:** `whileInView` dengan `viewport: { once: true, margin: "-100px" }`
- **Stagger children:** delay 0.1s per card
- **Card hover:** `scale: 1.03`, `y: -5`, shadow elevation
- **Image hover:** `scale: 1.1` dalam container `overflow-hidden`

### Brewing Method Cards (React island, `client:visible`)
- Layout animation: expand card on click pakai `layoutId`
- Smooth transition `type: "spring", stiffness: 200, damping: 25`

### Testimonial (React island, `client:visible`)
- Auto-rotate carousel pakai `AnimatePresence` mode `wait`
- Slide direction berdasarkan index (left/right)
- Pause on hover

### Scroll Reveal Pattern (reusable)
```tsx
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}
```

### Hydration Strategy
- `client:load` → Hero only
- `client:visible` → Section di bawah fold (Featured Beans, Brewing, Testimonial)
- `client:idle` → Newsletter form (jika ada)
- Sisanya: static `.astro` (no JS)

---

## 7. SEO Meta

- **Title:** Rimbun Coffee Roastery — Specialty Coffee Indonesia, Single-Origin Beans
- **Description:** Specialty coffee Indonesia dari Aceh, Toraja, & Flores. Single-origin beans, fresh roasted di Bandung. Pesan online & nikmati kopi terbaik nusantara.
- **Keywords:** kopi specialty, kopi single origin, kopi aceh gayo, kopi toraja, beans indonesia
- **OG Image:** Hero shot biji kopi close-up dengan logo overlay (1200x630)
- **Schema:** `LocalBusiness` + `Product` schema untuk SEO produk
