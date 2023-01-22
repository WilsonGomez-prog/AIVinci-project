import express from 'express';
import postRouter from './postRoutes';
import openAIRouter from './openAIRoutes';

const apiRouter = express.Router();

apiRouter.use('/post', postRouter);
apiRouter.use('/aivinci', openAIRouter)

apiRouter.get('/', (req, res, next) => {
    res.send("Available endpoints: \n\t* MongoDB endpoint. \n\t* OpenAI endpoint");
})

export default apiRouter;