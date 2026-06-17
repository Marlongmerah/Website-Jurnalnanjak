/* ================================================
   NAKED TRAVELER — LOGIKA APLIKASI
   Blog Petualangan Gunung Pribadi oleh Mazari
   ================================================ */

// ── DATA BLOG ──
const POSTS = [
  {
    id: 1,
    title: "47 Jam Sendirian di Rinjani: Malam Saat Aku Hampir Menyerah",
    category: "Puncak",
    date: "8 Juni 2026",
    readTime: 12,
    excerpt: "Puncaknya tak terlihat, tertutup awan dan keheningan. Headlamp-ku menembus gelap saat aku mempertanyakan setiap keputusan yang membawaku ke punggung bukit ini pukul 3 pagi.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900&q=80",
    tags: ["Indonesia", "Solo Hiking", "Rinjani", "Lombok"],
    featured: true,
    views: 8420,
    content: `
      <p>Alarm tidak berbunyi. Memang tidak pernah berbunyi saat kamu tidur di ketinggian 2.600 meter dengan kecemasan yang mengendalikan seluruh sistem sarafmu. Aku sudah terbangun sebelum langit bahkan mau berubah menjadi biru.</p>

      <figure style="margin:2rem 0;">
        <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80" alt="Punggung gunung saat fajar" class="inline-img">
        <figcaption style="text-align:center; font-size:0.82rem; color:var(--text-3); margin-top:0.5rem; font-style:italic;"><i class="fa-solid fa-camera"></i> Punggung gunung menjelang fajar — 3.400 mdpl, Rinjani</figcaption>
      </figure>

      <p>Ini percobaan ketigaku mendaki puncak Rinjani — gunung berapi purba Lombok, gunung yang sudah menghancurkanku dua kali sebelumnya karena badai, cedera, dan sekali secara memalukan, tiang tenda patah di base camp. Kali ini aku kembali sendirian. Tanpa pemandu, tanpa rombongan. Hanya aku, carrier 14 kg, dan keangkuhan bodoh yang kerap membawa orang ke dalam masalah di gunung.</p>

      <h2>Mendorong ke Puncak</h2>
      <p>Aku meninggalkan tenda pukul 02.15. Danau kawah tak terlihat di bawahku, ditelan kegelapan dan kabut. Jalur — kalau bisa disebut begitu — adalah kerikil vulkanik lepas yang membuatku terus meluncur mundur setiap dua langkah maju. Headlamp-ku membentuk bayangan panjang di sepanjang punggung bukit.</p>

      <blockquote>"Gunung tidak peduli dengan jadwalmu. Ia punya ritmenya sendiri, dan malam itu, ia memainkan lagu yang sangat lambat."</blockquote>

      <figure style="margin:2rem 0;">
        <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80" alt="Pendakian malam di Rinjani" class="inline-img">
        <figcaption style="text-align:center; font-size:0.82rem; color:var(--text-3); margin-top:0.5rem; font-style:italic;"><i class="fa-solid fa-camera"></i> Jalur kerikil vulkanik menuju puncak — angin kencang sejak ketinggian 3.200 m</figcaption>
      </figure>

      <h2>Momen Saat Aku Hampir Berbalik</h2>
      <p>Waktu menunjukkan pukul 04.45. Aku mungkin 200 meter vertikal dari puncak, dan lututku yang kiri — yang punya masalah tulang rawan lama — mulai mengirim sinyal. Bukan nyeri yang menjerit. Hanya percakapan persisten. Yang berkata: <em>hei, ingat aku? Aku masih di sini.</em></p>

      <p>Aku duduk di atas sebuah batu besar dan menghitung kemungkinan. 200 m ke atas, 1.200 m ke bawah. Turun di atas kerikil lepas dengan lutut bermasalah akan sangat brutal. Aku pernah melihat orang dievakuasi dari gunung karena hal yang lebih sepele.</p>

      <h2>Kenapa Aku Tetap Melanjutkan</h2>
      <p>Jujur? Aku tidak punya jawaban yang mendalam. Aku membalut lutut dengan perban elastis yang sudah kuantongi sejak awal untuk momen persis seperti ini, berdiri, dan terus berjalan. Bukan dengan gagah. Bukan dengan heroik. Hanya karena duduk diam di 3.500 m itu cepat sekali membuatmu kedinginan.</p>

      <figure style="margin:2rem 0;">
        <img src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80" alt="Pemandangan dari puncak Rinjani" class="inline-img">
        <figcaption style="text-align:center; font-size:0.82rem; color:var(--text-3); margin-top:0.5rem; font-style:italic;"><i class="fa-solid fa-camera"></i> Danau Segara Anak dari Puncak Rinjani 3.726 mdpl — 6:08 pagi</figcaption>
      </figure>

      <p>Aku mencapai puncak — Puncak Rinjani di 3.726 mdpl — pukul 06.08. Awan sudah tersibak. Danau kawah Segara Anak berbentuk cakram biru toska yang sempurna di bawahku. Langit berwarna biru yang tidak ada di permukaan laut. Aku duduk di sana selama 41 menit dan tidak mengambil satu foto pun selama lima belas menit pertama.</p>

      <blockquote>"Beberapa momen terlalu besar untuk sebuah kamera. Ini salah satunya."</blockquote>

      <h2>Apa yang Diajarkan Gunung Kepadaku</h2>
      <p>Aku belajar lebih banyak dari gunung daripada dari buku apapun, mentor manapun, atau pengalaman hidup yang dikemas dan dijual sebagai kebijaksanaan. Mereka mengajarimu melalui kesulitan, bukan melalui penjelasan. Rinjani tidak peduli bahwa aku lelah, takut, atau sedang merawat cedera lama. Ia hanya ada di sana, melakukan apa yang biasa ia lakukan.</p>

      <p>Itulah pelajarannya. Gunung hadir sepenuhnya. Pertanyaannya selalu: apakah kamu juga akan hadir sepenuhnya?</p>
    `
  },
  {
    id: 2,
    title: "Kemping di Atas Awan: Laporan Pendakian Rute Mont Blanc",
    category: "Kemping",
    date: "21 Mei 2026",
    readTime: 9,
    excerpt: "Tour du Mont Blanc adalah jalur jarak jauh paling terkenal di Eropa. Inilah yang tidak diceritakan panduan perjalanan tentang memasangnya secara solo di akhir Mei.",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80",
    tags: ["Alpen", "Eropa", "Kemping", "Jarak Jauh"],
    featured: false,
    views: 5210,
    content: `
      <p>Tour du Mont Blanc mengelilingi massif Mont Blanc melintasi tiga negara — Prancis, Italia, dan Swiss — mencakup sekitar 170 kilometer dan 10.000 meter akumulasi ketinggian. Kebanyakan orang melakukannya dalam 11 hari dengan akomodasi penginapan. Aku melakukannya dalam 9 hari dengan tenda. Inilah yang kupelajari.</p>

      <figure style="margin:2rem 0;">
        <img src="https://images.unsplash.com/photo-1487730116645-74489c95b41b?w=800&q=80" alt="Tenda di Pegunungan Alpen" class="inline-img">
        <figcaption style="text-align:center; font-size:0.82rem; color:var(--text-3); margin-top:0.5rem; font-style:italic;"><i class="fa-solid fa-camera"></i> Bivak di zona yang diizinkan, sisi Italia TMB — pemandangan Grandes Jorasses langsung dari dalam tenda</figcaption>
      </figure>

      <h2>Kenapa Kemping Mengubah Segalanya</h2>
      <p>Ketika kamu berkemah di TMB, kamu menghuni gunung yang berbeda dari yang dialami pendaki di penginapan berpenghangat. Kamu bangun sebelum kerumunan jalur tiba. Kamu menyaksikan cahaya alpen menyalakan Grandes Jorasses dari dalam tendamu, kopi di tangan. Kamu juga menghadapi tanah dingin, kondensasi, dan pertanyaan eksistensial apakah suara di luar itu binatang kecil atau sesuatu yang lebih besar.</p>

      <blockquote>"Tidur di gunung tidak seperti tidur. Lebih seperti beristirahat di antara momen-momen kesadaran yang mendalam."</blockquote>

      <figure style="margin:2rem 0;">
        <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80" alt="Jalur TMB" class="inline-img">
        <figcaption style="text-align:center; font-size:0.82rem; color:var(--text-3); margin-top:0.5rem; font-style:italic;"><i class="fa-solid fa-camera"></i> Jalur di atas col, sisi Prancis TMB — pandangan langsung ke massif Mont Blanc</figcaption>
      </figure>

      <h2>Tempat Kemping Terbaik</h2>
      <p>Tidak semua tempat mengizinkan kemping bebas di TMB, terutama di Prancis. Namun ada zona bivak yang ditentukan dan beberapa tempat di mana mendirikan tenda secara diskret saat senja ditoleransi. Favoritku: col di atas Les Contamines dengan massif Mont Blanc langsung di depan, dan sisi Italia di bawah Rifugio Bonatti tempat matahari terbenam sungguh indah.</p>
    `
  },
  {
    id: 3,
    title: "10 Perlengkapan yang Benar-Benar Penting (Setelah 340 Malam di Tenda)",
    category: "Perlengkapan",
    date: "5 Mei 2026",
    readTime: 7,
    excerpt: "Setelah 340 malam tidur di luar dan menguji lebih banyak perlengkapan dari yang bisa kuhitung, aku sudah mempersempitnya. Inilah yang benar-benar penting ketika jalur menjadi sulit.",
    image: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?w=800&q=80",
    tags: ["Perlengkapan", "Tips", "Kemping", "Backpacking"],
    featured: false,
    views: 12300,
    content: `
      <p>Aku sudah menguji perlengkapan outdoor secara serius sejak 2019. Aku pernah membawa carrier terlalu berat, tenda yang gagal, sepatu bot yang menghancurkan pergelangan kakiku, dan sleeping bag yang berbohong tentang rating suhunya. Yang berikut adalah pengetahuan yang didapat dengan susah payah.</p>

      <figure style="margin:2rem 0;">
        <img src="https://images.unsplash.com/photo-1527004013197-933b6d79ad4e?w=800&q=80" alt="Perlengkapan outdoor" class="inline-img">
        <figcaption style="text-align:center; font-size:0.82rem; color:var(--text-3); margin-top:0.5rem; font-style:italic;"><i class="fa-solid fa-camera"></i> Tata letak perlengkapan sebelum pendakian multi-hari — setiap gram diperhitungkan</figcaption>
      </figure>

      <h2>10 yang Benar-Benar Penting</h2>
      <p><strong>1. Sistem tidur yang kamu percaya sepenuhnya.</strong> Malam dingin merusak segalanya. Jangan berhemat pada sleeping bag atau matras. <strong>2. Jaket hujan yang andal.</strong> Bukan tahan air — tapi benar-benar kedap air. Ada perbedaan besar yang terasa di 2.000 m di bulan November.</p>

      <blockquote>"Perlengkapan terbaik adalah yang kamu lupakan bahwa kamu sedang memakainya. Sisanya adalah pengingat bahwa kamu membuat pilihan buruk di trailhead."</blockquote>

      <p><strong>3. Trekking pole.</strong> Bukan untuk jalur datar. Untuk semua hal lainnya, mereka menyelamatkan lututmu. <strong>4. Headlamp 400+ lumen.</strong> Untuk push summit sebelum fajar. <strong>5. Filter air, bukan tablet.</strong> Tablet bekerja tapi rasanya seperti kolam renang. <strong>6. Jaket down yang bisa dikompresi.</strong> Muat di saku, hangat, tak tergantikan di ketinggian. <strong>7. Kaos kaki yang bagus.</strong> Darn Tough. Selesai bicara.</p>
    `
  },
  {
    id: 4,
    title: "Solo Trekking Annapurna Circuit: Minggu Pertama",
    category: "Solo Travel",
    date: "18 April 2026",
    readTime: 10,
    excerpt: "Annapurna Circuit adalah salah satu trekking terbaik di dunia. Minggu pertama membawa kamu dari lembah tropis ke tepi zona dingin Himalaya.",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80",
    tags: ["Nepal", "Himalaya", "Solo Travel", "Annapurna"],
    featured: false,
    views: 7890,
    content: `
      <p>Annapurna Circuit dulunya disebut trekking terbesar di dunia. Hari ini, jalan yang mengikuti sebagian besar rute bawah telah mengubah pengalaman itu secara dramatis. Tapi jika kamu tahu di mana meninggalkan jalan — dan ada banyak tempat seperti itu — keajaibannya masih sepenuhnya ada.</p>

      <figure style="margin:2rem 0;">
        <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80" alt="Pemandangan Himalaya" class="inline-img">
        <figcaption style="text-align:center; font-size:0.82rem; color:var(--text-3); margin-top:0.5rem; font-style:italic;"><i class="fa-solid fa-camera"></i> Lembah Marsyangdi dari jalur hari ke-2 — vegetasi berubah dari tropis ke subalpine dalam dua hari berjalan</figcaption>
      </figure>

      <h2>Hari 1–3: Besisahar ke Chame</h2>
      <p>Tiga hari pertama adalah pengantar yang lembut. Jalur mengikuti Sungai Marsyangdi ke hulu melalui sawah terasering dan desa-desa Gurung kecil. Hutan rododendron melapisi jalur di bulan April, mekar merah dan merah muda di ketinggian. Udaranya terasa seperti ketinggian sebelum kamu benar-benar mendapatkan ketinggian — kejelasan yang tak terdefinisi yang sepertinya Nepal miliki secara eksklusif.</p>

      <blockquote>"Berjalan di Nepal terasa seperti berjalan di dalam pelajaran geografi yang seseorang putuskan untuk dibuat sangat, sangat indah."</blockquote>
    `
  },
  {
    id: 5,
    title: "Cara Latihan untuk Pendakian Gunungmu yang Pertama (Secara Realistis)",
    category: "Pendakian",
    date: "30 Maret 2026",
    readTime: 8,
    excerpt: "Kebanyakan panduan latihan mengasumsikan kamu punya gym, waktu tak terbatas, dan lutut sempurna. Panduan ini tidak. Inilah cara sebenarnya mempersiapkan diri untuk ketinggian.",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80",
    tags: ["Latihan", "Pemula", "Pendakian", "Tips"],
    featured: false,
    views: 15600,
    content: `
      <p>Kamu tidak perlu lari maraton untuk mendaki gunung. Kamu memang perlu realistis tentang apa yang diminta gunung, dan jujur tentang posisimu saat ini. Berikut rencana 12 minggu berdasarkan apa yang benar-benar berhasil.</p>

      <figure style="margin:2rem 0;">
        <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80" alt="Latihan pendakian gunung" class="inline-img">
        <figcaption style="text-align:center; font-size:0.82rem; color:var(--text-3); margin-top:0.5rem; font-style:italic;"><i class="fa-solid fa-camera"></i> Simulasi pendakian selama latihan — jalur bukit lokal dengan carrier penuh, Semarang</figcaption>
      </figure>

      <h2>Fondasi: Minggu 1-4</h2>
      <p>Sebelum melakukan apapun, mulailah berjalan. Bukan jogging. Berjalan. Berjalan jauh dan lama dengan daypack yang secara bertahap semakin berat. Mulai dengan 1 jam, bangun hingga 3 jam. Lakukan ini empat kali seminggu. Ini membangun daya tahan spesifik yang diminta gunung — output aerobik yang berkelanjutan pada kecepatan stabil selama berjam-jam.</p>

      <blockquote>"Gunung tidak peduli seberapa cepat kamu berlari. Ia peduli seberapa lama kamu bisa terus bergerak tanpa duduk."</blockquote>

      <h2>Minggu 5-8: Tambahkan Elevasi</h2>
      <p>Temukan bukit. Bukit manapun. Jalan naik. Jalan turun. Jalan naik lagi. Turunan sama pentingnya dengan tanjakan — kekuatan quadriceps untuk turun mencegah kerusakan lutut yang mengakhiri ekspedisi di hari ketiga. Jika kamu punya tangga, gunakan secara agresif.</p>
    `
  },
  {
    id: 6,
    title: "Matahari Terbit di 4.000 m: Kenapa Aku Terus Kembali ke Semeru",
    category: "Puncak",
    date: "12 Maret 2026",
    readTime: 6,
    excerpt: "Puncak tertinggi Jawa ini tidak sulit secara teknis. Tapi ada sesuatu tentang matahari terbit Semeru yang memanggilku kembali empat kali. Kali ini aku mencoba memahami kenapa.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    tags: ["Indonesia", "Jawa", "Puncak", "Matahari Terbit"],
    featured: false,
    views: 6340,
    content: `
      <p>Semeru bukan gunung tersulit yang pernah kudaki. Pada 3.676 mdpl, bahkan bukan yang tertinggi di Indonesia — gelar itu milik puncak-puncak Papua. Tapi aku sudah mendaki Semeru empat kali sekarang, dan aku tidak sepenuhnya memahami kenapa aku terus kembali.</p>

      <figure style="margin:2rem 0;">
        <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80" alt="Matahari terbit di Semeru" class="inline-img">
        <figcaption style="text-align:center; font-size:0.82rem; color:var(--text-3); margin-top:0.5rem; font-style:italic;"><i class="fa-solid fa-camera"></i> Matahari terbit ke-4 dari Mahameru — warna yang tidak pernah sama dua kali</figcaption>
      </figure>

      <h2>Pendekatan</h2>
      <p>Jalur dari Ranu Pani ke puncak sepanjang 17 kilometer sekali jalan. Bagian pertama berkelok melalui hutan dataran tinggi hijau, melewati dua danau kawah — Ranu Kumbolo, tempat kebanyakan pendaki berkemah, memantulkan matahari terbenam yang sempurna di airnya yang dingin dan tenang.</p>

      <blockquote>"Beberapa gunung kamu daki sekali dan mereka sudah selesai denganmu. Yang lain membiarkan pintu tetap terbuka. Semeru terus meninggalkan milikku sedikit terbuka."</blockquote>
    `
  },
  {
    id: 7,
    title: "Mendaki Malam: Panduan Lengkap Jalur Sebelum Fajar",
    category: "Pendakian",
    date: "28 Februari 2026",
    readTime: 7,
    excerpt: "Dunia berubah total antara tengah malam dan matahari terbit. Mendaki di malam hari tidak berbahaya jika kamu tahu apa yang dilakukan. Inilah yang perlu kamu tahu.",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80",
    tags: ["Pendakian Malam", "Tips", "Keamanan", "Bintang"],
    featured: false,
    views: 9800,
    content: `
      <p>Kebanyakan kecelakaan jalur terjadi antara pukul 12 siang dan 4 sore — ketika pendaki lelah, dehidrasi, dan bergegas untuk selesai. Mendaki malam menghilangkan sebagian besar variabel ini. Kamu segar. Udaranya dingin. Jalurnya kosong. Dan jika kamu berada di tempat yang tepat pada waktu yang tepat, bintang-bintangnya sungguh tak terlukiskan.</p>

      <figure style="margin:2rem 0;">
        <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80" alt="Jalur malam di gunung" class="inline-img">
        <figcaption style="text-align:center; font-size:0.82rem; color:var(--text-3); margin-top:0.5rem; font-style:italic;"><i class="fa-solid fa-camera"></i> Jalur malam menuju pos 3 Semeru — Bima Sakti terlihat jelas di atas kepala</figcaption>
      </figure>

      <blockquote>"Dalam kegelapan, jalur menjadi tempat yang berbeda. Suara menguat, jarak menjadi kabur, dan langit menjadi hal terpenting di duniamu."</blockquote>
    `
  },
  {
    id: 8,
    title: "Bromo Pukul 3 Pagi: Lanskap Paling Dramatis yang Pernah Kupijak",
    category: "Pendakian",
    date: "10 Februari 2026",
    readTime: 5,
    excerpt: "Gunung Bromo adalah gunung berapi paling banyak dikunjungi di Indonesia. Pukul 3 pagi, dengan Bima Sakti di atas dan kawah berasap di bawah, rasanya seperti tempat paling sepi di bumi.",
    image: "https://images.unsplash.com/photo-1570081692697-b5f8a50e8ab6?w=800&q=80",
    tags: ["Indonesia", "Bromo", "Gunung Berapi", "Malam"],
    featured: false,
    views: 4450,
    content: `
      <p>Jeep-jeep tiba di titik pandang Bromo pukul 4 pagi, sorot lampu depannya membelah Lautan Pasir, wisatawan terbungkus jaket sewaan menggenggam termos. Aku tiba pukul 3. Perbedaan satu jam itu adalah segalanya.</p>

      <figure style="margin:2rem 0;">
        <img src="https://images.unsplash.com/photo-1570081692697-b5f8a50e8ab6?w=800&q=80" alt="Kawah Bromo dari dekat" class="inline-img">
        <figcaption style="text-align:center; font-size:0.82rem; color:var(--text-3); margin-top:0.5rem; font-style:italic;"><i class="fa-solid fa-camera"></i> Kawah Bromo aktif dari bibir kawah — asap belerang terus mengepul, udara menusuk tulang</figcaption>
      </figure>

      <blockquote>"Bromo pukul 3 pagi tidak terasa seperti destinasi wisata. Rasanya seperti permulaan dunia."</blockquote>

      <p>Saat jeep-jeep tiba dengan muatan pemburu matahari terbit mereka, aku sudah turun. Aku mendapat gunung berapi untuk diriku sendiri selama 47 menit. Sepadan dengan setiap menit dingin yang hilang dari waktu tidur.</p>
    `
  },
  {
    id: 9,
    title: "Checklist Pra-Pendakian Esensialku (Disempurnakan Selama 8 Tahun)",
    category: "Perlengkapan",
    date: "25 Januari 2026",
    readTime: 6,
    excerpt: "Setelah delapan tahun trekking gunung serius, checklist pra-keberangkatanku telah disempurnakan melalui pengalaman, kesalahan, dan segelintir situasi darurat.",
    image: "https://images.unsplash.com/photo-1527004013197-933b6d79ad4e?w=800&q=80",
    tags: ["Checklist", "Persiapan", "Perlengkapan", "Tips"],
    featured: false,
    views: 11200,
    content: `
      <p>Daftar ini bukan untuk pendaki hari libur. Ini untuk trekking multi-hari di medan terpencil di mana kemandirian penting. Sesuaikan dengan konteksmu, tapi jangan lewati kategorinya.</p>

      <figure style="margin:2rem 0;">
        <img src="https://images.unsplash.com/photo-1504851149312-7a075b496cc7?w=800&q=80" alt="Persiapan perlengkapan pendakian" class="inline-img">
        <figcaption style="text-align:center; font-size:0.82rem; color:var(--text-3); margin-top:0.5rem; font-style:italic;"><i class="fa-solid fa-camera"></i> Pengecekan perlengkapan H-1 sebelum berangkat ke Semeru — sistem pengemasan berdasarkan prioritas akses</figcaption>
      </figure>

      <h2>Navigasi &amp; Keselamatan</h2>
      <p>Peta offline sudah diunduh (Maps.me atau Gaia GPS). Peta topografi kertas untuk area tersebut. Kompas dan tahu cara menggunakannya. Peluit darurat. Kantong bivak darurat. Kotak P3K yang disesuaikan untuk bahaya spesifik rutenya. Informasi kontak darurat tertulis — bukan hanya di ponselmu.</p>

      <blockquote>"Perlengkapan yang kamu inginkan pukul 2 pagi dalam badai adalah perlengkapan yang seharusnya kamu bawa. Bawalah perlengkapan itu."</blockquote>
    `
  }
];

