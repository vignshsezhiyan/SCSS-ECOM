import React from "react";
import styles from './footer.module.scss';
import shopfiy from '../../assets/shopify.png'
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';
import linkedin from '../../assets/linkedin.svg';
import instagram from '../../assets/instagram.svg';
import youtube from '../../assets/youtube.svg';     

const Footer =()=>{

    return(
        <div className={styles.maincontainer}>
            <div className={styles.leftsection}>
                <div>
                    <img src={shopfiy} alt="test image" />
                </div>
                <div className={styles.navigationmenu}>
                    <p>FAQ's</p>
                    <p>Privacy Policy</p>
                    <p>Terms of Use</p>
                    <p>Cookies policy</p>
                    <p>Contact</p>
                </div>
            </div>
            <div className={styles.rightsection}>
                <div className={styles.socilamediaimages}>

                    <img src={linkedin} alt="linkedin"/>
                    <img src={instagram} alt="instagram"/>
                    <img src={twitter} alt="twitter"/>
                    <img src={youtube} alt="youtube"/>
                    <img src={facebook} alt="facebook"/>
                </div>
                <p>Copyright © 2026. All rights reserved.</p>



            </div>

        </div>

    )

}

export default Footer;