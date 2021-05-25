import React from "react";
import Authenticate from "./Authenticate";

// displays code if true is App.js

export default function Control( {code}) {

    // gets accessToken from "code" data by Authenticate 
    // cd server -> npm run devBuild ; uses nodemon to run server and uses Authenticate and passes in code

    const accessToken = Authenticate(code)

    return (
        <div>
            {code}
        </div>
    )
}
