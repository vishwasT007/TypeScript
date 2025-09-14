"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var url = "https://jsonplaceholder.typicode.com/todos/1";
var response = axios_1.default.get(url);
response.then(function (data) {
    console.log(data.data);
});
