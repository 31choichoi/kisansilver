import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { db, collection, getDocs, query, orderBy, where } from '../lib/firebase';
import { motion } from 'motion/react';
import { MessageSquare, Calendar, User, ChevronRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface Post {
  id: string;
  title: string;
  content: string;
  author: string;
  category: string;
  createdAt: any;
}

export default function CommunityPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState(initialCategory);

  useEffect(() => {
    // Update filter when search param changes
    const category = searchParams.get('category') || 'all';
    setFilter(category);
  }, [searchParams]);

  const handleFilterChange = (cat: string) => {
    setFilter(cat);
    if (cat === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        let q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'));
        if (filter !== 'all') {
          q = query(collection(db, 'posts'), where('category', '==', filter), orderBy('createdAt', 'desc'));
        }
        const snapshot = await getDocs(q);
        const fetchedPosts = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Post[];
        setPosts(fetchedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [filter]);

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">커뮤니티</h1>
            <p className="text-lg text-slate-600">센터의 소식과 어르신들의 일상을 공유하는 공간입니다.</p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {['all', 'notice', 'community', 'activity', 'diet'].map((cat) => (
              <button
                key={cat}
                onClick={() => handleFilterChange(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  filter === cat 
                  ? 'bg-brand-primary text-white shadow-lg' 
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat === 'all' ? '전체' : 
                 cat === 'notice' ? '공지사항' : 
                 cat === 'community' ? '자유게시판' : 
                 cat === 'activity' ? '활동소식' : '식단표'}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="flex justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-primary"></div>
            </div>
          ) : posts.length > 0 ? (
            <div className="grid grid-cols-1 gap-6">
              {posts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow cursor-pointer group"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-2.5 py-0.5 bg-slate-100 text-slate-500 rounded text-xs font-bold uppercase">
                          {post.category}
                        </span>
                        <h2 className="text-xl font-bold text-slate-900 group-hover:text-brand-primary transition-colors">
                          {post.title}
                        </h2>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-slate-400">
                        <div className="flex items-center gap-1">
                          <User size={14} />
                          <span>{post.author || '관리자'}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>{post.createdAt?.toDate ? post.createdAt.toDate().toLocaleDateString() : '2026.05.10'}</span>
                        </div>
                      </div>
                    </div>
                    <ChevronRight className="text-slate-300 group-hover:text-brand-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200">
              <MessageSquare size={48} className="mx-auto text-slate-200 mb-4" />
              <p className="text-slate-400">등록된 게시글이 없습니다.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
