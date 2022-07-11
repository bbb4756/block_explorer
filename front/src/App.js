import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { user_login_success } from './reducers/user';
import styled, { keyframes } from 'styled-components';
import {Wrap,DefaultHeader} from './components/defaultLayout';
import Index from './pages';
import BlockInfo from './pages/block_info';
import TxInfo from './pages/tx_info';
import { AccountPage } from './pages/account';
const App = ()=>{
  return (
    <Wrap>
      <DefaultHeader/>
      <BrowserRouter>
        <Routes>
            <Route path="/" index element={<Index />} />
            <Route path="/block/:idx" element={<BlockInfo />} />
            <Route path="/tx/:idx" element={<TxInfo />} />
            <Route path="/account/:idx" element= {<AccountPage/>}/>
        </Routes>
      </BrowserRouter>
    </Wrap>
  )
}

export default App;