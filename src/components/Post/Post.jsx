import React from "react";

import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/40302558?v=4"
          />
          <div className={styles.authorInfo}>
            <strong>Italo Guglielmini</strong>
            <span>Developer Frontend</span>
          </div>
        </div>
        <time title="12 de outubro de 2022" dateTime="2022-10-12 00:05:00">
          Publicado há 5h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galera!!</p>
        <p>
          Acabei de subir mais um projeto no meu portifolio. É um projeto que
          fiz no Ignite, evento da Rocketseat
        </p>
        <p>
          <a href="#">italo.designer/ignite</a>
        </p>
        <p>
          <a href="#">#novoprojeto #ignite #rocketseat</a>
        </p>
      </div>
    </article>
  );
}
