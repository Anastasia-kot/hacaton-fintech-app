import React from 'react';
import styles from './MainSettings.module.css';


const MainSettings = () => {
    return (<div className={styles.mainContent}>

        <div className={styles.parameter}>
            <span className={styles.parameterName}>Акционные товары по умолчанию</span>
            <textarea> </textarea>
        </div>      
       

        <div className={styles.parameter}>
            <span className={styles.parameterName}>Процент кешбека по умолчанию </span>
          <textarea> </textarea>
        </div>      
       
        <div className={styles.parameter}>
            <span className={styles.parameterName}>Период персональной акции <div className={styles.info}>(сколько дней актуально предложение)</div></span>
            <input type="date" />
        </div>      
       
        <div className={styles.parameter}>
            <button type='submit' className={styles.parameterSave}> Сохранить </button>
        </div>
       
    </div>);
}


export default MainSettings;