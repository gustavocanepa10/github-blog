import { Post } from "../Post/Post";
import styles from "./styles.module.css";

export function ContainerList() {
  return (
    <div className={styles.Container}>
      <div className={styles.ListContainer}>
        <div className={styles.intro}>
          <h2>Publicações</h2>

          <span>6 publicações</span>
        </div>

        <input type="text" placeholder="Buscar conteúdo" />

        <div className={styles.list}>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </div>
  );
}
