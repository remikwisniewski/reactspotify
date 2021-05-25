import React from "react";
import Authenticate from "./Authenticate";
// displays code if true is App.js

export default function Control( {code}) {

    // pulls in "code" data from authen
    const accessToken = Authenticate(code)

    return (
        <div>
            {code}
        </div>
    )
}
