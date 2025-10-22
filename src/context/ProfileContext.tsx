import { createContext, useEffect, useState } from "react";
import axios from "axios";






interface User {
  login: string;
  name: string;
  avatar_url: string;
  bio: string;
  location: string;
  followers: number;
  following: number;
  public_repos: number;
  html_url: string;
}




interface ProfileContextProviderProps {
    children : React.ReactNode
}




interface ProfileContext {
    user : User | null
}


export const ProfileContext = createContext({} as ProfileContext)

export function ProfileContextProvider({children} : ProfileContextProviderProps) {

    const [user,setUser] = useState(null)
    const [repo,setRepo] = useState(null)

    async function getProfile() {
        const username = "diego3g"
        const response = await axios.get(`https://api.github.com/users/${username}`)

        const data = await response.data

        setUser(data)
        console.log(data)
        
    }   

    useEffect(() => {
        getProfile()
        getRepo()
    },[])

    async function getRepo() {
        const username = "diego3g"
        const repo = "rocketredis"
        const number = 1
        const response = await axios.get(`https://api.github.com/repos/${username}/${repo}/issues/${number}`)
        setRepo(response.data)
        console.log(response.data)
    }



    return (
        <ProfileContext.Provider value={{user}}>
            {children}
        </ProfileContext.Provider>
    )
}