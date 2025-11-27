import React, { useState } from 'react';
import { BlogPost } from '../types';
import { generateMiningArticle } from '../services/gemini';
import { Loader2, Sparkles, User, Calendar, Tag, X, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data';

export const Blog: React.FC = () => {
  // Initialize state with data from data.ts
  const [posts, setPosts] = useState<BlogPost[]>(blogPosts);
  const [aiTopic, setAiTopic] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const handleGenerateArticle = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!aiTopic.trim()) return;

    setIsGenerating(true);
    setError(null);

    try {
      const generatedData = await generateMiningArticle(aiTopic);
      
      const newPost: BlogPost = {
        id: Date.now().toString(),
        title: generatedData.title,
        excerpt: generatedData.excerpt,
        content: generatedData.content,
        author: 'Minertech AI',
        date: new Date().toISOString().split('T')[0],
        imageUrl: `https://picsum.photos/800/600?random=${Date.now()}`, 
        tags: generatedData.tags || ['IA', 'Minería']
      };

      setPosts([newPost, ...posts]);
      setAiTopic('');
      // Optionally open the new post immediately
      setSelectedPost(newPost);
    } catch (err) {
      setError('Hubo un problema al generar el artículo. Intenta nuevamente.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="py-20 bg-mining-900 min-h-screen relative">
      <div className="container mx-auto px-4">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Blog de Minería e Innovación</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Noticias, tendencias y análisis técnico sobre la industria extractiva.
          </p>
        </div>

        {/* AI Generator Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-gradient-to-r from-mining-800 to-mining-900 border border-mining-gold/30 rounded-xl p-8 shadow-lg relative overflow-hidden transition-all hover:border-mining-gold/50 hover:shadow-mining-gold/10 hover:shadow-2xl">
             {/* Decorative glow */}
             <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-mining-gold/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">
                <div className="flex items-center space-x-2 text-mining-gold mb-4">
                    <Sparkles className="w-5 h-5 animate-pulse" />
                    <span className="font-semibold tracking-wide text-sm uppercase">Generador de Contenido IA</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">¿No encuentras el tema que buscas?</h3>
                <p className="text-gray-400 mb-6">
                    Nuestra Inteligencia Artificial especializada en minería puede redactar un artículo técnico para ti en segundos.
                </p>
                
                <form onSubmit={handleGenerateArticle} className="flex flex-col md:flex-row gap-4">
                    <input
                        type="text"
                        value={aiTopic}
                        onChange={(e) => setAiTopic(e.target.value)}
                        placeholder="Ej: Seguridad en minas subterráneas, Tendencias del Cobre 2025..."
                        className="flex-grow px-4 py-3 bg-black/30 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-mining-gold transition-colors"
                        disabled={isGenerating}
                    />
                    <button
                        type="submit"
                        disabled={isGenerating || !aiTopic.trim()}
                        className="px-6 py-3 bg-mining-gold hover:bg-yellow-500 disabled:bg-gray-700 disabled:text-gray-500 text-mining-900 font-bold rounded-lg flex items-center justify-center min-w-[160px] transition-all"
                    >
                        {isGenerating ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin mr-2" />
                                Generando...
                            </>
                        ) : (
                            'Generar Artículo'
                        )}
                    </button>
                </form>
                {error && <p className="mt-3 text-red-400 text-sm">{error}</p>}
            </div>
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="bg-mining-800 rounded-xl overflow-hidden shadow-lg border border-gray-800 flex flex-col hover:transform hover:scale-[1.02] transition-transform duration-300 group">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                    {post.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="px-2 py-1 bg-mining-900/90 backdrop-blur text-xs font-bold text-mining-gold rounded uppercase tracking-wider">
                            {tag}
                        </span>
                    ))}
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center space-x-4 text-xs text-gray-500 mb-3">
                    <span className="flex items-center"><Calendar className="w-3 h-3 mr-1"/> {post.date}</span>
                    <span className="flex items-center"><User className="w-3 h-3 mr-1"/> {post.author}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-mining-gold transition-colors">{post.title}</h3>
                <p className="text-gray-400 text-sm mb-4 flex-grow line-clamp-3">
                  {post.excerpt}
                </p>
                <button 
                  onClick={() => setSelectedPost(post)}
                  className="text-mining-gold text-sm font-semibold hover:text-white transition-colors self-start flex items-center mt-auto py-2 group-hover:translate-x-1 duration-300"
                >
                  Leer completo <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Article Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedPost(null)}></div>
          <div className="bg-mining-900 border border-gray-700 w-full max-w-3xl max-h-[90vh] rounded-xl shadow-2xl relative flex flex-col animate-in fade-in zoom-in duration-200">
            {/* Modal Header */}
            <div className="sticky top-0 bg-mining-900/95 backdrop-blur z-10 p-6 border-b border-gray-800 flex justify-between items-start rounded-t-xl">
              <div>
                 <div className="flex gap-2 mb-3">
                    {selectedPost.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 bg-mining-gold/10 text-mining-gold text-xs font-bold rounded uppercase tracking-wider">
                            {tag}
                        </span>
                    ))}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">{selectedPost.title}</h2>
              </div>
              <button 
                onClick={() => setSelectedPost(null)}
                className="p-2 hover:bg-gray-800 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-400 hover:text-white" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="overflow-y-auto p-6 md:p-8 custom-scrollbar">
              <img 
                src={selectedPost.imageUrl} 
                alt={selectedPost.title} 
                className="w-full h-64 md:h-80 object-cover rounded-lg mb-8"
              />
              
              <div className="flex items-center justify-between text-sm text-gray-500 mb-8 pb-4 border-b border-gray-800">
                 <span className="flex items-center"><User className="w-4 h-4 mr-2"/> {selectedPost.author}</span>
                 <span className="flex items-center"><Calendar className="w-4 h-4 mr-2"/> {selectedPost.date}</span>
              </div>

              <div className="prose prose-invert prose-gold max-w-none text-gray-300">
                {selectedPost.content.split('\n').map((paragraph, idx) => (
                  <p key={idx} className="mb-4 leading-relaxed">
                    {paragraph.startsWith('###') ? (
                        <h3 className="text-xl font-bold text-white mt-6 mb-3">{paragraph.replace('###', '')}</h3>
                    ) : paragraph.startsWith('-') ? (
                        <li className="ml-4 list-disc">{paragraph.replace('-', '')}</li>
                    ) : (
                        paragraph
                    )}
                  </p>
                ))}
              </div>
            </div>
            
            {/* Modal Footer */}
            <div className="p-6 border-t border-gray-800 bg-mining-900 rounded-b-xl">
                <button 
                    onClick={() => setSelectedPost(null)}
                    className="w-full py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded transition-colors"
                >
                    Cerrar Artículo
                </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};