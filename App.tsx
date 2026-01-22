
import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import CakeGrid from './components/CakeGrid';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import GeminiAssistant from './components/GeminiAssistant';
import { CAKES } from './constants';
import { Cake } from './types';

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Все');

  const categories = useMemo(() => {
    const cats = ['Все', ...new Set(CAKES.map(cake => cake.category))];
    return cats;
  }, []);

  const filteredCakes = useMemo(() => {
    return CAKES.filter(cake => {
      const matchesSearch = cake.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          cake.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'Все' || cake.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={categories}
      />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <section id="catalog" className="mb-20">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
            <h2 className="text-4xl font-bold mb-4 md:mb-0">Наши Шедевры</h2>
            <div className="text-sm text-gray-500 italic">
              Найдено: {filteredCakes.length} вариантов
            </div>
          </div>
          
          {filteredCakes.length > 0 ? (
            <CakeGrid cakes={filteredCakes} />
          ) : (
            <div className="text-center py-20 bg-white rounded-2xl shadow-inner">
              <p className="text-xl text-gray-400">К сожалению, ничего не найдено...</p>
              <button 
                onClick={() => {setSearchQuery(''); setSelectedCategory('Все');}}
                className="mt-4 text-pink-600 hover:underline"
              >
                Сбросить фильтры
              </button>
            </div>
          )}
        </section>

        <AboutUs />
      </main>

      <Footer />
      <GeminiAssistant />
    </div>
  );
};

export default App;
