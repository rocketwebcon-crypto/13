
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag, Phone, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import EditableImage from '../components/EditableImage';
import { blogPosts, COMPANY_PHONE } from '../data';

const BlogDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Find related posts (same category or just others)
  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id)
    .slice(0, 2);

  return (
    <>
      <SEO 
        title={post.title} 
        description={post.excerpt}
        canonicalUrl={`/blog/${post.slug}`}
      />

      <div className="bg-white min-h-screen pb-20">
        
        {/* Article Header Image - Hero / LCP Optimized */}
        <div className="h-[400px] md:h-[500px] w-full relative overflow-hidden">
            {/* Overlay must allow pointer events to pass through to the EditableImage underneath */}
            <div className="absolute inset-0 bg-brand-black/40 z-10 pointer-events-none"></div>
            
            {/* Fix: Changed fetchpriority to fetchPriority to satisfy TypeScript prop expectations for HTMLImageElement */}
            <EditableImage 
                storageKey={`blog_hero_${post.id}`}
                src={post.imageUrl || "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop"} 
                alt={post.title} 
                fetchPriority="high"
                className="w-full h-full object-cover"
                wrapperClassName="absolute inset-0 z-0"
            />
            
            <div className="absolute bottom-0 left-0 w-full z-20 p-6 md:p-12 bg-gradient-to-t from-black/90 to-transparent pointer-events-none">
                <div className="container mx-auto max-w-4xl pointer-events-auto">
                    <span className="bg-brand-brown text-brand-black px-3 py-1 rounded text-xs font-black uppercase tracking-widest inline-block mb-4 shadow-lg border border-brand-black">
                        {post.category}
                    </span>
                    <h1 className="text-3xl md:text-5xl font-heading font-black text-white leading-tight shadow-black drop-shadow-lg">
                        {post.title}
                    </h1>
                    <div className="flex items-center gap-4 mt-6 text-gray-300 font-bold text-sm">
                        <span className="flex items-center gap-2"><Calendar size={16} className="text-brand-brown" /> {post.date}</span>
                        <span className="flex items-center gap-2"><Tag size={16} className="text-brand-brown" /> Septic Advice</span>
                    </div>
                </div>
            </div>
        </div>

        <div className="container mx-auto px-6 max-w-4xl -mt-10 relative z-30">
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl border-t-8 border-brand-brown">
                
                {/* Back Link */}
                <Link to="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-brand-brown font-bold mb-8 transition-colors">
                    <ArrowLeft size={20} /> Back to Blog
                </Link>

                {/* Article Content */}
                <div 
                    className="prose prose-lg max-w-none text-gray-700 font-sans"
                    dangerouslySetInnerHTML={{ __html: post.content }} 
                />

                {/* CTA Box */}
                <div className="mt-16 bg-gray-50 border-2 border-dashed border-gray-300 p-8 rounded-lg text-center">
                    <h3 className="text-2xl font-stencil text-brand-black mb-2">Need Professional Help?</h3>
                    <p className="text-gray-600 mb-6">If you're experiencing any of the issues mentioned above, don't wait.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact" className="bg-brand-brown text-brand-black font-black py-3 px-8 rounded shadow hover:bg-brand-brownHover transition-colors uppercase tracking-wide">
                            Schedule Service
                        </Link>
                        <a href={`tel:${COMPANY_PHONE.replace(/\D/g,'')}`} className="bg-white border-2 border-brand-black text-brand-black font-black py-3 px-8 rounded hover:bg-gray-100 transition-colors uppercase tracking-wide flex items-center justify-center gap-2">
                            <Phone size={18} /> Call {COMPANY_PHONE}
                        </a>
                    </div>
                </div>

                {/* Related Articles Section */}
                {relatedPosts.length > 0 && (
                    <div className="mt-16 pt-16 border-t border-gray-200">
                        <h3 className="text-2xl font-heading font-bold text-brand-black mb-8">Related Articles</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {relatedPosts.map(related => (
                                <Link key={related.id} to={`/blog/${related.slug}`} className="group block bg-gray-50 rounded-lg overflow-hidden border border-gray-100 hover:shadow-lg transition-all" onClick={() => window.scrollTo(0,0)}>
                                    <div className="h-48 overflow-hidden relative">
                                        <EditableImage
                                            storageKey={`blog_thumb_${related.id}`}
                                            src={related.imageUrl || "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop"} 
                                            alt={related.title} 
                                            loading="lazy"
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            wrapperClassName="w-full h-full"
                                        />
                                        <span className="absolute top-2 left-2 bg-brand-black/80 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide z-20 pointer-events-none">
                                            {related.category}
                                        </span>
                                    </div>
                                    <div className="p-6">
                                        <h4 className="font-bold text-lg text-brand-black mb-2 group-hover:text-brand-brown transition-colors line-clamp-2">
                                            {related.title}
                                        </h4>
                                        <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                                            {related.excerpt}
                                        </p>
                                        <span className="text-brand-brown font-bold text-xs uppercase tracking-wide flex items-center gap-1 group-hover:gap-2 transition-all">
                                            Read More <ArrowRight size={14} />
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

            </div>
        </div>

      </div>
    </>
  );
};

export default BlogDetail;
