import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo1 from '../havacilarlogo.png'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Anasayfa', path: '/' },
    { name: 'Kurumsal', path: '/kurumsal' },
    {
      name: 'Projeler',
      path: '#',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Gayrimenkul Yatırım Projeleri', path: '/projeler/gayrimenkul' },
        { name: 'Havacılık Yatırım Projeleri', path: '/projeler/havacilik' },
      ],
    },
    { name: 'Duyurular', path: '/duyurular' },
    { name: 'İletişim', path: '/iletisim' },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <img
              src={logo1}
              style={{ width: 'auto', height: '52px' }}
              alt="Havacılar Logo"
              className="h-13 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-12 ml-auto mr-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsProjectsDropdownOpen(true)}
                    onMouseLeave={() => setIsProjectsDropdownOpen(false)}
                  >
                    <button
                      className={`flex items-center space-x-1 text-lg font-semibold transition-colors duration-300 ${
                        isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-200'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    
                    <AnimatePresence>
                      {isProjectsDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-100"
                        >
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.path}
                              className="block px-6 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg"
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`text-lg font-semibold transition-colors duration-300 ${
                      location.pathname === item.path
                        ? (isScrolled ? 'text-blue-600' : 'text-blue-200')
                        : (isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-200')
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 ${isScrolled ? 'text-gray-800' : 'text-white'}`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Mobile Menu Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              
              {/* Mobile Menu Panel */}
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="lg:hidden fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-8">
                    <img
                      src={logo1}
                      style={{ width: 'auto', height: '40px' }}
                      alt="Havacılar Logo"
                      className="h-10 w-auto"
                    />
                    <button
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <X className="w-6 h-6 text-gray-600" />
                    </button>
                  </div>
                  
                  <nav className="space-y-2">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {item.hasDropdown ? (
                          <>
                            <button
                              onClick={() => setIsProjectsDropdownOpen(!isProjectsDropdownOpen)}
                              className="flex items-center justify-between w-full px-4 py-4 text-gray-800 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-200 text-lg font-medium"
                            >
                              <span>{item.name}</span>
                              <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isProjectsDropdownOpen ? 'rotate-180' : ''}`} />
                            </button>
                            <AnimatePresence>
                              {isProjectsDropdownOpen && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  className="ml-4 space-y-1"
                                >
                                  {item.dropdownItems?.map((dropdownItem) => (
                                    <Link
                                      key={dropdownItem.name}
                                      to={dropdownItem.path}
                                      className="block px-4 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-200 font-medium"
                                      onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                      {dropdownItem.name}
                                    </Link>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </>
                        ) : (
                          <Link
                            to={item.path}
                            className={`block px-4 py-4 rounded-lg transition-all duration-200 text-lg font-medium ${
                              location.pathname === item.path
                                ? 'bg-blue-600 text-white'
                                : 'text-gray-800 hover:bg-blue-50 hover:text-blue-600'
                            }`}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        )}
                      </motion.div>
                    ))}
                  </nav>
                  
                  {/* Mobile Menu Footer */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="border-t border-gray-200 pt-6">
                      <p className="text-sm text-gray-500 text-center">
                        Güvenilir Yatırım Ortağınız
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;