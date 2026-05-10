/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import QuickLinks from './components/QuickLinks';
import Services from './components/Services';
import NewsSection from './components/NewsSection';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import CommunityPage from './pages/CommunityPage';
import LocationPage from './pages/LocationPage';
import AdminPage from './pages/AdminPage';
import { motion } from 'motion/react';
import { Heart, Phone, ArrowRight } from 'lucide-react';

function HomePage() {
  return (
    <main>
      <Hero />
      <QuickLinks />
      
      {/* Intro Section */}
      <section id="about" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative z-10 inline-block"
              >
                <img 
                  src="https://images.unsplash.com/photo-1579453268571-0a671230e9d9?auto=format&fit=crop&q=80&w=800" 
                  alt="Happy elderly" 
                  className="rounded-[3rem] shadow-2xl max-w-full h-auto"
                />
                <div className="absolute -bottom-10 -right-10 bg-brand-primary p-8 rounded-3xl shadow-xl text-white hidden md:block">
                  <p className="text-4xl font-black mb-1">A+</p>
                  <p className="text-sm font-bold opacity-80 uppercase tracking-widest">Trust Rating</p>
                </div>
              </motion.div>
              {/* Decorative blobs */}
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-amber-100 rounded-full blur-3xl opacity-60 -z-0"></div>
              <div className="absolute -bottom-20 left-1/2 w-48 h-48 bg-emerald-100 rounded-full blur-3xl opacity-60 -z-0"></div>
            </div>
            
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-base font-bold text-brand-primary tracking-widest uppercase mb-4">About Our Center</h2>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-8 leading-tight">
                  행복한 미소가 피어나는 곳,<br className="hidden sm:block" />
                  기산노인복지센터입니다.
                </h3>
                <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                  <p>
                    기산노인복지센터는 '어르신의 존엄과 행복'을 최우선 가치로 삼고 있습니다. 
                    우리는 단순히 신체적 수발을 드는 것을 넘어, 어르신의 마음까지 어루만지는 
                    진심 어린 서비스를 제공하고자 노력합니다.
                  </p>
                  <p>
                    최첨단 시설과 전문 인력을 바탕으로 어르신 각자의 필요와 건강 상태에 맞춘 
                    개별화된 케어 플랜을 수립하며, 지역사회와의 긴밀한 협력을 통해 
                    더욱 안전하고 질 높은 복지 환경을 만들어가고 있습니다.
                  </p>
                </div>
                
                <div className="mt-10 grid grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-secondary rounded-xl flex items-center justify-center text-brand-primary">
                      <Heart size={20} fill="currentColor" />
                    </div>
                    <span className="font-bold text-slate-800">정성 어린 케어</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-secondary rounded-xl flex items-center justify-center text-brand-primary">
                      <Heart size={20} fill="currentColor" />
                    </div>
                    <span className="font-bold text-slate-800">전문가 맞춤 관리</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <div id="services">
        <Services />
      </div>

      <div id="guide" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900">이용 안내</h2>
              <p className="text-slate-600 mt-4">어르신 장기요양보험 신청부터 서비스 개시까지 도와드립니다.</p>
            </div>
            {/* Simple Guide Steps */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
               {[
                 { step: '01', title: '등급 신청', desc: '국민건강보험공단에 신청' },
                 { step: '02', title: '방문 조사', desc: '공단 직원의 상태 확인' },
                 { step: '03', title: '등급 판정', desc: '등급 인정 결과 통보' },
                 { step: '04', title: '계약 및 케어', desc: '센터와 상담 후 시작' },
               ].map((s) => (
                 <div key={s.step} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative overflow-hidden">
                   <span className="text-5xl font-black text-slate-50 absolute -top-2 -left-2">{s.step}</span>
                   <div className="relative z-10">
                     <h4 className="font-bold text-lg mb-2">{s.title}</h4>
                     <p className="text-sm text-slate-500">{s.desc}</p>
                   </div>
                 </div>
               ))}
            </div>
        </div>
      </div>

      <NewsSection />

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-primary rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-1/2"></div>
            <div className="relative z-10 text-center max-w-3xl mx-auto text-white">
              <h3 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
                어르신의 건강한 내일을 위해<br />
                지금 바로 전문가와 상담하세요.
              </h3>
              <p className="text-lg opacity-80 mb-12 font-medium">
                장기요양등급 신청부터 서비스 이용까지 모든 과정을 친절하고 상세하게 안내해 드립니다.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a 
                  href="tel:0507-1234-5678" 
                  className="w-full sm:w-auto px-12 py-6 bg-white text-brand-primary rounded-2xl font-black text-2xl shadow-2xl hover:scale-105 transition-transform flex items-center justify-center gap-3"
                >
                  <Phone size={24} fill="currentColor" />
                  0507.1234.5678
                </a>
                <button className="w-full sm:w-auto px-10 py-6 border-2 border-white/40 bg-white/10 backdrop-blur-md text-white rounded-2xl font-bold hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                  카카오톡 상담하기 <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/location" element={<LocationPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

