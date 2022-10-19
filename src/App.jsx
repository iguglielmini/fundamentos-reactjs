import React from 'react'

import { Post } from './components/Post/Post';
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
          <Post />
        </main>
      </div>
    </div>
  );
}

export default App;
