import React from 'react';
import HeaderMain from './HeaderMain/HeaderMain';
import HeaderNavbar from './HeaderNavbar/HeaderNavbar';
import styles from './HeaderBlock.module.css';
 


const HeaderBlock = () => { 
    return (<div className={styles.headerBlockWrapper}
        // style={{ backgroundColor: "#28293E", width: "100%", color: "white" }}
        >

                <HeaderNavbar />
                <HeaderMain />
            </div>)
}

export default HeaderBlock;