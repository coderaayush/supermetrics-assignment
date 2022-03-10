import express = require('express');
import { statsController } from "../controllers";
let app = express.Router();

app.get('stats', statsController.getStats);

app.get('/rof', (req, res) => {
    res.send('Hello World!');
    console.log('now here');
});

export let statsRoutes = app;