const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const cors = require('cors');
const mainRouter = require('./routes');
const blockRouter = require('./routes/block');
const txRouter = require('./routes/tx');
const searchRouter = require('./routes/search')
const COOKIE_SECRET = process.env.COOKIE_SECRET || 'gyuri';

app.use(express.json());
app.use(cookieParser(COOKIE_SECRET));
app.use(
    cors({
        origin: 'http://172.31.3.143:3000',
        credentials: true,
    })
);

app.use('/', mainRouter);
app.use('/block', blockRouter);
app.use('/tx', txRouter);
app.use('/search', searchRouter)

app.listen(4000, () => {
    console.log('server start', 4000);
});