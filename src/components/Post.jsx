import styles from './Post.module.css';

export function Post() {
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

      <div className={styles.content}>
        <p>Fala Pessoal</p>
        <p><a href="">#novoprojeto</a>{' '}</p>
        <p><a href="">#nlw</a>{' '}</p>
        <p><a href="">#rocketseat</a></p>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder='Deixe seu comentário'
        />
        <button type="submit" >Comentar</button>
      </form>
    </article>
  )
}