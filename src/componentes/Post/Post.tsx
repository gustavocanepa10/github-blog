import styles from "./styles.module.css";

export function Post() {
  return (
    <div className={styles.post}>
      <div className={styles.header}>
        <h2>Titulo</h2>
        <span>Há 1 dia</span>
      </div>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id autem ut
        ratione, magni excepturi, officiis quis beatae labore doloribus ipsam
        nihil reiciendis sint deserunt! Id consequatur nam voluptates autem
        dolorum.
      </p>
    </div>
  );
}
