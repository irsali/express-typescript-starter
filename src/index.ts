import express from 'express';

const app = express();
const port = process.env.PORT || '3000';

app.get('/', (req, res) => res.send({ status: "I'm alive and having fun!" }));

app.listen(port, err => {
    if (err) return console.error(err);
    return console.log(`Server is listening on ${port}`);
});