// ── DATA GALERI ──
const GALLERY = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    title: "Puncak Rinjani, Lombok",
    location: "3.726 mdpl · Nusa Tenggara Barat",
    caption: "Pemandangan dari puncak tertinggi Lombok saat matahari terbit. Danau Segara Anak terlihat di bawah — pendakian dimulai pukul 02.00, puncak dicapai 06.08. Ini adalah pendakian ketigaku dan yang paling bermakna.",
    tags: ["Rinjani", "Lombok", "Puncak", "Matahari Terbit"]
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    title: "Punggung Gunung Alpen",
    location: "Swiss · Tour du Mont Blanc",
    caption: "Jalur punggung bukit di sisi Swiss saat hari ke-6 TMB. Awan bergerak cepat di bawahku sementara puncak Mont Blanc sesekali terlihat di antara celah-celahnya. Salah satu momen paling sunyi yang pernah kualami.",
    tags: ["Alpen", "Swiss", "TMB", "Awan"]
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80",
    title: "Jalur Menuju Mahameru",
    location: "3.676 mdpl · Lumajang, Jawa Timur",
    caption: "Pasir vulkanik hitam jalur akhir Semeru. Setiap langkah naik, satu langkah melorot. Ini jalur yang mengajarkanku kesabaran lebih dari apapun di hidupku.",
    tags: ["Semeru", "Mahameru", "Jawa", "Vulkanik"]
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80",
    title: "Langit Malam di Gunung",
    location: "Pos 2 Semeru · Ketinggian 2.900 m",
    caption: "Bima Sakti terlihat sempurna dari pos 2 saat transit push puncak. Polusi cahaya nol di atas 2.000 meter. Ini difoto dengan kamera ponsel biasa — langitnya memang sebegitu indah tanpa alat bantu.",
    tags: ["Bima Sakti", "Astrophotography", "Malam", "Semeru"]
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1570081692697-b5f8a50e8ab6?w=800&q=80",
    title: "Kawah Bromo Aktif",
    location: "Taman Nasional Bromo Tengger Semeru · Jawa Timur",
    caption: "Bibir kawah Bromo pukul 03.47 pagi. Asap belerang terus mengepul, angin membawa bau yang khas. Di bawah langit penuh bintang, kawah ini terasa seperti portal ke dunia lain.",
    tags: ["Bromo", "Kawah", "Vulkanik", "Malam"]
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80",
    title: "Himalaya dari Jalur Annapurna",
    location: "Nepal · Annapurna Conservation Area",
    caption: "Panorama deretan puncak Annapurna dari jalur hari ke-5. Ini adalah pertama kalinya aku melihat Himalaya secara langsung, dan tidak ada persiapan yang cukup untuk skala sesungguhnya dari pegunungan ini.",
    tags: ["Himalaya", "Nepal", "Annapurna", "Panorama"]
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80",
    title: "Salju di Jalur Saat Fajar",
    location: "Col de la Croix du Bonhomme · Prancis",
    caption: "Salju awal Juni di salah satu col TMB. Microspike sangat membantu di sini. Fajar di atas salju dengan pegunungan di segala penjuru — ini yang membuatku terus kembali ke pegunungan setiap tahun.",
    tags: ["Salju", "Fajar", "Alpen", "Prancis"]
  }
];

