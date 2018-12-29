require('dotenv/config');

const express = require('express');
const graphqlHTTP = require('express-graphql');

const schema = require('./data/schema');

const app = express();
const port = process.env.PORT || 4000;

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(port, err => {
  if (err) {
    throw err.message;
  }
  console.log(`PetfinderQL running on http://localhost:${port}`);
});
