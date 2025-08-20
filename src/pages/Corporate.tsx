import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, Globe } from 'lucide-react';

const Corporate = () => {
  const teamMembers = [
    {
      name: 'Ahmet Yılmaz',
      position: 'Genel Müdür',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: '20 yıllık deneyimle şirketimizi lider konumuna taşıyan vizyoner lider.',
    },
    {
      name: 'Ayşe Demir',
      position: 'Proje Geliştirme Müdürü',
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Gayrimenkul projelerinde uzman, yaratıcı çözümler üreten deneyimli mimar.',
    },
    {
      name: 'Mehmet Kaya',
      position: 'Havacılık Bölümü Müdürü',
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Havacılık sektöründe 15 yıllık tecrübe ile havacılık projelerimizi yöneten uzman.',
    },
    {
      name: 'Fatma Özkan',
      position: 'Mali İşler Müdürü',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Finansal planlama ve yatırım stratejilerinde uzman, güvenilir mali müşavir.',
    },
  ];

  const values = [
    {
      icon: Target,
      title: 'Misyonumuz',
      description: 'Gayrimenkul ve havacılık sektörlerinde yenilikçi, sürdürülebilir ve kaliteli yatırım projeleri geliştirerek müşterilerimizin güvenini kazanmak ve sektörde öncü olmak.',
    },
    {
      icon: Globe,
      title: 'Vizyonumuz',
      description: 'Türkiye\'nin ve dünyanın saygın yatırım şirketleri arasında yer alarak, gelecek nesillere değer katan projelerle sürdürülebilir bir gelecek inşa etmek.',
    },
    {
      icon: Award,
      title: 'Değerlerimiz',
      description: 'Güvenilirlik, şeffaflık, inovasyon ve müşteri memnuniyetini ön planda tutarak, her projemizde mükemmellik standartlarını yakalama hedefiyle çalışıyoruz.',
    },
  ];

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
            <h1 className="text-5xl font-bold mb-6">Kurumsal</h1>
            <p className="text-xl text-blue-100">
              Güçlü geçmişimiz, vizyoner geleceğimiz ve deneyimli ekibimizle
              yatırım dünyasında fark yaratıyoruz.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Havacılar Hakkında
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  2008 yılında kurulan Havacılar, gayrimenkul ve havacılık sektörlerinde 
                  faaliyet gösteren köklü bir yatırım şirketidir. Kuruluşumuzdan bu yana, 
                  kalite ve güvenilirlik ilkelerimizden ödün vermeden, müşterilerimize 
                  en iyi hizmeti sunma amacıyla çalışmalarımızı sürdürmekteyiz.
                </p>
                <p>
                  Türkiye'nin dört bir yanında gerçekleştirdiğimiz projelerle, hem yerli 
                  hem de yabancı yatırımcılara güvenli ve karlı yatırım fırsatları sunuyoruz. 
                  Deneyimli kadromuz ve güçlü finansal yapımızla, sektörde öncü konumumuzu 
                  korumaya devam ediyoruz.
                </p>
                <p>
                  Sürdürülebilir kalkınma anlayışımız doğrultusunda, çevre dostu teknolojiler 
                  kullanarak geleceğe değer katan projeler geliştiriyoruz. Havacılık alanındaki 
                  uzmanlığımızla da sektöre yenilikçi çözümler getiriyoruz.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Modern office building"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-blue-600 bg-opacity-20 rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Vizyon & Misyon
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              İlkelerimiz ve değerlerimizle şekillenen kurumsal kimliğimiz,
              her projemizde kalite ve güvenin garantisidir.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Uzman Ekibimiz
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Alanında uzman, deneyimli ve vizyoner kadromuzla,
              her projede mükemmelliği hedefliyoruz.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-3">
                    {member.position}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-blue-100">Yıllık Deneyim</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Tamamlanan Proje</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-blue-100">Mutlu Müşteri</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">₺2M+</div>
              <div className="text-blue-100">Yatırım Hacmi</div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Corporate;