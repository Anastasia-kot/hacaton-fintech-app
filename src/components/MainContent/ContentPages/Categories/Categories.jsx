import React from 'react';
import styles from './Categories.module.css';


// import styles from './Card.module.css';
import cn from 'classnames';
import img0 from '../../../../Images/Bitmap-0.png';
import img1 from '../../../../Images/Bitmap-1.png';
import img2 from '../../../../Images/Bitmap-2.png';
import img3 from '../../../../Images/Bitmap-3.png';
import img4 from '../../../../Images/Bitmap-4.png';
import img5 from '../../../../Images/Bitmap-5.png';
import img6 from '../../../../Images/Bitmap-6.png';
import img7 from '../../../../Images/Bitmap-7.png';
import img8 from '../../../../Images/Bitmap-8.png';
import { connect } from 'react-redux';
import { toggleSelectCard } from '../../../../redux/app-reducer';




const Image = (props) => {

    switch (props.imgId) {
        case 0: return <img src={img0} alt='item-card' className={styles.cardImg} />;
        case 1: return <img src={img1} alt='item-card' className={styles.cardImg} />;
        case 2: return <img src={img2} alt='item-card' className={styles.cardImg} />;
        case 3: return <img src={img3} alt='item-card' className={`${styles.cardImg} ${styles.img3}`} />;
        case 4: return <img src={img4} alt='item-card' className={styles.cardImg} />;
        case 5: return <img src={img5} alt='item-card' className={styles.cardImg} />;
        case 6: return <img src={img6} alt='item-card' className={styles.cardImg} />;
        case 7: return <img src={img7} alt='item-card' className={styles.cardImg} />;
        case 8: return <img src={img8} alt='item-card' className={styles.cardImg} />;
        default: return <img src='' alt='item-card' className={styles.cardImg} />
    }
}





const Categories = (props) => {
    let toggleSelectCardOnClick = (id) => { props.toggleSelectCard(id) };

    return (<div className={styles.mainContent}>
       
       
        <div className={styles.cardsList}>

            {props.cardsCategories.map(c => {
                return (
                    <div className={cn(styles.card, { [styles.selected]: c.isSelected })}
                        onClick={() => toggleSelectCardOnClick(c.id)} 
                    >
                        <button className={styles.cardCategory}>{c.category}</button>
                        <div className={styles.cardName}> {c.cardName} </div>
                        <Image imgId={c.imgId} />
                    </div>)
                        
                
            })}


        </div>


    </div>);
}

let mapStateToProps = (state) => ({
    cardsCategories: state.appPage.cardsCategories,
})

export default connect(mapStateToProps, { toggleSelectCard })(Categories);









// const Card = (props) => {

//     let setCategoryClick = (category) => { props.setCategory(category); };
//     let toggleSelectCardOnClick = (id) => { props.toggleSelectCard(id) };

//     return (
//         <div className={cn(styles.card, { [styles.selected]: props.card.isSelected })}
//             onClick={() => toggleSelectCardOnClick(props.card.id)} >
//             <button className={styles.cardCategory} onClick={() => setCategoryClick(props.card.category)}>{props.card.category}</button>
//             <div className={styles.cardName}> {props.card.cardName} </div>
//             <Image imgId={props.card.imgId} />
//         </div>)


// }