const ALL_TAGS = ["Indonesia", "Alpen", "Nepal", "Solo Hiking", "Rinjani", "Semeru", "Kemping", "Perlengkapan", "Latihan", "Pemula", "Himalaya", "Pendakian Malam", "Bromo", "Bintang", "Tips", "Keamanan"];

// ── STATE ──
let activeCategory = 'all';
let searchQuery = '';
let theme = localStorage.getItem('nt_blog_theme') || 'dark';

// ── PRELOADER ──
function initPreloader() {
  window.addEventListener('load', () => {
    setTimeout(() => {
      document.getElementById('preloader').classList.add('done');
      document.getElementById('hero-bg').classList.add('zoomed');
    }, 1200);
  });
}

// ── TEMA ──
function initTheme() {
  document.documentElement.setAttribute('data-theme', theme);
  updateThemeIcon();
  document.getElementById('theme-toggle').addEventListener('click', () => {
    theme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('nt_blog_theme', theme);
    updateThemeIcon();
  });
}
function updateThemeIcon() {
  document.getElementById('theme-icon').className =
    theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
}

// ── NAVBAR ──
function initNavbar() {
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });
}

// ── PROGRESS BAR ──
function initProgressBar() {
  const bar = document.getElementById('progress-bar');
  window.addEventListener('scroll', () => {
    const total = document.body.scrollHeight - window.innerHeight;
    bar.style.width = total > 0 ? `${(window.scrollY / total) * 100}%` : '0%';
  }, { passive: true });
}

