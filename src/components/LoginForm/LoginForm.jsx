import React from "react";
import styles from './LoginForm.module.css';
import { Formik } from "formik";
import { connect } from "react-redux"; 
import { setAuth } from "../../redux/app-reducer";
import { Navigate } from "react-router-dom";


const LoginForm = (props) => {
    // console.log(props.setAuth)
    let setAuthFromForm = () => {props.setAuth(true)}
    return (

<div className={styles.wrapper}>
<Formik
        initialValues={{ login: '', password: ''}}

        onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
             setAuthFromForm();
            //  return (<Navigate replace to={'/'} />)
            // alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
>
            
        {({ values, errors, touched, handleChange, handleSubmit, isSubmitting, }) => (
            




            <form onSubmit={handleSubmit}>

                <div className={styles.loginGroup}>
                    
                    <label className={styles.loginParameter}> Login
                        <input className={styles.loginInput}
                            placeholder='Type login'
                            name="login"
                            type="text"
                            // onChange={handleChange}
                            // value={values.login} 
                            />
                    </label>

                    <label className={styles.loginParameter}> Password
                        <input className={styles.loginInput}
                            placeholder='Type password'
                            name="password"
                            type="password"
                            // onChange={handleChange}
                            // value={values.password} 
                            />   
                    </label>

                    <button className={styles.submitButton}
                        type="submit"
                        disabled={isSubmitting}>
                     Log In
                    </button>
                </div>
       
            </form>
        )}
</Formik>
</div>
    )
}

export default connect(null, { setAuth })(LoginForm);






