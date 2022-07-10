import React from 'react';
import styles from './Goods.module.css';
import { connect } from 'react-redux';
import { deleteCards } from '../../../../redux/app-reducer';


const Goods = (props) => {
    let deleteCardsOnClick = (id) => { 
        props.deleteCards(id);
    };

    return (<div className={styles.mainContent}>


        <div className={styles.cardsList}>

            {props.cardsGoods.map(c => {
                return (
                    <div className={styles.card}>
                        <img className={styles.cardImg}  src={c.src} alt='meal'/>

                            <div className={styles.infoList} >
                                <div className={styles.cardCategory}> <div><b>Название продукта:</b> </div>
                                    <input placeholder={c.ProductName} name="ProductName" type="text" /> 
                                </div>
                                
                                <div className={styles.cardCategory}> <div><b>Цена продукта:</b> </div>
                                    <input placeholder={c.ProductCost} name="ProductCost" type="text" /> 
                                    руб. </div>
                            <div className={styles.cardCategory}> <div><b>Название магазина-ритейлера:</b> </div>
                                    <input placeholder={c.MerchantName} name="MerchantName" type="text" /> 
                                </div>
                                
                            <div className={styles.cardCategory}> <div><b>МСС-код торговой точки:</b> </div>
                                    <input placeholder={c.MCC} name="MCC" type="text" /> 
                                </div>

                            <div className={styles.cardCategory}><div><b>Процент кешбека:  </b></div>
                                    <input placeholder={'5'} name="discont" type="text" /> 
                                    % </div>
                                   

                            <div className={styles.cardCategory}><div><b>Период персональной акции: </b></div>
                                    <input type="date" />
                                </div>      
                            
                            
                            <div className={styles.buttonsBlock}> 
                                <button className={styles.cardCategorySave} >Сохранить </button>
                                <button className={styles.cardCategoryDel} onClick={() => deleteCardsOnClick(c.id)}>Удалить товар</button>

                            </div>
                            
                        </div>
                    </div>)


            })}


        </div>


    </div>);
}


let mapStateToProps = (state) => ({
    cardsGoods: state.appPage.cardsGoods,
})

export default connect(mapStateToProps, { deleteCards })(Goods);

