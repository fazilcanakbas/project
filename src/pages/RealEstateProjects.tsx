import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Home, Calendar, ArrowRight } from 'lucide-react';

const RealEstateProjects = () => {
  const projects = [
    {
      id: 1,
      title: 'Premium Residence İstanbul',
      location: 'Beşiktaş, İstanbul',
      image: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Boğaz manzaralı luxury rezidans projesi. Modern mimarisiyle İstanbul\'un kalbinde konforlu yaşam.',
      features: ['2+1, 3+1, 4+1 Daire Seçenekleri', 'Boğaz Manzarası', 'SPA & Fitness', 'Kapalı Otopark'],
      deliveryDate: '2025-12-31',
      status: 'İnşaat Halinde',
    },
    {
      id: 2,
      title: 'Business Center Ankara',
      location: 'Çankaya, Ankara',
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Modern ofis kompleksi. İş dünyasının merkezi konumunda, teknoloji dostu akıllı bina sistemleri.',
      features: ['A Sınıfı Ofis', 'Akıllı Bina Sistemleri', 'Konferans Salonları', 'Restoran & Kafe'],
      deliveryDate: '2025-06-30',
      status: 'Satışta',
    },
    {
      id: 3,
      title: 'Garden Villas Bodrum',
      location: 'Yalıkavak, Bodrum',
      image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Deniz manzaralı villa projesi. Tatil ve yaşam konseptini bir araya getiren özel tasarım villalar.',
      features: ['Özel Havuzlu Villalar', 'Deniz Manzarası', 'Peyzaj Bahçeleri', 'Özel Plaj Erişimi'],
      deliveryDate: '2026-03-31',
      status: 'Planlama Aşamasında',
    },
    {
      id: 4,
      title: 'City Mall İzmir',
      location: 'Bornova, İzmir',
      image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Karma kullanımlı ticaret merkezi. Alışveriş, ofis ve yaşam alanlarının buluştuğu modern kompleks.',
      features: ['AVM', 'Rezidans', 'Ofis Alanları', 'Sinema & Eğlence'],
      deliveryDate: '2025-09-30',
      status: 'İnşaat Halinde',
    },
    {
      id: 5,
      title: 'Student Housing Eskişehir',
      location: 'Odunpazarı, Eskişehir',
      image: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Öğrenci konutları projesi. Üniversite öğrencileri için modern, güvenli ve konforlu yaşam alanı.',
      features: ['Öğrenci Dostu Tasarım', 'Ortak Yaşam Alanları', 'Güvenlik', 'Çalışma Salonları'],
      deliveryDate: '2025-08-31',
      status: 'Tamamlandı',
    },
    {
      id: 6,
      title: 'Eco Park Antalya',
      location: 'Lara, Antalya',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Çevre dostu yeşil bina sertifikalı konut projesi. Sürdürülebilir yaşam için tasarlanan modern daireler.',
      features: ['LEED Sertifikalı', 'Güneş Enerjisi', 'Yeşil Çatı', 'Su Geri Dönüşümü'],
      deliveryDate: '2026-01-31',
      status: 'Satışta',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Tamamlandı':
        return 'bg-green-100 text-green-800';
      case 'İnşaat Halinde':
        return 'bg-blue-100 text-blue-800';
      case 'Satışta':
        return 'bg-purple-100 text-purple-800';
      case 'Planlama Aşamasında':
        return 'bg-orange-100 text-orange-800';
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
            <h1 className="text-5xl font-bold mb-6">Gayrimenkul Yatırım Projeleri</h1>
            <p className="text-xl text-blue-100">
              Türkiye'nin dört bir yanında geliştirdiğimiz yenilikçi gayrimenkul projelerimizle
              geleceğe değer katıyoruz.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    {project.location}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                      <Home className="w-4 h-4 mr-2" />
                      Özellikler:
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-1 h-1 bg-blue-600 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(project.deliveryDate).toLocaleDateString('tr-TR')}
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center text-sm">
                      Detaylar
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Yatırım Fırsatlarını Kaçırmayın
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Gayrimenkul projelerimiz hakkında detaylı bilgi almak ve
              yatırım fırsatlarını değerlendirmek için bizimle iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
                Katalog İndir
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                İletişime Geç
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RealEstateProjects;