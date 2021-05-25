const express = require('express'); 
const SpotifiyWebApi = require('spotify-web-api-node'); // class that gets spotify web api

const app = express(); // calls express

// posting the login application 
app.post('/login', (req,res) => {
    // arrow function that creates a spotifyApi from new SpotifiyWebApi
    // Authorize the code -> give us accessToken, refreshToken, expiresIn 

    // using SpotifyWebApi, once we have spotifyApi that takes in parameters, we get the "code" after
    // and then we can call Authorization code to have access to data
    const code = req.body.code;

    // parameters needed to create new SpotifiyWebApi, passes in redirectURi, clientId, clientSecret
    const spotifyApi = new SpotifiyWebApi({ 
        redirectUri: 'http://localhost:3000',
        clientId: '', 
        clientSecret: '' 
    })

    // calls Authorization code to information that we need: accessToken, refreshToken, expiresIn
    spotifyApi.authorizationCodeGrant(code).then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
        })
    }).catch(()=> { 
        // error checker 
        res.sendStatus(400);
    })

})