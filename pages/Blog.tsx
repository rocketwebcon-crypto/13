
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import SEO from '../components/SEO';
import EditableImage from '../components/EditableImage';
import { blogPosts } from '../data';

const Blog: React.FC = () => {
  return (
    <>
      <SEO 
        title="Septic Maintenance Blog | Tips & Advice" 
        description="Read our expert advice on septic system maintenance, pumping frequency, and eco-friendly practices for Oregon homeowners." 
        canonicalUrl="/blog"
      />

      <div className="bg-brand-black py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-heading font-black text-white mb-6">Septic Knowledge Base</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Expert tips and guides to help you maintain a healthy septic system and save money.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
                <article key={post.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
                    <div className="h-56 bg-gray-200 relative overflow-hidden">
                        <EditableImage 
                            storageKey={`blog_thumb_${post.id}`}
                            src={post.imageUrl || "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop"} 
                            alt={post.title} 
                            loading="lazy"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            wrapperClassName="w-full h-full"
                        />
                        <span className="absolute top-4 left-4 bg-brand-brown text-brand-black text-xs font-black uppercase tracking-widest px-3 py-1 rounded shadow-md border border-brand-black z-20 pointer-events-none">
                            {post.category}
                        </span>
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                        <div className="flex items-center gap-2 text-gray-400 text-xs mb-4 font-bold uppercase tracking-wide">
                            <Calendar size={14} className="text-brand-brown" /> {post.date}
                        </div>
                        <h2 className="text-xl font-bold text-brand-black mb-4 line-clamp-2 font-heading">
                            <Link to={`/blog/${post.slug}`} className="hover:text-brand-brown transition-colors">{post.title}</Link>
                        </h2>
                        <p className="text-gray-600 mb-6 text-sm line-clamp-3 leading-relaxed">{post.excerpt}</p>
                        <div className="mt-auto">
                           <Link to={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-brand-brown font-black text-sm uppercase tracking-wide hover:text-brand-black transition-colors">
                             Read Article &rarr;
                           </Link>
                        </div>
                    </div>
                </article>
            ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
