const express = require("express");
const jsonGraphqlServer = require("json-graphql-server");
const data = require("./db.js");

const PORT = process.env.PORT ? process.env.PORT : 3333;
const app = express();
const resolvers = {
  Query: {
    products: () => data.products, // Resolver para a consulta de produtos
  },
};

app.use(
  "/graphql",
  jsonGraphqlServer.default(data, {
    resolvers, // Passa os resolvers para o json-graphql-server
    watch: true,
  })
);
app.listen(PORT);
