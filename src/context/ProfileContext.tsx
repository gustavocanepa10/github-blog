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


interface Item {
  id: number;
  number: number;
  title: string;
  body: string;
  html_url: string;
  comments: number;
  created_at: string;
  updated_at: string;
  user: {
    login: string;
    avatar_url: string;
    html_url: string;
  };
  labels: {
    id: number;
    name: string;
    color: string;
  }[];
}



interface ProfileContext {
    user : User | null
    repo : Item[] | null
}




export const ProfileContext = createContext({} as ProfileContext)

export function ProfileContextProvider({children} : ProfileContextProviderProps) {

    const [user,setUser] = useState(null)
    const [repo,setRepo] = useState<Item[] | null>(null)

    async function getProfile() {
        const username = "diego3g"
        const response = await axios.get(`https://api.github.com/users/${username}`)

        const data = await response.data

        setUser(data)
       
        
    }  
    
    
    async function getRepo() {
        const username = "diego3g"
        const repo = "rocketredis"
        const response = await axios.get(`https://api.github.com/search/issues?q=repo:${username}/${repo}`)
        const data = response.data.items
        setRepo(data)
        console.log(data)
       
    }

    useEffect(() => {
        getProfile()
        getRepo()
    },[])

    





    return (
        <ProfileContext.Provider value={{user, repo}}>
            {children}
        </ProfileContext.Provider>
    )
}