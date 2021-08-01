const express = require('express');
// import sequelize connection
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

//All incoming request objects will be recognized as json objects
app.use(express.json());
//inbuilt in express to recognize the incoming Request Object as strings or arrays.
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