// ── KEMBALI KE ATAS ──
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => btn.classList.toggle('visible', window.scrollY > 500), { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ── TOAST ──
function showToast(msg, icon = 'fa-check-circle') {
  const wrap = document.getElementById('toast-container');
  const t = document.createElement('div');
  t.className = 'toast-msg';
  t.innerHTML = `<i class="fa-solid ${icon}"></i> ${msg}`;
  wrap.appendChild(t);
  setTimeout(() => { t.style.opacity = '0'; t.style.transform = 'translateY(-8px)'; setTimeout(() => t.remove(), 300); }, 2800);
}

// ── STATS HERO ──
function animateHeroStats() {
  const stats = [
    { el: 'stat-posts', target: POSTS.length },
    { el: 'stat-peaks', target: 47 },
    { el: 'stat-countries', target: 18 },
    { el: 'stat-km', target: 8200 }
  ];
  stats.forEach(({ el, target }) => {
    const element = document.getElementById(el);
    if (!element) return;
    let current = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      element.textContent = Math.floor(current).toLocaleString('id-ID');
      if (current >= target) clearInterval(timer);
    }, 20);
  });
}

// ── RENDER ARTIKEL ──
function getFilteredPosts() {
  return POSTS.filter(p => {
    const matchCat = activeCategory === 'all' || p.category === activeCategory;
    const q = searchQuery.toLowerCase();
    const matchSearch = !q ||
      p.title.toLowerCase().includes(q) ||
      p.excerpt.toLowerCase().includes(q) ||
      p.tags.some(t => t.toLowerCase().includes(q)) ||
      p.category.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });
}

