import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Portfolio } from './components/Portfolio';

import styles from './App.module.css';
import './global.css';

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Portfolio />
        </main>
      </div>
    </div>
  )
}
