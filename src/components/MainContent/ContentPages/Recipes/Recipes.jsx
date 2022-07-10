import React from 'react';
import styles from './Recipes.module.css';
import { connect } from 'react-redux';
import { deleteCards } from '../../../../redux/app-reducer';


const Recipes = (props) => {
    // let deleteCardsOnClick = (id) => {
    //    props.deleteCards(id);
    // };

return (<div className={styles.mainContent}>


        <div className={styles.cardsList}>

            {props.cardsRecipies.map(c => {
                
                return (
                    <div className={styles.card}>
                        <div>
                            <div className={styles.cardImgWrapper}>
                                <img className={styles.cardImg} src={c.src} alt='meal' />
                            </div>
                            < div className={styles.cardCategory}> <b> Категория:</b> 
                                <input placeholder={c.category} name="category" type="text" />
                            </div>
                            
                            <div className={styles.cardCategory}><b>Название продукта:</b> 
                                <input placeholder={c.cardName} name="cardName" type="text" />
                            </div>
                        </div>
                        <div> 
                            {c.ingridients}
                            {/* <Ingridients ingridients={c.ingridients}/> */}
                        </div>
                    </div>
                )

            })}

        </div>


</div>);
};


let mapStateToProps = (state) => ({
    cardsRecipies: state.appPage.cardsRecipies,
})

export default connect(mapStateToProps, { deleteCards })(Recipes);













// const Ingridients = (props) => {
//     return (

//             <div>
//                     {props.ingridients.map(i => { return <span>{i}</span> })}
//             </div>
//     )
// }
   
