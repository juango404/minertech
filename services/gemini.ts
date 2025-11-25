import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateMiningArticle = async (topic: string): Promise<{ title: string; content: string; excerpt: string; tags: string[] }> => {
  try {
    const prompt = `
      Escribe un artículo de blog profesional y técnico sobre el siguiente tema relacionado con la minería: "${topic}".
      
      El artículo debe estar en formato JSON con la siguiente estructura:
      {
        "title": "Un título atractivo",
        "content": "El contenido completo del artículo (al menos 3 párrafos, usa formato markdown para subtítulos)",
        "excerpt": "Un resumen corto de 1 o 2 oraciones",
        "tags": ["tag1", "tag2", "tag3"]
      }
      
      Asegúrate de que el tono sea experto, industrial y seguro. Responde SOLO con el JSON.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    
    return JSON.parse(text);
  } catch (error) {
    console.error("Error generating mining article:", error);
    throw error;
  }
};