import './BuyButton.scss';

import { FunctionComponent } from 'react';

import { useAppDispatch } from '../../store/hooks';
import { buyTool } from '../../store/shopSlice';
import Button from '../shared/Button';

const BuyButton: FunctionComponent<{}> = () => {
  const dispatch = useAppDispatch();
  return (
    <Button
      title="Buy"
      data-testid="buy-button"
      className="BuyButton box green text-shadow"
      onClick={() => dispatch(buyTool())}
    />
  );
};

export default BuyButton;
