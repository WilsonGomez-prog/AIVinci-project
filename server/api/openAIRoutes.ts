import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';

dotenv.config();

const openAIRouter = express.Router();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);

openAIRouter.post('/', async (req, res, next) => {
    try {
        const {prompt} = req.body;

        const aiResponse = await openai.createImage({
            prompt,
            n: 1,
            size: '1024x1024',
            response_format: 'b64_json'
        });

        const image = aiResponse.data.data[0].b64_json;

        res.status(200).json({ photo: image });

    } catch (error) {
        console.log(error);
        res.status(500).send(error?.response.data.error.message)
    }
})


export default openAIRouter;