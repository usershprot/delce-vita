
import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-20 border-t border-pink-100">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink-100 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-100 rounded-full blur-3xl opacity-50"></div>
          <img 
            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1000" 
            alt="Наш кондитер"
            className="rounded-[40px] shadow-2xl relative z-10 w-full object-cover aspect-[4/5]"
          />
        </div>
        
        <div className="space-y-8">
          <div>
            <span className="text-pink-500 font-bold uppercase tracking-widest text-sm">Искусство в каждом кусочке</span>
            <h2 className="text-5xl font-bold mt-4 leading-tight text-[#4A3728]">
              Dolce Vita — это больше, чем просто кондитерская.
            </h2>
          </div>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            Мы начали свой путь 10 лет назад как маленькая семейная пекарня. Сегодня мы — команда профессионалов, которые создают десерты, способные превратить любой день в праздник.
          </p>
          
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-2">
              <h4 className="text-3xl font-bold text-pink-500">100%</h4>
              <p className="font-semibold text-[#4A3728]">Натурально</p>
              <p className="text-sm text-gray-500 text-balance">Никаких искусственных добавок и консервантов.</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-3xl font-bold text-pink-500">24ч</h4>
              <p className="font-semibold text-[#4A3728]">Свежесть</p>
              <p className="text-sm text-gray-500 text-balance">Все торты готовятся исключительно под заказ.</p>
            </div>
          </div>

          <div className="p-8 bg-white rounded-3xl border border-pink-50 shadow-sm italic text-gray-500">
            "Наш секрет прост: мы используем только те ингредиенты, которые дали бы своим детям. Настоящее сливочное масло, бельгийский шоколад и свежайшие ягоды."
            <div className="mt-4 not-italic font-bold text-[#4A3728]">— Анна Савченко, Шеф-кондитер</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
