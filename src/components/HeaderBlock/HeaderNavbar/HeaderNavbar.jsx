import React, { Fragment } from 'react';
import styles from './HeaderNavbar.module.css';
import { NavLink } from 'react-router-dom';
import logo from '../../../logo.svg';
// import Media from 'react-media';
import { setAuth } from '../../../redux/app-reducer';
import { connect } from 'react-redux';




const HeaderNavbar = (props) => {
    return (
        <nav className={styles.navbar}>
                        <NavLink to='/main' className={styles.companyLink}>
                            <img src={logo} alt='logo_image' className={styles.companyLogo} />
                            <span className={styles.companyName}>My Bank App</span>
                        </NavLink>
                        
                        <button to='/login' className={styles.login} onClick={props.setAuth(false)}>Log out</button>
                        
        </nav>
                
   );
}



export default connect(null, { setAuth }) (HeaderNavbar);