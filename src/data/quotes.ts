import { Quote } from '../types';

export const quotes: Quote[] = [
  {
    id: 1,
    title: "Tantangan Teknologi dan Edukasi di Indonesia",
    author: "Seorang pengamat teknologi, dari balik layar",
    date: "September 15, 2023",
    tags: ["Cybersecurity", "Education", "Technology"],
    content: `Saya ingin membagikan sedikit cerita dan hasil pengamatan pribadi saya sebagai seseorang yang selama bertahun-tahun berada "di balik layar" dan cukup aktif dalam memantau perkembangan teknologi, khususnya di Indonesia.

Saat ini, kita sedang menghadapi tantangan besar dalam ranah teknologi—bukan hanya dari sisi perkembangan inovasi, tapi lebih kepada penyalahgunaan teknologi itu sendiri. Salah satu hal yang cukup meresahkan bagi saya adalah semakin maraknya praktik penipuan yang mengatasnamakan edukasi teknologi, khususnya dalam bentuk kursus atau kelas belajar online.

Selama beberapa tahun terakhir, saya bersama dua rekan melakukan riset kecil-kecilan. Kami menggunakan dana pribadi untuk mengikuti berbagai kursus online seputar teknologi, terutama yang menjanjikan pembelajaran tentang cybersecurity, etical hacking, dan hal-hal sejenisnya. Kursus-kursus ini memiliki judul-judul yang cukup bombastis—mulai dari "Menjadi Cybersecurity Expert", "Sekolah Hacker", hingga "Kelas Menjadi Hacker Profesional". Harga yang ditawarkan pun sangat bervariasi, mulai dari Rp100.000 hingga puluhan juta rupiah, seolah-olah setara dengan pelatihan resmi seperti Offensive Security Certified Professional (OSCP).

Namun sayangnya, setelah mengikuti berbagai program tersebut, kami mendapati bahwa banyak dari kursus ini sebenarnya hanyalah upaya komersialisasi yang jauh dari esensi edukasi teknologi yang sesungguhnya. Materi-materi yang diajarkan sering kali hanya hasil pencarian dari Google yang diterjemahkan secara bebas, lalu dikemas sedemikian rupa agar terlihat "berkelas" dan "berisi". Ironisnya, sebagian besar pengajar bahkan tidak memiliki rekam jejak nyata di bidang yang mereka ajarkan—tidak ada portofolio, kontribusi terhadap proyek open-source, pengalaman di bidang bug bounty, atau publikasi temuan kerentanan (CVE) yang kredibel.

Dalam beberapa kelas yang saya ikuti, bahkan terasa jelas bahwa sang pengajar tidak benar-benar memahami materi yang mereka presentasikan. Mereka hanya membaca slide atau menjelaskan poin-poin yang mereka ambil dari internet, layaknya seorang penyiar berita, bukan sebagai seorang praktisi. Ini bukan edukasi yang bermutu, melainkan lebih seperti pertunjukan marketing untuk menjual mimpi, alih-alih membangun pengetahuan.

Saya tidak sedang menyudutkan siapa pun secara personal, namun fenomena ini sangat mengkhawatirkan. Bagaimana mungkin kita bisa membangun generasi digital yang kuat, jika sumber daya manusianya (SDM) justru dimanfaatkan dan dimanipulasi untuk kepentingan komersial belaka?

Saya rasa sudah waktunya bagi kita semua untuk lebih kritis dan selektif dalam memilih sumber pembelajaran, terutama di dunia teknologi yang terus berkembang pesat. Jangan hanya tergiur oleh janji-janji instan atau gelar-gelar yang terdengar keren. Edukasi sejati membutuhkan waktu, dedikasi, dan pembuktian—bukan sekadar presentasi kosong yang dikemas dalam bentuk webinar.

Semoga tulisan ini bisa menjadi pengingat, bukan hanya bagi para calon peserta kursus, tetapi juga untuk para pelaku edukasi agar lebih bertanggung jawab dalam menyampaikan ilmu. Teknologi adalah kekuatan yang besar, dan seperti kata pepatah, "Dengan kekuatan besar datang pula tanggung jawab yang besar."

Terima kasih telah membaca.

Salam hangat,
Seorang pengamat teknologi, dari balik layar.`,
    shareEnabled: true,
  },
  {
    id: 2,
    title: "Pentingnya Etika dalam Cybersecurity",
    author: "Seorang pengamat teknologi, dari balik layar",
    date: "Oktober 5, 2023",
    tags: ["Ethics", "Cybersecurity", "Professional"],
    content: `Sebagai seorang praktisi keamanan siber, saya selalu menekankan pentingnya etika dalam setiap aspek pekerjaan kita. Kemampuan teknis tanpa landasan etika yang kuat adalah berbahaya.

Ketika kita berbicara tentang "ethical hacking" atau "penetration testing", kata "ethical" bukanlah sekadar tambahan kosong. Ini adalah inti dari seluruh profesi. Seorang profesional keamanan siber yang beretika tidak hanya memiliki kemampuan untuk menemukan celah keamanan, tetapi juga bijaksana dalam melaporkannya dan membantu memperbaikinya.

Sayangnya, banyak program pelatihan keamanan siber saat ini mengesampingkan aspek etika ini, lebih fokus pada teknik dan alat. Ini menciptakan generasi praktisi yang mungkin terampil secara teknis tetapi kurang memahami tanggung jawab moral yang menyertai kemampuan tersebut.

Kode etik dalam cybersecurity bukan hanya tentang "tidak melakukan kejahatan", tetapi juga tentang secara aktif melindungi privasi, menjaga integritas data, bertindak dengan izin yang jelas, dan selalu mengutamakan keamanan pengguna.

Mari kita jadikan etika sebagai landasan, bukan sebagai afterthought, dalam perjalanan profesional kita di bidang keamanan siber.`,
    shareEnabled: true,
  },
  {
    id: 3,
    title: "Mitos-Mitos dalam Dunia Cybersecurity",
    author: "Seorang pengamat teknologi, dari balik layar",
    date: "November 12, 2023",
    tags: ["Myths", "Cybersecurity", "Awareness"],
    content: `Dunia keamanan siber sering dipenuhi dengan mitos dan kesalahpahaman yang dapat membahayakan organisasi dan individu. Berikut beberapa mitos yang ingin saya luruskan:

1. "Kami terlalu kecil untuk menjadi target" - Serangan siber modern sering bersifat otomatis dan tidak memilih target. Malware dan ransomware tidak peduli ukuran bisnis Anda.

2. "Antivirus sudah cukup untuk melindungi kami" - Keamanan yang efektif adalah berlapis. Antivirus hanyalah satu komponen dari strategi keamanan yang komprehensif.

3. "Keamanan siber adalah masalah IT" - Ini adalah tanggung jawab semua orang. Kesalahan manusia tetap menjadi titik masuk utama untuk banyak serangan.

4. "Kata sandi yang kompleks berarti aman" - Panjang lebih penting daripada kompleksitas. Plus, autentikasi dua faktor adalah keharusan di era sekarang.

5. "Setelah kami menerapkan solusi keamanan, kami aman" - Keamanan adalah proses berkelanjutan, bukan produk yang dibeli sekali.

Pemahaman yang tepat tentang keamanan siber adalah langkah pertama dalam memperkuat postur keamanan kita. Jangan biarkan mitos-mitos ini membuat Anda rentan.`,
    shareEnabled: true,
  }
];