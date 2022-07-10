import './App.css';
import React, { useEffect, useRef } from "react";
import { connect } from 'react-redux';

import { deleteCards } from './redux/app-reducer';

import LoginForm from './components/LoginForm/LoginForm';
import HeaderBlock from './components/HeaderBlock/HeaderBlock';
import MainContent from './components/MainContent/MainContent';



const App = (props) =>  {
  return (
    <>

{ true
// props.isAuth 
? <div>
    <HeaderBlock />
    <MainContent />
  </div>
  
: <div>
    <LoginForm />
  </div>
}
    </>
    )



};


let mapStateToProps = (state) => ({
  isAuth: state.appPage.isAuth
})



export default connect(mapStateToProps, {  })(App);


