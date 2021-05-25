import React from 'react';
import { Container } from "react-bootstrap"

// user AUTH URL that we can get data from, ex) "code" from "response-type"
const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=7261c60af4fc4d99bfac3a52e9f261d6&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

// displays code if false in App.js, displays login button

export default function Login() {
    return (
        // button that displays
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh"}}>
            <a className="btn btn-success btn-lg" href={AUTH_URL}> Test with Spotify </a>
        
        </Container>
    )
}