function renderPosts() {
  const filtered = getFilteredPosts();
  const featuredContainer = document.getElementById('featured-container');
  const grid = document.getElementById('blog-grid');

  if (filtered.length === 0) {
    featuredContainer.innerHTML = '';
    grid.innerHTML = `<div class="no-results"><i class="fa-solid fa-mountain"></i><p>Tidak ada cerita untuk pencarianmu.<br><small>Coba kata kunci atau kategori lain.</small></p></div>`;
    return;
  }

  const featured = filtered.find(p => p.featured) || filtered[0];
  const rest = filtered.filter(p => p.id !== featured.id);

  featuredContainer.innerHTML = `
    <div class="featured-post reveal" data-id="${featured.id}">
      <div class="featured-img-wrap">
        <img src="${featured.image}" alt="${featured.title}" class="featured-img" loading="lazy">
        <span class="featured-badge"><i class="fa-solid fa-star"></i> Cerita Unggulan</span>
      </div>
      <div class="featured-body">
        <span class="featured-cat tag-chip">${featured.category}</span>
        <h2 class="featured-title">${featured.title}</h2>
        <p class="featured-excerpt">${featured.excerpt}</p>
        <div class="featured-meta">
          <span><i class="fa-regular fa-calendar"></i> ${featured.date}</span>
          <span><i class="fa-regular fa-clock"></i> ${featured.readTime} mnt baca</span>
          <span><i class="fa-regular fa-eye"></i> ${featured.views.toLocaleString('id-ID')}</span>
          <span class="card-read-more">Baca Cerita <i class="fa-solid fa-arrow-right"></i></span>
        </div>
      </div>
    </div>`;

  grid.innerHTML = rest.length === 0 ? '' : rest.map(p => `
    <div class="blog-card reveal" data-id="${p.id}">
      <div class="card-img-wrap">
        <img src="${p.image}" alt="${p.title}" class="card-img" loading="lazy">
        <span class="card-cat-badge tag-chip">${p.category}</span>
      </div>
      <div class="card-body">
        <h3 class="card-title">${p.title}</h3>
        <p class="card-excerpt">${p.excerpt}</p>
        <div class="card-footer">
          <span><i class="fa-regular fa-calendar"></i> ${p.date}</span>
          <span><i class="fa-regular fa-clock"></i> ${p.readTime} mnt</span>
          <span class="card-read-more">Baca <i class="fa-solid fa-arrow-right"></i></span>
        </div>
      </div>
    </div>`).join('');

  document.querySelectorAll('.featured-post, .blog-card').forEach(el => {
    el.addEventListener('click', () => openReader(parseInt(el.dataset.id)));
  });

  observeReveal();
}

