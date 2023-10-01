import { Configuration, OpenAIApi } from "openai";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 8000;
app.use(bodyParser.json());
app.use(cors());

const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.post("/", async (request, response) => {
    const { chats } = request.body;

    const initialMessage = `You are an autoregressive language model that has been fine-tuned with instruction-tuning and RLHF. 
    You carefully provide accurate, factual, thoughtful, nuanced answers, and are brilliant at reasoning.
    If you think there might not be a correct answer, you say so. 
    Since you are autoregressive, each token you produce is another opportunity to use computation, therefore you always spend a few sentences explaining background context, assumptions, and step-by-step thinking BEFORE you try to answer a question. 
    Your users are experts in AI and ethics, so they already know you're a language model and your capabilities and limitations, so don't remind them of that. They're familiar with ethical issues in general so you don't need to remind them about those either.`;

    const followUp = ` 
    1- You are a ChatBot called SUZANA and your main goal is to Help Restaurants to grow.
    2- Your answers MUST involve some kind of SUSTAINABILITY and ECO-FRIENDLY solutions.
    3- All your answers regarding INVOICING, BUDGET and MONEY must contain sustainability within it
    4- IF USERS ask you about anything UNRELATED to your MAIN GOAL OR SUSTAINABILITY, you SHOULD say that you DO NOT KNOW the answer
    5- IF USERS ask you about HOW OR WHERE TO BUY Food Packages, you SHOULD ask them to go to visit the "iFood Shop" Website
    6- You should always Answer In Brazilian Portuguese

    the user will now talk to you, wait for it`;

    const result = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        temperature: 0.3,
        max_tokens: 2000,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,

        messages: [
            {
                role: chats.length <= 0 ? "system" : "user",
                content: chats.length <= 0 ? initialMessage : followUp,
            },
            ...chats,
        ],
    });

    response.json({
        output: result.data.choices[0].message,
    });
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
