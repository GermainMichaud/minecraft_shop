import './Wallet.scss';

import { FunctionComponent } from 'react';

import { useAppSelector } from '../../store/hooks';
import { selectWallet } from '../../store/shopSlice';
import Box from '../shared/Box';

const Wallet: FunctionComponent<{}> = () => {
  const wallet = useAppSelector(selectWallet);
  return (
    <Box className="Wallet yellow" data-testid="wallet">
      <div className="Wallet__title">Wallet</div>
      <div className="Wallet__body">{wallet}</div>
    </Box>
  );
};

export default Wallet;
