const { GoogleGenAI } = require("@google/genai")
import * as z from "zod";

const ai = new GoogleGenAI({
    apikey: process.env.Google_API_KEY
});

async function invokeGeminiAi(){
const response = await ai.interactions.create({
  model: "gemini-3.8-flash",
  input: "Hello Gemini. Explain react hooks",

  response_format: {
    type: 'text',
    mime_type: 'application/json',
    schema: recipeJsonSchema
  },
  
});
  
}

const interviewReportSchema = z.object({


  matchScore: z.number().min(0).max(100).description("The match score between the candidate's profile and the job description."),
  technicalQuestions: z.array(z.object({
    question: z.string(),
    intention: z.string(),
    answer: z.string(),
  })).description("A list of technical questions, their intentions, and the candidate's answers."),
  behavioralQuestions: z.array(z.object({
    question: z.string(),
    intention: z.string(),
    answer: z.string(),
  })).description("A list of behavioral questions, their intentions, and the candidate's answers."),
  skillGapSchema: z.array(z.object({
    skill: z.string(),
    severity: z.string(),
  })).description("A list of skill gaps and their severity levels."),
  preparationPlanSchema: z.array(z.object({
    day: z.number(),
    focus: z.string(),
    tasks: z.array(z.string()),
  })).description("A preparation plan with daily focus areas and tasks.")
});

async function generateInterviewReport({resume, selfDescription, jobDescription}){ {
  
}




module.exports = invokeGeminiAi;