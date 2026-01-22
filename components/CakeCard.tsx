
import React from 'react';
import { Cake } from '../types';

interface CakeCardProps {
  cake: Cake;
}

const CakeCard: React.FC<CakeCardProps> = ({ cake }) => {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-pink-50">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={cake.imageUrl} 
          alt={cake.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-pink-600 shadow-sm">
          {cake.category}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
          <button className="w-full bg-white text-pink-600 py-3 rounded-xl font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform shadow-lg">
            Посмотреть детали
          </button>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-[#4A3728]">{cake.name}</h3>
          <span className="text-lg font-bold text-pink-600">{cake.price} ₽</span>
        </div>
        <p className="text-sm text-gray-500 line-clamp-2 mb-4 leading-relaxed">
          {cake.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {cake.ingredients.map((ing, idx) => (
            <span key={idx} className="text-[10px] uppercase tracking-wider bg-gray-100 px-2 py-0.5 rounded text-gray-600">
              {ing}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CakeCard;
