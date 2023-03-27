const express = require('express');
const app = express();
const morgan=require('morgan');
const db = require("./db");
 
//Config
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2)
 
//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// Swagger 
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('../swagger-output.json')
 
//Routes
const routes = require('./routers/index');
const petsRoutes = require('./routers/pets/pets.router');

app.use(routes);
app.use(petsRoutes);
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

//Start server
app.listen(app.get('port'),()=>{
    console.log(`Server listening on port ${app.get('port')}`);
});

