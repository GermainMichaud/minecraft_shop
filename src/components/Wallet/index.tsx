import './Wallet.scss';

import { FunctionComponent } from 'react';

import Box from '../shared/Box';

const Wallet: FunctionComponent<{}> = () => (
  <Box className="Wallet" data-testid="wallet">
    <div className="Wallet__title">Wallet</div>
    <div className="Wallet__body">1500</div>
  </Box>
);

export default Wallet;
