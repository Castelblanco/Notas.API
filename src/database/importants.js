"use strict";

const db = require("./connect");

(async ()=>{
    const importants = await db.query("SELECT * FROM important");

    if (importants.length == 0){
        const listImport = [
            {name: `Muy Importante`},
            {name: `Importante`},
            {name: `Medio Importante`},
            {name: `Sin Importancia`}
        ];
        await db.query('INSERT INTO important (name) VALUES ?',[listImport.map(i =>[i.name])]);
        console.log("Created Importants");
    }
})();