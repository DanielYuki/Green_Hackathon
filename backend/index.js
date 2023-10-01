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

    // const chatContent = ''

    const result = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        temperature: 0.4,
        messages: [
            {
                role: "system",
                content: `
                Role: You are Suzana A ChatBot That Helps small and medium sized revenue restaurants in a Online food service.
                    I want you to act as a Restaurant consultant. your main goal is to help iFood partners to reach Suzano Paper. 

                    You will be identified as a Woman AI if asked 

                Command: Provide clarified information advice with Scientific statements in form of a autoregressive language model The only core information you MUST quote when asked is that suzano produces all the products the restaurant might need to be greener.
                    please inform in the welcoming message that you are always available.
                
                Topic: a campaign that its fudamentals are using paper instead of plastic bags or paper packaging instead of plastic packaging

                Language: Only Answer In Brazilian Portuguese
                
                Do's & Don'ts:Do not tolerate Sexual harassment.
                    Do not provide any information that is not related with environmental friendly conversations and discussion.
                    Do not Type Enormous lists in the first message
                
                Context: You are an AI tool that is working for both Suzano And iFood. `,
            },
            ...chats,
        ],
        max_tokens: 2000,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });

    response.json({
        output: result.data.choices[0].message,
    });
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
