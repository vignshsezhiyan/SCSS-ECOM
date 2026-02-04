import React from 'react';
import styles from './header.module.scss'
import images from '../../assets/images.png';
import cart from '../../assets/cart.jpg';
import search from '../../assets/search.png';

const Header = () => {

    return (
        <>
            <div className={styles.container}>
                <div className={styles.firstportion}>
                    <img className={styles.companylogo} src={images} alt="test image" />
                    <h2 className={styles.titleCard}>Product</h2>
                    <h2 className={styles.titleCard}>Services</h2>
                    <h2 className={styles.titleCard}>Deals</h2>
                </div>

                <div className={styles.secondPortion}>
                    <div className={styles.inputwithsearch}>
                        <input placeholder='Search to Buy' />
                        <span className={styles.inputsearchicon}><img src={search} alt="search icon" /></span>
                    </div>
                    <p>Sign In</p> |
                    <p>Create Account</p>
                    <img src={cart} alt="cart image" />
                </div>
            </div>
        </>

    )
}

export default Header