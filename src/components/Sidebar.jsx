import { PencilLine } from 'phosphor-react';
import styles from './Sidebar.module.css';


export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://images.unsplash.com/photo-1653387137517-fbc54d488ed8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXN8ZW58MHx8MHx8fDA%3D" alt=''
      />

      <div className={styles.profile}>
        <img className={styles.avatar} src="https://github.com/juliocesarribeiro.png" alt="" />
        <strong>Julio Cesar Ribeiro</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )

}