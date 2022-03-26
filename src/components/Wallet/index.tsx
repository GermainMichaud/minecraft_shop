import './Wallet.scss';

import { FunctionComponent } from 'react';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  resetNotEnoughMoney,
  selectNotEnoughMoney,
  selectWallet,
} from '../../store/shopSlice';
import Box from '../shared/Box';

const Wallet: FunctionComponent<{}> = () => {
  const wallet = useAppSelector(selectWallet);
  const notEnoughMoney = useAppSelector(selectNotEnoughMoney);
  const dispatch = useAppDispatch();
  return (
    <Box
      className={`Wallet yellow ${notEnoughMoney ? 'nomore-money' : ''}`}
      data-testid="wallet"
      onAnimationEnd={() => {
        dispatch(resetNotEnoughMoney());
      }}
    >
      <div className="Wallet__title">Wallet</div>
      <div className="Wallet__body">{wallet}</div>
    </Box>
  );
};

export default Wallet;
