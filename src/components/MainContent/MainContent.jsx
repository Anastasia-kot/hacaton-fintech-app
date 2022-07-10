import React from 'react';
import styles from './MainContent.module.css';
import { connect } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { setCategory, loadMoreCards, toggleSelectCard } from '../../redux/app-reducer';

import ContentNavbar from './ContentNavbar/ContentNavbar';
import MainSettings from './ContentPages/MainSettings/MainSettings';
import Analytics from './ContentPages/Analytics/Analytics';
import Categories from './ContentPages/Categories/Categories';
import Goods from './ContentPages/Goods/Goods';
import Recipes from './ContentPages/Recipes/Recipes';




const MainContent = (props) => {
    
    return (<div className={styles.pageMainContent}>

        <ContentNavbar 
            categories={props.categories} 
            selectedCategory={props.selectedCategoryId} 
            setCategory={props.setCategory}
            />

  
        <Routes>
            <Route path='/mainSettings' element={<MainSettings />} />
            <Route path='/recipes' element={<Recipes />} />
            <Route path='/goods' element={<Goods />} />
            <Route path='/categories' element={<Categories />} />
            <Route path='/analytics' element={<Analytics />} />


        </Routes>


  

    </div>);
};

const mapStateToProps = (state) => ({
    categories: state.appPage.categories,
    cards: state.appPage.cards,
    selectedCategoryId: state.appPage.selectedCategoryId,
});



export default connect(mapStateToProps, { setCategory, loadMoreCards, toggleSelectCard })(MainContent);