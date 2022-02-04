import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ScreenWrapper from './components/ScreenWrapper';
import { Home } from './modules/Home';
import Profile from './modules/Profile';
import Marketplace from './modules/Marketplace';
import { Web3DataProvider } from './lib/providers/web3-provider';
import { AppDataProvider } from './lib/providers/app-data-provider';
import { Web3ReactProvider } from '@web3-react/core';
import { ethers } from 'ethers';

function getWeb3Library(provider: any): ethers.providers.Web3Provider {
  return new ethers.providers.Web3Provider(provider);
}

function App() {
  return (
    <Web3ReactProvider getLibrary={getWeb3Library}>
      <Web3DataProvider>
        <AppDataProvider>
          <BrowserRouter>
            <ScreenWrapper>
              <Routes>
                <Route path="/" element={<Home />} key="home" />
                <Route path="/profile/*" element={<Profile />} key="profile" />
                <Route path="/marketplace" element={<Marketplace />} key="marketplace" />
              </Routes>
            </ScreenWrapper>
          </BrowserRouter>
        </AppDataProvider>
      </Web3DataProvider>
    </Web3ReactProvider>
  );
}

export default App;