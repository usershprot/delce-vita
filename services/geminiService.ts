
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateCakeAdvice = async (history: {role: 'user' | 'model', content: string}[], cakeList: any[]) => {
  const model = 'gemini-3-flash-preview';
  
  const systemInstruction = `
    Ты - персональный консультант кондитерской Dolce Vita. 
    Твоя задача - помогать клиентам выбрать идеальный торт. 
    Будь вежливым, вдохновляющим и используй гастрономические термины.
    Вот список наших тортов для контекста: ${JSON.stringify(cakeList.map(c => ({name: c.name, category: c.category, desc: c.description}))) }
    Отвечай на русском языке. Старайся давать краткие, но аппетитные советы.
  `;

  const chat = ai.chats.create({
    model: model,
    config: {
      systemInstruction,
    },
  });

  // Re-build chat context
  let lastResponse = null;
  for (const msg of history) {
    lastResponse = await chat.sendMessage({ message: msg.content });
  }

  return lastResponse?.text || "Извините, я задумался о рецепте нового крема. Повторите ваш вопрос?";
};

export const streamCakeAdvice = async (message: string, cakeList: any[]) => {
  const model = 'gemini-3-flash-preview';
  const systemInstruction = `
    Ты - эксперт-кондитер Dolce Vita. 
    Помогай с выбором торта. 
    Список тортов: ${cakeList.map(c => c.name).join(', ')}.
    Отвечай дружелюбно на русском.
  `;

  const response = await ai.models.generateContent({
    model,
    contents: message,
    config: {
      systemInstruction,
    }
  });

  return response.text;
};
