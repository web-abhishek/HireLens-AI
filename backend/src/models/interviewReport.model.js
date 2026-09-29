const mongoose = require("mongoose");

const technicalQuestionSchema = new mongoose.schema({
    question: {
        type: String,
        required: true
    },
    intention: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    }
}, {
    _id: false
})

const behavioralQuestionSchema = new mongoose.schema({
    question: {
        type: String,
        required: true
    },
    intention: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    }
}, {
    _id: false
})

const skillGapSchema = new mongoose.schema({
    skillName: {
        type: String,
        required: true
    },
    severity: {
        type: String,
       enum: ['Beginner', 'Intermediate', 'Advanced'],
       required: true
    }
}, {
    _id: false
})

const preparationPlanSchema = new mongoose.schema({
    day: {
        type: Number,
        required: true
    },
    focus: {
        type: String,
        required: true,
    },
    tasks: [
        {
            type: String,
            required: true
        }
    ]
}, {
    _id: false
})




const interviewReportSchema = new mongoose.schema({
    jobDescription: {
        type: String,
        required: true
    },
    resume: {
        type: String
    },
    selfDescription: {
        type: String
    },
    matchScore: {
        type: Number,
        min: 0,
        max: 100
    },
    technicalDescription: [
        technicalQuestionSchema
    ],
    behavioralDescription: [
        behavioralQuestionSchema
    ],
    skillGaps: [
        skillGapSchema
    ],
    preparationPlan: [
        preparationPlanSchema
    ]
}, {
    timestamps: true
})

const interviewReportModel = mongoose.model("interviewReport", interviewReportSchema);
module.exports = interviewReportModel;

console.log('interview model is ready to use..!')