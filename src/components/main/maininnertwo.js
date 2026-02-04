import React from 'react';
import styles from './maininnertwo.module.scss';
import users from '../../assets/users.png';
import document from '../../assets/document.png';
import tick from '../../assets/checked.png'

const MainInnerTwo = () => {

    return(
        <div className={styles.maincontainer}>
            <div className={styles.topsection}>
                <h1>
                    We’re not a vendor Now. We’re your <span className={styles.highlight}>Ai transformation partner</span>.

                </h1>
                <p>
                    We develop game-changing systems that empowers ambitious organisations to elevate customer experience, redefine service delivery, and sharpen how they operate, compete, and scale–before anyone else in their sector.
                </p>

            </div>

            <div className={styles.bottomsection}>
                <div className={`${styles.bottomcard} ${styles.service}`}>
                    <div className={styles.bottomheader}>
                        <h3>For Service</h3>
                        <img src ={users} alt="users icon"/>
                    </div>
                    <div className={styles.bottomcontent}></div>
                    <div className={styles.bottomtext}>
                        <h3>Empower Customers. Elevate Experiences.</h3>
                        <p>Transform how customers interact with your services through intelligent AI solutions.</p>

                        <div className={styles.bottomicon}>
                            <img src={tick} alt="tick icon"/>
                            <p>Human-like self-service that empowers customers to solve problems instantly.</p>

                        </div>
                        <div className={styles.bottomicon}>
                            <img src={tick} alt="tick icon"/>
                            <p>Human-like self-service that empowers customers to solve problems instantly.</p>

                        </div>
                        <div className={styles.bottomicon}>
                            <img src={tick} alt="tick icon"/>
                            <p>Human-like self-service that empowers customers to solve problems instantly.</p>

                        </div>
                    </div>

                </div>

                <div className={`${styles.bottomcard} ${styles.process}`}>
                      <div className={styles.bottomheader}>
                        <h3>For Process</h3>
                        <img src ={document} alt="document icon"/>
                    </div>
                    <div className={styles.bottomcontent}></div>
                    <div className={styles.bottomtext}>
                        <h3>Streamline Complex Workflows with Confidence.</h3>
                        <p>Modern businesses run on process and process runs better with Ai. Worktual Ai for</p>

                        <div className={styles.bottomicon}>
                            <img src={tick} alt="tick icon"/>
                            <p>Human-like self-service that empowers customers to solve problems instantly.</p>

                        </div>
                        <div className={styles.bottomicon}>
                            <img src={tick} alt="tick icon"/>
                            <p>Human-like self-service that empowers customers to solve problems instantly.</p>

                        </div>
                        <div className={styles.bottomicon}>
                            <img src={tick} alt="tick icon"/>
                            <p>Human-like self-service that empowers customers to solve problems instantly.</p>

                        </div>
                    </div>
                </div>

                <div className={`${styles.bottomcard} ${styles.growth}`}>
                      <div className={styles.bottomheader}>
                        <h3>For Growth</h3>
                        <img src ={document} alt="document icon"/>
                    </div>
                    <div className={styles.bottomcontent}></div>
                    <div className={styles.bottomtext}>
                        <h3>Transform Marketing, Sales, and Customer Value.</h3>
                        <p>Transform how customers interact with your services through intelligent AI solutions.</p>

                        <div className={styles.bottomicon}>
                            <img src={tick} alt="tick icon"/>
                            <p>Human-like self-service that empowers customers to solve problems instantly.</p>

                        </div>
                        <div className={styles.bottomicon}>
                            <img src={tick} alt="tick icon"/>
                            <p>Human-like self-service that empowers customers to solve problems instantly.</p>

                        </div>
                        <div className={styles.bottomicon}>
                            <img src={tick} alt="tick icon"/>
                            <p className={styles.test}>Human-like self-service that empowers customers to solve problems instantly.</p>

                        </div>
                    </div>
                </div>
               
            </div>

        </div>
    )

}

export default MainInnerTwo