"use strict";

const app = require("./app");

require("./libs/register_local");
require("./database/importants");

app.listen(app.get("port"), ()=>{
    console.log(`Server created in the ${app.get("port")}`);
});