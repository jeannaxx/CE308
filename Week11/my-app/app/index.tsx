import React from 'react';
import {Provider} from 'react-redux';
import {StoreShop} from './redux/StoreShop';
import CounterScreen from './screens/CounterScreen';
import ShopScreen from './screens/ShopScreen';

export default function App(){
  return(
    <Provider store={StoreShoptore} >
      <ShopScreen/>
    
    </Provider>
  );
}