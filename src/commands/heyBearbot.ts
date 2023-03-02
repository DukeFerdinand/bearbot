import {Configuration, OpenAIApi} from 'openai'

export async function heyBearbot(query: string, maxTokens: number = 500) {
    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    });

    const openai = new OpenAIApi(configuration);

    const model = "text-davinci-003";
    const response = await openai.createCompletion({
      model: model,
      prompt: query,
      temperature: 0.2,
      max_tokens: maxTokens,
    });

    return response.data.choices[0].text;
}