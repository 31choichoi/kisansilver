import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const news = [
  {
    category: '공지사항',
    catKey: 'notice',
    title: '5월 가정의 달 기념 행사 안내',
    date: '2026-05-01',
  },
  {
    category: '식단표',
    catKey: 'diet',
    title: '5월 2주차 주간 식단표 안내',
    date: '2026-05-08',
  },
  {
    category: '활동소식',
    catKey: 'activity',
    title: '야외 원예 테라피 프로그램 현장 소기',
    date: '2026-05-05',
  },
  {
    category: '공지사항',
    catKey: 'notice',
    title: '신규 요양보호사 대상 직무 교육 실시',
    date: '2026-04-28',
  },
];

export default function NewsSection() {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-16">
          {/* Section Info */}
          <div className="md:w-1/3">
            <h2 className="text-base font-bold text-brand-primary tracking-widest uppercase mb-4">News & Updates</h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 leading-tight">
              기산노인복지센터의<br />
              새로운 소식을 전해드립니다.
            </h3>
            <p className="text-slate-600 mb-8 leading-relaxed font-medium">
              센터에서 일어나는 다양한 행사와 공지사항, 어르신들의 활기찬 일상을 확인해보세요.
            </p>
            <button 
              onClick={() => navigate('/community')}
              className="flex items-center gap-2 text-brand-primary font-bold group"
            >
              전체 보기
              <div className="w-8 h-8 rounded-full border border-brand-primary/20 flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-all">
                <ChevronRight size={16} />
              </div>
            </button>
          </div>

          {/* News List */}
          <div className="md:w-2/3 grid grid-cols-1 gap-4">
            {news.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => navigate(`/community?category=${item.catKey}`)}
                className="group p-6 bg-white rounded-2xl border border-slate-100 flex items-center justify-between hover:border-brand-primary/30 hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="flex items-center gap-6">
                  <span className="hidden sm:inline-block px-3 py-1 bg-slate-100 text-slate-500 rounded-lg text-sm font-bold">
                    {item.category}
                  </span>
                  <div>
                    <h4 className="font-bold text-slate-900 group-hover:text-brand-primary transition-colors">{item.title}</h4>
                    <p className="text-sm text-slate-400 mt-1">{item.date}</p>
                  </div>
                </div>
                <ChevronRight className="text-slate-300 group-hover:text-brand-primary transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
