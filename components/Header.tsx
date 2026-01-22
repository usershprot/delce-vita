
import React from 'react';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  categories: string[];
}

const Header: React.FC<HeaderProps> = ({ 
  searchQuery, 
  setSearchQuery, 
  selectedCategory, 
  setSelectedCategory,
  categories 
}) => {
  return (
    <header className="sticky top-0 z-50 bg-[#FFF9F5]/90 backdrop-blur-md border-b border-pink-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-pink-400 rounded-full flex items-center justify-center text-white font-serif text-2xl">
              D
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-[#4A3728]">
              Dolce Vita <span className="text-pink-500">Patisserie</span>
            </h1>
          </div>

          <div className="flex-grow max-w-2xl">
            <div className="relative group">
              <input
                type="text"
                placeholder="Поиск любимого торта..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white border border-pink-100 focus:outline-none focus:ring-2 focus:ring-pink-300 transition-all shadow-sm group-hover:shadow-md"
              />
              <svg 
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-pink-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium">
            <a href="#catalog" className="hover:text-pink-500 transition-colors">Каталог</a>
            <a href="#about" className="hover:text-pink-500 transition-colors">О нас</a>
            <button className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition-all shadow-md active:scale-95">
              Заказать
            </button>
          </nav>
        </div>

        <div className="mt-4 flex space-x-2 overflow-x-auto pb-2 scrollbar-hide no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                selectedCategory === cat 
                  ? 'bg-pink-500 text-white' 
                  : 'bg-white text-gray-600 border border-pink-50 hover:border-pink-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
