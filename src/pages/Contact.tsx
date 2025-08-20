import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adres',
      details: ['Merkez Mahallesi, İş Merkezi Caddesi No: 123', 'Kat: 8, Daire: 15', 'Şişli, İstanbul 34381'],
    },
    {
      icon: Phone,
      title: 'Telefon',
      details: ['+90 212 555 0123', '+90 212 555 0124', 'Faks: +90 212 555 0125'],
    },
    {
      icon: Mail,
      title: 'E-posta',
      details: ['info@havacilar.com', 'projeler@havacilar.com', 'yatirim@havacilar.com'],
    },
    {
      icon: Clock,
      title: 'Çalışma Saatleri',
      details: ['Pazartesi - Cuma: 09:00 - 18:00', 'Cumartesi: 09:00 - 13:00', 'Pazar: Kapalı'],
    },
  ];

  const departments = [
    'Genel Bilgi',
    'Gayrimenkul Projeleri',
    'Havacılık Projeleri',
    'Yatırım Danışmanlığı',
    'Satış ve Pazarlama',
    'Teknik Destek',
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
            <h1 className="text-5xl font-bold mb-6">İletişim</h1>
            <p className="text-xl text-blue-100">
              Projelerimiz hakkında bilgi almak veya yatırım fırsatlarını değerlendirmek için
              bizimle iletişime geçin.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
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
              Bize Ulaşın
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Her türlü soru, öneri ve yatırım talepleriniz için aşağıdaki iletişim bilgilerini kullanabilirsiniz.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <info.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {info.title}
                </h3>
                <div className="space-y-2 text-gray-600">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Mesaj Gönder
              </h2>
              <p className="text-gray-600 mb-8">
                Sorularınız için formu doldurarak bize ulaşabilirsiniz. 
                En kısa sürede size geri döneceğiz.
              </p>

              {isSubmitted && (
                <motion.div
                  className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                  <p className="text-green-800">
                    Mesajınız başarıyla gönderildi. En kısa sürede size geri döneceğiz.
                  </p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Ad Soyad *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Adınız ve soyadınız"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-posta *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="ornek@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Konu *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Konu seçiniz...</option>
                    {departments.map((dept) => (
                      <option key={dept} value={dept}>
                        {dept}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mesaj *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Mesajınızı buraya yazın..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Gönderiliyor...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Mesaj Gönder
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Map and Office Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Ofisimiz
              </h2>
              <p className="text-gray-600 mb-8">
                İstanbul merkezindeki ofisimize kolayca ulaşabilirsiniz. 
                Randevu için önceden arayarak gelmek lütfen unutmayın.
              </p>

              {/* Google Maps Placeholder */}
              <div className="bg-gray-200 rounded-lg overflow-hidden mb-8 h-64 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500 font-medium">Google Maps</p>
                    <p className="text-sm text-gray-400">Ofis Konumumuz</p>
                  </div>
                </div>
              </div>

              {/* Office Details */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Havacılar Merkez Ofis
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-gray-800 font-medium">Adres</p>
                      <p className="text-gray-600 text-sm">Merkez Mahallesi, İş Merkezi Caddesi No: 123</p>
                      <p className="text-gray-600 text-sm">Kat: 8, Daire: 15, Şişli, İstanbul</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-gray-800 font-medium">Telefon</p>
                      <p className="text-gray-600 text-sm">+90 212 555 0123</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-gray-800 font-medium">Çalışma Saatleri</p>
                      <p className="text-gray-600 text-sm">Pazartesi - Cuma: 09:00 - 18:00</p>
                      <p className="text-gray-600 text-sm">Cumartesi: 09:00 - 13:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Sıkça Sorulan Sorular
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              En çok merak edilen sorular ve yanıtları.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {[
                {
                  question: 'Yatırım projeleriniz hakkında nasıl bilgi alabilirim?',
                  answer: 'Projelerimiz hakkında detaylı bilgi almak için iletişim formumuzu kullanabilir, telefonla arayabilir veya ofisimize gelerek uzman ekibimizle görüşebilirsiniz.'
                },
                {
                  question: 'Gayrimenkul projelerinizde hangi ödeme seçenekleri var?',
                  answer: 'Projelerimizde esnek ödeme planları sunuyoruz. Peşin ödeme, vade farksız taksit seçenekleri ve kredi desteği imkanları bulunmaktadır.'
                },
                {
                  question: 'Havacılık projelerine nasıl yatırım yapabilirim?',
                  answer: 'Havacılık projelerimize yatırım yapmak için öncelikle yatırım danışmanlarımızla görüşmenizi öneririz. Size uygun yatırım seçeneklerini değerlendirebiliriz.'
                },
                {
                  question: 'Projelerinizin teslim sürelerini nasıl takip edebilirim?',
                  answer: 'Web sitemizin duyurular bölümünden güncel gelişmeleri takip edebilir, proje yöneticilerimizden düzenli bilgi alabilirsiniz.'
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer">
                      <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                      <span className="text-blue-600 group-open:rotate-45 transition-transform duration-300">+</span>
                    </summary>
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </details>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;