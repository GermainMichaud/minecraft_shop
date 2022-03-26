import './App.scss';

import { FunctionComponent } from 'react';

import BuyButton from './components/BuyButton';
import Caroussel from './components/Caroussel';
import ToolDetail from './components/ToolDetail';
import Wallet from './components/Wallet';

const App: FunctionComponent = () => {
  return (
    <div className="App">
      <div className="container">
        <Caroussel />
        <Wallet />
        <ToolDetail />
        <BuyButton />
      </div>
    </div>
  );
};

export default App;
