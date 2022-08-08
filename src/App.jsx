import { Header } from "./components/Header/Header";
import { SideBar } from "./components/Sidebar/SideBar";

import styles from './App.module.css'
import './styles/global.css'

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <SideBar />
        <main>
          teste
        </main>
      </div>
    </div>
  );
}

export default App;
