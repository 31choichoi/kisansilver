import React, { useState, useEffect } from 'react';
import { auth, db, signInWithGoogle, logOut, collection, addDoc, getDocs, query, orderBy, deleteDoc, doc, serverTimestamp } from '../lib/firebase';
import { onAuthStateChanged, User } from 'firebase/auth';
import { motion, AnimatePresence } from 'motion/react';
import { LayoutDashboard, Plus, Trash2, LogOut, Loader2, Save, X, AlertCircle } from 'lucide-react';
import Header from '../components/Header';

export default function AdminPage() {
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<any[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [newPost, setNewPost] = useState({ title: '', content: '', category: 'notice', author: '' });
  const [actionLoading, setActionLoading] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      if (u) {
        // Simple check for bootstrapped admin email
        if (u.email === '31choichoi@gmail.com') {
          setIsAdmin(true);
          fetchPosts();
        } else {
          setIsAdmin(false);
        }
      }
      setLoading(false);
    });
    return () => unsub();
  }, []);

  const fetchPosts = async () => {
    try {
      const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'));
      const snapshot = await getDocs(q);
      setPosts(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    } catch (e) {
      console.error(e);
    }
  };

  const handleLogin = async () => {
    try {
      await signInWithGoogle();
    } catch (e) {
      alert("로그인 중 오류가 발생했습니다.");
    }
  };

  const handleAddPost = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPost.title || !newPost.content) return;

    setActionLoading(true);
    try {
      await addDoc(collection(db, 'posts'), {
        ...newPost,
        author: newPost.author || user?.displayName || '관리자',
        createdAt: serverTimestamp(),
      });
      setNewPost({ title: '', content: '', category: 'notice', author: '' });
      setIsAdding(false);
      fetchPosts();
    } catch (e) {
      console.error(e);
      alert("글 작성 중 오류가 발생했습니다. 권한을 확인하세요.");
    } finally {
      setActionLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("정말 삭제하시겠습니까?")) return;
    try {
      await deleteDoc(doc(db, 'posts', id));
      fetchPosts();
    } catch (e) {
      alert("삭제 중 오류가 발생했습니다.");
    }
  };

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <Loader2 className="animate-spin text-brand-primary" size={48} />
    </div>
  );

  if (!user || !isAdmin) {
    return (
      <div className="min-h-screen bg-slate-50 pt-32 pb-20 px-4">
        <Header />
        <div className="max-w-md mx-auto bg-white p-10 rounded-3xl shadow-xl text-center">
          <AlertCircle className="mx-auto text-amber-500 mb-6" size={64} />
          <h2 className="text-2xl font-bold text-slate-900 mb-4">관리자 전용</h2>
          <p className="text-slate-600 mb-8">
            이 페이지는 관리자만 접근할 수 있습니다.<br />
            관리자 계정으로 로그인해주세요.
          </p>
          {!user ? (
            <button 
              onClick={handleLogin}
              className="w-full py-4 bg-brand-primary text-white rounded-xl font-bold hover:bg-emerald-800 transition-all shadow-lg"
            >
              Google 계정으로 로그인
            </button>
          ) : (
            <p className="text-rose-500 font-bold">접근 권한이 없는 계정입니다.</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20">
      <Header />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
              <LayoutDashboard className="text-brand-primary" />
              게시글 관리 시스템
            </h1>
            <p className="text-slate-500 mt-2">{user.email} (관리자)</p>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={() => setIsAdding(true)}
              className="flex items-center gap-2 bg-brand-primary text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:bg-emerald-800 transition-all"
            >
              <Plus size={20} /> 새 글 작성
            </button>
            <button 
              onClick={logOut}
              className="flex items-center gap-2 bg-white text-slate-600 border border-slate-200 px-6 py-3 rounded-xl font-bold hover:bg-slate-50 transition-all"
            >
              <LogOut size={20} /> 로그아웃
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isAdding && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white p-8 rounded-3xl border border-brand-primary/20 shadow-xl mb-12"
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-bold text-slate-900">새로운 소식 등록</h2>
                <button onClick={() => setIsAdding(false)}><X className="text-slate-400" /></button>
              </div>
              <form onSubmit={handleAddPost} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">카테고리</label>
                    <select 
                      value={newPost.category}
                      onChange={(e) => setNewPost({...newPost, category: e.target.value})}
                      className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:border-brand-primary transition-colors"
                    >
                      <option value="notice">공지사항</option>
                      <option value="community">자유게시판</option>
                      <option value="activity">활동소식</option>
                      <option value="diet">식단표</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">작성자 명칭 (비워두면 닉네임 사용)</label>
                    <input 
                      type="text" 
                      placeholder="관리자, 센터장 등"
                      value={newPost.author}
                      onChange={(e) => setNewPost({...newPost, author: e.target.value})}
                      className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:border-brand-primary transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">제목</label>
                  <input 
                    type="text" 
                    placeholder="공지사항 제목을 입력하세요"
                    value={newPost.title}
                    onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                    className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:border-brand-primary transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">내용</label>
                  <textarea 
                    rows={6}
                    placeholder="자세한 내용을 입력하세요"
                    value={newPost.content}
                    onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                    className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:border-brand-primary transition-colors"
                    required
                  ></textarea>
                </div>
                <div className="flex justify-end">
                  <button 
                    disabled={actionLoading}
                    className="flex items-center gap-2 bg-brand-primary text-white px-10 py-4 rounded-xl font-bold shadow-lg hover:bg-emerald-800 disabled:opacity-50 transition-all"
                  >
                    {actionLoading ? <Loader2 className="animate-spin" /> : <Save size={20} />}
                    저장하기
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
          <table className="w-full text-left">
             <thead className="bg-slate-50 border-b border-slate-100">
               <tr>
                 <th className="px-6 py-4 text-sm font-bold text-slate-600">카테고리</th>
                 <th className="px-6 py-4 text-sm font-bold text-slate-600">제목</th>
                 <th className="px-6 py-4 text-sm font-bold text-slate-600">작성일</th>
                 <th className="px-6 py-4 text-sm font-bold text-slate-600 text-right">관리</th>
               </tr>
             </thead>
             <tbody className="divide-y divide-slate-50">
               {posts.map((post) => (
                 <tr key={post.id} className="hover:bg-slate-50/50 transition-colors">
                   <td className="px-6 py-4">
                     <span className="px-2 py-0.5 bg-slate-100 text-slate-500 rounded text-xs font-bold uppercase">
                       {post.category}
                     </span>
                   </td>
                   <td className="px-6 py-4 font-bold text-slate-800">{post.title}</td>
                   <td className="px-6 py-4 text-sm text-slate-400">
                     {post.createdAt?.toDate ? post.createdAt.toDate().toLocaleDateString() : 'N/A'}
                   </td>
                   <td className="px-6 py-4 text-right">
                     <button 
                       onClick={() => handleDelete(post.id)}
                       className="p-2 text-rose-400 hover:text-rose-600 transition-colors"
                     >
                       <Trash2 size={18} />
                     </button>
                   </td>
                 </tr>
               ))}
               {posts.length === 0 && (
                 <tr>
                   <td colSpan={4} className="px-6 py-20 text-center text-slate-400">등록된 게시물이 없습니다.</td>
                 </tr>
               )}
             </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
