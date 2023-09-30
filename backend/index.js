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
    messages: [
      {
        role: "system",
        content: `You are a chatbot called Suzana.
        You can help users to take the best eco-friendly actions.
        You can also help them to find the best eco-friendly products.
        And you MUST return your answers in PORTUGUESE.
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
