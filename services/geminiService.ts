
import { GoogleGenAI } from "@google/genai";

const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export const getGameTips = async (gameTitle: string) => {
  const ai = getAI();
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Provide 3 pro tips and 1 secret trick for the game "${gameTitle}". Keep it concise and formatted as a list.`,
      config: {
        temperature: 0.7,
        topP: 0.95,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Failed to load tips. Just keep practicing and have fun!";
  }
};

export const chatWithGemini = async (history: { role: 'user' | 'model', text: string }[], message: string) => {
  const ai = getAI();
  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: "You are Nova, an expert gaming assistant for NovaArcade. You know everything about unblocked games, high scores, and gaming trivia. Keep your responses short, energetic, and helpful. Use emojis.",
      }
    });

    // In a real app we'd load the history into the chat context, but for simplicity:
    const response = await chat.sendMessage({ message });
    return response.text;
  } catch (error) {
    console.error("Chat Error:", error);
    return "Whoops, my circuits are lagging! 🤖 Try again in a second.";
  }
};
