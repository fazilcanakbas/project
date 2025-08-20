import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

const News = () => {
  const newsArticles = [
    {
      id: 1,
      title: 'Ankara Havacılık Eğitim Merkezi Projesi Başladı',
      category: 'Havacılık',
      date: '2025-01-15',
      author: 'Proje Geliştirme Ekibi',
      excerpt: 'Türk havacılığının geleceğine önemli bir katkı sağlayacak Ankara Havacılık Eğitim Merkezi projesi resmi olarak başladı. Modern simülasyon teknolojileri ile donatılacak merkez...',
      image: 'https://images.pexels.com/photos/62623/wing-plane-flying-airplane-62623.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true,
    },
    {
      id: 2,
      title: 'Premium Residence İstanbul Satışları Başlıyor',
      category: 'Gayrimenkul',
      date: '2025-01-12',
      author: 'Satış Ekibi',
      excerpt: 'Boğaz manzaralı Premium Residence İstanbul projesinin satışları 15 Şubat\'ta başlayacak. Lüks yaşamın yeniden tanımlandığı projede...',
      image: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true,
    },
    {
      id: 3,
      title: 'Sürdürülebilir Yatırım Stratejimiz Ödül Aldı',
      category: 'Kurumsal',
      date: '2025-01-10',
      author: 'Kurumsal İletişim',
      excerpt: 'Çevre dostu ve sürdürülebilir yatırım yaklaşımımız "Yeşil Yatırım Ödülleri"nde takdir gördü. LEED sertifikalı projelerimizle...',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 4,
      title: 'Drone Teknoloji Merkezi İnşaatı Hızla Devam Ediyor',
      category: 'Havacılık',
      date: '2025-01-08',
      author: 'Mühendislik Ekibi',
      excerpt: 'Gebze\'de inşa edilen Drone Teknoloji Merkezi projesinde önemli aşamalar tamamlandı. İnsansız hava araçları için Ar-Ge merkezi...',
      image: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 5,
      title: 'Business Center Ankara Sektörde Büyük İlgi Gördü',
      category: 'Gayrimenkul',
      date: '2025-01-05',
      author: 'Pazarlama Ekibi',
      excerpt: 'Çankaya\'da inşa edilen Business Center Ankara projesi iş dünyasından yoğun ilgi görüyor. A sınıfı ofis projesi...',
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 6,
      title: 'Aviation Maintenance Hub Adana Tamamlandı',
      category: 'Havacılık',
      date: '2025-01-03',
      author: 'Proje Tamamlama Ekibi',
      excerpt: 'Adana Havaalanı\'ndaki Aviation Maintenance Hub projesi başarıyla tamamlandı ve hizmete açıldı. MRO hizmetlerinin merkezi...',
      image: 'https://images.pexels.com/photos/912050/pexels-photo-912050.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 7,
      title: 'Garden Villas Bodrum Tasarımları Açıklandı',
      category: 'Gayrimenkul',
      date: '2024-12-28',
      author: 'Mimarlık Ekibi',
      excerpt: 'Bodrum Yalıkavak\'ta inşa edilecek Garden Villas projesi için hazırlanan tasarımlar ilk kez kamuoyuyla paylaşıldı...',
      image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 8,
      title: 'Helikopter Üretim Tesisi İçin Protokol İmzalandı',
      category: 'Havacılık',
      date: '2024-12-25',
      author: 'Yönetim Kurulu',
      excerpt: 'Kayseri\'de kurulacak Helikopter Üretim Tesisi için önemli bir adım atıldı. Protokol imza töreniyle...',
      image: 'https://images.pexels.com/photos/87743/pexels-photo-87743.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const categories = ['Tümü', 'Havacılık', 'Gayrimenkul', 'Kurumsal'];
  const [selectedCategory, setSelectedCategory] = React.useState('Tümü');

  const filteredNews = selectedCategory === 'Tümü' 
    ? newsArticles 
    : newsArticles.filter(article => article.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Havacılık':
        return 'bg-blue-100 text-blue-800';
      case 'Gayrimenkul':
        return 'bg-green-100 text-green-800';
      case 'Kurumsal':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-6">Duyurular</h1>
            <p className="text-xl text-blue-100">
              Projelerimiz, başarılarımız ve şirketimizle ilgili en güncel gelişmeleri
              takip edin.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredNews.filter(article => article.featured).slice(0, 2).map((article, index) => (
              <motion.article
                key={article.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(article.category)}`}>
                      {article.category}
                    </span>
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-medium">
                      ÖNE ÇIKAN
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3 hover:text-blue-600 cursor-pointer">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(article.date).toLocaleDateString('tr-TR')}
                      </div>
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {article.author}
                      </div>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
                      Devamını Oku
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* All News */}
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
              Tüm Duyurular
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Projelerimizin gelişiminden şirket haberlerine kadar tüm güncel bilgiler.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((article, index) => (
              <motion.article
                key={article.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(article.category)}`}>
                      <Tag className="w-3 h-3 inline mr-1" />
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 border-t border-gray-100 pt-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(article.date).toLocaleDateString('tr-TR')}
                    </div>
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {article.author.split(' ')[0]}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More Button */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
              Daha Fazla Yükle
            </button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Güncel Kalın
            </h2>
            <p className="text-gray-300 mb-8">
              En son haberlerimizi ve duyurularımızı kaçırmamak için
              e-bülten listemize katılın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
                Abone Ol
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default News;