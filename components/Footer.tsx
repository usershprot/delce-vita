
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#4A3728] text-[#FFF9F5] py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold font-serif">Dolce Vita</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Создаем сладкие воспоминания с 2014 года. Доставляем радость в каждый дом.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-pink-400 transition-colors">Instagram</a>
              <a href="#" className="hover:text-pink-400 transition-colors">Telegram</a>
              <a href="#" className="hover:text-pink-400 transition-colors">VK</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-pink-400 uppercase tracking-widest text-xs">Контакты</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li>г. Москва, ул. Арбат, 15</li>
              <li>+7 (999) 123-45-67</li>
              <li>hello@dolcevita.ru</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-pink-400 uppercase tracking-widest text-xs">Информация</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white">Доставка и оплата</a></li>
              <li><a href="#" className="hover:text-white">Корпоративным клиентам</a></li>
              <li><a href="#" className="hover:text-white">Политика конфиденциальности</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-pink-400 uppercase tracking-widest text-xs">Рассылка</h4>
            <p className="text-sm text-gray-300 mb-4">Подпишитесь на новости и получите скидку 10% на первый заказ.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Email" 
                className="bg-white/10 border border-white/20 px-4 py-2 rounded-l-lg focus:outline-none w-full text-sm"
              />
              <button className="bg-pink-500 px-4 py-2 rounded-r-lg hover:bg-pink-600 transition-colors text-sm font-bold">
                OK
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-xs text-gray-500">
          © 2024 Dolce Vita Patisserie. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