// ── SIDEBAR ──
function renderSidebar() {
  const popular = [...POSTS].sort((a, b) => b.views - a.views).slice(0, 4);
  document.getElementById('popular-list').innerHTML = popular.map((p, i) => `
    <div class="popular-item" data-id="${p.id}">
      <div class="popular-num">0${i + 1}</div>
      <div class="popular-info">
        <div class="popular-title">${p.title}</div>
        <div class="popular-date">${p.date} · ${p.readTime} mnt baca</div>
      </div>
    </div>`).join('');

  document.querySelectorAll('.popular-item').forEach(el => {
    el.addEventListener('click', () => openReader(parseInt(el.dataset.id)));
  });

  document.getElementById('tags-cloud').innerHTML = ALL_TAGS.map(tag => `
    <span class="tag-item" data-tag="${tag}">${tag}</span>`).join('');

  document.querySelectorAll('.tag-item').forEach(el => {
    el.addEventListener('click', () => {
      document.getElementById('search-input').value = el.dataset.tag;
      searchQuery = el.dataset.tag;
      document.getElementById('clear-search').style.display = 'flex';
      renderPosts();
      document.getElementById('blog').scrollIntoView({ behavior: 'smooth' });
    });
  });

}

// ── GALERI ──
function renderGallery() {
  const grid = document.getElementById('gallery-grid');
  if (!grid) return;

  grid.innerHTML = GALLERY.map(item => `
    <div class="gallery-masonry-item reveal" data-gal-id="${item.id}">
      <img src="${item.src}" alt="${item.title}" loading="lazy">
      <div class="gallery-masonry-caption">
        <h4>${item.title}</h4>
        <p><i class="fa-solid fa-location-dot"></i> ${item.location}</p>
      </div>
    </div>`).join('');

  document.querySelectorAll('.gallery-masonry-item').forEach(el => {
    el.addEventListener('click', () => openGalleryModal(parseInt(el.dataset.galId)));
  });
}

