const express = require("express")
const {createProxyMiddleware} = require("http-proxy-middleware")

const app = express();
//defines routes and their ports
const routes = {
    '/logger':'http://localhost:3001',
    '/info': 'http://localhost:3002',
    '/warning': 'http://localhost:3003'
}

//create a proxy for each route
for(const route in routes){
    const target = routes[route];
    app.use(route,createProxyMiddleware({target}))
}

const PORT = 8000;
app.listen(PORT, () => console.log("API GATEWAY STARTED"))