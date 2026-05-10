import { motion } from 'motion/react';
import { Search, FileText, Calendar, Building } from 'lucide-react';

const links = [
  { icon: <Search size={32} />, label: '장기요양 등급안내', color: 'bg-blue-600' },
  { icon: <FileText size={32} />, label: '이용신청서 다운로드', color: 'bg-emerald-600' },
  { icon: <Calendar size={32} />, label: '이달의 식단표', color: 'bg-amber-600' },
  { icon: <Building size={32} />, label: '시설 둘러보기', color: 'bg-indigo-600' },
];

export default function QuickLinks() {
  return (
    <div className="max-w-5xl mx-auto px-4 -mt-10 sm:-mt-12 relative z-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {links.map((link, index) => (
          <motion.button
            key={link.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, type: 'spring', stiffness: 100 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="flex flex-col items-center justify-center p-6 sm:p-8 bg-white rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100 group"
          >
            <div className={`w-16 h-16 ${link.color} text-white rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:rotate-6 transition-transform`}>
              {link.icon}
            </div>
            <span className="text-sm sm:text-base font-bold text-slate-800 text-center">{link.label}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
