import React from 'react';
import styles from './HeaderMain.module.css';


const HeaderMain = () => {
    return (<div className={styles.headerMainWrapper}>

            <div className={styles.siteHeader}>Admin Page</div>
        <div className={styles.text}>
            Admin page provides flexible settings for user scenarios, promotional offers, common settings of the user and provides detailed analytics.</div>
        </div>);
}

export default HeaderMain;