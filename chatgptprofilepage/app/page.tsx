import React from 'react';
import Link from 'next/link';
import styles from './home.module.css';

interface HomeProps {

}

const Home: React.FC<HomeProps> = () => {
  return (
    <div>
      <h1 className={styles.title}>Welcome to My Website</h1>
      <p className={styles.myParagraph}>
        My name is Ardi, and I'm a system developer. I'm passionate about coding and creating software solutions.
        Welcome to my website, where you can learn more about my work and projects.
      </p>
      <Link className={styles.myLink} href={"/about/about"}>About Me</Link>
      <Link className={styles.myLink} href={"/projects/projects"}>My Projects</Link>
    </div>
  );
}

export default Home;