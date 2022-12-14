const express = require('express');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const colors = require('colors');
const cors = require('cors');
const connectDB = require('./config/db');

const port = process.env.PORT || 5000;

const app = express();

app.use(cors({ origin: 'http://localhost:3000' }));
// Connect to DB
connectDB();
app.use(
	'/graphql',
	graphqlHTTP({
		schema,
		graphiql: process.env.NODE_ENV === 'DEVELOPMENT',
	})
);

app.listen(port, console.log(`Server running on port ${port}`));
