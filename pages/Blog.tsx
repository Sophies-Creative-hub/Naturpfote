
import React from 'react';
import { BLOG_POSTS } from '../constants';

const Blog: React.FC = () => {
  return (
    <div className="bg-stone-50 pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-serif text-center mb-4 text-stone-800">Wissen & Einblicke</h1>
        <p className="text-center text-stone-500 mb-16 max-w-2xl mx-auto">
          Regelmäßige Tipps rund um die Themen Ernährung, Kräuterkunde und ganzheitliche Gesundheit für Ihr Tier.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-100 group">
              <div className="h-64 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center space-x-4 text-xs font-bold text-emerald-700 mb-4 uppercase tracking-widest">
                  <span>{post.category}</span>
                  <span className="text-stone-300">•</span>
                  <span>{post.date}</span>
                </div>
                <h2 className="text-2xl font-bold text-stone-800 mb-4 group-hover:text-emerald-800 transition-colors">
                  {post.title}
                </h2>
                <p className="text-stone-600 leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                <button className="text-stone-800 font-bold border-b-2 border-emerald-700 pb-1 inline-block hover:bg-emerald-50 transition-colors">
                  Weiterlesen
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
