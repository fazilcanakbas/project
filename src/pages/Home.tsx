import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, MapPin, Play, Award, Users, Building2 } from 'lucide-react';
import havacilar from '../havacilar.mp4';

const featuredProjects = [
  {
    id: 1,
    title: 'Premium Residence Projesi',
    type: 'Gayrimenkul',
    image: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Modern yaşamın kalbi İstanbul\'da premium konut projesi',
    location: 'İstanbul',
  },
  {
    id: 2,
    title: 'Havacılık Eğitim Merkezi',
    type: 'Havacılık',
    image: 'https://images.pexels.com/photos/62623/wing-plane-flying-airplane-62623.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Gelecek nesil pilotların yetiştirileceği modern eğitim merkezi',
    location: 'Ankara',
  },
  {
    id: 3,
    title: 'Business Center Complex',
    type: 'Gayrimenkul',
    image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'İş dünyasının merkezi konumunda modern ofis kompleksi',
    location: 'İzmir',
  },
];

const recentNews = [
  {
    id: 1,
    title: 'Yeni Havacılık Projesinde Önemli Gelişme',
    date: '2025-01-15',
    excerpt: 'Ankara\'daki havacılık eğitim merkezi projemizde yeni aşamaya geçiyoruz...',
  },
  {
    id: 2,
    title: 'Gayrimenkul Portföyümüze Yeni Ekleme',
    date: '2025-01-10',
    excerpt: 'İstanbul\'un en gözde lokasyonunda yeni konut projemiz başlıyor...',
  },
  {
    id: 3,
    title: 'Sürdürülebilir Yatırım Stratejilerimiz',
    date: '2025-01-05',
    excerpt: 'Çevre dostu ve sürdürülebilir yatırım yaklaşımımızla geleceği şekillendiriyoruz...',
  },
];

const MouseIcon = () => (
  <motion.div
    className="flex justify-center my-4"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 1.7, repeat: Infinity, repeatType: "reverse" }}
  >
    <div className="w-7 h-12 border-2 border-white/50 rounded-full flex justify-center items-start bg-white/10">
      <div className="w-1 h-4 bg-white rounded-full mt-2 animate-bounce"></div>
    </div>
  </motion.div>
);

