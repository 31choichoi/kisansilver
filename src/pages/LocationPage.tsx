import Header from '../components/Header';
import Footer from '../components/Footer';
import { MapPin, Phone, Clock, Bus, Car } from 'lucide-react';
import { motion } from 'motion/react';

export default function LocationPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">오시는 길</h1>
            <p className="text-lg text-slate-600">기산노인복지센터로 방문하시는 길을 안내해 드립니다.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Map Placeholder */}
            <div className="lg:col-span-2">
              <div className="w-full aspect-video bg-slate-200 rounded-3xl overflow-hidden relative shadow-inner">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.7891460592!2d127.0259!3d37.4849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca147779f42b3%3A0xe54e6d42646c205!2z7ISc7LSI6rWsIO2aqOugueuhnCAxMjM!5e0!3m2!1sko!2skr!4v1715352000000!5m2!1sko!2skr" 
                  className="absolute inset-0 w-full h-full border-0" 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Info Cards */}
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100"
              >
                <div className="flex flex-col gap-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-brand-secondary text-brand-primary rounded-xl flex items-center justify-center shrink-0">
                      <MapPin size={22} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">상세주소</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">서울시 서초구 효령로 123<br />기산빌딩 4층 기산노인복지센터</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-brand-secondary text-brand-primary rounded-xl flex items-center justify-center shrink-0">
                      <Phone size={22} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">대표번호</h4>
                      <p className="text-sm text-slate-600">0507-1234-5678</p>
                      <p className="text-xs text-slate-400 mt-1">팩스: 02-1234-5679</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-brand-secondary text-brand-primary rounded-xl flex items-center justify-center shrink-0">
                      <Clock size={22} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">이용시간</h4>
                      <p className="text-sm text-slate-600">평일: 09:00 ~ 18:00</p>
                      <p className="text-xs text-slate-400 mt-1">토/일/공휴일 휴무 (상담은 가능)</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="bg-emerald-600 p-8 rounded-3xl text-white shadow-xl shadow-emerald-900/10">
                <h4 className="font-bold mb-4 flex items-center gap-2">
                  <Bus size={20} /> 대중교통 이용 시
                </h4>
                <p className="text-sm opacity-90 leading-relaxed mb-6">
                  지하철 2호선 서초역 3번 출구 도보 5분<br />
                  버스 '기산마을' 정류장 하차 바로 앞
                </p>
                <h4 className="font-bold mb-4 flex items-center gap-2">
                  <Car size={20} /> 자가용 이용 시
                </h4>
                <p className="text-sm opacity-90 leading-relaxed">
                  건물 뒷편 주차장 이용 가능 (유료)<br />
                  센터 방문객 30분 무료 주차권 제공
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
