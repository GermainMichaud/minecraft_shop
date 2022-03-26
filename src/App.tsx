import './App.scss';

import { FunctionComponent, useEffect } from 'react';

import BuyButton from './components/BuyButton';
import Caroussel from './components/Caroussel';
import Box from './components/shared/Box';
import ToolDetail from './components/ToolDetail';
import Wallet from './components/Wallet';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { fetchTools, selectError, selectLoading } from './store/shopSlice';

const App: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectLoading);
  const hasError = useAppSelector(selectError);
  useEffect(() => {
    dispatch(fetchTools());
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <Box>Loading...</Box>
      ) : hasError ? (
        <Box>An error has occurred</Box>
      ) : (
        <div className="container">
          <Caroussel />
          <Wallet />
          <ToolDetail />
          <BuyButton />
        </div>
      )}
    </div>
  );
};

export default App;
