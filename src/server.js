"use strict";

const app = require("./app");
require("./database/importants");
require("./libs/register_local");

app.listen(app.get("port"), ()=>{
    console.log(`Server created in the ${app.get("port")}`);
})