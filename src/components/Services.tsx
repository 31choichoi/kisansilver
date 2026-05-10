import { Heart, Home, Bath, BookOpen, Coffee, Users } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    icon: <Home className="w-8 h-8" />,
    title: '방문요양',
    description: '전문 요양보호사가 가정을 방문하여 신체활동 및 가사활동을 지원합니다.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: '주야간보호',
    description: '어르신을 낮 시간 동안 센터에서 보호하며 다양한 프로그램을 제공합니다.',
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: <Bath className="w-8 h-8" />,
    title: '방문목욕',
    description: '이동식 목욕차량이나 가정 내 욕조를 이용하여 청결한 목욕을 도와드립니다.',
    color: 'bg-cyan-50 text-cyan-600',
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: '인지활동',
    description: '치매 예방 및 인지 기능 유지를 위한 맞춤형 학습 프로그램을 운영합니다.',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: <Coffee className="w-8 h-8" />,
    title: '여가지원',
    description: '어르신들의 정서적 안정을 위한 원예, 미술, 음악 치료 등을 진행합니다.',
    color: 'bg-rose-50 text-rose-600',
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: '가족상담',
    description: '부양 가족의 고충을 상담하고 장기요양보험 제도 이용을 안내합니다.',
    color: 'bg-purple-50 text-purple-600',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-base font-bold text-brand-primary tracking-widest uppercase mb-3">Professional Services</h2>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-6">기산이 제공하는 맞춤 서비스</p>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              어르신의 상태와 욕구에 맞춘 체계적인 케어 서비스를 통해<br className="hidden sm:block" /> 
              보다 나은 삶의 질을 약속드립니다.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300"
            >
              <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <button className="text-sm font-bold text-brand-primary flex items-center gap-1 hover:gap-2 transition-all">
                자세히 보기 <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArrowRight({ size, className }: { size: number, className?: string }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="3" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
