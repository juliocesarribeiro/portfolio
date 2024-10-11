import styles from './Portfolio.module.css';

export function Portfolio() {

  return (
    <article className={styles.Post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/juliocesarribeiro.png" />
          <div className={styles.authorInfo}>
            <strong>Julio Cesar Ribeiro</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time dateTime='2024-10-10 20:43:00'>Publicado há 1h</time>
      </header>
      <form className={styles.commentForm}>
        <div>
          <span>Iniciei minha vida profissional na área TI com suporte mas minha paixão por desenvolvimento foi mais forte, atualmente realizo analise e desenvolvimento de melhorias e novas funcionalidades com foco na stack (Node.JS, ReactJS e React Native) utilizando JavaScript e TypeScript.</span>
        </div>
        <div className={styles.button}>
          <a href="https://www.linkedin.com/in/julio-cesar-ribeiro-841ab420/" target="_blank" >LinkedIn</a>
        </div>
        <div className={styles.button}>
          <a href="https://github.com/juliocesarribeiro" target="_blank" >GitHub</a>
        </div>        <div className={styles.button}>
          <a href="https://x.com/JulioCe94330984" target="_blank" >X</a>
        </div>

      </form>
    </article>
  )
}