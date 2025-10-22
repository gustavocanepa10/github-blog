import styles from "./styles.module.css";




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
  return (



    <div className={styles.post}>
      <div className={styles.header}>
        <h2>{item.title.substring(0, 21)}<br /></h2>
        <span>Há 1 dia</span>
      </div>

      <p>
        {item.body.substring(0, 102)}...
      </p>
    </div>
  );
}
