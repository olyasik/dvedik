const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get(`/MishaSleep`, (req, res) => {
    res.send(`Dvedik got request from ${JSON.stringify(req.headers)}`);
});
app.listen(port, () => {
    console.log(`Dvedik is listening on port ${port}`);
})