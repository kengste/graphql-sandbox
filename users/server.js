const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

app.use('/graphql', expressGraphQL({
    schema: schema,
    graphiql: true
}));

const listener = app.listen(4000, () => {
    console.log(`Listening on port ${listener.address().port}`);
});