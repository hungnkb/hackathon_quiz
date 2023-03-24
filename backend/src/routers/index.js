import apiRouter from "./api.router.js"

const route = app => {
    app.use('/api', apiRouter);
};

export default route;
