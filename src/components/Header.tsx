import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const navigation = [
  { name: '센터소개', href: '/#about', type: 'scroll' },
  { name: '사업소개', href: '/#services', type: 'scroll' },
  { name: '이용안내', href: '/#guide', type: 'scroll' },
  { name: '커뮤니티', href: '/community', type: 'link' },
  { name: '오시는길', href: '/location', type: 'link' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: typeof navigation[0]) => {
    if (item.type === 'scroll' && location.pathname === '/') {
      e.preventDefault();
      const id = item.href.replace('/#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    } else if (item.type === 'scroll') {
      // If we're not on home, let normal link behavior handle it or navigate home first
      navigate(item.href);
      setIsOpen(false);
    } else {
      setIsOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-5'
      }`}
    >
      {/* Visual Accent - subtle image pattern/texture at the top */}
      {!scrolled && (
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-primary via-brand-accent to-emerald-400"></div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center relative">
          
          <div className="flex items-center">
            <Link 
              to="/" 
              onClick={(e) => {
                if (location.pathname === '/') {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="flex items-center gap-3 group"
            >
              <div className="relative">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-xl flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform duration-300">
                  <Heart size={28} fill="currentColor" />
                </div>
                {/* Small deco image or icon next to logo */}
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-brand-accent rounded-full border-2 border-white flex items-center justify-center text-[10px] text-white font-bold">
                  S
                </div>
              </div>
              <div className="flex flex-col">
                <span className={`text-xl font-black tracking-tighter leading-none ${scrolled ? 'text-brand-primary' : 'text-slate-900 border-white text-shadow-md'}`}>
                  기산노인복지센터
                </span>
                <span className={`text-[10px] font-bold tracking-[0.2em] uppercase mt-1 opacity-70 ${scrolled ? 'text-slate-500' : 'text-slate-700'}`}>
                  Kisan Senior Care
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={(e) => handleNavClick(e as any, item)}
                className={`px-4 py-2 text-sm font-bold rounded-xl transition-all ${
                  scrolled 
                  ? 'text-slate-600 hover:text-brand-primary hover:bg-slate-100' 
                  : 'text-slate-800 hover:text-brand-primary hover:bg-white/40 drop-shadow-md'
                } ${location.pathname === item.href ? 'text-brand-primary bg-slate-50' : ''}`}
              >
                {item.name}
              </Link>
            ))}
            <div className="h-6 w-[1px] bg-slate-200 mx-4 hidden lg:block"></div>
            <a
              href="tel:0507-1234-5678"
              className="flex items-center gap-2 px-6 py-2.5 bg-brand-primary text-white rounded-xl text-sm font-black hover:bg-emerald-800 transition-all shadow-xl shadow-emerald-900/10 hover:-translate-y-0.5 active:translate-y-0"
            >
              <Phone size={16} fill="currentColor" />
              0507.1234.5678
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2.5 rounded-2xl transition-colors ${scrolled ? 'bg-slate-100 text-slate-600' : 'bg-white/50 backdrop-blur-sm text-slate-900'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="lg:hidden absolute top-full right-0 w-[50%] bg-white shadow-2xl border-l border-t border-slate-100 p-4"
          >
            <div className="space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={(e) => handleNavClick(e as any, item)}
                  className="block px-6 py-4 text-base font-bold text-slate-700 hover:text-brand-primary hover:bg-slate-50 rounded-2xl transition-all"
                >
                  {item.name}
                </Link>
              ))}
              <hr className="my-4 border-slate-100" />
              <a
                href="tel:0507-1234-5678"
                className="flex items-center justify-center gap-2 w-full px-4 py-5 bg-brand-primary text-white rounded-2xl text-lg font-black shadow-xl"
              >
                <Phone size={20} fill="currentColor" />
                간편 유선 상담하기
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

