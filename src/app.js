import express from "express";

import config from './congif' 
const app = express();


// Setting

app.set('port', config.port)

export default app