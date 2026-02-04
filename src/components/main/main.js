import React from 'react';
import styles from './main.module.scss'
import baseicon from '../../assets/baseicon.jpeg';

const MainComp = () => {
  return (
    <div className={styles.maincomp}>
      <div className={styles.leftcontainer}>
        <h1>We build systems that help ambitious organisations enhance customer experience, improve service.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt</p>
        <button className={styles.contactusButton}>Contact Us</button>

      </div>
      <div className={styles.rightcontainer}>
        <img src={baseicon} className={styles.mainicon} alt='baseicon' />
      </div>
    </div>
  );
};

export default MainComp;