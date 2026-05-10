import { motion } from 'motion/react';
import { ArrowRight, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center pt-32 pb-40 lg:pb-56 overflow-hidden">
      {/* Background with stylized elements */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://mydrim.net/img/kisansilver_main.png" 
          alt="기산노인복지센터" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/40 to-transparent md:via-white/20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-brand-secondary text-brand-primary text-sm font-bold rounded-full mb-6 tracking-wider">
              정성과 사랑으로 모시는
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.3] sm:leading-[1.15] mb-8">
              <span className="block">어르신의 행복한</span>
              <span className="block text-brand-primary underline decoration-brand-accent/30 underline-offset-8">두 번째 인생,</span>
              <span className="block">기산노인복지센터가</span>
              <span className="block">함께합니다.</span>
            </h1>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-lg">
              가정의 따뜻함과 전문가의 섬세함으로 어르신의 건강과 일상을 지켜드립니다. 
              방문요양부터 주야간보호까지 어르신 맞춤형 프로그램을 제공합니다.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-brand-primary text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-800 transition-all shadow-xl shadow-emerald-900/10 group">
                상담 신청하기
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white text-brand-primary border-2 border-brand-primary/20 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-50 transition-all shadow-lg">
                시설 둘러보기
                <ChevronRight size={20} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating badges or metrics */}
      <div className="hidden lg:block absolute bottom-20 right-20 space-y-4">
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-2xl border border-white flex items-center gap-4"
        >
          <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
            <span className="text-xl font-bold">10+</span>
          </div>
          <div>
            <p className="text-xs text-slate-500 font-medium">평균 경력</p>
            <p className="text-base font-bold text-slate-800">베테랑 요양보호사</p>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-2xl border border-white flex items-center gap-4"
        >
          <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
            <span className="text-xl font-bold">A</span>
          </div>
          <div>
            <p className="text-xs text-slate-500 font-medium">건강보험공단 평가</p>
            <p className="text-base font-bold text-slate-800">최우수 기관 선정</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
