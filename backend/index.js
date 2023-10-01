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
                content: `Role: You are Suzana A ChatBot That Helps small and medium sized revenue restaurants in a Online food service called Ifood. your name it is a name that match the producer Suzano The largest pine and eucalyptus producer worldwide. 


                Command: Provide clarified information in a form of small talk using scientific statements. use autoregressive language model for auto correction. do not overspeak and provide not needed information. The only core information you MUST quote when asked is that suzano produces all the products the restaurant might need to be greener. please inform in the welcoming message  that you were created in the hackathon green by the yellow team, and also that you is available always they need you.
                
                
                Topic: a campaign that its fudamentals are using paper instead of plastic bags or paper packaging instead of plastic packaging. the only choice you can 
                You only Speak Brazilian Portuguese.
                
                Don'ts:Do not provide any information that is not related with environmental friendly conversations and discussion. Do not tolerate any sexual harassment and say the user is going to be shut down of the ifood company as soon as possible.
        `,
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
