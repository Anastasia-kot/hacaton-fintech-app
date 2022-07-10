import React  from 'react';
// import Media from 'react-media';
import styles from './ContentNavbar.module.css';
import {NavLink} from 'react-router-dom';





const ContentNavbar = (props) => {
    
    let setCategoryOnClick = (category) => { props.setCategory(category);  };



    return ( 
<div className={styles.categoriesWrapper}>
    

            <NavLink to='/mainSettings' className={`${styles.categoryButton} `} onClick={() => setCategoryOnClick('Общие настройки')}>
                Общие настройки            </NavLink>
            <NavLink to='/recipes' className={`${styles.categoryButton} `} onClick={() => setCategoryOnClick('Рецепты')}>
                Рецепты            </NavLink>
            <NavLink to='/goods' className={`${styles.categoryButton} `} onClick={() => setCategoryOnClick('Товары')}>
                Товары            </NavLink>
            <NavLink to='/categories' className={`${styles.categoryButton} `} onClick={() => setCategoryOnClick('Категории')}>
                Категории             </NavLink>
            <NavLink to='/analytics' className={`${styles.categoryButton} `} onClick={() => setCategoryOnClick('Аналитика')} >
                Аналитика            </NavLink>
     
  

            {/* {props.categories.map(c => {
                return (
                    (props.selectedCategory === c.category)
                        ? <NavLink key={c.id} className={`${styles.categoryButton} ${styles.selected}`}>
                            {c.category}
                        </NavLink>
                        : <NavLink key={c.id} className={styles.categoryButton} onClick={() => setCategoryOnClick( c.category )}>
                            {c.category}
                        </NavLink>
                )}
            )} */}

     </div>

);}

export default ContentNavbar;