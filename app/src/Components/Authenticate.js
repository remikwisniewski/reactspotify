import {useState, useEffect} from 'react'
import axios from "axios"

// handles logic of user authentication
 
// returns Authenticate which accepts parameter code
export default function Authenticate(code) {

    // 3 data pieces we need, accessToken, refreshToken, expiresIn
    const[accessToken, setAccessToken] = useState()
    const[refreshToken, setRefreshToken] = useState()
    const[expiresIn, setExpiresIn] = usesState()

    // useEffect to get data, call the API using Axios library to post to a specific URL
    // at localhost, it is posting data known as "code"
    // then, we get our response and it outputs data with console.log(res.data)
    useEffect(() => {
        axios
            .post('https://localhost:3001/login', {
            code,
            })
            .then(res => { 
                console.log(res.data)   
            })
    }, [code]) 
}

