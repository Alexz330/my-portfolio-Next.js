import React from 'react'
import styles from './styles.module.css'


const Home = () => {
  return (
    <main  className={styles.Home}>
        <div className={styles['Home-wellcome-name']}>
            <h1 className={styles.names}>
                Alexis López            
           </h1>
        </div>
        <div className={styles['Home-wellcome-presentation']}>
          <p >i'm Developer web</p>
        </div>
    </main>

  )
}

export default Home