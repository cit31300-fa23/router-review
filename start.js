const app  = require('./app');

const server = app.listen(8081, () => {
    console.log(`Express app running on port ${server.address().port}`);
});