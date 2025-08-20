import React from 'react';
import { motion } from 'framer-motion';
import { Plane, MapPin, Users, Calendar, ArrowRight } from 'lucide-react';

const AviationProjects = () => {
  const projects = [
    {
      id: 1,
      title: 'Havacılık Eğitim Merkezi Ankara',
      location: 'Esenboğa, Ankara',
      image: 'https://images.pexels.com/photos/62623/wing-plane-flying-airplane-62623.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Modern simülasyon teknolojileri ile donatılmış pilot eğitim merkezi. Geleceğin havacılarını yetiştiriyoruz.',
      features: ['Flight Simulator', 'Teorik Eğitim Sınıfları', 'Maintenance Hangar', 'Student Residence'],
      capacity: '200 Öğrenci',
      deliveryDate: '2025-09-30',
      status: 'İnşaat Halinde',
    },
    {
      id: 2,
      title: 'Kargo Havaalanı Projesi',
      location: 'Tekirdağ',
      image: 'https://images.pexels.com/photos/723240/pexels-photo-723240.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'E-ticaret ve kargo taşımacılığına özel havaalanı. Lojistik üssü olacak büyük kapasiteli proje.',
      features: ['Cargo Terminal', 'Warehouse Complex', 'Fuel Station', 'Maintenance Facility'],
      capacity: '50 Uçak',
      deliveryDate: '2026-12-31',
      status: 'Planlama Aşamasında',
    },
    {
      id: 3,
      title: 'Helikopter Üretim Tesisi',
      location: 'Kayseri',
      image: 'https://images.pexels.com/photos/87743/pexels-photo-87743.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Yerli helikopter üretimi için kurulacak modern tesis. Ar-Ge merkezi ile entegre çalışacak.',
      features: ['Üretim Hattı', 'Test Sahası', 'Ar-Ge Merkezi', 'Kalite Kontrol'],
      capacity: '24 Helikopter/Yıl',
      deliveryDate: '2027-06-30',
      status: 'Planlama Aşamasında',
    },
    {
      id: 4,
      title: 'Drone Teknoloji Merkezi',
      location: 'Gebze, Kocaeli',
      image: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'İnsansız hava araçları geliştirme ve test merkezi. Sivil ve askeri drone teknolojileri.',
      features: ['Test Sahası', 'Elektronik Lab', 'Yazılım Geliştirme', 'Pilot Training'],
      capacity: '1000 m² Lab',
      deliveryDate: '2025-12-31',
      status: 'İnşaat Halinde',
    },
    {
      id: 5,
      title: 'Aviation Maintenance Hub',
      location: 'Adana Havaalanı',
      image: 'https://images.pexels.com/photos/912050/pexels-photo-912050.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Uçak bakım ve onarım merkezi. Bölgesel havayolları için kapsamlı MRO hizmetleri.',
      features: ['Heavy Maintenance', 'Component Repair', 'Paint Shop', 'Line Maintenance'],
      capacity: '20 Uçak',
      deliveryDate: '2025-08-31',
      status: 'Tamamlandı',
    },
    {
      id: 6,
      title: 'General Aviation Terminal',
      location: 'Çorlu Havaalanı',
      image: 'https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Özel jet ve business aviation terminali. VIP hizmetler ve premium konfor.',
      features: ['VIP Terminal', 'Hangar Services', 'Fuel Station', 'Ground Handling'],
      capacity: '15 Jet',
      deliveryDate: '2025-11-30',
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
            <h1 className="text-5xl font-bold mb-6">Havacılık Yatırım Projeleri</h1>
            <p className="text-xl text-blue-100">
              Türk havacılığının geleceğini şekillendiren yenilikçi projeler geliştiriyor,
              sektöre öncülük ediyoruz.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Aviation Stats */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">6</div>
              <div className="text-gray-600">Aktif Proje</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">300+</div>
              <div className="text-gray-600">Uçak Kapasitesi</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-gray-600">İstihdam</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">₺500M+</div>
              <div className="text-gray-600">Yatırım Hacmi</div>
            </div>
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
                      <Plane className="w-4 h-4 mr-2" />
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
                  
                  <div className="flex items-center justify-between mb-4 p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="w-4 h-4 mr-1" />
                      <span className="font-medium">Kapasite:</span>
                    </div>
                    <span className="font-semibold text-blue-600">{project.capacity}</span>
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

      {/* Innovation Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Havacılıkta İnovasyon
            </h2>
            <p className="text-lg text-gray-600">
              Gelişmiş teknolojiler ve sürdürülebilir çözümlerle havacılık sektörünün
              geleceğini şekillendiren projeler geliştiriyoruz.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Plane className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                İleri Teknoloji
              </h3>
              <p className="text-gray-600">
                En son teknolojileri kullanarak gelecek nesil havacılık altyapısı kuruyoruz.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                İnsan Kaynağı
              </h3>
              <p className="text-gray-600">
                Havacılık alanında uzman personel yetiştirme ve istihdama katkı sağlıyoruz.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Stratejik Konumlar
              </h3>
              <p className="text-gray-600">
                Coğrafi avantajları değerlendirerek stratejik konumlarda projeler geliştiriyoruz.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Havacılık Geleceğine Ortak Olun
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Havacılık projelerimiz hakkında detaylı bilgi almak ve
              yatırım fırsatlarını değerlendirmek için bizimle iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
                Teknik Doküman İndir
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                Yatırım Danışmanlığı Al
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AviationProjects;