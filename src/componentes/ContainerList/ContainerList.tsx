import { useContext, useState } from "react";
import { Post } from "../Post/Post";
import styles from "./styles.module.css";
import { ProfileContext } from "../../context/ProfileContext";

// título, data relativa, resumo do corpo (primeiras linhas) e metadados

export function ContainerList() {


  const {repo, total} = useContext(ProfileContext)
  const [searchInput, setSearchInput] = useState("")

  const filteredList = repo?.filter((item) => item.title.toUpperCase().includes(searchInput.toUpperCase()))

  

  
  

  return (
    <div className={styles.Container}>
      <div className={styles.ListContainer}>
        <div className={styles.intro}>
          <h2>Publicações</h2>

          <span> {total} publicações </span>
        </div>

        <input type="text" placeholder="Buscar conteúdo" value={searchInput} onChange={(e) => setSearchInput(e.target.value)}  />

        <div className={styles.list}>
          {filteredList?.map((item) =>  <Post key={item.id} item = {item}  />)}

          
        </div>
      </div>
    </div>
  );
}
