import React from 'react';
import styles from './maininnerone.module.scss';
import mac from '../../assets/mac.jpg';
import airpods from '../../assets/airpods.jpg';
import iphone from '../../assets/iphonenew.jpg';

const MainInnerComp = () =>{

    return(
        <div className={styles.maininner}>
            <div className={styles.topmain}>
                <h1 className={styles.mainheader}>
                    <span>Why leaders choose <span className={styles.appNamebold}>Shopify</span>, and why their competitors</span> 
                    <span> won’t catch up. Competitors won’t catch up.Competitors.We build systems that</span>
                </h1>
                <p className={styles.contenttab}>We build systems that help ambitious organisations enhance customer experience, improve service delivery, and operate more efficiently – enabling them to outpace their competition and scale faster.</p>
            </div>

            <div className={styles.bottommain}>
                <div className={styles.innerbottom}>
                    <img src={iphone} alt="iphone 15"/>
                    <h3>Iphone 15</h3>
                    <p>Features a titanium design, A17 Pro chip, USB-C connector, and a 48MP main camera system.</p>
                </div>
                <div className={styles.innerbottom}>
                    <img src= {airpods} alt="airpods"/>
                    <h3>Airpods</h3>
                    <p>An "all-in-one" desktop computer that houses the and storage within the monitor case.</p>
                </div>
                <div className={styles.innerbottom}>
                    <img src={mac} alt="macbook"/>
                    <h3>Macbook</h3>
                    <p>Active Noise Cancellation, Hearing Aid Feature, Bluetooth Headphones, Transparency,</p>
                </div>

            </div>
        </div>
    );
}

export default MainInnerComp;