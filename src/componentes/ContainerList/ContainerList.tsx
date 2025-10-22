import { useContext } from "react";
import { Post } from "../Post/Post";
import styles from "./styles.module.css";
import { ProfileContext } from "../../context/ProfileContext";

// título, data relativa, resumo do corpo (primeiras linhas) e metadados

export function ContainerList() {


  const {repo} = useContext(ProfileContext)

  return (
    <div className={styles.Container}>
      <div className={styles.ListContainer}>
        <div className={styles.intro}>
          <h2>Publicações</h2>

          <span>6 publicações</span>
        </div>

        <input type="text" placeholder="Buscar conteúdo" />

        <div className={styles.list}>
          {repo?.map((item) =>  <Post key={item.id} item = {item}  />)}

          
        </div>
      </div>
    </div>
  );
}
