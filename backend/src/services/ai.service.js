const { GoogleGenAI } = require("@google/genai");
const { z } = require("zod");

const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_API_KEY
});

const interviewReportJsonSchema = {
  type: "object",

  properties: {
    matchScore: {
      type: "number",
      minimum: 0,
      maximum: 100,
      description:
        "The match score between the candidate's profile and the job description."
    },

    technicalQuestions: {
      type: "array",
      description:
        "A list of technical questions, their intentions, and the candidate's answers.",
      items: {
        type: "object",
        properties: {
          question: {
            type: "string",
            description: "The technical interview question."
          },
          intention: {
            type: "string",
            description:
              "The intention or skill being evaluated by the question."
          },
          answer: {
            type: "string",
            description: "The candidate's answer to the question."
          }
        },
        required: ["question", "intention", "answer"]
      }
    },

    behavioralQuestions: {
      type: "array",
      description:
        "A list of behavioral questions, their intentions, and the candidate's answers.",
      items: {
        type: "object",
        properties: {
          question: {
            type: "string",
            description: "The behavioral interview question."
          },
          intention: {
            type: "string",
            description:
              "The intention or behavioral trait being evaluated by the question."
          },
          answer: {
            type: "string",
            description: "The candidate's answer to the question."
          }
        },
        required: ["question", "intention", "answer"]
      }
    },

    skillGapSchema: {
      type: "array",
      description: "A list of skill gaps and their severity levels.",
      items: {
        type: "object",
        properties: {
          skill: {
            type: "string",
            description: "The skill where the candidate has a gap."
          },
          severity: {
            type: "string",
            description: "The severity level of the skill gap."
          }
        },
        required: ["skill", "severity"]
      }
    },

    preparationPlanSchema: {
      type: "array",
      description: "A preparation plan with daily focus areas and tasks.",
      items: {
        type: "object",
        properties: {
          day: {
            type: "integer",
            description: "The preparation day number."
          },
          focus: {
            type: "string",
            description: "The main focus area for the day."
          },
          tasks: {
            type: "array",
            description: "A list of preparation tasks for the day.",
            items: {
              type: "string"
            }
          }
        },
        required: ["day", "focus", "tasks"]
      }
    }
  },

  required: [
    "matchScore",
    "technicalQuestions",
    "behavioralQuestions",
    "skillGapSchema",
    "preparationPlanSchema"
  ]
};

const interviewSchema = z.fromJSONSchema(interviewReportJsonSchema);

const generateInterviewReport = async ({
  resume,
  selfDescription,
  jobDescription
}) => {
  const prompt = `
You are an AI assistant that generates a comprehensive interview report.

Analyze the candidate's resume, self-description, and job description.

Resume:
${resume}

Self-Description:
${selfDescription}

Job Description:
${jobDescription}

Generate the interview report according to the provided JSON schema.
`;

  const response = await ai.models.generateContent({
    model: "gemini-3.5-flash-lite",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: interviewReportJsonSchema
    }
  });

  const interviewReport = interviewSchema.parse(
    JSON.parse(response.text)
  );

  console.log(interviewReport);

  return interviewReport;
};

module.exports = generateInterviewReport;