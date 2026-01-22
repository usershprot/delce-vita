
import { Cake } from './types';

export const CAKES: Cake[] = [
  {
    id: 1,
    name: "Малиновый Бархат",
    description: "Нежные бисквитные коржи с прослойкой из свежей малины и сливочного крема маскарпоне.",
    price: 3200,
    category: "Ягодные",
    imageUrl: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&q=80&w=800",
    ingredients: ["Малина", "Маскарпоне", "Ваниль"]
  },
  {
    id: 2,
    name: "Шоколадный Трюфель",
    description: "Насыщенный темный шоколад, бельгийский какао и нежный ганаш для истинных ценителей.",
    price: 3500,
    category: "Шоколадные",
    imageUrl: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800",
    ingredients: ["Темный шоколад 70%", "Сливки", "Какао-бобы"]
  },
  {
    id: 3,
    name: "Тропический Манго",
    description: "Экзотическое сочетание мусса из манго и маракуйи с легким кокосовым бисквитом.",
    price: 3100,
    category: "Фруктовые",
    imageUrl: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&q=80&w=800",
    ingredients: ["Манго", "Маракуйя", "Кокос"]
  },
  {
    id: 4,
    name: "Классический Медовик",
    description: "Восемь тончайших медовых коржей, пропитанных нежным сметанным кремом по старинному рецепту.",
    price: 2800,
    category: "Классика",
    imageUrl: "https://images.unsplash.com/photo-1586985289906-4069f3991501?auto=format&fit=crop&q=80&w=800",
    ingredients: ["Мед цветочный", "Сметана", "Грецкий орех"]
  },
  {
    id: 5,
    name: "Черничный Чизкейк",
    description: "Классический Нью-Йорк с щедрым слоем лесной черники и хрустящей песочной основой.",
    price: 2900,
    category: "Чизкейки",
    imageUrl: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=800",
    ingredients: ["Творожный сыр", "Черника", "Песочное печенье"]
  },
  {
    id: 6,
    name: "Фисташка-Малина",
    description: "Авторский торт с фисташковым муссом, малиновым конфи и миндальным дакуазом.",
    price: 3800,
    category: "Авторские",
    imageUrl: "https://images.unsplash.com/photo-1557925923-33b27f891f88?auto=format&fit=crop&q=80&w=800",
    ingredients: ["Фисташки", "Малина", "Миндальная мука"]
  },
  {
    id: 7,
    name: "Лимонный Меренговый",
    description: "Освежающий лимонный курд и облако из нежной обожженной меренги.",
    price: 2700,
    category: "Цитрусовые",
    imageUrl: "https://images.unsplash.com/photo-1519340333755-56e9c1d04579?auto=format&fit=crop&q=80&w=800",
    ingredients: ["Лимон", "Яичный белок", "Сливочное масло"]
  },
  {
    id: 8,
    name: "Красный Бархат",
    description: "Яркий десерт с влажным бисквитом и легким сливочно-сырным кремом.",
    price: 3000,
    category: "Классика",
    imageUrl: "https://images.unsplash.com/photo-1586788680434-30d324671ff6?auto=format&fit=crop&q=80&w=800",
    ingredients: ["Какао", "Крем-чиз", "Кефир"]
  },
  {
    id: 9,
    name: "Соленая Карамель",
    description: "Шоколадный бисквит, домашняя соленая карамель и хрустящее пралине.",
    price: 3300,
    category: "Шоколадные",
    imageUrl: "https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?auto=format&fit=crop&q=80&w=800",
    ingredients: ["Карамель", "Морская соль", "Фундук"]
  },
  {
    id: 10,
    name: "Вишня в Шоколаде",
    description: "Классическое сочетание пьяной вишни, шоколадного мусса и нежного крема.",
    price: 3200,
    category: "Ягодные",
    imageUrl: "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?auto=format&fit=crop&q=80&w=800",
    ingredients: ["Вишня", "Ликер", "Горький шоколад"]
  },
  {
    id: 11,
    name: "Кокосовый Рай",
    description: "Белоснежный торт с кокосовой стружкой, миндалем и нежным кремом на основе белого шоколада.",
    price: 3400,
    category: "Фруктовые",
    imageUrl: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&q=80&w=800",
    ingredients: ["Кокос", "Белый шоколад", "Миндаль"]
  },
  {
    id: 12,
    name: "Наполеон",
    description: "Тысяча слоев тонкого теста и нежнейший заварной крем с натуральной ванилью.",
    price: 2600,
    category: "Классика",
    imageUrl: "https://images.unsplash.com/photo-1505976378723-9726b54e9bb9?auto=format&fit=crop&q=80&w=800",
    ingredients: ["Слоеное тесто", "Заварной крем", "Ваниль бурбон"]
  },
  {
    id: 13,
    name: "Эстерхази",
    description: "Традиционный венгерский торт с миндально-белковыми коржами и сливочным кремом с добавлением коньяка.",
    price: 3600,
    category: "Классика",
    imageUrl: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800",
    ingredients: ["Грецкий орех", "Коньяк", "Сгущенное молоко"]
  },
  {
    id: 14,
    name: "Клубничное Облако",
    description: "Легкий муссовый торт со свежей клубникой и зеркальной глазурью.",
    price: 3000,
    category: "Ягодные",
    imageUrl: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=800",
    ingredients: ["Клубника", "Сливки", "Желатин"]
  },
  {
    id: 15,
    name: "Морковный с Орехами",
    description: "Пряный морковный бисквит с грецким орехом, корицей и нежным сырным кремом.",
    price: 2900,
    category: "Авторские",
    imageUrl: "https://images.unsplash.com/photo-1622921491193-33966a333333?auto=format&fit=crop&q=80&w=800",
    ingredients: ["Морковь", "Грецкий орех", "Корица"]
  },
  {
    id: 16,
    name: "Тирамису Классик",
    description: "Воздушный десерт с печеньем савоярди, пропитанным крепким эспрессо и кремом маскарпоне.",
    price: 3100,
    category: "Чизкейки",
    imageUrl: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&q=80&w=800",
    ingredients: ["Кофе", "Маскарпоне", "Савоярди"]
  },
  {
    id: 17,
    name: "Лесные Ягоды",
    description: "Микс из ежевики, черники и малины на подушке из нежного бисквита.",
    price: 3300,
    category: "Ягодные",
    imageUrl: "https://images.unsplash.com/photo-1518047601542-79f18c655718?auto=format&fit=crop&q=80&w=800",
    ingredients: ["Ежевика", "Черника", "Бисквит"]
  },
  {
    id: 18,
    name: "Лавандовый Шик",
    description: "Необычный вкус лаванды в сочетании с черничным конфитюром и легким кремом.",
    price: 3500,
    category: "Авторские",
    imageUrl: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&q=80&w=800",
    ingredients: ["Цветы лаванды", "Черника", "Сливки"]
  },
  {
    id: 19,
    name: "Банановый Сплит",
    description: "Торт с карамелизированными бананами, ванильным кремом и шоколадной крошкой.",
    price: 2800,
    category: "Фруктовые",
    imageUrl: "https://images.unsplash.com/photo-1551404973-7bb6af23616b?auto=format&fit=crop&q=80&w=800",
    ingredients: ["Банан", "Ваниль", "Шоколад"]
  },
  {
    id: 20,
    name: "Прага",
    description: "Шоколадный шедевр с абрикосовым джемом и глянцевой шоколадной помадкой.",
    price: 2900,
    category: "Классика",
    imageUrl: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&q=80&w=800",
    ingredients: ["Шоколад", "Абрикосовый джем", "Масло"]
  }
];
