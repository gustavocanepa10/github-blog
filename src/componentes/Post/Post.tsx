import { differenceInDays } from "date-fns";
import styles from "./styles.module.css";
import { Navigate, useNavigate } from "react-router";




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

interface PostProps {
  item: Item
}


export function Post({ item }: PostProps) {

  const navigate = useNavigate()

  const createdAt = item?.created_at ? new Date(item.created_at) : new Date()
  
      const difference = differenceInDays(new Date(), createdAt)

  return (



    <div onClick={() => navigate(`/post/${item.number}`)} className={styles.post}>
      
      <div className={styles.header}>
        <h2>{item.title.substring(0, 30)}<br /></h2>
        <span>Há {difference > 1 ? difference +" dias" : "dia"}  </span>
      </div>

      <p>
        {item.body.substring(0, 35)}...
      </p>
    </div>
  );
}
