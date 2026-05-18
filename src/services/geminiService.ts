import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function queryGraph(prompt: string, graphData: { nodes: any[], links: any[] }) {
  const systemInstruction = `
    You are an expert Social Network Analyst for a student media organization.
    You have access to a social graph representing connections between individuals and platforms.
    
    GRAPH CONTEXT:
    Nodes: ${JSON.stringify(graphData.nodes)}
    Links: ${JSON.stringify(graphData.links)}
    
    Your task is to answer user questions about relationships, influences, and connections within this network.
    
    RULES:
    1. Be precise and concise.
    2. If asked about relationships between two individuals, trace the path through platforms or direct links.
    3. If a relationship doesn't exist, state it clearly.
    4. Use a professional, analytical tone mixed with a bit of "insider" knowledge vibe.
    5. Mention if someone is "highly connected" (many links) or a "bridge" (connected to multiple platforms).
    
    Example: 
    User: "How are Karla and Sara related?"
    Analysis: Karla is in Platform 1 and Platform 2. Sara is in Platform 2.
    Response: Karla and Sara are both members of Platform 2. Karla is a key bridge in the network as she is also connected to Platform 1, potentially serving as a liaison between the two groups.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    return response.text;
  } catch (error) {
    console.error("AI Query Error:", error);
    return "I'm having trouble analyzing the network right now. Please try again in a moment.";
  }
}