function openGalleryModal(id) {
  const item = GALLERY.find(g => g.id === id);
  if (!item) return;

  document.getElementById('gal-modal-title').textContent = item.title;
  document.getElementById('gal-modal-loc').textContent = item.location;
  document.getElementById('gal-modal-img').src = item.src;
  document.getElementById('gal-modal-img').alt = item.title;
  document.getElementById('gal-modal-caption').textContent = item.caption;
  document.getElementById('gal-modal-tags').innerHTML = item.tags.map(t =>
    `<span class="tag-chip">${t}</span>`).join('');

  document.getElementById('gallery-backdrop').classList.add('open');
  document.getElementById('gallery-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeGalleryModal() {
  document.getElementById('gallery-backdrop').classList.remove('open');
  document.getElementById('gallery-modal').classList.remove('open');
  document.body.style.overflow = '';
}

// ── FILTER & SEARCH ──
function initFilters() {
  document.getElementById('cat-filter').addEventListener('click', e => {
    const btn = e.target.closest('.cat-btn');
    if (!btn) return;
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeCategory = btn.dataset.cat;
    renderPosts();
  });
}

function initSearch() {
  const input = document.getElementById('search-input');
  const clearBtn = document.getElementById('clear-search');
  input.addEventListener('input', () => {
    searchQuery = input.value;
    clearBtn.style.display = searchQuery ? 'flex' : 'none';
    renderPosts();
  });
  clearBtn.addEventListener('click', () => {
    input.value = ''; searchQuery = '';
    clearBtn.style.display = 'none';
    renderPosts();
  });
  document.getElementById('search-toggle').addEventListener('click', () => {
    document.getElementById('search-section').scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => input.focus(), 500);
  });
}

