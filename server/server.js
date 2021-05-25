const express = require('express'); 
const SpotifiyWebApi = require('spotify-web-api-node'); // class that gets spotify web api

const app = express(); // calls express

// posting the  
app.post('/login', (req,res) => {
    // Arrow function that creates spotifyAPI, uses SpotifiyWebApi class holding the credientials
    // FIX 

    // code returns data from spotfyApi
    const code = req.body.code;

    // passes redirectUri, clientId, clientSecret
    const spotifyApi = new SpotifiyWebApi({ 
        redirectUri: 'http://localhost:3000',
        clientId: '', 
        clientSecret: '' 
    })

    // calls spotifyApi and gets accessToken, refreshToken, expiresInx
    spotifyApi.authorizationCodeGrant(code).then(data => {
        res.json({ 
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
        })
    }).catch(()=> { // error checker 
        res.sendStatus(400);
    })

})