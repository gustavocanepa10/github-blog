import { NavLink, useNavigate, useParams } from "react-router";
import { Layout } from "../../componentes/Layout/Layout";
import { Main } from "../../componentes/Main/Main";
import styles from "./styles.module.css";
import { ArrowLeftIcon, ArrowRightIcon  } from "lucide-react";
import axios from "axios";
import { useEffect, useState } from "react";
import GitHubLogo from "../../assets/GitHubLogo.svg";
import CommentsSolid from "../../assets/comments-solid.svg"
import Calendary from "../../assets/calendary.svg"
import { differenceInDays } from "date-fns";



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


export function PostPage() {

    const {number} = useParams()
    const navigator = useNavigate()



    const [item, setItem] = useState<Item | null >(null)

    const createdAt = item?.created_at ? new Date(item.created_at) : new Date()

    const difference = differenceInDays(new Date(), createdAt)


    

    async function getPost() {
        const username = "diego3g"
        const repo = "rocketredis"
        const response = await axios.get(`https://api.github.com/repos/${username}/${repo}/issues/${number}`)
        const data = response.data
        console.log(data)
        setItem(data)
    }

    useEffect(() => {
        getPost()
    },[])

  return (
    <Layout>
      <Main>
        <div className={styles.issueContainer}>
            <div className={styles.links}>
                <button>
            < NavLink to="/">
              {" "}
              <ArrowLeftIcon size={16} /> VOLTAR
            </NavLink>


          </button>

          
            </div>
          
        
           <div className={styles.info}>
             <span>
                {item?.title}
            </span>

             <div className={styles.tags}>
               <div>
            <img src={GitHubLogo} alt="" />
            <p>{item?.user.login}</p>
          </div>
          <div>
            <img  src={Calendary} alt="" />
            <p> Há {difference > 1 ? difference  + " dias" : "dia"}  </p>
          </div>
          <div>
            <img src={CommentsSolid} alt="" />
            <p> {item?.comments} </p>
          </div>

           </div>
           </div>

          
           
        </div>

        <div className={styles.content}>
          <p>
            {item?.body}
          </p>
        </div>
      </Main>
    </Layout>
  );
}
