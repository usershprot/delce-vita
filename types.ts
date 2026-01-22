
export interface Cake {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
  ingredients: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}
