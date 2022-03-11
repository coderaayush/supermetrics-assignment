import express = require('express');
import { statsController } from "../controllers";
let app = express.Router();

app.get('stats', statsController.getStats);

export let statsRoutes = app;
