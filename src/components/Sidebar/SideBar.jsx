import { PencilLine } from "phosphor-react";
import styles from "./Sidebar.module.css";

export function SideBar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        alt="capa"
        src="https://images.unsplash.com/photo-1617042375876-a13e36732a04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&w=500&q=60"
      />
      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://avatars.githubusercontent.com/u/40302558?v=4"
        />
        <strong>Italo Guglielmini</strong>
        <span>Developer Sênior</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