const Home = () => {
  return (
    <div className="font-poppins">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Video Background with Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/60 to-transparent z-10"></div>
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={havacilar} type="video/mp4" />
        </video>
        <div className="container mx-auto px-4 z-20 relative">
          <div className="flex items-center justify-center min-h-[80vh]">
            <div className="text-center text-white space-y-10 max-w-5xl mx-auto w-full">
              {/* Badge */}
              <motion.div
                className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-8 py-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <Award className="w-6 h-6 mr-3 text-yellow-400" />
                <span className="text-lg font-medium">15+ Yıllık Güvenilir Deneyim</span>
              </motion.div>
              {/* Main Heading */}
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <span className="block text-white mb-4" style={{ fontFamily: 'Poppins,sans-serif' }}>Yatırımın Geleceği</span>
                <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent mb-4"></span>
                <span className="block text-white" style={{ fontFamily: 'Poppins,sans-serif' }}>Burada Başlıyor</span>
              </motion.h1>
              {/* Description */}
              <motion.p
                className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
              >
                Gayrimenkul ve havacılık sektörlerinde öncü projelerle,
                <span className="text-cyan-300 font-semibold"> güvenilir yatırım </span>
                fırsatları sunuyoruz.
              </motion.p>
              {/* Butonlar ve Mouse Ikonu */}
              <motion.div
                className="flex flex-col items-center gap-4 w-full"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
              >
                <div className="flex flex-col sm:flex-row gap-6 justify-center w-full">
                  <Link
                    to="/projeler/gayrimenkul"
                    className="group inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25"
                  >
                    <Building2 className="mr-3 w-5 h-5" />
                    Projelerimizi Keşfet
                    <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <button className="group inline-flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105">
                    <Play className="mr-3 w-5 h-5" />
                    Tanıtım Videosu
                  </button>
                </div>
                <MouseIcon />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6 tracking-tight">
              <span className="inline-flex items-center gap-2 text-blue-600">
                <Users className="w-8 h-8 text-blue-500" />
                Güvenilir Yatırım Ortağınız
              </span>
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-10 font-medium">
              Havacılar olarak, gayrimenkul ve havacılık sektörlerinde uzun yıllara dayanan deneyimimizle müşterilerimize en kaliteli yatırım fırsatlarını sunuyoruz. 
              <span className="block mt-4 text-blue-600 font-semibold">Geleceğin projelerini bugünden hayata geçiriyoruz.</span>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
              <div className="bg-white rounded-xl shadow-lg py-8 px-4 flex flex-col items-center hover:shadow-2xl transition-shadow duration-300">
                <Award className="w-10 h-10 text-yellow-400 mb-3" />
                <div className="text-3xl font-extrabold text-blue-600 mb-2">15+</div>
                <div className="text-gray-600 font-semibold">Yıllık Deneyim</div>
              </div>
              <div className="bg-white rounded-xl shadow-lg py-8 px-4 flex flex-col items-center hover:shadow-2xl transition-shadow duration-300">
                <Building2 className="w-10 h-10 text-blue-500 mb-3" />
                <div className="text-3xl font-extrabold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600 font-semibold">Başarılı Proje</div>
              </div>
              <div className="bg-white rounded-xl shadow-lg py-8 px-4 flex flex-col items-center hover:shadow-2xl transition-shadow duration-300">
                <Users className="w-10 h-10 text-cyan-500 mb-3" />
                <div className="text-3xl font-extrabold text-blue-600 mb-2">1000+</div>
                <div className="text-gray-600 font-semibold">Mutlu Müşteri</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
              <span className="inline-flex items-center gap-2 text-blue-600">
                <Building2 className="w-8 h-8 text-blue-500" />
                Öne Çıkan Projelerimiz
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto font-medium">
              Gayrimenkul ve havacılık alanlarında hayata geçirdiğimiz projelerimizle fark yaratıyoruz.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.12 }}
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-7 flex flex-col gap-2 flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-md font-bold">
                      {project.type}
                    </span>
                    <div className="flex items-center text-gray-500 text-md font-semibold">
                      <MapPin className="w-5 h-5 mr-2" />
                      {project.location}
                    </div>
                  </div>
                  <h3 className="text-xl font-extrabold text-gray-800 mb-1">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 text-md leading-relaxed font-medium mb-3">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="text-center mt-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Link
              to="/projeler/gayrimenkul"
              className="inline-flex items-center bg-blue-600 text-white hover:bg-blue-800 px-10 py-4 rounded-xl font-extrabold text-lg shadow-lg transition-all duration-300"
            >
              Tüm Projeleri Görüntüle
              <ArrowRight className="ml-2 w-6 h-6" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Recent News */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
              <span className="inline-flex items-center gap-2 text-blue-600">
                <Calendar className="w-8 h-8 text-blue-500" />
                Son Duyurular
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto font-medium">
              Projelerimiz ve şirketimizle ilgili en güncel gelişmeleri takip edin.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {recentNews.map((news, index) => (
              <motion.article
                key={news.id}
                className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300 border border-blue-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.11 }}
              >
                <div className="flex items-center text-blue-700 text-md mb-2 font-semibold">
                  <Calendar className="w-5 h-5 mr-2" />
                  {new Date(news.date).toLocaleDateString('tr-TR')}
                </div>
                <h3 className="text-xl font-extrabold text-gray-900 mb-2">
                  {news.title}
                </h3>
                <p className="text-gray-700 leading-relaxed font-medium">
                  {news.excerpt}
                </p>
              </motion.article>
            ))}
          </div>
          <motion.div
            className="text-center mt-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Link
              to="/duyurular"
              className="inline-flex items-center bg-blue-600 text-white hover:bg-blue-800 px-10 py-4 rounded-xl font-extrabold text-lg shadow-lg transition-all duration-300"
            >
              Tüm Duyuruları Görüntüle
              <ArrowRight className="ml-2 w-6 h-6" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;