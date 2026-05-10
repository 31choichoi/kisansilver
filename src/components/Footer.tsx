import { Phone, MapPin, Mail, Clock, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center text-white">
                <span className="text-xs font-black">KS</span>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">기산노인복지센터</span>
            </Link>
            <p className="text-sm leading-relaxed mb-8">
              사람 중심의 따뜻한 돌봄으로 어르신의 행복한 노후를 함께합니다. 정직하고 투명한 운영을 실천하는 최우수 장기요양기관입니다.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-brand-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-brand-primary transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">빠른 메뉴</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/#about" className="hover:text-white transition-colors">센터소개</Link></li>
              <li><Link to="/#services" className="hover:text-white transition-colors">사업소개</Link></li>
              <li><Link to="/#guide" className="hover:text-white transition-colors">이용안내</Link></li>
              <li><Link to="/community" className="hover:text-white transition-colors">공지사항</Link></li>
              <li><Link to="/location" className="hover:text-white transition-colors">오시는길</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">주요 서비스</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/#services" className="hover:text-white transition-colors">방문요양 서비스</Link></li>
              <li><Link to="/#services" className="hover:text-white transition-colors">주야간 보호 서비스</Link></li>
              <li><Link to="/#services" className="hover:text-white transition-colors">방문목욕 서비스</Link></li>
              <li><Link to="/#guide" className="hover:text-white transition-colors">장기요양등급 신청안내</Link></li>
              <li><Link to="/#services" className="hover:text-white transition-colors">복지구구 대여 서비스</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">문의처</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-brand-primary shrink-0" />
                <div>
                  <p className="text-white font-bold mb-1">0507-1234-5678</p>
                  <p className="text-xs text-slate-500 text-nowrap">팩스 : 02-1234-5679</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-primary shrink-0" />
                <p>서울시 서초구 효령로 123 기산빌딩 4층 기산노인복지센터</p>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={18} className="text-brand-primary shrink-0" />
                <div>
                  <p>평일 09:00 ~ 18:00</p>
                  <p className="text-xs text-slate-500">주말/공휴일은 당직 상담 가능</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xs text-slate-500">
            <p className="mb-2">대표자 : 홍길동 | 사업자등록번호 : 123-45-67890 | 시설번호 : 1234-5678</p>
            <p>© 2026 기산노인복지센터. All Rights Reserved.</p>
          </div>
          <div className="flex gap-6 text-xs text-slate-500 font-medium h-full items-center">
            <a href="#" className="hover:text-white">이용약관</a>
            <a href="#" className="hover:text-white text-slate-300">개인정보처리방침</a>
            <a href="#" className="hover:text-white font-bold text-slate-300">이메일무단수집금지</a>
            <div className="w-[1px] h-3 bg-slate-700"></div>
            <Link to="/admin" className="hover:text-brand-primary transition-colors flex items-center gap-1">
              <span className="opacity-50">Admin</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

