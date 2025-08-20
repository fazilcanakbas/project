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
      {/* Hero Section with Modern Design */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Video Background with Enhanced Overlay */}
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
            {/* Centered Content */}
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
                <span className="block text-white mb-4" style={{ fontFamily:'Poppins ,sans-serif' }}>Yatırımın Geleceği</span>
                <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent mb-4"></span>
                <span className="block text-white" style={{ fontFamily:'Poppins , sans-serif' }} >Burada Başlıyor</span>
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
                {/* Mouse Icon tam ortada, tam iki butonun arasında, üstüne binmez */}
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
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Güvenilir Yatırım Ortağınız
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Havacılar olarak, gayrimenkul ve havacılık sektörlerinde uzun yıllara dayanan deneyimimizle,
              müşterilerimize en kaliteli yatırım fırsatlarını sunuyoruz. Profesyonel ekibimiz ve güçlü 
              partnerliklerimiyle, geleceğin projelerini bugünden hayata geçiriyoruz.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-gray-600">Yıllık Deneyim</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">Başarılı Proje</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
                <div className="text-gray-600">Mutlu Müşteri</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Öne Çıkan Projelerimiz
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Gayrimenkul ve havacılık alanlarında hayata geçirdiğimiz projelerimizle
              fark yaratıyoruz.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {project.type}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      {project.location}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/projeler/gayrimenkul"
              className="inline-flex items-center bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Tüm Projeleri Görüntüle
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Recent News */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Son Duyurular
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Projelerimiz ve şirketimizle ilgili en güncel gelişmeleri takip edin.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentNews.map((news, index) => (
              <motion.article
                key={news.id}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(news.date).toLocaleDateString('tr-TR')}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {news.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {news.excerpt}
                </p>
              </motion.article>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/duyurular"
              className="inline-flex items-center bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Tüm Duyuruları Görüntüle
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;