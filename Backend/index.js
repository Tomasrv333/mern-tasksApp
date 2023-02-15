import dotenv from 'dotenv'
import express from 'express';
import chalk from 'chalk';

import keys from './src/config/keys'

const { port } = keys;
const app = express();

const server = app.listen(port, () => {
    console.log(
        `${chalk.green('✓')} ${chalk.blue(
            `Listening on port ${port}. Visit http://localhost:${port}/ in your browser.`
        )}`
    )
})