// ── MODAL BACA ARTIKEL ──
function openReader(postId) {
  const post = POSTS.find(p => p.id === postId);
  if (!post) return;

  const comments = [
    { name: "Rina S.", date: "2 hari lalu", text: "Cerita ini bikin merinding. Deskripsi momen di puncaknya persis kenapa aku terus baca blogmu.", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80" },
    { name: "Dika P.", date: "5 hari lalu", text: "Sebagai orang yang juga pernah naik Rinjani, setiap kata ini benar. Jalur kerikil malam itu brutal banget.", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" }
  ];

  document.getElementById('reader-body-content').innerHTML = `
    <img src="${post.image}" alt="${post.title}" class="reader-hero-img">
    <div class="reader-content">
      <span class="reader-cat tag-chip">${post.category}</span>
      <h1 class="reader-title">${post.title}</h1>
      <div class="reader-meta">
        <div class="reader-author-meta">
          <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80" alt="Ariyansyah">
          <span><strong>Ariyansyah</strong> · Naked Traveler</span>
        </div>
        <span><i class="fa-regular fa-calendar"></i> ${post.date}</span>
        <span><i class="fa-regular fa-clock"></i> ${post.readTime} menit baca</span>
        <span><i class="fa-regular fa-eye"></i> ${post.views.toLocaleString('id-ID')} penayangan</span>
      </div>
      <div class="reader-body">${post.content}</div>
      <div class="reader-tags">${post.tags.map(t => `<span class="tag-chip">${t}</span>`).join('')}</div>
    </div>

    <div class="comment-section">
      <h3 class="comment-title"><i class="fa-solid fa-comments" style="color:var(--terra);margin-right:0.5rem;"></i> Komentar (${comments.length})</h3>
      <div class="comment-list" style="margin-bottom:2rem;">
        ${comments.map(c => `
          <div class="comment-item">
            <div class="comment-header">
              <img src="${c.avatar}" alt="${c.name}" class="comment-avatar">
              <div><div class="comment-author-name">${c.name}</div></div>
              <span class="comment-date">${c.date}</span>
            </div>
            <p class="comment-text">${c.text}</p>
          </div>`).join('')}
      </div>
      <form class="comment-form" id="comment-form">
        <div class="comment-form-row">
          <input type="text" class="comment-input" id="c-name" placeholder="Namamu" required>
          <input type="email" class="comment-input" id="c-email" placeholder="email@kamu.com" required>
        </div>
        <textarea class="comment-input" id="c-text" placeholder="Bagikan pemikiranmu atau pengalaman di jalur..." required></textarea>
        <button type="submit" class="btn btn-terra" style="align-self:flex-start;">
          <i class="fa-solid fa-paper-plane"></i> Kirim Komentar
        </button>
      </form>
    </div>`;

  document.getElementById('comment-form').addEventListener('submit', e => {
    e.preventDefault();
    showToast(`Terima kasih! Komentarmu sudah diposting.`, 'fa-check-circle');
    document.getElementById('comment-form').reset();
  });

  const modal = document.getElementById('reader-modal');
  modal.addEventListener('scroll', () => {
    const inner = modal.querySelector('.reader-inner');
    if (!inner) return;
    const pct = Math.round((modal.scrollTop / (inner.scrollHeight - modal.clientHeight)) * 100);
    document.getElementById('reader-progress-text').textContent = `${isNaN(pct) ? 0 : pct}% dibaca`;
  });

  document.getElementById('reader-backdrop').classList.add('open');
  modal.classList.add('open');
  modal.scrollTop = 0;
  document.body.style.overflow = 'hidden';
  document.getElementById('reader-progress-text').textContent = 'Membaca...';
}

function closeReader() {
  document.getElementById('reader-backdrop').classList.remove('open');
  document.getElementById('reader-modal').classList.remove('open');
  document.body.style.overflow = '';
}

// ── NEWSLETTER ──
function initNewsletter() {
  document.getElementById('nl-form').addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('nl-name').value;
    showToast(`Selamat datang, ${name}! Cerita jalur segera hadir ke emailmu 🏔️`, 'fa-envelope');
    document.getElementById('nl-form').reset();
  });
}

// ── SCROLL REVEAL ──
function observeReveal() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('in'); io.unobserve(entry.target); }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal:not(.in)').forEach(el => io.observe(el));
}

// ── PARALLAX HERO ──
function initHeroParallax() {
  const bg = document.getElementById('hero-bg');
  window.addEventListener('scroll', () => {
    bg.style.transform = `translateY(${window.scrollY * 0.35}px) scale(1.05)`;
  }, { passive: true });
}

// ── SMOOTH SCROLL ──
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const el = document.querySelector(link.getAttribute('href'));
      if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth' }); }
    });
  });
}

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initTheme();
  initNavbar();
  initProgressBar();
  initBackToTop();
  initHeroParallax();
  initFilters();
  initSearch();
  initNewsletter();
  initSmoothScroll();

  // Reader close
  document.getElementById('close-reader').addEventListener('click', closeReader);
  document.getElementById('reader-backdrop').addEventListener('click', closeReader);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeReader(); closeGalleryModal(); } });

  // Gallery modal close
  document.getElementById('close-gallery-modal').addEventListener('click', closeGalleryModal);
  document.getElementById('gallery-backdrop').addEventListener('click', closeGalleryModal);

  renderPosts();
  renderSidebar();
  renderGallery();

  setTimeout(observeReveal, 300);
  setTimeout(animateHeroStats, 1400);
});
