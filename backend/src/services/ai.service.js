const { GoogleGenAI } = require("@google/genai")

const ai = new GoogleGenAI({
    apikey: process.env.Google_API_KEY
});

async function invokeGeminiAi(){
const interaction = await ai.interactions.create({
  model: "gemini-3.8-flash",
  input: "Hello Gemini. Explain react recoincialiation process",
});

  console.log(interaction.output_text);
}

module.exports = invokeGeminiAi;