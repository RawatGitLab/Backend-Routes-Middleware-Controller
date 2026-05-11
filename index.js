const express = require('express');
const users = require('./data');
const { HomeResponse, AboutResponse, ContactResponse } = require('./controller/homecontroler');
const { getAllUserv1, getAllUserv2, getAllUserByGender, getUserByName} = require('./controller/userActivityController')
const userActivityRouter= require("./Routers/userActivityRouter")
const homeRoutes=require("./Routers/homeRouter")
const server = express();
const Port = 3000;
//home
server.use('/',homeRoutes)
//user
server.use('/api/v1/users', userActivityRouter)

server.listen(Port,()=>{
    console.log(`Server is listening on ${Port}`)
});