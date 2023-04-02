
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config({debug:true})
// console.log(process.env.openaikey2)
import { Configuration, OpenAIApi } from "openai";
// const { Configuration, OpenAIApi } = require("openai");


const configuration = new Configuration({
  apiKey: process.env.openaikey,
});

async function prompt(prompt){
    const openai = new OpenAIApi(configuration);
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      temperature: 0,
      max_tokens: 512,
    });
    return response
}

export{prompt}
